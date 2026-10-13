import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { EstimationSection } from "@/components/home/EstimationSection";
import { SellingSection } from "@/components/home/SellingSection";
// import { BuyersSection } from "@/components/home/BuyersSection";
// import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Conseiller immobilier à Tourcoing et vallée de la Lys",
  description:
    "Vous souhaitez vendre votre bien ? Alexandre Chassagne vous accompagne dans votre projet immobilier à Tourcoing, Halluin, Roncq et dans la vallée de la Lys.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Conseiller immobilier à Tourcoing et vallée de la Lys",
    description:
      "Estimation immobilière et accompagnement à la vente à Tourcoing, Halluin, Roncq et dans la vallée de la Lys.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Marquee>
          Tourcoing · Malcense · Virolois · Gambetta · Clinquet · Chêne Houpline
          · Épidème · Ma Campagne / Roncq · Halluin · Bondues · Linselles ·
          Bousbecque
        </Marquee>

        <IntroSection />

        <EstimationSection />

        <SellingSection />

        {/* <BuyersSection /> */}

        {/* <AboutPreview /> */}

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
