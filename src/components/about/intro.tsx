import { about_Data } from "@/data/about";
import { useTheme } from "@/context/ThemeContext";

export function AboutIntro() {
  const d = about_Data.intro;
  const { setContact } = useTheme();

  return (
    <section className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-12 lg:gap-8">
      {/* Text & Actions Column */}
      <div className="flex flex-col items-start justify-center gap-8 sm:gap-10 lg:col-span-7 lg:gap-12">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-app-brand sm:text-4xl lg:text-5xl">
            {d.title}
          </h1>
          <p className="text-base text-app-text-muted sm:text-lg lg:w-[85%]">
            {d.text}
          </p>
        </div>

        {/* Responsive Button Group */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() => setContact(true)}
            className="inline-block rounded-xl border-4 border-app-brand-border p-2 text-sm font-semibold transition-all sm:px-6 sm:py-3 sm:text-base"
          >
            {d.contactLabel}
          </button>
          <a
            href={d.cv.href}
            download
            className="inline-block rounded-xl border-none bg-app-brand p-2 text-sm font-semibold text-background transition-all sm:px-6 sm:py-3 sm:text-base"
          >
            {d.cv.label}
          </a>
        </div>
      </div>

      {/* Visual / Image Column - Responsive order pushes this below text on mobile */}
      <div className="order-last relative isolate mx-auto w-full max-w-sm sm:max-w-md lg:order-none lg:col-span-5 lg:max-w-none">
        {/* Glow Decorative Background */}
        <div
          aria-hidden="true"
          className="absolute -inset-3 -z-10 rounded-[2rem] bg-linear-to-br from-app-soft/40 to-app-accent/30 blur-xl"
        />

        <img
          src={d.image}
          alt={d.alt}
          className="w-full object-cover rounded-xl border border-app-border shadow-soft aspect-square lg:aspect-[4/5]"
        />
      </div>
    </section>
  );
}
