import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import HeroScene from '../three/HeroScene';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useIsMobile } from '../../hooks/useMediaQuery';

export default function Hero() {
  const mouseOffset = useMouseParallax(15);
  const isMobile = useIsMobile();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <HeroScene simplified={isMobile} mouseOffset={mouseOffset} />

      <div className="section-padding relative z-10 mx-auto w-full max-w-7xl pt-24 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-xs font-medium text-muted">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="mb-3 text-sm font-medium tracking-[0.2em] text-muted uppercase"
            >
              {personalInfo.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.7 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="rounded-full bg-white px-7 py-3 text-sm font-medium text-bg transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="rounded-full border border-border px-7 py-3 text-sm font-medium text-text transition-all hover:border-white/25 hover:bg-white/5"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="hidden lg:block"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-muted uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
