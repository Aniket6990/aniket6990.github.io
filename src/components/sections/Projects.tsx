import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tag } from '../ui/Tag';
import { projects } from '../../data/portfolio';

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

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
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="projects" className="px-8 lg:px-12 py-12">
      <SectionTitle>Projects</SectionTitle>

      <div className="divide-y divide-dark/10 border-t border-dark/10">
        {projects.map((proj, i) => {
          const isOpen = openId === proj.id;

          return (
            <div key={proj.id}>
              {/* ── Row header ── */}
              <button
                onClick={() => toggle(proj.id)}
                className="w-full group"
              >
                <div className="grid grid-cols-[32px_1fr_1fr_1fr_24px] lg:grid-cols-[40px_80px_160px_1fr_24px] gap-x-4 lg:gap-x-6 items-start py-5 text-left">

                  {/* Index */}
                  <span className="text-dark/30 text-xs font-medium tabular-nums pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Year */}
                  <span className="text-dark/35 text-xs uppercase tracking-wide pt-0.5">
                    {proj.year}
                  </span>

                  {/* Title — bold */}
                  <span className="text-dark text-xs font-bold uppercase tracking-wide leading-snug">
                    {proj.title}
                  </span>

                  {/* Objective (one-liner) */}
                  <span className="text-dark/60 text-xs leading-snug">
                    {proj.objective}
                  </span>

                  {/* Toggle */}
                  <span
                    className={`text-dark/40 group-hover:text-dark text-sm font-light transition-colors duration-200 pt-0.5 select-none ${isOpen ? 'text-dark' : ''}`}
                    aria-hidden
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* ── Expanded content ── */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pb-7 pl-[calc(32px+1rem)] lg:pl-[calc(40px+1.5rem)]">
                      {/* Summary */}
                      <p className="text-dark/60 text-sm mb-4 leading-relaxed">
                        {proj.summary}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-5">
                        {proj.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-sm text-dark/70 leading-relaxed">
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-dark/30 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Highlight */}
                      <p className="text-dark/40 text-xs italic mb-5">{proj.highlight}</p>

                      {/* Links + tech */}
                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-dark/8 flex-wrap">
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tech.map((t) => (
                            <Tag key={t} label={t} />
                          ))}
                        </div>
                        <div className="flex gap-2 shrink-0">
                          {proj.repo && (
                            <a
                              href={proj.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-xs text-dark/40 hover:text-dark border border-dark/10 hover:border-dark/25 rounded-full px-2.5 py-1 transition-all duration-200"
                            >
                              <GithubIcon />
                              Repo
                            </a>
                          )}
                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-xs text-dark/40 hover:text-dark border border-dark/10 hover:border-dark/25 rounded-full px-2.5 py-1 transition-all duration-200"
                            >
                              <ExternalIcon />
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
