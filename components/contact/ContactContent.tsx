import { LeadForm } from "@/components/lead-form";

export function ContactContent() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">CONTACT</p>
          <h1 className="serif">Parlons de votre projet.</h1>
          <p className="lead">
            Vous souhaitez connaître la valeur de votre bien ? Laissez-moi vos
            coordonnées et je vous recontacte.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="reveal">
            <h2 className="serif">
              Une demande, un échange, puis une visite si nécessaire.
            </h2>
            <p>
              Je ne vous demande pas de renseigner une fiche technique complète
              du bien. L'objectif est d'abord de pouvoir échanger avec vous et
              comprendre votre projet.
            </p>
          </div>

          <div className="reveal delay-2">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
