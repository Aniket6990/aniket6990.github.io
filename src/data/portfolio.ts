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
  location: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  highlight: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  objective: string;
  summary: string;
  bullets: string[];
  highlight: string;
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

// ── Experience ──────────────────────────────────────────────
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'Corridor Studio',
    companyUrl: 'https://corridor.studio',
    period: 'Jan 2023 — Present',
    location: 'Remote',
    current: true,
    summary: 'Leading frontend architecture for a suite of design tools used by 50k+ creatives.',
    bullets: [
      'Architected a zero-dependency component library now used across 6 products',
      'Reduced JS bundle size by 42% through code-splitting and tree-shaking',
      'Built a real-time collaboration layer using WebSockets and CRDTs',
      'Mentored 4 junior engineers through weekly pair-programming sessions',
      'Drove adoption of automated accessibility testing across all CI pipelines',
    ],
    highlight: 'Highlight: Reduced initial page load from 4.2s to 0.9s — a 78% improvement.',
    skills: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Figma API'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Monotype',
    companyUrl: 'https://monotype.com',
    period: 'Mar 2021 — Dec 2022',
    location: 'Hybrid',
    summary: 'Developed typography-driven web experiences and internal tooling for a global font platform.',
    bullets: [
      'Integrated real-time font preview APIs serving 2M monthly active users',
      'Built a headless CMS-powered marketing site with sub-200ms TTFB',
      'Designed a GraphQL schema reducing over-fetching by 60%',
      'Containerised the monorepo with Docker, cutting onboarding time from 2 days to 30 mins',
      'Shipped an internal design-token pipeline adopted by 3 product teams',
    ],
    highlight: 'Highlight: Decreased deployment times from 45 minutes to under 4 minutes.',
    skills: ['Next.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Fantasy Interactive',
    companyUrl: 'https://fantasy.co',
    period: 'Aug 2019 — Feb 2021',
    location: 'Remote',
    summary: 'Crafted award-winning interactive digital experiences for Nike, Spotify and Google.',
    bullets: [
      'Developed scroll-driven WebGL animations achieving 60fps on mid-range devices',
      'Built a custom shader pipeline for real-time product visualisation',
      'Reduced Three.js scene draw calls by 70% through instanced rendering',
      'Established performance budgets and monitoring across all client projects',
      'Contributed to open-source GLSL utility library with 800+ GitHub stars',
    ],
    highlight: 'Highlight: Project won an FWA Site of the Day and Awwwards SOTD.',
    skills: ['Vue.js', 'GSAP', 'Three.js', 'WebGL', 'SCSS'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Instrument',
    companyUrl: 'https://instrument.com',
    period: 'Jun 2017 — Jul 2019',
    location: 'On-site',
    summary: 'Built responsive web apps and campaign microsites for emerging and established brands.',
    bullets: [
      'Delivered 12 campaign microsites on tight deadlines with zero post-launch bugs',
      'Introduced CSS custom properties into the team workflow, cutting theming time by 40%',
      'Contributed components to a shared React design system used across 4 projects',
      'Collaborated with designers in Figma to achieve pixel-perfect implementations',
      'Wrote unit and integration tests increasing coverage from 12% to 68%',
    ],
    highlight: 'Highlight: Promoted to mid-level 8 months ahead of the standard track.',
    skills: ['JavaScript', 'React', 'CSS Animations', 'Webpack'],
  },
];

// ── Projects ──────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: 'DesignOS',
    objective: 'Real-time design system manager syncing tokens, components and docs across Figma, code and Storybook.',
    summary: 'Built to solve the token-drift problem between designers and engineers at scale.',
    bullets: [
      'Designed a bi-directional Figma ↔ code sync engine using the Plugin API',
      'Implemented an optimistic UI with conflict-resolution for simultaneous edits',
      'Reduced design-to-code handoff time by ~65% in beta user testing',
      'Shipped a VS Code extension with inline token preview and autocomplete',
      'Achieved 99.9% uptime via multi-region Postgres replication on Fly.io',
    ],
    highlight: 'Highlight: 800 beta signups in the first 48 hours after launch.',
    tech: ['React', 'TypeScript', 'Figma API', 'WebSockets', 'Postgres'],
    link: 'https://designos.io',
    year: '2024',
  },
  {
    id: 2,
    title: 'FontFlow',
    objective: 'Variable font playground with OpenType controls and an AI-powered pairing suggestion engine.',
    summary: 'Exploring the intersection of typography, WASM and generative AI.',
    bullets: [
      'Compiled HarfBuzz to WebAssembly for client-side OpenType feature shaping',
      'Fine-tuned a GPT-4o model on curated type-pairing datasets',
      'Rendered variable font axes in real-time using CSS font-variation-settings',
      'Built a shareable URL state so any configuration can be bookmarked',
      'Published an open npm package for the HarfBuzz WASM bindings',
    ],
    highlight: 'Highlight: Featured in CSS-Tricks and Sidebar.io within a week of launch.',
    tech: ['Next.js', 'HarfBuzz WASM', 'OpenAI API', 'Vercel'],
    link: 'https://fontflow.app',
    repo: 'https://github.com',
    year: '2024',
  },
  {
    id: 3,
    title: 'Parallax Engine',
    objective: 'Lightweight (~3 kB) zero-dependency scroll-driven parallax library using IntersectionObserver.',
    summary: 'A micro-library with no runtime overhead and full SSR compatibility.',
    bullets: [
      'Achieved 3 kB gzipped with zero runtime dependencies using Rollup',
      'Used CSS custom properties to offload animations to the compositor thread',
      'Added a Houdini paint worklet for GPU-accelerated background effects',
      'Wrote 98% test coverage with Vitest and Playwright visual regression tests',
      'Documented with live interactive examples built on vanilla HTML/CSS',
    ],
    highlight: 'Highlight: 1.2k GitHub stars within the first month of open-sourcing.',
    tech: ['TypeScript', 'CSS Houdini', 'Rollup', 'Vitest'],
    repo: 'https://github.com',
    year: '2023',
  },
  {
    id: 4,
    title: 'Chromatica',
    objective: 'Perceptually uniform OKLCH palette generator with WCAG contrast checking and multi-format export.',
    summary: 'Making colour science accessible to designers and developers without a PhD.',
    bullets: [
      'Implemented the OKLCH ↔ sRGB conversion pipeline fully in the browser',
      'Added APCA and WCAG 2.1 contrast ratio checking per colour pair',
      'Shipped one-click export to Tailwind config, CSS custom properties and Figma tokens',
      'Integrated a colour-blindness simulator using WebGL fragment shaders',
      'Built a sharable URL format encoding full palettes in under 200 characters',
    ],
    highlight: 'Highlight: Used by 3 design teams at Fortune 500 companies.',
    tech: ['SvelteKit', 'OKLCH', 'WCAG', 'Figma Plugin API'],
    link: 'https://chromatica.design',
    year: '2023',
  },
  {
    id: 5,
    title: 'Readr',
    objective: 'Minimal RSS reader with AI article summarisation and a distraction-free reading mode.',
    summary: 'Inspired by the physicality of books — built for deep reading, not skimming.',
    bullets: [
      'Shipped a cross-platform Electron app for macOS, Windows and Linux',
      'Implemented streaming OpenAI completions for instant article summaries',
      'Stored all data locally in SQLite with full-text search via FTS5',
      'Designed a custom reading typography scale based on Butterick’s Practical Typography',
      'Added keyboard-only navigation supporting 100% mouse-free operation',
    ],
    highlight: 'Highlight: 4.8/5 rating on Product Hunt with 600+ upvotes.',
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
