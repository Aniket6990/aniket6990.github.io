interface TagProps {
  label: string;
  variant?: 'light' | 'dark';
}

export function Tag({ label, variant = 'light' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full border transition-colors ${
        variant === 'dark'
          ? 'border-light/20 text-light/60 bg-light/5'
          : 'border-dark/15 text-dark/60 bg-dark/5'
      }`}
    >
      {label}
    </span>
  );
}
