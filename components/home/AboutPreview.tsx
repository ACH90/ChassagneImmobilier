import { ArrowRight } from "lucide-react";
import { Button, PhotoPlaceholder } from "@/components/site";

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container about-preview">
        <div className="reveal">
          <PhotoPlaceholder label="Photo d'Alexandre" />
        </div>

        <div className="reveal delay-2">
          <p className="eyebrow">À PROPOS</p>

          <h2>
            Alexandre Chassagne
            <br />
            Votre conseiller immobilier à Tourcoing.
          </h2>

          <p>
            Je privilégie une approche simple et humaine : écouter votre projet,
            connaître votre bien et vous apporter des réponses concrètes.
          </p>

          <Button href="/a-propos" variant="secondary">
            En savoir plus <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
