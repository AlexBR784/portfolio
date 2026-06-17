"use client";
import { projects } from "@/data/projects.js";
import { ProjectItem } from "./ProjectItem";
import { motion } from "framer-motion";

interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  link: string;
  tech: {
    techName: string;
    color: string;
  }[];
}

export function Projects() {
  const featuredProject = projects[0] as Project | undefined;
  const secondaryProjects = projects.slice(1, 10) as Project[];

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="linear-eyebrow">Trabajo seleccionado</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-linear-ink sm:text-5xl">
            Proyectos
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-linear-ink-subtle">
          Una selección compacta de aplicaciones web, demos y herramientas.
        </p>
      </div>

      {projects.length === 0 ? (
        <motion.div
          className="linear-panel p-8 text-center text-sm text-linear-ink-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No hay proyectos disponibles.
        </motion.div>
      ) : (
        <div className="space-y-4">
          {featuredProject ? (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <ProjectItem
                variant="featured"
                title={featuredProject.title}
                description={featuredProject.description}
                imageUrl={featuredProject.imageUrl}
                videoUrl={featuredProject.videoUrl}
                link={featuredProject.link}
                tech={featuredProject.tech}
              />
            </motion.div>
          ) : null}

          <div className="linear-panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-linear-hairline px-4 py-3 sm:px-5">
              <p className="text-sm font-medium text-linear-ink">Índice de proyectos</p>
              <p className="text-xs text-linear-ink-tertiary">{secondaryProjects.length} proyectos</p>
            </div>

            <div className="divide-y divide-linear-hairline">
              {secondaryProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.04 }}
                >
                  <ProjectItem
                    variant="compact"
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    videoUrl={project.videoUrl}
                    link={project.link}
                    tech={project.tech}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
