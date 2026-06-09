import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { socials } from '../../data/portfolio';

const HEADER = "Full-stack engineer building production Web3 systems at the intersection of blockchain infrastructure and developer tooling.";

const SUMMARY = `Full-stack engineer with 3+ years building production systems at early-stage startups. Currently serving as the technical lead for Actapay at Actalink, a live multi-chain payment gateway, owning architecture, DevOps, and end-to-end delivery.

Fluent with AI-assisted development (Cursor, Claude Code, GitHub Copilot) as a core part of my daily workflow. Strong background in blockchain infrastructure — EVM chains, ERC-4337, smart contracts, and scalable microservices.`;

// Only show GitHub, LinkedIn and X in the About section
const PROFILE_SOCIALS = ['GitHub', 'LinkedIn', 'X'];

export default function About() {
  const filteredSocials = socials.filter((s) => PROFILE_SOCIALS.includes(s.label));

  return (
    <section id="about" className="px-8 lg:px-12 py-12">
      <SectionTitle>About</SectionTitle>

      {/* ── Photo + identity block ── */}
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
              src="/avatar.jpg"
              alt="Aniket Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Identity text */}
        <div>
          <h1 className="text-2xl font-bold text-dark tracking-tight mb-0.5">Aniket Singh</h1>
          <p className="text-dark/50 text-sm mb-4">Software Engineer · Full-Stack &amp; Blockchain</p>

          {/* Socials — GitHub + LinkedIn only */}
          <div className="flex flex-wrap gap-2">
            {filteredSocials.map((s) => (
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

      {/* ── Header ── */}
      <motion.h2
        className="text-xl lg:text-2xl font-semibold text-dark leading-snug tracking-tight mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {HEADER}
      </motion.h2>

      {/* ── Summary ── */}
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
    </section>
  );
}
