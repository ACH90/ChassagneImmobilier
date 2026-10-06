import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "À propos d’Alexandre Chassagne",
  description:
    "Découvrez Alexandre Chassagne, conseiller immobilier à Tourcoing et interlocuteur local pour vos projets immobiliers.",
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
