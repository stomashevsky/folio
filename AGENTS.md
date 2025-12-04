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

### 6. Styling

- Use Tailwind CSS classes
- Use shared styles from `src/components/ui/focusStyles.ts` and `src/components/ui/inputStyles.ts`
- Avoid style duplication - extract repeating patterns into shared components or utilities
- **Match design specifications from Figma** (colors, spacing, typography, shadows, etc.)

### 7. Project Structure

- Shared UI components: `src/components/ui/`
- Page sections: `src/components/sections/`
- Specific components: `src/components/`
- Pages: `src/pages/`
- Constants: `src/constants/`
- Configurations: `src/configs/`

## Workflow

1. **Before creating a new element:**
   - **Check Figma** to understand component structure, states, and variants
   - Check for an existing suitable component in `src/components/ui/`
   - Check existing patterns in the project
   - If component doesn't exist - create it as a shared component

2. **When working with sections:**
   - **Verify design in Figma** for spacing and layout
   - Use standard padding
   - Use shared components (`SectionHeader`, `FeatureBlock`, etc.)
   - Maintain consistency with other sections

3. **When working with buttons:**
   - **Check Figma** for button states and variants
   - Always use the `Button` component
   - Choose appropriate variant and size
   - Do not create custom buttons

4. **Before implementation:**
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

