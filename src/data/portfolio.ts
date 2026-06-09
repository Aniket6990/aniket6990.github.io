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
    label: "GitHub",
    href: "https://github.com/Aniket6990",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aniket-singh-11275a213",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: "Twitter",
    href: "https://x.com/aniket6990",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
];

// ── Experience ────────────────────────────────────────────────
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Actalink",
    companyUrl: "https://actalink.io",
    period: "Aug 2023 — Present",
    location: "Warsaw, Poland (Remote)",
    current: true,
    summary:
      "Technical lead for Actapay, a live non-custodial multi-chain crypto payment gateway enabling merchants to accept stablecoin payments.",
    bullets: [
      "Building Actapay — a non-custodial crypto payment gateway supporting USDC/USDT across Ethereum, Base, Polygon, BNB Chain, Optimism, and Arbitrum.",
      "Managed CI/CD pipelines and containerised deployments using GitHub Actions and Docker for reliable automated production releases.",
      "Defined technical standards and conducted code reviews to maintain codebase quality and consistency across the team.",
      "Re-architected cloud infrastructure and deployment workflows, achieving a 65%+ reduction in infrastructure costs while improving reliability.",
      "Built scalable backend services including bundlers and client SDKs for transaction orchestration and wallet interaction.",
    ],
    highlight:
      "Highlight: 65%+ reduction in infrastructure costs through cloud architecture re-design.",
    skills: [
      "TypeScript",
      "Node.js",
      "Docker",
      "GitHub Actions",
      "Solidity",
      "Microservices",
    ],
  },
  {
    id: 2,
    role: "Jr. Software Developer",
    company: "Math & Cody",
    period: "Jun 2022 — Jul 2023",
    location: "Kolkata, West Bengal (Remote)",
    summary:
      "Engineered ETHCODE, a VSCode extension for deploying and interacting with Ethereum smart contracts.",
    bullets: [
      "Engineered ETHCODE, a VSCode extension for deploying and interacting with Ethereum smart contracts.",
      "Researched and implemented EIP-4337 Account Abstraction concepts for sponsored blockchain transactions.",
      "Developed frontend and backend workflows for smart contract deployment and interaction.",
    ],
    highlight:
      "Highlight: ETHCODE shipped as a published VSCode Marketplace extension.",
    skills: [
      "TypeScript",
      "React.js",
      "Solidity",
      "Ethers.js",
      "EIP-4337",
      "VSCode Extension API",
    ],
  },
  {
    id: 3,
    role: "Gwei Track Fellow",
    company: "ETHIndia",
    period: "Feb 2023 — Apr 2023",
    location: "Remote",
    summary:
      "Built developer productivity tooling for interacting with Solidity smart contracts as part of the ETHIndia fellowship.",
    bullets: [
      "Built developer productivity tooling for interacting with Solidity smart contracts.",
      'Created "Layer", a Solidity smart contract tool for deployment, execution, and testing workflows.',
      "Built smart contract developer tooling with 3000+ downloads enabling streamlined contract development.",
    ],
    highlight:
      "Highlight: Layer achieved 3000+ downloads from the developer community.",
    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Solidity",
      "Ethers.js",
      "VSCode Extension API",
    ],
  },
  {
    id: 4,
    role: "Blockchain & DAO Developer",
    company: "Lomads",
    period: "Aug 2022 — Nov 2022",
    location: "Paris, France (Remote)",
    summary:
      "Contributed to a blockchain-based DAO management platform with Gnosis Safe multisig integration.",
    bullets: [
      "Contributed to a blockchain-based DAO management platform.",
      "Integrated Gnosis Safe multisig wallet functionality for secure transaction execution and treasury management.",
      "Developed smart contract interaction workflows using React.js, Solidity, and Ethers.js.",
    ],
    highlight:
      "Highlight: Shipped Gnosis Safe multisig integration for DAO treasury management.",
    skills: ["React.js", "Solidity", "Ethers.js", "Gnosis Safe", "TypeScript"],
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Actapay",
    objective:
      "Non-custodial crypto payment gateway enabling merchants to accept stablecoin payments across 6 EVM chains.",
    summary:
      "Built a production-grade multi-chain payment infrastructure from the ground up as technical lead.",
    bullets: [
      "Built a non-custodial crypto payment gateway enabling merchants to accept USDC and USDT payments.",
      "Designed and maintained microservice-based architecture supporting payment processing, transaction orchestration, and multi-chain integrations.",
      "Designed backend services for secure and scalable payment orchestration across multiple EVM chains.",
      "Supported six blockchain networks: Ethereum, Base, Polygon, BNB Chain, Optimism, and Arbitrum.",
    ],
    highlight:
      "Highlight: Live in production, processing real transactions across 6 mainnets.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Hono",
      "Docker",
      "Solidity",
      "Microservices",
    ],
    year: "2024",
    link: "https://actapay.acta.link",
  },
  {
    id: 2,
    title: "Gaspay",
    objective:
      "Production-grade ERC-4337 verifying paymaster infrastructure for gasless user experiences.",
    summary:
      "An in-house transaction sponsorship platform that replaced expensive third-party paymasters.",
    bullets: [
      "Built a production-grade transaction sponsorship platform enabling gasless user experiences through ERC-4337 account abstraction.",
      "Developed backend verification services and secure transaction validation workflows for sponsored transactions.",
      "Designed and maintained scalable infrastructure deployed across six mainnets and three testnets.",
      "Engineered an in-house platform that reduced operational costs by 75%+ compared to third-party solutions.",
    ],
    highlight:
      "Highlight: 75%+ reduction in operational costs vs. third-party paymaster services.",
    tech: ["TypeScript", "Bun", "Docker", "Hono", "Solidity", "ERC-4337"],
    year: "2024",
    link: "https://actapay.acta.link",
  },
  {
    id: 3,
    title: "Layer",
    objective:
      "Open-source VSCode extension for deploying, executing, debugging, and testing Solidity smart contracts.",
    summary:
      "A developer tool built during the ETHIndia Gwei Track Fellowship with a growing open-source community.",
    bullets: [
      "Built an open-source smart contract interaction toolkit with 3000+ downloads.",
      "Enabled deployment, execution, debugging, and testing of Solidity smart contracts directly from VSCode.",
      "Improved smart contract developer workflows through integrated tooling and automation.",
    ],
    highlight:
      "Highlight: 3000+ downloads from the Ethereum developer community.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Solidity",
      "Ethers.js",
      "VSCode Extension API",
    ],
    repo: "https://github.com/Aniket6990",
    year: "2023",
  },
];

