import { useEffect, useState } from 'react';

const SECTIONS = ['about', 'experience', 'projects', 'blogs'] as const;
export type SectionId = (typeof SECTIONS)[number];

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('about');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          root: document.getElementById('main-scroll'),
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: SectionId) => {
    const container = document.getElementById('main-scroll');
    const el = document.getElementById(id);
    if (container && el) {
      container.scrollTo({ top: el.offsetTop - 48, behavior: 'smooth' });
    }
  };

  return { active, scrollTo };
}
