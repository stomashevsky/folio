# AGENTS.md - Development Rules

This file contains all rules and principles that must be followed for every change request in the project.

## General Principles

### 1. Using Shared Components

- **All elements must be based on shared components** from `src/components/ui/`
- **Before creating something new, always check** if a suitable component already exists in `src/components/ui/`
- If the needed component doesn't exist, **create a shared component first**, then use it
- Everything should be built on shared styles and components

### 2. Design Reference (Figma)

- **Always check Figma** to understand how a component is structured before implementation
- **Review all states and variants** of the component in Figma
- Ensure implementation matches the design specifications (spacing, colors, typography, interactions)
- Verify hover, focus, active, and disabled states if applicable
- Check responsive behavior and breakpoints if specified in design

### 3. Buttons

- **All buttons must use the `Button` component** from `src/components/ui/Button.tsx`
- Do not create custom buttons unless absolutely necessary
- Use button variants: `primary`, `secondary`, `outline`, `ghost`, `subtle`
- Use sizes: `sm`, `md`, `lg`
- **Check Figma for button states and variants** before implementation

### 3.1. Accordion

- **Use the `Accordion` component** from `src/components/ui/Accordion.tsx` for expandable content lists
- Use `AccordionItemData` type for accordion items: `import type { AccordionItemData } from '../components/ui'`
- Required properties: `id`, `title`, `description`
- Optional: `desktopImage` for showing images alongside content
- Use `defaultOpenId` prop to set initially open item
- Use `onItemChange` callback to sync accordion state with other components (e.g., changing an image based on selected item)
- Use `showMobileImages` prop to control image display on mobile

#### Accordion behavior rules

- **Only the first item should be expanded by default** — never show all items expanded at once
- **Clicking on an item toggles it** — if it's closed, it opens; if it's open, it closes
- **Chevron icon must rotate** based on open/closed state (rotated 180° when open)
- **Use smooth transition** for chevron rotation: `transition-transform duration-200`
- For custom accordion lists (like Key features), use local state:
  ```tsx
  const [activeId, setActiveId] = useState<string | null>('first-item-id')
  
  // Toggle on click
  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
  
  // Show content only when open
  {isOpen && <p>{description}</p>}
  ```

### 3.2. Icons and IconContainer

- **Use `IconContainer` component** for icon wrappers instead of inline div styling
- Icons are located in `src/assets/icons/`
- Icon filenames use **PascalCase** (e.g., `ShieldPlus.svg`, `CreditCard.svg`, `Bitcoin.svg`, `Users.svg`)
- **Always check existing icons** in `src/assets/icons/` before assuming icon names
- Common icons: `Scale.svg`, `Dices.svg`, `Bitcoin.svg`, `CreditCard.svg`, `ShieldPlus.svg`, `Users.svg`, `Link.svg`, `Puzzle.svg`, `Braces.svg`
- Do not use generic placeholder icons - use icons that match the semantic meaning in Figma design

#### Icon naming rules

- **All icon files must use PascalCase** (e.g., `ShieldCheck.svg`, not `shield-check.svg`)
- **No prefixes or suffixes** like numbers or sizes (e.g., use `Users.svg`, not `24_Users.svg`)
- **No version numbers** in names (e.g., use `Fingerprint.svg`, not `fingerprint-02.svg`)
- Names should be semantic and match the icon content
- When adding new icons, check existing icons to avoid duplicates

### 3.3. Image Placeholders

- **Use `image-placeholder.png`** from `src/assets/images/` as the universal placeholder for all pages/components that need an image but don't have one yet
- **Do not create custom SVG placeholders** - always use `image-placeholder.png`
- Import example: `import imagePlaceholder from '../assets/images/image-placeholder.png'`
- This placeholder should be used for blog cards, feature images, and any other image slots without actual content

### 4. Sections and Padding

- **All sections must have consistent padding**
- **Padding of first sections on all pages must match**
- Standard section padding:
  - Outer container: `px-0 py-16 md:py-24`
  - Inner container: `px-6` (or corresponding standard padding)
- Use shared section components: `SectionHeader`, `FeatureBlock` and others from `src/components/ui/`
- **Verify padding and spacing in Figma** before implementation

### 5. Creating New Components

