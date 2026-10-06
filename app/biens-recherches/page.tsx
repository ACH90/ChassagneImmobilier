import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { BuyersContent } from "@/components/buyers/BuyersContent";

export const metadata: Metadata = {
  title: "Biens recherchés à Tourcoing",
  description:
    "Découvrez les types de biens actuellement recherchés par des acquéreurs sur Tourcoing et ses alentours.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <BuyersContent />
      </main>
      <Footer />
    </>
  );
}
