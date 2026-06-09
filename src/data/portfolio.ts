// ── Portfolio data ────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  description: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  objective: string;
  tech: string[];
  link?: string;
  repo?: string;
  year: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  href?: string;
}

// ── Socials ──────────────────────────────────────────────────
export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    label: 'Email',
    href: 'mailto:aniket@example.com',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
];

// ── Experience ────────────────────────────────────────────────
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'Corridor Studio',
    companyUrl: 'https://corridor.studio',
    period: 'Jan 2023 — Present',
    current: true,
    description:
      'Leading frontend architecture for a suite of design tools used by 50k+ creatives. Built a component library from the ground up, reduced bundle size by 42%, and mentored a team of 4 engineers.',
    skills: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Figma API'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Monotype',
    companyUrl: 'https://monotype.com',
    period: 'Mar 2021 — Dec 2022',
    description:
      'Developed typography-driven web experiences and internal tooling. Integrated real-time font preview APIs and built a headless CMS-powered marketing site serving 2M monthly visits.',
    skills: ['Next.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Fantasy Interactive',
    companyUrl: 'https://fantasy.co',
    period: 'Aug 2019 — Feb 2021',
    description:
      'Crafted interactive digital experiences for global brands including Nike and Spotify. Specialized in WebGL animations and performance-optimized scroll interactions.',
    skills: ['Vue.js', 'GSAP', 'Three.js', 'WebGL', 'SCSS'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Instrument',
    companyUrl: 'https://instrument.com',
    period: 'Jun 2017 — Jul 2019',
    description:
      'Built responsive web applications and interactive campaign microsites. Contributed to design systems and collaborated closely with the design team on pixel-perfect implementations.',
    skills: ['JavaScript', 'React', 'CSS Animations', 'Webpack'],
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: 'DesignOS',
    objective:
      'A collaborative design system manager that syncs tokens, components, and documentation across Figma, code, and Storybook in real-time.',
    tech: ['React', 'TypeScript', 'Figma API', 'WebSockets', 'Postgres'],
    link: 'https://designos.io',
    year: '2024',
  },
  {
    id: 2,
    title: 'FontFlow',
    objective:
      'Real-time variable font playground with OpenType feature controls, paired with an AI-powered pairing suggestion engine.',
    tech: ['Next.js', 'HarfBuzz WASM', 'OpenAI API', 'Vercel'],
    link: 'https://fontflow.app',
    repo: 'https://github.com',
    year: '2024',
  },
  {
    id: 3,
    title: 'Parallax Engine',
    objective:
      'Lightweight (~3kb) zero-dependency scroll-driven parallax library with IntersectionObserver and CSS custom properties.',
    tech: ['TypeScript', 'CSS Houdini', 'Rollup', 'Vitest'],
    repo: 'https://github.com',
    year: '2023',
  },
  {
    id: 4,
    title: 'Chromatica',
    objective:
      'Perceptually uniform color palette generator using OKLCH color space with accessible contrast checking and export to Tailwind, CSS, or Figma tokens.',
    tech: ['SvelteKit', 'OKLCH', 'WCAG', 'Figma Plugin API'],
    link: 'https://chromatica.design',
    year: '2023',
  },
  {
    id: 5,
    title: 'Readr',
    objective:
      'Minimal RSS reader with AI-powered article summarization and a distraction-free reading mode inspired by physical book aesthetics.',
    tech: ['Electron', 'React', 'SQLite', 'OpenAI API'],
    repo: 'https://github.com',
    year: '2022',
  },
];

// ── Blogs ─────────────────────────────────────────────────────
export const blogs: BlogPost[] = [
  {
    id: 1,
    title: 'The Case for Constraint-Driven Design Systems',
    summary:
      'Why limiting your component API surface area leads to more consistent products and happier engineers.',
    date: 'May 12, 2026',
    readTime: '6 min read',
    tags: ['Design Systems', 'DX'],
    href: '#',
  },
  {
    id: 2,
    title: 'OKLCH: The Color Space You Should Be Using in 2025',
    summary:
      'A practical guide to perceptually uniform colors, automatic palette generation, and why HSL is showing its age.',
    date: 'Mar 28, 2026',
    readTime: '8 min read',
    tags: ['CSS', 'Design', 'Color'],
    href: '#',
  },
  {
    id: 3,
    title: 'Micro-Interactions That Actually Matter',
    summary:
      'Not all animations are created equal. Here\'s a framework for deciding when motion adds value vs. when it\'s just noise.',
    date: 'Feb 5, 2026',
    readTime: '5 min read',
    tags: ['Motion', 'UX'],
    href: '#',
  },
  {
    id: 4,
    title: 'Building a 3kb Parallax Library with Zero Dependencies',
    summary:
      'A deep dive into IntersectionObserver, CSS custom properties and the Houdini paint worklet behind my open-source parallax engine.',
    date: 'Dec 14, 2025',
    readTime: '10 min read',
    tags: ['JavaScript', 'Performance', 'Open Source'],
    href: '#',
  },
  {
    id: 5,
    title: 'Why I Rewrote My Portfolio Three Times',
    summary:
      'Lessons learned from three complete portfolio rewrites: what worked, what didn\'t, and why the simplest version won.',
    date: 'Nov 3, 2025',
    readTime: '4 min read',
    tags: ['Career', 'Reflection'],
    href: '#',
  },
];