// ── Blogs ─────────────────────────────────────────────────────
export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "ERC-4337 Account Abstraction — A Practical Guide",
    summary:
      "A deep dive into ERC-4337: UserOperations, Bundlers, Paymasters, and how to build gasless transaction flows on any EVM chain.",
    date: "Mar 2024",
    readTime: "10 min read",
    tags: ["ERC-4337", "Blockchain", "Solidity"],
    href: "#",
  },
  {
    id: 2,
    title: "Building Multi-Chain Payment Infrastructure",
    summary:
      "Lessons from building Actapay — how to design a microservice architecture that scales across Ethereum, Base, Polygon, and beyond.",
    date: "Jan 2024",
    readTime: "8 min read",
    tags: ["TypeScript", "Microservices", "Web3"],
    href: "#",
  },
  {
    id: 3,
    title: "AI-Assisted Development in Production: My Workflow",
    summary:
      "How I use Cursor, Claude Code, and GitHub Copilot as daily engineering tools — not just for boilerplate, but for architecture and debugging.",
    date: "Nov 2023",
    readTime: "6 min read",
    tags: ["AI Tools", "DX", "Engineering"],
    href: "#",
  },
  {
    id: 4,
    title: "Gnosis Safe Integration for DAO Treasuries",
    summary:
      "A step-by-step guide to integrating Gnosis Safe multisig wallets into a DAO platform using React.js and Ethers.js.",
    date: "Oct 2022",
    readTime: "7 min read",
    tags: ["DAO", "Gnosis Safe", "Solidity"],
    href: "#",
  },
];
