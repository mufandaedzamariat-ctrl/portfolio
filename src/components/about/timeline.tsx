import { about_Data } from "@/data/about";
import { SectionHeader } from "../sectionHeader";

export function AboutTimeline() {
  const d = about_Data.timeline;
  return (
    <section className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <SectionHeader eyebrow={d.eyebrow} title={d.title} />
        </div>
      </div>

      {/* Same dashed "stitched thread" as the methodology section */}
      <ol className="space-y-8 border-l-2 border-dashed border-app-border-strong pl-8 lg:col-span-8">
        {d.items.map((item, i) => {
          const isCurrent = i === d.items.length - 1;
          return (
            <li key={item.title} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-2 ${
                  isCurrent
                    ? "border-primary bg-primary"
                    : "border-app-brand bg-background"
                }`}
              />
              <span className="badge-accent">{item.kind}</span>
              <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-app-text-muted">
                {item.text}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
