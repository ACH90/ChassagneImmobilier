import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact et demande d’estimation",
  description:
    "Contactez Alexandre Chassagne pour parler de votre projet immobilier à Tourcoing.",
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
