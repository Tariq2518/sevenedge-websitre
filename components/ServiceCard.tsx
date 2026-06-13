import { Check } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="card group h-full p-6 transition-shadow duration-300 hover:shadow-soft sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3 className="mt-5 text-lg font-semibold text-content-primary">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-content-secondary">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {service.capabilities.map((capability) => (
          <li
            key={capability}
            className="flex items-start gap-2.5 text-sm text-content-secondary"
          >
            <Check
              className="mt-0.5 h-4 w-4 flex-none text-brand"
              aria-hidden="true"
            />
            <span>{capability}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
