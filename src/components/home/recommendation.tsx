import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/sectionHeader";
import { recommendations_Data } from "@/data/home";

// "Jane Mary Doe" -> "JD"
const initials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

function Avatar({ name, image }: { name: string; image?: string }) {
  const base = "h-12 w-12 shrink-0 rounded-full";
  return image ? (
    <img
      src={image}
      alt={name}
      className={`${base} border border-app-border-strong object-cover`}
    />
  ) : (
    <div
      aria-hidden
      className={`${base} flex items-center justify-center border border-app-brand-border bg-app-brand-bg text-sm font-semibold text-app-brand`}
    >
      {initials(name)}
    </div>
  );
}

export default function Recommendations() {
  const { eyebrow, title, items } = recommendations_Data;

  return (
    <section>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {items.map((r) => (
          <figure key={r.name} className="card-base flex h-full flex-col p-6">
            <Quote className="h-6 w-6 text-app-soft" />

            <blockquote className="mt-3 flex-1 text-sm italic leading-relaxed text-app-text">
              “{r.quote}”
            </blockquote>

            <figcaption className="mt-6 border-t border-app-border pt-5">
              <div className="flex items-center gap-3">
                <Avatar name={r.name} image={r.image} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-app-heading">
                    {r.name}
                  </p>
                  <p className="truncate text-xs text-app-text-muted">
                    {r.profession}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="badge-accent">{r.relation}</span>
                <span className="font-mono text-xs text-app-text-muted">
                  {r.date}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
