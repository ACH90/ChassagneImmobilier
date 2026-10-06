export function BuyersContent() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">ACQUÉREURS</p>
          <h1 className="serif">
            Des recherches actives à Tourcoing et ses alentours.
          </h1>
          <p className="lead">
            Cette page sera alimentée avec les recherches acquéreurs réellement
            disponibles. Aucun besoin fictif n'est présenté comme une demande
            réelle.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="search-grid">
            <div className="search-card lift reveal">
              <strong>À renseigner</strong>
              <span>Type de bien · secteur · critères</span>
              <small>Recherche réelle à ajouter</small>
            </div>

            <div className="search-card lift reveal delay-1">
              <strong>À renseigner</strong>
              <span>Type de bien · budget · critères</span>
              <small>Recherche réelle à ajouter</small>
            </div>

            <div className="search-card lift reveal delay-2">
              <strong>À renseigner</strong>
              <span>Type de bien · secteur · critères</span>
              <small>Recherche réelle à ajouter</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
