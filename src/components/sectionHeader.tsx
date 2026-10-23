// src/components/sectionHeader.tsx
// One header for every home section so they all look related.
export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="mt-2 text-2xl font-extrabold md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {eyebrow && <span className="px-2 text-md md:text-lg ">{eyebrow}</span>}
    </div>
  );
}
