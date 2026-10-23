import { about_Data } from "@/data/about";
import { SectionHeader } from "../sectionHeader";
import { ImageCard } from "../ui/imageCard";

export function AboutPrinciples() {
  const d = about_Data.principles;
  return (
    <section>
      <SectionHeader eyebrow={d.eyebrow} title={d.title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {d.items.map((p) => (
          <ImageCard
            key={p.n}
            image={p.image}
            alt={p.alt}
            eyebrow={`Principle ${p.n}`}
            title={p.title}
            text={p.text}
          />
        ))}
      </div>
    </section>
  );
}
