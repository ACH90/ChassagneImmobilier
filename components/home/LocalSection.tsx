export function LocalSection() {
  return (
    <section className="bg-[#171717] py-28 text-white">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <p className="text-xs uppercase tracking-[.2em] text-[#c4a27d]">
          Le secteur
        </p>

        <div>
          <h2 className="serif text-5xl leading-tight md:text-7xl">
            Tourcoing n'est pas qu'un marché.
            <br />
            <i>C'est un terrain.</i>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Une présence locale permet de mieux comprendre les quartiers, les
            biens et les attentes des acquéreurs.
          </p>

          <a
            href="/vendre-a-tourcoing"
            className="mt-8 inline-block border-b border-white/40 pb-2"
          >
            Découvrir le marché local →
          </a>
        </div>
      </div>
    </section>
  );
}
