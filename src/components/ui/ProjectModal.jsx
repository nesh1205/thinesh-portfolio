import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-border bg-card sm:rounded-2xl"
        >
          <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-bg">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-card to-bg">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p className="text-sm text-muted">Screenshot Placeholder</p>
              <p className="mt-1 text-xs text-muted/60">{project.title}</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/80 text-text backdrop-blur-sm transition-colors hover:bg-white/10"
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              {project.category}
            </span>
            <h3 className="mt-2 text-2xl font-semibold text-text">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium text-text">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium text-text">Key Features</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-white/25 hover:bg-white/5"
                >
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
