import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

const BASE_URL = 'http://localhost:5173';

const REDIRECT_TESTS = [
    // Main
    { old: '/', new: '/en/' },
    { old: '/about-us/', new: '/en/about' },
    { old: '/business/', new: '/en/solutions/digital-ticketing' },
    { old: '/for-government/', new: '/en/government' },

    // Products
    { old: '/secure-wallet-app/', new: '/en/wallet' },
    { old: '/id-wallet-app/', new: '/en/id-wallet-app' },
    { old: '/passport-wallet-app/', new: '/en/id-wallet-app' },
    { old: '/health-wallet-app/', new: '/en/wallet' },

    // Blog
    { old: '/blog/what-is-a-digital-wallet/', new: '/en/blog/what-is-a-digital-wallet' },
    { old: '/blog/what-is-a-digital-drivers-license/', new: '/en/blog/mobile-drivers-license' },
    { old: '/blog/app-in-the-air-alternative/', new: '/en/blog/app-in-the-air-alternative' },
];

async function verifyRedirect(oldPath, expectedNewPath) {
    try {
        // Using curl -I to get headers. Check if it returns 200 or 301/302.
        // Locally (Vite dev server), it might not return 301 unless handled by a plugin,
        // but we can check if the final destination is correct after following redirects.
        const { stdout } = await execPromise(`curl -sL -o /dev/null -w \"%{url_effective}\" ${BASE_URL}${oldPath}`);
        const actualUrl = stdout.trim();
        const expectedUrl = `${BASE_URL}${expectedNewPath}`;

        // Cleanup trailing slashes for comparison
        const cleanActual = actualUrl.replace(/\/$/, '');
        const cleanExpected = expectedUrl.replace(/\/$/, '');

        if (cleanActual === cleanExpected) {
            console.log(`✅ ${oldPath} -> ${expectedNewPath}`);
            return true;
        } else {
            console.log(`❌ ${oldPath} -> Expected: ${expectedNewPath}, Got: ${actualUrl}`);
            return false;
        }
    } catch (error) {
        console.error(`Error verifying ${oldPath}:`, error.message);
        return false;
    }
}

async function runTests() {
    console.log('Starting redirect verification...');
    let passed = 0;
    for (const test of REDIRECT_TESTS) {
        if (await verifyRedirect(test.old, test.new)) {
            passed++;
        }
    }
    console.log(`\nFinal result: ${passed}/${REDIRECT_TESTS.length} passed.`);
    if (passed === REDIRECT_TESTS.length) {
        process.exit(0);
    } else {
        process.exit(1);
    }
}

runTests();
