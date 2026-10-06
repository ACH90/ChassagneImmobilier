import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function IntroSection() {
  return (
    <section className="section intro">
      <div className="container intro-grid">
        <div className="reveal">
          <p className="eyebrow">UN INTERLOCUTEUR LOCAL</p>

          <h2>Bonjour, je suis Alexandre.</h2>

          <p>
            Votre interlocuteur immobilier sur Tourcoing et ses alentours. Mon
            objectif est simple : vous donner une vision claire de votre bien et
            vous accompagner dans votre projet, sans discours inutile.
          </p>

          <Link className="text-link" href="/a-propos">
            Découvrir mon approche <ArrowRight size={16} />
          </Link>
        </div>

        <div className="reveal delay-2 photo-placeholder">
          <Image
            src="/images/achassagne_pic.PNG"
            alt="Alexandre Chassagne, conseiller immobilier à Tourcoing"
            fill
            sizes="(max-width: 650px) 50vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
