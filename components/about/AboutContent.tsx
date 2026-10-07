import { ArrowRight } from "lucide-react";
import { Button, PhotoPlaceholder } from "@/components/site";
import Image from "next/image";

export function AboutContent() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">À PROPOS</p>

          <h1 className="serif">
            Alexandre Chassagne, votre conseiller immobilier à Tourcoing.
          </h1>

          <p className="lead">
            Un interlocuteur local pour parler simplement de votre projet
            immobilier.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="reveal delay-2 photo-placeholder">
            <Image
              src="/images/achassagne_pic.PNG"
              alt="Alexandre Chassagne, conseiller immobilier à Tourcoing"
              fill
              sizes="(max-width: 650px) 50vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="reveal delay-2">
            <h2 className="serif">Une approche simple et humaine.</h2>

            <p>
              Je privilégie l'écoute, la connaissance du bien et des échanges
              concrets. L'objectif est de comprendre votre situation avant de
              vous conseiller.
            </p>

            <p>
              Avec ImmoSens, je m'appuie sur un réseau implanté sur la Métropole
              lilloise et sur une connaissance du secteur de Tourcoing et de ses
              alentours.
            </p>

            <Button href="/contact">
              Parler de mon projet <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
