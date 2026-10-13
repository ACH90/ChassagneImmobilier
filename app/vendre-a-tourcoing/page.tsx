import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { SellingContent } from "@/components/selling/SellingContent";

export const metadata: Metadata = {
  title: "Vendre son bien à Tourcoing et alentours",
  description:
    "Vous souhaitez vendre votre maison ou appartement ? Alexandre Chassagne vous accompagne à Tourcoing, Halluin, Roncq, Linselles, Bousbecque, Bondues, Mouvaux et dans la vallée de la Lys.",
  alternates: {
    canonical: "/vendre-a-tourcoing",
  },
  openGraph: {
    title: "Vendre son bien à Tourcoing et alentours",
    description:
      "Un accompagnement personnalisé pour vendre votre maison ou appartement à Tourcoing et dans les communes voisines de la vallée de la Lys.",
    url: "/vendre-a-tourcoing",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <SellingContent />
      </main>
      <Footer />
    </>
  );
}
