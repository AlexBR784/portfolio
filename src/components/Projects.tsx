import { projects } from "@/data/projects.js";
import { ProjectItem } from "./ProjectItem";

interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: {
    techName: string;
    color: string;
  }[];
}
export function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center px-6 bg-[#212121] w-full h-full mt-5 pt-5 pb-5 rounded-xl border-2 shadow-xl border-[#2a2a2a]">
      <div className="w-full h-full p-3">
        <p className="text-gray-300 text-lg">· Proyectos ·</p>
        <div className="flex flex-col gap-4 mt-5">
          {projects.length === 0 ? (
            <h1 className="text-gray-200 text-2xl">Upss... No hay proyectos</h1>
          ) : (
            projects
              .slice(0, 3)
              .map((project: Project) => (
                <ProjectItem
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  tech={project.tech}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}
