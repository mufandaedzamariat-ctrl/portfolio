import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { hero_Data } from "@/data/home";

const summary = [
  {
    label: "projects",
    figure: "5+",
  },
  {
    label: "Graduated",
    figure: "2026",
  },
  {
    label: "tools",
    figure: "10+",
  },
];

export const Hero = () => {
  const { setContact } = useTheme();

  return (
    <section className="grid min-h-[70vh] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
      {/* Left: content */}
      <div className="flex gap-16 flex-col items-start lg:col-span-7">
        <div className="flex  flex-col items-start w-full">
          <span className="badge-accent">{hero_Data.profession}</span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            {hero_Data.slogan}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-app-text-muted">
            {hero_Data.description}
          </p>
        </div>

        <div className="flex w-full max-w-xl justify-between gap-6 px-4 sm:gap-8">
          {summary.map((item) => (
            <div key={item.label} className="flex flex-col items-start gap-1">
              <span className="text-2xl font-bold tracking-tight text-app-text sm:text-3xl">
                {item.figure}
              </span>
              <span className="text-xs font-medium text-app-text-muted sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: image with a soft blush glow behind it */}
      <div className="relative isolate mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
        <div
          aria-hidden
          className="absolute -inset-3 -z-10 rounded-[2rem] bg-linear-to-br from-app-soft/40 to-app-accent/30 blur-xl"
        />
        <div className="aspect-square overflow-hidden rounded-3xl border border-app-border shadow-soft lg:aspect-4/5">
          <img
            src={hero_Data.image}
            alt="hero image"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
