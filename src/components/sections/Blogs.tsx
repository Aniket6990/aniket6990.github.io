import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tag } from '../ui/Tag';
import { blogs } from '../../data/portfolio';

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Blogs() {
  return (
    <section id="blogs" className="min-h-screen px-8 lg:px-12 py-12 pb-24">
      <SectionTitle>Blogs</SectionTitle>

      <div className="space-y-3">
        {blogs.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.href ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 bg-white/40 hover:bg-white/70 border border-dark/8 hover:border-dark/15 rounded-2xl p-5 lg:p-6 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              delay: i * 0.06,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-dark font-semibold text-sm lg:text-base leading-snug group-hover:text-dark/80 transition-colors">
                {post.title}
              </h3>
              <span className="shrink-0 text-dark/25 group-hover:text-dark/60 transition-colors mt-0.5">
                <ArrowIcon />
              </span>
            </div>

            {/* Summary */}
            <p className="text-dark/50 text-sm leading-relaxed">
              {post.summary}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between gap-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              {/* Meta */}
              <div className="shrink-0 flex items-center gap-2 text-dark/30 text-xs">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer spacer with view all CTA */}
      <motion.div
        className="mt-10 pt-8 border-t border-dark/10 flex items-center justify-between"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-dark/30 text-xs">{blogs.length} articles published</span>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs text-dark/50 hover:text-dark border border-dark/15 hover:border-dark/30 rounded-full px-4 py-2 transition-all duration-200"
        >
          View all articles
          <ArrowIcon />
        </a>
      </motion.div>
    </section>
  );
}
