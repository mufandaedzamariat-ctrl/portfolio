import { about_Data } from "@/data/about";
import { SectionHeader } from "../sectionHeader";

export function AboutStory() {
  const d = about_Data.story;

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20">
      {/* Header stacks cleanly on top for all devices */}
      <div className="mb-12 md:mb-16">
        <SectionHeader eyebrow={d.eyebrow} title={d.title} />
      </div>

      {/* Narrative Stack */}
      <div className="space-y-10 md:space-y-12">
        {d.paragraphs.map((p, index) => {
          const displayIndex = String(index + 1).padStart(2, "0");

          return (
            <article key={p.tag || index} className="group">
              {/* Minimalist Top Indicator */}
              <div className="flex items-center gap-2 mb-3 font-mono text-[11px] tracking-wider text-app-text-muted/60">
                <span className="text-app-brand font-semibold">
                  [{displayIndex}]
                </span>
                <span>•</span>
                <span className="uppercase">{p.tag}</span>
              </div>

              {/* Consistent, readable typography line heights */}
              <p className="text-base sm:text-lg leading-relaxed text-app-text antialiased">
                {index === 0 ? (
                  // Subtle emphasis on the opening sentence
                  <span className="text-lg sm:text-xl font-medium text-app-heading block leading-snug mb-1">
                    {p.text}
                  </span>
                ) : (
                  p.text
                )}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
