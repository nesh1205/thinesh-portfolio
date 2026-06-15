import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-muted">
        {label}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
