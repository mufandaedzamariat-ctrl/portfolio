import { AboutCta } from "@/components/about/cta";
import { AboutIntro } from "@/components/about/intro";
import { AboutPhilosophy } from "@/components/about/phyilosophy";
import { AboutStack } from "@/components/about/stack";
import { AboutTimeline } from "@/components/about/timeline";

export function About() {
  return (
    <div className="flex flex-col gap-2">
      <AboutIntro />
      <AboutPhilosophy />
      <AboutTimeline />
      <AboutStack />
      <AboutCta />
    </div>
  );
}
