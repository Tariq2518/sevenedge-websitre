interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

export default function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div className="relative flex gap-4 md:flex-col md:gap-0">
      {/* Number badge */}
      <div className="relative z-10 flex-none">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-sm font-semibold text-brand">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <div className="md:mt-5">
        <h3 className="text-base font-semibold text-content-primary">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-content-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
