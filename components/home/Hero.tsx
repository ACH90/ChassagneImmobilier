import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/site";

export function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="container hero-inner reveal">
        <p className="eyebrow">CONSEIL IMMOBILIER · TOURCOING</p>

        <h1 className="serif">
          Vous envisagez de vendre votre bien immobilier ?
          <br />
          <em className="hero-highlight">
            Commençons par connaître la valeur réelle de votre bien.
          </em>
        </h1>

        <p className="lead">
          Je vous accompagne avec une estimation réalisée sur place, au plus
          près des caractéristiques de votre bien et de votre projet.
        </p>

        <div className="actions">
          <Button href="/estimation-immobiliere-tourcoing">
            Demander une estimation <ArrowRight size={18} />
          </Button>

          {/* <Button href="tel:+33" variant="ghost">
            <Phone size={17} /> Échanger par téléphone
          </Button> */}
        </div>

        <div className="trust">
          <span>
            <Check size={16} /> Conseiller immobilier local
          </span>

          <span>
            <MapPin size={16} /> Tourcoing et alentours
          </span>
        </div>
      </div>
    </section>
  );
}
