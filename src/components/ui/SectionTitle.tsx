import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-dark/40">
        {children}
      </h2>
      <div className="flex-1 h-px bg-dark/10" />
    </div>
  );
}
