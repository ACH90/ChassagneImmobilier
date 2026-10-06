import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/site";

const checks = [
  "Analyse du bien et de son environnement",
  "Positionnement cohérent avec le marché",
  "Conseils sur la présentation et la commercialisation",
  "Suivi du projet à chaque étape",
];

export function SellingSection() {
  return (
    <section className="section">
      <div className="container split">
        <div className="reveal">
          <p className="eyebrow">VENDRE À TOURCOING</p>

          <h2>Bien vendre, c'est d'abord bien positionner son bien.</h2>

          <p>
            Prix, présentation, stratégie de commercialisation et connaissance
            du marché local : chaque élément compte. Mon rôle est de vous
            apporter un regard professionnel et de construire avec vous une
            démarche cohérente.
          </p>

          <ul className="check-list">
            {checks.map((x) => (
              <li key={x}>
                <Check size={17} />
                {x}
              </li>
            ))}
          </ul>

          <Button href="/vendre-a-tourcoing" variant="secondary">
            Préparer mon projet de vente <ArrowRight size={18} />
          </Button>
        </div>

        <div className="quote lift">
          <span>“</span>

          <p>
            Avant de parler de vente, il faut comprendre votre projet et votre
            bien.
          </p>
        </div>
      </div>
    </section>
  );
}
