import { Check } from "lucide-react";
import { Button } from "@/components/site";

export function SellingContent() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">VENDRE À TOURCOING</p>
          <h1 className="serif">
            Une vente commence par une bonne compréhension du bien et du projet.
          </h1>
          <p className="lead">
            Avant de parler de stratégie, il faut connaître le bien, son
            environnement et ce que vous souhaitez réellement accomplir.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="reveal">
            <h2 className="serif">Mon approche</h2>

            <p>
              Je vous accompagne dans le positionnement du bien, sa présentation
              et sa commercialisation, avec un suivi clair tout au long du
              projet.
            </p>

            <ul className="check-list">
              <li>
                <Check size={17} />
                Analyse du bien et de son environnement
              </li>
              <li>
                <Check size={17} />
                Positionnement adapté au marché
              </li>
              <li>
                <Check size={17} />
                Conseils sur la présentation et la commercialisation
              </li>
              <li>
                <Check size={17} />
                Suivi de votre projet
              </li>
            </ul>

            <div className="reveal delay-2">
              <Button href="/estimation-immobiliere-tourcoing">
                Commencer par une estimation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
