import { ArrowUpRight, BedDoubleIcon, CodeXml } from "lucide-react";
import { SectionHeader } from "@/components/sectionHeader";
import { featuredProjects } from "@/data/home";

export const ProjectsSection = () => {
  return (
    <section>
      <SectionHeader eyebrow="Featured projects" title="Things I've built" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project, index) => (
          <article
            key={index}
            className="flex h-full flex-col overflow-hidden border-2 border-app-border rounded-lg"
          >
            {/* Visual Placeholder */}
            <div className="flex flex-col items-center justify-center  text-center">
              <img
                src={project.image}
                alt={project.category}
                className="w-full h-40 object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between gap-2 px-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{project.category}</h3>
                <p className="text-sm text-app-text-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-4">
                {/* Tech Stack Tools */}
                <div className="mb-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-app-text-muted">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="whitespace-nowrap">
                      {tool}
                      {idx < project.tools.length - 1 ? " •" : ""}
                    </span>
                  ))}
                </div>
                <div className="flex w-full justify-between px-3 my-4">
                  {/* Project Link */}
                  <a
                    href={project.preview}
                    className="group inline-flex items-center gap-1 text-sm font-semibold text-app-heading transition-colors hover:text-app-brand"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  {/* codes */}
                  <a href={project.preview}>
                    <CodeXml className="h-4 w-4 hover:h-4.5 hover:w-4.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
