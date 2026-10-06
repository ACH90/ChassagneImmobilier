import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/site";
import { SearchCard } from "./SearchCard";

export function BuyersSection() {
  return (
    <section className="section dark">
      <div className="container">
        <SectionTitle
          eyebrow="ACQUÉREURS"
          title="Des recherches actives sur le secteur."
          text="Les recherches affichées ici sont destinées à présenter des besoins acquéreurs réels, une fois renseignés. Elles peuvent évoluer régulièrement."
          light
        />

        <div className="search-grid">
          <SearchCard title="Maison familiale" info="3 chambres · Tourcoing" />

          <SearchCard title="Appartement" info="2 chambres · Tourcoing" />

          <SearchCard
            title="Maison avec extérieur"
            info="Tourcoing et alentours"
          />
        </div>

        <Link className="text-link light-link" href="/biens-recherches">
          Voir les recherches <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
