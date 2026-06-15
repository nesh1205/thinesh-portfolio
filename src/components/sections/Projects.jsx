import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import ProjectModal from '../ui/ProjectModal';

function ProjectScreenshot({ project }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-card to-bg">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <p className="text-xs text-muted">Screenshot Placeholder</p>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setImgError(true)}
    />
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Projects"
          title="Selected Work"
          subtitle="Real-world applications demonstrating full-stack development, system design, and attention to detail."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard
                className="group hover-lift cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <ProjectScreenshot project={project} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 rounded-full border border-border bg-bg/80 px-3 py-1 text-[10px] font-medium tracking-wider text-muted uppercase backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-bg px-2 py-0.5 text-[10px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="rounded-md border border-border bg-bg px-2 py-0.5 text-[10px] text-muted">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <button className="mt-5 flex items-center gap-2 text-sm font-medium text-text transition-colors group-hover:gap-3">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
