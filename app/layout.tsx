import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chassagne-immobilier.fr"),
  title: {
    default: "Alexandre Chassagne | Conseiller immobilier à Tourcoing",
    template: "%s | Alexandre Chassagne",
  },
  description:
    "Conseiller immobilier à Tourcoing et sur toute la vallée de la Lys. Estimation immobilière sur place, accompagnement à la vente et connaissance du marché local.",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Alexandre Chassagne | Conseiller immobilier à Tourcoing",
    description:
      "Estimation immobilière et accompagnement à la vente à Tourcoing et ses alentours.",
    siteName: "Alexandre Chassagne",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
