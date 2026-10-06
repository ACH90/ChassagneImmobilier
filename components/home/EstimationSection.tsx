import { ArrowRight } from "lucide-react";
import { Button, SectionTitle } from "@/components/site";
import { Step } from "./Step";

export function EstimationSection() {
  return (
    <section className="section muted">
      <div className="container">
        <SectionTitle
          eyebrow="ESTIMATION IMMOBILIÈRE"
          title="Une estimation sérieuse commence par une visite."
          text="Chaque bien étant différent, l'estimation est réalisée après une visite afin de prendre en compte ses caractéristiques et son état réel."
        />

        <div className="cards three">
          <Step n="01" title="Votre demande">
            Vous me laissez vos coordonnées et quelques informations sur votre
            projet.
          </Step>

          <Step n="02" title="Notre échange">
            Je vous recontacte pour comprendre votre situation et convenir d'un
            rendez-vous.
          </Step>

          <Step n="03" title="La visite du bien">
            Nous regardons ensemble le bien, sa configuration, son état et ses
            prestations.
          </Step>
        </div>

        <div className="center">
          <Button href="/estimation-immobiliere-tourcoing">
            Demander une estimation <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
