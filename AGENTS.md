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

### 3.2. Icons and IconContainer

- **Use `IconContainer` component** for icon wrappers instead of inline div styling
- Icons are located in `src/assets/icons/`
- Icon filenames use **PascalCase** (e.g., `ShieldPlus.svg`, `CreditCard.svg`, `Bitcoin.svg`, `Users.svg`)
- **Always check existing icons** in `src/assets/icons/` before assuming icon names
- Common icons: `Scale.svg`, `Dices.svg`, `Bitcoin.svg`, `CreditCard.svg`, `ShieldPlus.svg`, `Users.svg`, `Link.svg`, `Puzzle.svg`, `Braces.svg`
- Do not use generic placeholder icons - use icons that match the semantic meaning in Figma design

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

