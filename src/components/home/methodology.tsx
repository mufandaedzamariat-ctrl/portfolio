import { Heart } from "lucide-react";
import { SectionHeader } from "@/components/sectionHeader";
import { methodology_Data } from "@/data/home";

export default function Methodology() {
  const { steps, eyebrow, title, signoff } = methodology_Data;

  return (
    <section>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <ol className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === steps.length - 1;

          return (
            <li key={step.n} className="relative pl-16 lg:pl-0">
              {!isLast && (
                <>
                  <span
                    aria-hidden
                    className="absolute left-6 top-14 -bottom-7 border-l-2 border-dashed border-app-border-strong lg:hidden"
                  />
                  <span
                    aria-hidden
                    className="absolute left-14 top-6 hidden w-[calc(100%-2rem)] border-t-2 border-dashed border-app-border-strong lg:block"
                  />
                </>
              )}

              {/* Bubble */}
              <div
                className={`absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border lg:static lg:mb-5 border-app-border-strong bg-background text-app-brand`}
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Card */}
              <div
                className={`border-2 border-app-border h-40 p-5 rounded-lg `}
              >
                <span className=" flex items-center font-mono text-xs text-app-text-muted">
                  {step.n} ·{" "}
                  <h3 className="mx-2 text-lg font-bold text-app-text">
                    {step.title}
                  </h3>
                </span>
                <p className="mt-2 text-sm leading-relaxed text-app-text-muted">
                  {step.text}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Terminal sign-off */}
      <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-app-border bg-muted px-4 py-2 font-mono text-xs text-app-text-muted">
        <span className="text-app-brand">$</span>
        {signoff}
        <Heart className="h-3.5 w-3.5 fill-current text-app-brand" />
      </p>
    </section>
  );
}
