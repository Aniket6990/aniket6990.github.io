import { type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionId } from "../../hooks/useActiveSection";
import { socials } from "../../data/portfolio";

// ── Nav icons ────────────────────────────────────────────────
const NavIcons: Record<SectionId, ReactElement> = {
  about: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-[18px] h-[18px]"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  skills: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-[18px] h-[18px]"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  projects: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-[18px] h-[18px]"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  experience: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-[18px] h-[18px]"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  // blogs: (
  //   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px]">
  //     <path d="M12 20h9" />
  //     <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  //   </svg>
  // ),
};

// ── Types ────────────────────────────────────────────────────
interface SidebarProps {
  active: SectionId;
  onNav: (id: SectionId) => void;
  collapsed: boolean;
}

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  // { id: "blogs", label: "Blogs" },
];

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ── Component ────────────────────────────────────────────────
export default function Sidebar({ active, onNav, collapsed }: SidebarProps) {
  return (
    <aside
      className={`flex flex-col h-full bg-dark overflow-hidden ${collapsed ? "items-center py-6 px-3" : "px-6 py-8"}`}
    >
      {/* ── Profile ── */}
      <div
        className={`shrink-0 ${collapsed ? "mb-6 mt-2 flex flex-col items-center" : "mb-8 flex items-center gap-3"}`}
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <div
            className={`rounded-full bg-light/10 border-2 border-light/20 overflow-hidden transition-all duration-300 ${
              collapsed ? "w-10 h-10" : "w-11 h-11"
            }`}
          >
            <img
              src="/avatar.jpg"
              alt="Aniket"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name + role — visible only when expanded, sits right of avatar */}
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              key="identity-text"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="overflow-hidden min-w-0"
            >
              <p className="text-light text-sm font-semibold leading-tight whitespace-nowrap">
                Aniket Singh
              </p>
              <p className="text-light/40 text-xs whitespace-nowrap mt-0.5">
                Software Engineer
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Divider ── */}
      <div
        className={`w-full h-px bg-light/10 mb-6 shrink-0 ${collapsed ? "w-8" : ""}`}
      />

      {/* ── Nav section label ── */}
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.p
            key="nav-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-light/20 text-[9px] uppercase tracking-[0.2em] mb-3 font-semibold whitespace-nowrap overflow-hidden"
          >
            Navigate
          </motion.p>
        )}
      </AnimatePresence>

      {/* ── Nav items ── */}
      <nav className="flex-1 w-full">
        <ul
          className={`space-y-1 ${collapsed ? "flex flex-col items-center" : ""}`}
        >
          {NAV_ITEMS.map(({ id, label }, i) => {
            const isActive = active === id;
            return (
              <motion.li
                key={id}
                className={collapsed ? "w-full flex justify-center" : "w-full"}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05 + i * 0.05,
                  duration: 0.4,
                  ease: EASE,
                }}
              >
                <button
                  onClick={() => onNav(id)}
                  title={label}
                  className={`relative flex items-center rounded-xl transition-all duration-200 ${
                    collapsed
                      ? `w-10 h-10 justify-center ${isActive ? "bg-light/15 text-light" : "text-light/35 hover:text-light/70 hover:bg-light/8"}`
                      : `w-full gap-3 px-3 py-2.5 text-sm text-left ${isActive ? "bg-light/10 text-light" : "text-light/40 hover:text-light/70 hover:bg-light/5"}`
                  }`}
                >
                  {/* Icon */}
                  <span className="shrink-0">{NavIcons[id]}</span>

                  {/* Label — only when expanded */}
                  <AnimatePresence initial={false}>
                    {!collapsed && (
                      <motion.span
                        key={`label-${id}`}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="font-medium whitespace-nowrap overflow-hidden"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Active arrow — only expanded */}
                  {!collapsed && isActive && (
                    <span className="ml-auto text-light/25 text-xs">↗</span>
                  )}

                  {/* Collapsed active pip */}
                  {collapsed && isActive && (
                    <span className="absolute right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-light/60 rounded-full" />
                  )}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* ── Divider ── */}
      <div
        className={`h-px bg-light/10 mt-6 mb-5 shrink-0 ${collapsed ? "w-8" : "w-full"}`}
      />

      {/* ── Socials ── */}
      <div
        className={`shrink-0 ${collapsed ? "flex flex-col items-center gap-2" : ""}`}
      >
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.p
              key="socials-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-light/20 text-[9px] uppercase tracking-[0.2em] mb-3 font-semibold whitespace-nowrap"
            >
              Connect
            </motion.p>
          )}
        </AnimatePresence>

        <div
          className={`flex gap-2 ${collapsed ? "flex-col items-center" : "flex-wrap"}`}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="w-8 h-8 rounded-full bg-light/5 border border-light/10 flex items-center justify-center text-light/35 hover:text-light hover:bg-light/15 hover:border-light/25 transition-all duration-200 shrink-0"
            >
              <span
                className="w-3.5 h-3.5"
                dangerouslySetInnerHTML={{ __html: s.icon }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* ── Copyright — expanded only ── */}
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.p
            key="copyright"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-light/15 text-[10px] mt-5 shrink-0 whitespace-nowrap"
          >
            © {new Date().getFullYear()} Aniket Singh.
          </motion.p>
        )}
      </AnimatePresence>
    </aside>
  );
}