- **If something new needs to be created - create a component first, then use it**
- **Check Figma design** to understand component structure, states, and variants before implementation
- New shared components should be placed in `src/components/ui/`
- Components must be reusable and configurable through props
- After creating a component, add its export to `src/components/ui/index.ts`

### 5.1. Avoiding Code Duplication

- **If the same UI pattern or component logic is used in multiple places, create a shared component**
- **Before duplicating code, check if a similar component already exists** that can be reused or extended
- **When you see identical or very similar code blocks in different files, extract them into a shared component**
- Examples: If article cards are displayed the same way on BlogPage and KeepReadingSection, create a `BlogArticleCard` component
- Shared components should support all use cases through props (variants, optional features, etc.)
- After creating a shared component, **refactor all places** that use the duplicated code to use the new component

### 6. Styling

- Use Tailwind CSS classes
- Use shared styles from `src/components/ui/focusStyles.ts` and `src/components/ui/inputStyles.ts`
- Avoid style duplication - extract repeating patterns into shared components or utilities
- **Match design specifications from Figma** (colors, spacing, typography, shadows, etc.)

### 7. State Synchronization Patterns

- When accordion/tab selection should update another element (e.g., an image), use `useState` to track active item
- Pattern example:
  ```tsx
  const [activeId, setActiveId] = useState<string | null>('default-id')
  const activeItem = items.find(item => item.id === activeId) || items[0]
  
  // In JSX:
  <img src={activeItem.desktopImage} />
  <Accordion items={items} onItemChange={setActiveId} />
  ```
- This pattern is used in `FolioAppPage` for features accordion and in `IdentityVerificationPage` for verification methods

### 8. Project Structure

- Shared UI components: `src/components/ui/`
- Page sections: `src/components/sections/`
- Specific components: `src/components/`
- Pages: `src/pages/`
- Constants: `src/constants/`
- Configurations: `src/configs/`
- Icons: `src/assets/icons/` (PascalCase naming)
- Images: `src/assets/images/`

### 9. Blog Articles

#### 9.1. Design Reference

