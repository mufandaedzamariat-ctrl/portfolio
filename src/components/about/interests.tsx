import { about_Data } from "@/data/about";
import { SectionHeader } from "../sectionHeader";
import { ImageCard } from "../ui/imageCard";

export function AboutInterests() {
  const d = about_Data.interests;
  return (
    <section>
      <SectionHeader eyebrow={d.eyebrow} title={d.title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {d.items.map((item) => (
          <ImageCard
            key={item.title}
            image={item.image}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}
