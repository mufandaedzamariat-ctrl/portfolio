import GetInTouch from "@/components/home/getInTouch";
import { Hero } from "@/components/home/hero";
import Methodology from "@/components/home/methodology";
import { ProjectsSection } from "@/components/home/projects";
import Recommendations from "@/components/home/recommendation";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <ProjectsSection />
      <Methodology />
      {/* <Recommendations /> */}
      <GetInTouch />
    </div>
  );
};
