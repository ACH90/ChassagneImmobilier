import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact et estimation immobilière | Alexandre Chassagne",
  description:
    "Vous avez un projet de vente à Tourcoing ou dans la vallée de la Lys ? Contactez Alexandre Chassagne pour échanger sur votre bien et organiser une visite.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contactez Alexandre Chassagne",
    description:
      "Parlons de votre projet immobilier à Tourcoing, Halluin, Roncq et dans les communes voisines de la vallée de la Lys.",
    url: "/contact",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
