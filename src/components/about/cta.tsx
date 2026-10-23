import { about_Data } from "@/data/about";
import { Actions } from "../ui/Actions";

export function AboutCta() {
  const d = about_Data.cta;
  return (
    <section className="rounded-3xl border border-app-border bg-secondary px-6 py-12 text-center sm:px-12 sm:py-16">
      <h2 className="mx-auto max-w-2xl text-2xl font-extrabold md:text-3xl">
        {d.title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-app-text-muted">
        {d.text}
      </p>
    </section>
  );
}
