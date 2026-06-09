import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tag } from '../ui/Tag';
import { socials } from '../../data/portfolio';

const HEADER = "Full-stack engineer building production Web3 systems at the intersection of blockchain infrastructure and developer tooling.";

const SUMMARY = `Full-stack engineer with 3+ years building production systems at early-stage startups. Currently serving as the technical lead for Actapay at Actalink, a live multi-chain payment gateway, owning architecture, DevOps, and end-to-end delivery.

Fluent with AI-assisted development (Cursor, Claude Code, GitHub Copilot) as a core part of my daily workflow. Strong background in blockchain infrastructure — EVM chains, ERC-4337, smart contracts, and scalable microservices.`;

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Solidity', 'SQL', 'C++', 'Rust'],
  },
  {
    category: 'Backend & Infra',
    items: ['Node.js', 'GraphQL', 'REST APIs', 'Microservices', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    category: 'Blockchain',
    items: ['Ethereum', 'Ethers.js', 'Viem', 'Wagmi', 'Hardhat', 'Foundry', 'Paymasters', 'Bundlers', 'ERC-4337'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'AI Tools',
    items: ['Cursor', 'Claude Code', 'GitHub Copilot'],
  },
];

export default function About() {
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
          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden border-2 border-dark/10 shadow-sm bg-dark/5 flex items-center justify-center">
            <span className="text-4xl font-black text-dark/20">AS</span>
          </div>
        </div>

        {/* Identity text */}
        <div>
          <h1 className="text-2xl font-bold text-dark tracking-tight mb-0.5">Aniket Singh</h1>
          <p className="text-dark/50 text-sm mb-1">Software Engineer · Full-Stack &amp; Blockchain</p>
          <p className="text-dark/35 text-xs mb-4">Chandigarh University — B.Sc. Computer Science (CGPA: 7.81)</p>

          {/* Socials inline */}
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
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

      {/* ── 20-word header ── */}
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
        className="space-y-4 mb-10"
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

      {/* ── Stats ── */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {[
          { val: '3+', label: 'Years Exp.' },
          { val: '6', label: 'EVM Chains' },
          { val: '3k+', label: 'OSS Downloads' },
          { val: '65%', label: 'Infra Cost ↓' },
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

      {/* ── Technical Skills ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-dark/40">
            Technical Skills
          </h3>
          <div className="flex-1 h-px bg-dark/10" />
        </div>

        <div className="space-y-4">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
              <span className="text-dark/35 text-xs font-medium uppercase tracking-wider min-w-[120px] shrink-0 pt-0.5">
                {category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
