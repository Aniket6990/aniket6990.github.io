import { useState, useEffect, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Blogs from './components/sections/Blogs';
import { useActiveSection, type SectionId } from './hooks/useActiveSection';

// Nav items for the mobile menu
const NAV_ITEMS: { id: SectionId; label: string; icon: ReactElement }[] = [
  {
    id: 'about',
    label: 'About',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'blogs',
    label: 'Blogs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

const SIDEBAR_EXPANDED  = 256;
const SIDEBAR_COLLAPSED = 64;
const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

function App() {
  const { active, scrollTo } = useActiveSection();

  // Sidebar collapse — default collapsed on md, expanded on xl
  const [collapsed, setCollapsed]     = useState(false);
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  // Auto-collapse on smaller lg screens
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1279px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setCollapsed(e.matches);
    };
    handler(mq);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Close mobile menu on section change
  const handleMobileNav = (id: SectionId) => {
    scrollTo(id);
    setMobileMenu(false);
  };

  return (
    <div className="h-[100dvh] w-screen flex bg-dark overflow-hidden">

      {/* ═══════════════════════════════════════════════════
          DESKTOP SIDEBAR  (hidden below md)
      ═══════════════════════════════════════════════════ */}
      <motion.div
        className="hidden md:flex flex-col shrink-0 h-full border-r border-light/10 relative"
        style={{ overflow: 'visible' }}
        animate={{ width: collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {/* Sidebar content — clipped to its own bounds */}
        <div className="h-full overflow-hidden">
          <Sidebar
            active={active}
            onNav={scrollTo}
            collapsed={collapsed}
          />
        </div>

        {/* ── Toggle button: 50% inside sidebar, 50% outside ── */}
        <button
          onClick={() => setCollapsed((c) => !c)}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="absolute right-0 top-8 translate-x-1/2 z-50
                     w-6 h-6 rounded-full
                     bg-[#E1DFDD] border border-dark/20 shadow-md
                     flex items-center justify-center
                     text-dark/50 hover:text-dark hover:shadow-lg hover:border-dark/40
                     transition-all duration-200"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="w-3 h-3 transition-transform duration-300"
            style={{ transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          RIGHT CONTENT PANE
      ═══════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col min-w-0 h-full bg-[#E1DFDD]">

        {/* ── Mobile / Tablet top bar (visible below md) ── */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#E1DFDD] border-b border-dark/10 shrink-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-dark/15 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80"
                alt="Aniket"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-dark font-semibold text-sm leading-none">Aniket</p>
              <p className="text-dark/40 text-[10px] mt-0.5">Software Engineer</p>
            </div>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenuOpen)}
            className="flex flex-col gap-[5px] p-2 rounded-lg hover:bg-dark/5 transition-colors"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-[1.5px] bg-dark rounded-full transition-all duration-300 ${
                  mobileMenuOpen
                    ? i === 0 ? 'rotate-45 translate-y-[6.5px]'
                    : i === 1 ? 'opacity-0 scale-x-0'
                    : '-rotate-45 -translate-y-[6.5px]'
                    : ''
                }`}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile dropdown nav ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-dark shrink-0 z-10 overflow-hidden border-b border-light/10"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="p-3 grid grid-cols-2 gap-1.5">
                {NAV_ITEMS.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    onClick={() => handleMobileNav(id)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active === id
                        ? 'bg-light/10 text-light'
                        : 'text-light/50 hover:text-light hover:bg-light/6'
                    }`}
                  >
                    <span className="shrink-0">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Tablet (md only) compact horizontal nav strip ── */}
        <div className="hidden md:flex lg:hidden items-center gap-1 px-4 py-2 bg-[#E1DFDD] border-b border-dark/8 shrink-0">
          {NAV_ITEMS.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                active === id
                  ? 'bg-dark text-light'
                  : 'text-dark/50 hover:text-dark hover:bg-dark/8'
              }`}
            >
              <span className="shrink-0">{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {/* ── Scrollable main content ── */}
        <main
          id="main-scroll"
          className="flex-1 overflow-y-auto scrollbar-thin"
        >
          <div className="max-w-5xl mx-auto">
            <About />
            <Experience />
            <Projects />
            <Blogs />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
