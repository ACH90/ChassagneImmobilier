import { SectionTitle, StepCard } from "@/components/site";

const steps = [
  {
    number: "01",
    title: "Échanger",
    description: "Comprendre votre projet et ce que vous souhaitez accomplir.",
  },
  {
    number: "02",
    title: "Visiter",
    description:
      "Observer le bien, son état, sa distribution et ses prestations.",
  },
  {
    number: "03",
    title: "Estimer",
    description:
      "Vous présenter une estimation argumentée au regard du marché.",
  },
];

export function ProcessSection() {
  return (
    <section className="container py-28">
      <SectionTitle
        eyebrow="Une démarche simple"
        title="Pas de prix automatique. Une vraie lecture du bien."
        text="Chaque propriété est différente. Une estimation sérieuse nécessite de voir le bien, d'en comprendre les caractéristiques et d'échanger avec vous sur votre projet."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>
    </section>
  );
}
