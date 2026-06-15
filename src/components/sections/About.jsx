import { motion } from 'framer-motion';
import { aboutContent } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function About() {
  return (
    <section id="about" className="section-padding relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="About Me"
          title="Developer Who Delivers Results"
          subtitle="Focused on building reliable full-stack applications with clean architecture and modern tooling."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 sm:p-8">
              <h3 className="mb-4 text-xl font-semibold text-text">
                {aboutContent.headline}
              </h3>
              <div className="space-y-4">
                {aboutContent.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:col-span-2"
          >
            {aboutContent.stats.map((stat, i) => (
              <GlassCard
                key={stat.label}
                className="hover-lift flex flex-col items-center justify-center p-6 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <span className="text-3xl font-bold text-text sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</p>
                </motion.div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
