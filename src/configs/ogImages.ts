// Base URL for OG images - can be overridden via env var at build time
// Default to GitHub Pages URL where images are deployed
export const OG_IMAGE_BASE_URL =
  import.meta.env.VITE_OG_IMAGE_BASE_URL ||
  'https://stomashevsky.github.io/folio/og-images'

export function getOgImageUrl(filename: string): string {
  return `${OG_IMAGE_BASE_URL}/${filename}`
}
