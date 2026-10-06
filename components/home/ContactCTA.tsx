import { Button } from "@/components/site";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section contact-cta">
      <div className="container narrow center reveal">
        <p className="eyebrow">PARLONS DE VOTRE PROJET</p>

        <h2>Vous souhaitez connaître la valeur de votre bien ?</h2>

        <p>
          Je vous recontacte pour échanger avec vous et, si vous le souhaitez,
          convenir d'un rendez-vous directement sur place.
        </p>

        <Button href="/estimation-immobiliere-tourcoing">
          Demander une estimation <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
}
