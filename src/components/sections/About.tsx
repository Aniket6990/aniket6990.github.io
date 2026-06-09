import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { socials } from '../../data/portfolio';

const HEADER = "I craft fast, beautiful web interfaces that sit at the intersection of design and engineering.";

const SUMMARY = `Based in India, I'm a full-stack developer with a deep love for frontend craft. I specialize in building performant, accessible, and delightful web products — from interactive design tools to marketing sites that serve millions.

I care deeply about developer experience, design systems, and the tiny details that make products feel polished. When I'm not shipping code, I'm writing about web technology, exploring type design, or contributing to open-source projects.`;

export default function About() {
  return (
    <section id="about" className="min-h-screen px-8 lg:px-12 py-12">
      <SectionTitle>About</SectionTitle>

      {/* Photo + identity block */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 items-start mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden border-2 border-dark/10 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80"
              alt="Aniket"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Identity text */}
        <div>
          <h1 className="text-2xl font-bold text-dark tracking-tight mb-1">Aniket</h1>
          <p className="text-dark/50 text-sm mb-4">Senior Software Engineer · India</p>

          {/* Socials inline */}
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-dark/50 border border-dark/15 bg-dark/5 hover:bg-dark/10 hover:text-dark transition-all duration-200 rounded-full px-3 py-1.5"
              >
                <span
                  className="w-3 h-3 shrink-0"
                  dangerouslySetInnerHTML={{ __html: s.icon }}
                />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 20-word header */}
      <motion.h2
        className="text-xl lg:text-2xl font-semibold text-dark leading-snug tracking-tight mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {HEADER}
      </motion.h2>

      {/* Summary */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {SUMMARY.split('\n\n').map((para, i) => (
          <p key={i} className="text-dark/60 text-sm lg:text-base leading-relaxed">
            {para}
          </p>
        ))}
      </motion.div>

      {/* Quick facts grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {[
          { val: '7+', label: 'Years Exp.' },
          { val: '30+', label: 'Projects' },
          { val: '12', label: 'Open Source' },
          { val: '5k+', label: 'GitHub Stars' },
        ].map(({ val, label }) => (
          <div
            key={label}
            className="bg-dark/5 border border-dark/10 rounded-xl px-4 py-5 text-center"
          >
            <div className="text-2xl font-black text-dark mb-1">{val}</div>
            <div className="text-dark/40 text-xs uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
