import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20 px-4 sm:px-6 lg:px-10"
    >
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-8 md:pb-12 lg:pb-14 text-center">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-row gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-4 md:overflow-visible">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="w-[65vw] min-w-[260px] max-w-[360px] shrink-0 snap-start md:w-full md:min-w-0 md:max-w-none md:flex-1"
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
