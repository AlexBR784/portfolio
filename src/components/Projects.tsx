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
  return (
    <div id="projects" className="flex flex-col items-center justify-center px-4 bg-[#131920] w-full h-full mt-5 border-l-4 border-[#bd00ff] shadow-xl mx-4 font-[family-name:var(--font-jetbrains)]">
      <div className="w-full h-full p-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#bd00ff] text-sm font-mono">{'<'}</span>
          <h2 className="text-[#e4e4e7] text-base sm:text-lg uppercase tracking-widest font-bold">
            Projects
          </h2>
          <span className="text-[#bd00ff] text-sm font-mono">{'/>'}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#bd00ff] to-transparent"></div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-3">
          {projects.length === 0 ? (
            <motion.div 
              className="code-block text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-[#71717a] font-mono text-sm">
                <span className="text-[#bd00ff]">Error:</span> No projects found
              </p>
              <p className="text-[#71717a] font-mono text-xs mt-2">
                {'// '} Try: npm run create:projects
              </p>
            </motion.div>
          ) : (
            projects
              .slice(0, 10)
              .map((project: Project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectItem
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    videoUrl={project.videoUrl}
                    link={project.link}
                    tech={project.tech}
                  />
                </motion.div>
              ))
          )}
        </div>

        {/* Footer indicator */}
        <div className="flex items-center gap-2 mt-6 text-[#71717a] text-xs font-mono">
          <span className="text-[#bd00ff]">{'// '}</span>
          <span>Showing {Math.min(projects.length, 10)} of {projects.length} projects</span>
        </div>
      </div>
    </div>
  );
}
