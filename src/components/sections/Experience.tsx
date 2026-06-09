import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tag } from '../ui/Tag';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 lg:px-12 py-12">
      <SectionTitle>Experience</SectionTitle>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-dark/10" />

        <div className="space-y-10 pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-8 top-[6px] flex items-center justify-center w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                  exp.current
                    ? 'bg-dark border-dark'
                    : 'bg-light border-dark/25'
                }`}
              >
                {exp.current && (
                  <span className="absolute w-5 h-5 rounded-full bg-dark/15 animate-ping" />
                )}
              </div>

              {/* Card */}
              <div className="group bg-white/40 hover:bg-white/70 border border-dark/8 hover:border-dark/15 rounded-2xl p-5 lg:p-6 transition-all duration-300 cursor-default">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-dark font-semibold text-base leading-snug">{exp.role}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark/55 text-sm hover:text-dark transition-colors duration-200 hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="text-dark/55 text-sm">{exp.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-dark/40 text-xs font-medium">{exp.period}</span>
                    {exp.current && (
                      <div className="mt-1 inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-medium px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-dark/55 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <Tag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
