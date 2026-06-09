import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tag } from '../ui/Tag';
import { experiences } from '../../data/portfolio';

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function Experience() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="experience" className="px-8 lg:px-12 py-12">
      <SectionTitle>Experience</SectionTitle>

      <div className="divide-y divide-dark/10 border-t border-dark/10">
        {experiences.map((exp, i) => {
          const isOpen = openId === exp.id;

          return (
            <div key={exp.id}>
              {/* ── Row header ── */}
              <button
                onClick={() => toggle(exp.id)}
                className="w-full group"
              >
                <div className="grid grid-cols-[32px_1fr_1fr_1fr_24px] lg:grid-cols-[40px_160px_160px_1fr_24px] gap-x-4 lg:gap-x-6 items-start py-5 text-left">

                  {/* Index */}
                  <span className="text-dark/30 text-xs font-medium tabular-nums pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Period + location */}
                  <div className="text-dark/55 text-xs leading-snug">
                    <span className="uppercase tracking-wide font-medium">
                      {exp.period}
                    </span>
                    <br />
                    <span className="text-dark/35 uppercase tracking-wide text-[10px]">
                      {exp.location}
                    </span>
                  </div>

                  {/* Company — bold */}
                  <span className="text-dark text-xs font-bold uppercase tracking-wide leading-snug">
                    {exp.company}
                  </span>

                  {/* Role */}
                  <span className="text-dark/70 text-xs uppercase tracking-wide leading-snug">
                    {exp.role}
                    {exp.current && (
                      <span className="ml-2 inline-flex items-center gap-1 text-emerald-600 normal-case tracking-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
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
                      {/* Summary sentence */}
                      <p className="text-dark/60 text-sm mb-4 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-5">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-sm text-dark/70 leading-relaxed">
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-dark/30 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Highlight */}
                      <p className="text-dark/40 text-xs italic">{exp.highlight}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-dark/8">
                        {exp.skills.map((s) => (
                          <Tag key={s} label={s} />
                        ))}
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
