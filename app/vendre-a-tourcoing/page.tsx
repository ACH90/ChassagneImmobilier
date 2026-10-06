import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import { SellingContent } from "@/components/selling/SellingContent";

export const metadata: Metadata = {
  title: "Vendre un bien à Tourcoing",
  description:
    "Conseils et accompagnement pour vendre une maison ou un appartement à Tourcoing.",
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
