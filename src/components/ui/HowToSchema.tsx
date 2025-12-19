interface HowToStep {
  name: string
  text: string
  image?: string
}

interface HowToSchemaProps {
  /** The title of the how-to guide */
  name: string
  /** Description of what this how-to accomplishes */
  description: string
  /** Array of steps */
  steps: HowToStep[]
  /** Optional total time to complete (ISO 8601 duration format, e.g., "PT15M") */
  totalTime?: string
  /** Optional image for the how-to */
  image?: string
}

/**
 * HowTo Schema component for SEO.
 * 
 * Generates JSON-LD structured data for how-to guides.
 * This helps search engines and AI understand step-by-step content.
 * 
 * Usage:
 * ```tsx
 * <HowToSchema
 *   name="How to add a passport to Folio"
 *   description="Step-by-step guide to adding your passport to the Folio Wallet app"
 *   steps={[
 *     { name: "Open Folio app", text: "Launch the Folio Wallet app on your phone" },
 *     { name: "Tap Add Document", text: "Tap the + button at the bottom of the screen" },
 *     { name: "Scan your passport", text: "Use your camera to scan the photo page of your passport" }
 *   ]}
 *   totalTime="PT5M"
 * />
 * ```
 */
export default function HowToSchema({ name, description, steps, totalTime, image }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(image && { image }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export type { HowToStep, HowToSchemaProps }
