import { motion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="Hands-on experience building, testing, and maintaining software in a professional environment."
        />

        <div className="mx-auto max-w-3xl">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="hover-lift relative p-6 sm:p-8">
                <div className="absolute top-8 left-0 hidden h-[calc(100%-4rem)] w-[1px] bg-border sm:block" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-medium tracking-wider text-muted uppercase">
                      {item.period}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-text">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted">{item.company}</p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted">
                    Internship
                  </span>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
