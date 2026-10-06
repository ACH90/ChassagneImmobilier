import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/site";

export function EstimationContent() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">ESTIMATION IMMOBILIÈRE À TOURCOING</p>
          <h1 className="serif">Connaître la valeur réelle de votre bien.</h1>
          <p className="lead">
            Une estimation fiable ne se résume pas à quelques informations
            saisies en ligne. Je vous recontacte pour échanger sur votre projet
            et convenir d'une visite du bien.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <h2 className="serif">Pourquoi une visite ?</h2>

            <p>
              Surface, distribution des pièces, état général, travaux,
              prestations, extérieur et environnement sont autant d'éléments qui
              peuvent influencer la valeur et qui ne peuvent pas être appréciés
              correctement à distance.
            </p>

            <ul className="check-list">
              <li>
                <Check size={17} />
                Voir le bien dans son état réel
              </li>
              <li>
                <Check size={17} />
                Comprendre sa configuration et ses prestations
              </li>
              <li>
                <Check size={17} />
                Échanger sur votre projet et son calendrier
              </li>
              <li>
                <Check size={17} />
                Construire une estimation cohérente avec le marché
              </li>
            </ul>
          </div>

          <div className="panel lift reveal delay-2">
            <h3 className="serif">Votre demande</h3>

            <p>
              Le formulaire recueille uniquement les informations nécessaires
              pour vous recontacter.
            </p>

            <Button href="/contact">
              Demander à être contacté <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
