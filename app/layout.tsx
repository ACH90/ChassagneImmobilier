import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'Alexandre Chassagne | Conseiller immobilier à Tourcoing', template: '%s | Alexandre Chassagne' },
  description: 'Conseiller immobilier à Tourcoing. Estimation immobilière sur place, accompagnement à la vente et connaissance du marché local.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'fr_FR', title: 'Alexandre Chassagne | Conseiller immobilier à Tourcoing', description: 'Estimation immobilière et accompagnement à la vente à Tourcoing et ses alentours.', url: '/' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>
}
