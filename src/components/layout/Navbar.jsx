import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/80 bg-bg/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-padding mx-auto flex h-16 max-w-7xl items-center justify-between sm:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-xs font-bold text-text transition-colors group-hover:border-white/20">
              TR
            </span>
            <span className="hidden text-sm font-medium text-text sm:block">
              {personalInfo.name.split(' ')[0]}
            </span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-lg px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-text"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={personalInfo.resumePath}
              download
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-text transition-all hover:border-white/25 hover:bg-white/5"
            >
              Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-text"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-5 bg-text"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-text"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex h-full flex-col items-center justify-center gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className="px-6 py-3 text-lg font-medium text-text"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-col gap-3"
              >
                <a
                  href={personalInfo.resumePath}
                  download
                  className="rounded-full border border-border px-8 py-3 text-center text-sm font-medium text-text"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="rounded-full bg-white px-8 py-3 text-sm font-medium text-bg"
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
