import { about_Data } from "@/data/about";
import { SectionHeader } from "../sectionHeader";

export function AboutStack() {
  const d = about_Data;

  return (
    <section className="mx-auto max-w-7xl py-12 px-4 sm:px-6">
      <SectionHeader eyebrow={d.stack.eyebrow} title={d.stack.title} />

      {/* Part 1: Current Tooling Inventory Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {d.stack.groups.map((g) => (
          <div
            key={g.label}
            className="rounded-xl border border-app-border bg-muted/20 p-5"
          >
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-app-heading mb-3">
              {g.label}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-app-border bg-background px-2.5 py-1 font-mono text-[11px] text-app-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Part 2: Active Next Targets (Replaces the separate learning component) */}
      <div className="mt-12">
        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-app-brand mb-4">
          Active Technical Growth
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {d.learning.map((target) => (
            <div
              key={target.name}
              className="flex flex-col justify-between rounded-xl border border-app-border bg-background p-5 shadow-sm"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-app-text-muted/80 block mb-1">
                  {target.type}
                </span>
                <h4 className="text-base font-bold text-app-heading mb-2">
                  {target.name}
                </h4>
              </div>
              <p className="text-xs text-app-text leading-relaxed">
                {target.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Grounding Context Note */}
      <blockquote className="mt-8 max-w-3xl border-l border-app-brand pl-4 text-xs italic leading-relaxed text-app-text-muted">
        &ldquo;{d.note}&rdquo;
      </blockquote>
    </section>
  );
}
