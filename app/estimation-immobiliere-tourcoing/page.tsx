import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { EstimationContent } from "@/components/estimation/EstimationContent";

export const metadata: Metadata = {
  title: "Estimation immobilière à Tourcoing et alentours",
  description:
    "Vous souhaitez vendre votre bien ? Alexandre Chassagne estime votre maison ou appartement après une visite à Tourcoing, Halluin, Roncq, Linselles, Bousbecque, Bondues, Mouvaux et dans la vallée de la Lys.",
  alternates: {
    canonical: "/estimation-immobiliere-tourcoing",
  },
  openGraph: {
    title: "Estimation immobilière à Tourcoing et alentours",
    description:
      "Estimation de maisons et appartements après visite à Tourcoing et dans les communes voisines de la vallée de la Lys.",
    url: "/estimation-immobiliere-tourcoing",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <EstimationContent />
      </main>
      <Footer />
    </>
  );
}
