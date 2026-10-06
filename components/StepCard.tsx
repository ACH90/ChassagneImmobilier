type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="lift border border-black/10 bg-white/35 p-8">
      <span className="text-xs text-[#9a7754]">{number}</span>

      <h3 className="serif mt-14 text-3xl">{title}</h3>

      <p className="mt-4 leading-7 text-[#756f66]">{description}</p>
    </div>
  );
}
