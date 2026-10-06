import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { EstimationContent } from "@/components/estimation/EstimationContent";

export const metadata: Metadata = {
  title: "Estimation immobilière à Tourcoing",
  description:
    "Demandez une estimation immobilière à Tourcoing réalisée après une visite de votre bien.",
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
