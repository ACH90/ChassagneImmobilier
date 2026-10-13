import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "À propos d’Alexandre Chassagne | Conseiller immobilier",
  description:
    "Découvrez Alexandre Chassagne, conseiller immobilier à Tourcoing et dans la vallée de la Lys. Un interlocuteur local pour vos projets de vente à Halluin, Roncq, Linselles, Bousbecque, Bondues et Mouvaux.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos",
    description:
      "Votre interlocuteur immobilier à Tourcoing et dans la vallée de la Lys, pour vous accompagner dans votre projet de vente.",
    url: "/a-propos",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <AboutContent />
      </main>

      <Footer />
    </>
  );
}
