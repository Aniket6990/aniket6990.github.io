import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tag } from '../ui/Tag';

const SKILLS: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Solidity', 'SQL', 'C++', 'Rust'],
  },
  {
    category: 'Backend & Infra',
    items: ['Node.js', 'GraphQL', 'REST APIs', 'Microservices', 'Docker', 'Kubernetes', 'GitHub Actions', 'New Relic'],
  },
  {
    category: 'Blockchain',
    items: ['Ethereum', 'Ethers.js', 'Viem', 'Wagmi', 'Hardhat', 'Foundry', 'Paymasters', 'Bundlers', 'ERC-4337'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'State Management', 'Component Architecture'],
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

export default function Skills() {
  return (
    <section id="skills" className="px-8 lg:px-12 py-12">
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="space-y-5">
        {SKILLS.map(({ category, items }, i) => (
          <motion.div
            key={category}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-dark/35 text-xs font-medium uppercase tracking-wider w-32 shrink-0 pt-1">
              {category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
