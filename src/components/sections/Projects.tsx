import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tag } from '../ui/Tag';
import { projects } from '../../data/portfolio';

const ExternalIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 lg:px-12 py-12">
      <SectionTitle>Projects</SectionTitle>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className="group bg-white/40 hover:bg-white/70 border border-dark/8 hover:border-dark/15 rounded-2xl p-5 lg:p-6 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              delay: i * 0.06,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-dark font-semibold text-base">{project.title}</h3>
                <span className="text-dark/25 text-xs border border-dark/15 rounded-full px-2 py-0.5">
                  {project.year}
                </span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-2 shrink-0">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-dark/40 hover:text-dark border border-dark/10 hover:border-dark/25 rounded-full px-2.5 py-1 transition-all duration-200"
                  >
                    <GithubIcon />
                    Repo
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-dark/40 hover:text-dark border border-dark/10 hover:border-dark/25 rounded-full px-2.5 py-1 transition-all duration-200"
                  >
                    <ExternalIcon />
                    Live
                  </a>
                )}
              </div>
            </div>

            {/* Objective */}
            <p className="text-dark/55 text-sm leading-relaxed mb-4">
              {project.objective}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
