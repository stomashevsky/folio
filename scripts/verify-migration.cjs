const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const SITEMAP_URL = 'https://folio.id/sitemap-0.xml';
const REDIRECTS_FILE = path.join(__dirname, '../public/_redirects');
const APP_TSX_FILE = path.join(__dirname, '../src/App.tsx');

// Helpers
const fetchUrl = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
};

const parseSitemap = (xml) => {
    const urls = [];
    const regex = /<loc>(timestamp|https:\/\/folio\.id\/.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
        if (match[1]) urls.push(match[1]);
    }
    return urls;
};

const parseRedirectsFile = () => {
    const content = fs.readFileSync(REDIRECTS_FILE, 'utf8');
    const rules = {};
    content.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
            const parts = trimmed.split(/\s+/);
            if (parts.length >= 2) {
                // Handle wildcards roughly for now, or just exact matches
                // In _redirects, /blog/:slug is a wildcard
                rules[parts[0]] = parts[1];
            }
        }
    });
    return rules;
};

const parseAppTsxMapping = () => {
    const content = fs.readFileSync(APP_TSX_FILE, 'utf8');
    // Extract the LEGACY_MAPPING object content locally
    // This is a rough extraction relying on the specific format in App.tsx
    const startMarker = 'const LEGACY_MAPPING: Record<string, string> = {';
    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) return {};

    let braceCount = 1;
    let endIndex = startIndex + startMarker.length;
    while (braceCount > 0 && endIndex < content.length) {
        if (content[endIndex] === '{') braceCount++;
        if (content[endIndex] === '}') braceCount--;
        endIndex++;
    }

    const objectContent = content.substring(startIndex + startMarker.length, endIndex - 1);

    const mapping = {};
    const lines = objectContent.split('\n');
    lines.forEach(line => {
        const match = line.match(/'([^']+)'\s*:\s*'([^']+)'/);
        if (match) {
            mapping[match[1]] = match[2];
        }
    });
    return mapping;
};

async function run() {
    console.log('🔍 Starting SEO Migration Verification...\n');

    // 1. Fetch Old URLs
    console.log(`📥 Fetching sitemap from ${SITEMAP_URL}...`);
    const xml = await fetchUrl(SITEMAP_URL);
    const oldUrls = parseSitemap(xml);
    console.log(`FOUND: ${oldUrls.length} URLs in old sitemap.\n`);

    // 2. Load Redirect Rules
    console.log('📂 Loading local redirect rules...');
    const serverRedirects = parseRedirectsFile();
    const clientMapping = parseAppTsxMapping();

    console.log(`LOADED: ${Object.keys(serverRedirects).length} server-side rules (public/_redirects)`);
    console.log(`LOADED: ${Object.keys(clientMapping).length} client-side rules (App.tsx)\n`);

    // 3. Verify Coverage
    console.log('🛡️  Verifying URL coverage...');
    const missing = [];
    const covered = [];

    // Special wildcard handling
    const serverWildcards = Object.keys(serverRedirects).filter(k => k.includes(':') || k.includes('*'));

    oldUrls.forEach(fullUrl => {
        // strip domain
        const pathUrl = fullUrl.replace('https://folio.id', '');
        // normalize: remove trailing slash for matching unless root
        const normalizedPath = pathUrl === '/' ? '/' : pathUrl.replace(/\/$/, '');

        // check exact match in _redirects (try with and without trailing slash)
        const exactServerMatch = serverRedirects[pathUrl] || serverRedirects[normalizedPath] || serverRedirects[normalizedPath + '/'];

        if (exactServerMatch) {
            covered.push({ url: fullUrl, type: 'server_exact', target: exactServerMatch });
            return;
        }

        // check wildcard server match
        // Very basic check for /blog/:slug
        if (pathUrl.startsWith('/blog/')) {
            const blogWildcard = serverRedirects['/blog/:slug'];
            if (blogWildcard) {
                covered.push({ url: fullUrl, type: 'server_wildcard', target: blogWildcard });
                return;
            }
        }

        // check App.tsx LEGACY_MAPPING
        // logic in App.tsx maps segments, so we check last segment usually or first
        const segments = normalizedPath.split('/').filter(Boolean);
        const key = segments[segments.length - 1]; // check last segment (slug)
        const keyFirst = segments[0]; // check first segment

        if (clientMapping[key] || clientMapping[keyFirst]) {
            covered.push({ url: fullUrl, type: 'client_fallback', target: clientMapping[key] || clientMapping[keyFirst] });
            return;
        }

        // Whitelist specific paths that might not be redirected or are okay
        if (pathUrl === '/sitemap-0.xml' || pathUrl === '/sitemap.xml') {
            return; // Ignore sitemap itself
        }

        missing.push(fullUrl);
    });

    console.log(`✅ COVERED: ${covered.length}`);
    console.log(`❌ MISSING: ${missing.length}\n`);

    if (missing.length > 0) {
        console.log('⚠️  The following URLs are NOT covered by any redirect rule:');
        missing.forEach(u => console.log(` - ${u}`));
        process.exit(1);
    } else {
        console.log('🎉 All URLs are accounted for!');
        process.exit(0);
    }
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