- **All blog articles must follow the Figma design**: [Blog Article Page](https://www.figma.com/design/6jO5aXk21DqMTeNFCAh9rI/Folio-web?node-id=24536-108142&m=dev)
- Before implementing any blog article, review the design for structure, typography, spacing, and responsive behavior

#### 9.2. Shared Components and Styles

- **Use shared typography components** for all blog content:
  - `Typography / H2` - main section headings (30px, semibold, with border-bottom separator)
  - `Typography / H3` - sub-headings (24px, semibold)
  - `Typography / P` - paragraphs (16px, normal weight)
  - `Typography / Blockquote` - quotes with left border (2px border-left, 24px padding-left)
  - `Typography / List` - ordered and unordered lists
  - `Typography / Rich Text` - container component for article content

- **Use shared section components**:
  - `SectionHeader` for article title and description
  - `BlogCard` for related articles in "Keep Reading" section
  - `KeepReading` section for related articles at the bottom

- **All blog articles must use the same base layout**:
  - Date and category at the top
  - Title (heading-xl style)
  - Description/subtitle (text-lg, muted-foreground color)
  - Featured image (with aspect ratio 240/150, rounded-xl)
  - Rich text content
  - "Back to Blog" button (rounded, secondary style)
  - "Keep Reading" section with related articles

#### 9.3. Typography Styles

- **Always use Sentence case for all headings** (H1, H2, H3) — only first word and proper nouns capitalized
  - Correct: "What made TripCase special", "Everything in one place", "Ready for your next trip"
  - Incorrect: "What Made TripCase Special", "Everything in One Place", "Ready for Your Next Trip"
- **Article title**: `heading-xl` (48px desktop / 30px mobile, bold, centered)
- **Article description**: 18px, normal weight, muted-foreground color (#737373)
- **Section headings (H2)**: 30px, semibold, **no border-bottom** — subheadings within article content should not have borders
- **Sub-headings (H3)**: 24px, semibold, with top padding (32px)
- **Paragraphs**: 16px, normal weight, 24px line-height
- **Blockquotes**: italic style, 2px left border, 24px left padding
- **Lists**: 16px text, 24px left margin, 8px spacing between items
- **Links in text**: underline decoration

#### 9.4. Missing Components

- **If a component doesn't exist in `src/components/ui/`**:
  1. First check if a similar component exists that can be extended
  2. Ask whether to create a custom component or use a component from [shadcn/ui](https://ui.shadcn.com/docs/components)
  3. For tables, use shadcn/ui Table component: [Table](https://ui.shadcn.com/docs/components/table)
  4. When using shadcn components, adapt them to match project styling (Tailwind classes, design tokens)

- **Common shadcn components for blog articles**:
  - `Table` - for data tables in articles
  - `Separator` - for horizontal dividers
  - `Badge` - for article tags/categories

#### 9.5. Spacing and Layout

- **Article container**: max-width 768px (desktop), 672px (mobile), centered
- **Content spacing**: 24px gap between typography elements
- **Section spacing**: 48px gap between major sections
- **Section padding**: 96px vertical padding (desktop), 64px (mobile)

#### 9.6. Blog article images

- **For each new blog article, create a dedicated image file** based on `image-placeholder.png`
- Image naming convention: `blog-{article-slug}.png` (e.g., `blog-tripsy-alternative.png` for slug `tripsy-alternative-travel-app`)
- Create the image by copying the placeholder: `cp src/assets/images/image-placeholder.png src/assets/images/blog-{slug}.png`
- Import the image in both the article page and `blogArticles.ts`:
  ```typescript
  import blogTripsyAlternative from '../assets/images/blog-tripsy-alternative.png'
  ```
- **Do not use `image-placeholder.png` directly** in blog articles — always create a dedicated image file
- This allows designers to easily replace placeholder images with actual artwork later
- **Image aspect ratio**: Use `aspect-[3/2]` (3:2 ratio) for all blog article hero images, unless otherwise specified
- Example: `className="w-full rounded-xl aspect-[3/2] object-cover"`

#### 9.7. Avoid dashes in article text

- **Do not use dashes (—) in article text** (paragraphs and lists)
- Use colons (:) for explanations and lists
- Use commas for additional information
- Restructure sentences to avoid dashes when possible
- **Exception**: Dashes in tables are acceptable as structural elements (e.g., to indicate "not available")
- Examples:
  - Instead of: "everything in one place — bookings, documents, tickets"
  - Use: "everything in one place: bookings, documents, tickets" or "everything in one place, including bookings, documents, and tickets"
  - Instead of: "Limited document management — focused on itineraries"
  - Use: "Limited document management: focused on itineraries"

#### 9.8. CTA download links

- **Each blog article must have maximum one link** to the app download section (/#get-the-app) **in the article content text**
- **This restriction applies only to download links in the article body text**, not to category links in the article meta section (header)
- If Folio Wallet is mentioned multiple times in an article, only the first or most prominent mention should have a link
- Remove links from subsequent mentions while keeping the text
- Link target: `/#get-the-app` (main page with anchor to "Get The App" section)
- Link styling: `className="underline hover:text-[#0a0a0a] transition-colors"` for muted text or `className="underline hover:text-[#737373] transition-colors"` for dark text
- **Keep link text short** — do not include long sentences with ratings inside the link
- **Never make large text blocks into links** — only short phrases like "Folio's digital wallet app" or "Available free on iOS and Android" should be linked
- Examples:
  - Correct: `<a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Available free on iOS and Android.</a>`
  - Correct: `<a href="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio's digital wallet app</a> is rated 4.6 stars on Google Play and 4.8 stars on the App Store.`
  - Incorrect: `<a href="/#get-the-app">Folio Wallet is rated 4.8 stars on the App Store and 4.6 stars on Google Play.</a>` (too long, includes ratings)
  - Incorrect: `<a href="/#get-the-app">Folio's digital wallet app is rated 4.6 stars on Google Play and 4.8 stars on the App Store</a>` (too long, includes ratings)
- If you want to mention ratings, put them **outside the link**: `<a href="/#get-the-app">Available free on iOS and Android.</a> Rated 4.8 stars on the App Store.`
- This encourages readers to download the app after reading the article

#### 9.9. Article category links

- **Category names in blog articles must be clickable** and navigate to the blog page with the category filter applied
- **Use `Link` component** from `react-router-dom` for category links
- **Link format**: `/blog?category={categoryName}` (e.g., `/blog?category=Product`, `/blog?category=Company`)
- **Category values**: Must match valid `BlogCategory` types: `'Company'`, `'Research'`, `'Product'`, `'Safety'`
- **Link styling**: 
  - Base: `className="relative shrink-0 text-[#737373] hover:text-[#0a0a0a] hover:underline transition-colors cursor-pointer"`
  - Maintains the same visual appearance as static text, but with hover effects
- **Implementation pattern**:
  ```tsx
  import { Link } from 'react-router-dom'
  
  // In article meta section:
  <div className="flex flex-wrap gap-4 items-start justify-center leading-5 relative shrink-0 text-sm w-full">
    <p className="relative shrink-0 text-[#0a0a0a]">Sep 2, 2025</p>
    <Link 
      to="/blog?category=Product" 
      className="relative shrink-0 text-[#737373] hover:text-[#0a0a0a] hover:underline transition-colors cursor-pointer"
    >
      Product
    </Link>
  </div>
  ```
- **BlogPage integration**: `BlogPage` must read the `category` query parameter from URL using `useSearchParams()` and automatically apply the filter when the page loads
- **URL synchronization**: When users click category filter buttons on BlogPage, the URL must be updated with the `?category=` parameter
- **Category validation**: BlogPage must validate category values against valid categories array before applying filter

#### 9.10. Article structure and headings

- **Minimize headings**: Use headings sparingly to break up long sections, not after every few paragraphs
- **H2 headings (30px)**: Use only for major topic changes or distinct sections (typically 3-5 per article)
- **H3 headings (24px)**: Use only when absolutely necessary for subsections within a major H2 section
- **Avoid heading overuse**: If you find yourself adding a heading after every 2-3 paragraphs, combine those paragraphs into longer flowing sections instead
- **Paragraph flow**: Articles should read like a narrative with longer paragraphs (3-5 sentences) that flow naturally
- **Heading spacing**: Headings should separate distinct ideas or topics, not minor points
- **Examples of good structure**:
  - Introduction (no heading, just paragraphs)
  - One H2 for main topic (e.g., "How it works")
  - Several paragraphs explaining the topic
  - Another H2 for next major topic (e.g., "Key features")
  - Several paragraphs explaining features
  - Conclusion (no heading or optional H2)
- **Examples of bad structure**:
  - H2 after every 2 paragraphs
  - H3 for every minor point
  - Headings that could be replaced with bold text or list items
- **Lists instead of headings**: For feature lists or itemized content, use bullet lists with bold text rather than creating H3 headings for each item
- **App and product names**: When listing multiple apps, products, or services in an article, use **bold text** at the beginning of paragraphs instead of creating H3 headings for each item. This keeps the article structure clean while still making names easily scannable
  - Example: `<p><strong>Folio</strong> is a digital wallet app...</p>` instead of `<h3>Folio</h3><p>is a digital wallet app...</p>`
- **Reference**: Follow the structure style of OpenAI blog articles (e.g., https://openai.com/index/group-chats-in-chatgpt/) which use minimal headings and longer flowing paragraphs

#### 9.11. Article images

- **All images in blog articles must use the `ArticleImage` component** from `src/components/ui/ArticleImage.tsx`
- Images automatically break out of the text container (768px) to display at wider width (max 1200px), similar to OpenAI blog design
- **Do not use plain `<img>` tags** in article content
- Props: `src` (required), `alt` (required), `className` (optional for additional styling)
- Example:
  ```tsx
  import { ArticleImage } from '../components/ui'
  
  <ArticleImage 
    src={imageSource} 
    alt="Descriptive alt text"
  />
  ```
- The component handles responsive behavior automatically: constrained on mobile, wider on desktop

## Workflow

1. **Before creating a new element:**
   - **Check Figma** to understand component structure, states, and variants
   - Check for an existing suitable component in `src/components/ui/`
   - Check existing patterns in the project
   - If component doesn't exist - create it as a shared component
   - **If you notice duplicated code across multiple files, extract it into a shared component first**

2. **When working with sections:**
   - **Verify design in Figma** for spacing and layout
   - Use standard padding
   - Use shared components (`SectionHeader`, `FeatureBlock`, `Accordion`, `IconContainer`, etc.)
   - Maintain consistency with other sections

3. **When implementing expandable lists or accordions:**
   - Use the `Accordion` component with `AccordionItemData` type
   - If selection should sync with other elements (like images), use `useState` + `onItemChange`
   - Check `FolioAppPage` or `IdentityVerificationPage` for reference patterns

4. **When working with buttons:**
   - **Check Figma** for button states and variants
   - Always use the `Button` component
   - Choose appropriate variant and size
   - Do not create custom buttons

5. **When using icons:**
   - Check `src/assets/icons/` for existing icons
   - Icons use PascalCase naming (e.g., `ShieldPlus.svg`, not `shield-plus.svg`)
   - Use `IconContainer` component to wrap icons with proper styling
   - Match icon semantics from Figma design

6. **Before implementation:**
   - **Review Figma design** for the component or feature
   - Identify all states (default, hover, focus, active, disabled)
   - Identify all variants (sizes, colors, styles)
   - Note spacing, typography, and color specifications
   - Ensure responsive behavior matches design

7. **When working with blog articles:**
   - **Always check the [Blog Article Figma design](https://www.figma.com/design/6jO5aXk21DqMTeNFCAh9rI/Folio-web?node-id=24536-108142&m=dev)** before implementation
   - Use shared typography components (`Typography / H2`, `Typography / H3`, `Typography / P`, `Typography / Blockquote`, `Typography / List`)
   - Use `Rich Text` container for article content
   - Follow the standard article structure: date/category → title → description → image → content → back button → related articles
   - For missing components (e.g., tables), ask whether to create custom or use shadcn/ui components
   - When using shadcn components, reference [shadcn/ui documentation](https://ui.shadcn.com/docs/components) and adapt styling to match project design tokens
   - Ensure responsive behavior for desktop (768px max-width) and mobile (672px max-width)

8. **Before committing changes:**
   - **Run lint checks** on all modified files using `read_lints` tool
   - **Remove unused imports** — when replacing icons/components, delete old imports
   - **Verify no TypeScript errors** — unused variables cause CI/CD failures
   - **Commit and push** changes to the remote repository

### 10. Navigation and Scroll Behavior

- **All navigation must be instant** — no visible scroll animation when opening pages or navigating to sections
- When user clicks a link, the target page/section must appear immediately in the correct position
- This applies to:
  - Page-to-page navigation (e.g., Blog → Article)
  - Anchor links (e.g., `/#get-the-app`)
  - "Back to Blog" buttons
  - All internal links
- **Use utilities from `src/utils/`**:
  - `scrollToTop()` — instant scroll to top of the page
  - `scrollToSection(id)` — instant scroll to a section by ID
- **Global scroll handling** is done by `ScrollToTop` component in `src/components/ScrollToTop.tsx`
- **CSS `scroll-behavior: smooth`** in `index.css` is for user-initiated scrolling only; programmatic navigation must override it with `behavior: 'auto'`

### 11. Pre-commit Checks

- **Always check for lint errors** before committing changes using `read_lints` tool
- **Remove unused imports** — if you replace an icon or component, delete the old import
- **Verify the build passes** — unused variables and imports will cause build failures in CI/CD
- **Check all modified files** for potential issues before committing
- **Verify import paths case sensitivity** — search for imports with `grep -i` to find case mismatches (e.g., `globe.svg` vs `Globe.svg`)
- This prevents broken builds and failed deployments

### 12. Build Verification and Git Operations

#### Always verify the build

- **Run `npm run build` before committing** to catch any errors that would fail CI/CD
- **Fix all build errors yourself** — do not leave broken builds for the user to fix
- Common build errors to watch for:
  - **Case sensitivity issues**: Linux CI is case-sensitive, macOS is not (e.g., `Globe.svg` vs `globe.svg`)
  - **Missing imports**: Files that exist locally but weren't added to git
  - **Unused imports/variables**: TypeScript strict mode will fail on these
  - **Missing dependencies**: Packages used but not in package.json

#### Always commit and push

- **After completing any change, always commit and push to remote repository**
- Use descriptive commit messages following conventional commits:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `refactor:` for code refactoring
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `chore:` for maintenance tasks
- **Do not wait for user to commit** — complete the full workflow yourself
- Workflow: `git add .` → `git commit -m "message"` → `git push`

#### After pushing, verify CI/CD

- **Check GitHub Actions** after pushing to ensure build passes on Linux CI
- **If CI fails**, fix the issue immediately and push again
- Common CI failures that pass locally:
  - **Case sensitivity**: `Globe.svg` works on macOS but `globe.svg` fails on Linux
  - **Missing files**: Files not tracked by git
- **Use `grep -i` to find case mismatches** in imports before pushing

#### Handling case sensitivity

- **macOS filesystem is case-insensitive** — `Globe.svg` and `globe.svg` are the same file
- **Linux filesystem (CI/CD) is case-sensitive** — they are different files
- When renaming files for case changes, use two-step git mv:
  ```bash
  git mv file.svg file_temp.svg
  git mv file_temp.svg File.svg
  ```
- **Always verify git tracks the correct case** using `git ls-files`

### 13. Localization and Translations

#### 13.1. Key Translation Requirements

**These rules must be followed strictly for all translations:**

1. **NEVER translate literally** — adapt text naturally, not word-for-word
2. **Text must sound natural for native speakers** — write as if originally written in the target language
3. **Identical terms, names, and button texts must be translated the same way everywhere** — consistency is critical
4. **Maintain a unified style and tone** — all translations should feel like they come from the same source

#### 13.2. Translation Principles

- **NEVER translate literally** — always adapt text as a native speaker professional copywriter would write it
- **Write like Apple, Google, Yandex** — translations must sound like they were originally written in the target language by a professional marketing team
- **Focus on meaning, not words** — convey the intent and emotion, not word-for-word translation
- **Keep translations concise** — translations should not be longer than the original (especially in UI elements)
- **Consider UI context** — dropdowns, buttons, and headings must be compact
- **Maintain consistent terminology** — use the same terms for the same concepts across all pages
- **Technical terms and product names must be consistent** — if a term is translated (e.g., "Digital Identity" → "Цифровая идентификация"), use the translation everywhere; if kept in English (e.g., "Playground", "EUDI Wallet"), keep it in English everywhere. Never mix translated and untranslated versions of the same term.
- **Before adding a translation, search for existing translations** — use `grep` to find how the same term is translated elsewhere. Never create alternative translations (e.g., "Связаться" vs "Связаться с нами" for "Get in touch"). Check glossary in section 13.4 first.
- **Read aloud test** — if a translation sounds awkward when spoken, rewrite it
- **Page taglines must match menu item names** — the tagline on a page (e.g., hero section) must exactly match the corresponding menu item name for consistency
  - Check `common.json` footer/nav for menu item names
  - Check page namespace files (e.g., `platform.json`) for taglines
  - If menu says "Liveness Check", the page tagline must be the same translated term, not a different wording
- **Avoid literal translations of technical terms** — use natural terms that native speakers would use for the concept, not word-for-word translations from English

#### 13.3. Navigation and Link Localization

- **All internal navigation must preserve language context** — use `getLocalizedPath()` or `LocalizedLink` component
- **Use `LocalizedLink` component** for links in article content: `import { LocalizedLink } from '../components/ui'`
- **Use `getLocalizedPath()` hook** for programmatic navigation: 
  ```tsx
  const { getLocalizedPath } = useLocalizedPath()
  navigate(getLocalizedPath('/government/playground'))
  ```
- **FooterLink already handles localization** — no additional changes needed for footer links
- **Never use hardcoded paths** like `to="/platform/..."` — always wrap with localization

#### 13.4. File Structure

- **One namespace = one page group**: `wallet.json`, `platform.json`, `solutions.json`, `government.json`
- **Common elements** (navbar, footer, buttons) go in `common.json`
- **Page-specific content** goes in dedicated namespace files
- **Location**: `src/locales/{lang}/{namespace}.json`

#### 13.5. Translation Keys

- Use descriptive, hierarchical key names: `section_element_variant`
- Examples:
  - `hero_title`, `hero_description`
  - `feature_card_title_1`, `feature_card_description_1`
  - `faq_question_1`, `faq_answer_1`
- Keep keys in English regardless of content language

#### 13.6. Using Translations in Components

- Import `useTranslation` hook from `react-i18next`
- Specify namespace: `const { t } = useTranslation('wallet')` or `useTranslation(['wallet', 'common'])`
- Use `t('key')` for simple strings, `t('key', { variable })` for interpolation
- For SEO metadata in `usePageTitle`, use translated strings

#### 13.7. Adding New Languages

1. Create new language folder in `src/locales/{lang}/`
2. Copy all JSON files from `en/` folder
3. Translate all values (keep keys unchanged)
4. Add language to `SUPPORTED_LANGUAGES` in `src/i18n/index.ts`
5. Add language option to `LanguageSwitcher` component

#### 13.8. Article Translation Strategy

- **Never translate articles.json in bulk** — translate one article at a time to avoid context confusion and hallucinations
- **Large translation files cause AI hallucinations** — when the AI sees 1300+ lines of different articles, it may mix up information between them
- **Request format for article translation**:
  - Specify the exact article slug: "Translate article `best-apple-wallet-alternatives` from articles.json to Japanese"
  - This ensures the AI focuses only on one article's context
- **Articles namespace structure**: Each article is a separate key in `articles.json` (e.g., `best-apple-wallet-alternatives`, `terms`, `privacy`)
- **Translation order**: Translate articles in priority order based on traffic or business importance

#### 13.9. Page Meta Translation

- **All pages must have translated meta tags** — title and description for SEO
- **Meta translations are stored in `pages.json`** under the `meta` key for each page
- **Required meta fields for each page**:
  - `title` — page title for browser tab and search results
  - `description` — meta description for search results
- **Example structure**:
  ```json
  {
    "wallet": {
      "meta": {
        "title": "Folio Wallet — Secure Document Storage",
        "description": "Store and manage your documents securely..."
      }
    }
  }
  ```
- **When adding a new page, always add meta translations** for all supported languages
- **When translating, always check and translate meta sections** — they are often overlooked but critical for SEO
- **Meta text must be natural and compelling** — treat it as marketing copy, not technical text

#### 13.10. Japanese Language Rules

**Style and tone:**
- Use polite form (です/ます) for marketing copy
- Avoid excessive katakana for common concepts that have Japanese equivalents
- UI must be concise — Japanese often needs more characters, so abbreviate where possible
- Read aloud test — text must sound natural for native speakers
- Write like professional Japanese marketing teams (Apple Japan, Google Japan style)

**Terms that are NOT translated (keep in English):**
- Product names: Folio, Folio Wallet, Playground, EUDI Wallet
- Technical terms: KYC, AML, API, SDK, NFC, QR
- Trademarks: Face ID, Touch ID, Passkeys

**Official glossary for Japanese:**

| English | Japanese | Notes |
|---------|----------|-------|
| Digital Identity | デジタルID | |
| Liveness Check | 生体認証 | |
| Face Match | 顔照合 | |
| ID Verification | 本人確認 | |
| NFC Identity Scan | NFC IDスキャン | |
| Document Intelligence | ドキュメント分析 | |
| Data Source Checks | データソース検証 | |
| Phone and Email Validation | 電話・メール検証 | |
| Behavior Insights | 行動分析 | |
| Dynamic Flow | 動的フロー | |
| Review Workspace | レビューワークスペース | |
| Credential Issuance | クレデンシャル発行 | |
| Client Onboarding | 顧客オンボーディング | |
| Age Compliance | 年齢確認 | |
| Digital Ticketing | デジタルチケット | |
| End-to-end encryption | エンドツーエンド暗号化 | |
| Zero-knowledge architecture | ゼロ知識アーキテクチャ | |
| Get in touch | お問い合わせ | |
| Sign up | 登録する | |
| Learn more | 詳細を見る | |
| Download | ダウンロード | |
| Privacy | プライバシー | |
| Security | セキュリティ | |
| Government | 行政機関向け | |

#### 13.11. Italian Language Rules

**Key translation principles:**
1. **NEVER translate literally** — adapt text naturally as a native Italian copywriter would write it
2. **Read aloud test** — if it sounds unnatural when spoken, rewrite it
3. **Remove English calques** — avoid word-for-word translations that sound foreign
4. **Keep it concise** — Italian tends to be longer than English, so abbreviate where possible
5. **Maintain term consistency** — identical terms must be translated the same way everywhere

**Style and tone:**
- Use formal "Lei" form for marketing copy, not informal "tu"
- Use active voice where possible
- Write like professional Italian marketing teams (Apple Italia, Google Italia style)
- Before adding a translation, search for existing translations with `grep` to ensure consistency

**Terms that are NOT translated (keep in English):**
- Product names: Folio, Folio Wallet, Playground, EUDI Wallet
- Technical terms: KYC, AML, API, SDK, NFC, QR
- Trademarks: Face ID, Touch ID, Passkeys

**Official glossary for Italian:**

| English | Italian | Notes |
|---------|---------|-------|
| Digital Identity | Identità digitale | |
| Liveness Check | Verifica di presenza | |
| Face Match | Riconoscimento facciale | |
| ID Verification | Verifica dell'identità | |
| NFC Identity Scan | Scansione NFC dell'identità | |
| Document Intelligence | Analisi documentale | |
| Data Source Checks | Verifica delle fonti dati | |
| Phone and Email Validation | Validazione telefono ed email | |
| Behavior Insights | Analisi comportamentale | |
| Dynamic Flow | Flusso dinamico | |
| Review Workspace | Area di revisione | |
| Credential Issuance | Emissione credenziali | |
| Client Onboarding | Onboarding clienti | |
| Age Compliance | Verifica dell'età | |
| Digital Ticketing | Biglietteria digitale | |
| End-to-end encryption | Crittografia end-to-end | |
| Zero-knowledge architecture | Architettura zero-knowledge | |
| Get in touch | Contattaci | |
| Sign up | Registrati | |
| Learn more | Scopri di più | |
| Download | Scarica | |
| Privacy | Privacy | Keep in English |
| Security | Sicurezza | |
| Government | Pubblica Amministrazione | |
| Wallet | Portafoglio digitale | |

#### 13.12. French Language Rules

**Key translation principles:**
1. **NEVER translate literally** — adapt text naturally as a native French copywriter would write it
2. **Read aloud test** — if it sounds unnatural when spoken, rewrite it
3. **Remove English calques** — avoid word-for-word translations that sound foreign
4. **Keep it concise** — French can be longer than English, so abbreviate where possible
5. **Maintain term consistency** — identical terms must be translated the same way everywhere

**Style and tone:**
- Use formal "vous" form for marketing copy, not informal "tu"
- Use active voice where possible
- Write like professional French marketing teams (Apple France, Google France style)
- Before adding a translation, search for existing translations with `grep` to ensure consistency

**Terms that are NOT translated (keep in English):**
- Product names: Folio, Folio Wallet, Playground, EUDI Wallet
- Technical terms: KYC, AML, API, SDK, NFC, QR
- Trademarks: Face ID, Touch ID, Passkeys

**Official glossary for French:**

| English | French | Notes |
|---------|--------|-------|
| Digital Identity | Identité numérique | |
| Liveness Check | Vérification de présence | |
| Face Match | Reconnaissance faciale | |
| ID Verification | Vérification d'identité | |
| NFC Identity Scan | Scan NFC d'identité | |
| Document Intelligence | Analyse documentaire | |
| Data Source Checks | Vérification des sources | |
| Phone and Email Validation | Validation téléphone et email | |
| Behavior Insights | Analyse comportementale | |
| Dynamic Flow | Flux dynamique | |
| Review Workspace | Espace de révision | |
| Credential Issuance | Émission de credentials | |
| Client Onboarding | Onboarding client | |
| Age Compliance | Vérification de l'âge | |
| Digital Ticketing | Billetterie numérique | |
| End-to-end encryption | Chiffrement de bout en bout | |
| Zero-knowledge architecture | Architecture zéro connaissance | |
| Get in touch | Nous contacter | |
| Sign up | S'inscrire | |
| Learn more | En savoir plus | |
| Download | Télécharger | |
| Privacy | Confidentialité | |
| Security | Sécurité | |
| Government | Secteur public | |
| Wallet | Portefeuille numérique | |

## Important Reminders

- **Always check Figma** to understand component structure, states, and variants before implementation
- **Always check existing components** before creating new ones
- **Maintain consistency** in styles and structure with design specifications
- **Create reusable components**, not one-off solutions
- **Follow established project patterns**
- **Match design specifications** from Figma exactly
- **For blog articles**: use shared typography components and follow the [Blog Article design](https://www.figma.com/design/6jO5aXk21DqMTeNFCAh9rI/Folio-web?node-id=24536-108142&m=dev)
- **For missing UI components**: ask first or use [shadcn/ui](https://ui.shadcn.com/docs/components) components adapted to project styling
- **All navigation must be instant** — no smooth scroll animation when opening pages or sections
- **Always run lint checks** before committing to avoid build failures
- **Always verify the build passes** (`npm run build`) before committing
- **Always fix build errors yourself** — do not leave broken builds for the user
- **Always commit and push** changes to the remote repository after completing work

