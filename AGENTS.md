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

## Important Reminders

- **Always check Figma** to understand component structure, states, and variants before implementation
- **Always check existing components** before creating new ones
- **Maintain consistency** in styles and structure with design specifications
- **Create reusable components**, not one-off solutions
- **Follow established project patterns**
- **Match design specifications** from Figma exactly

