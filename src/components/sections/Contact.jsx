import { motion } from 'framer-motion';
import { personalInfo, contactContent } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

const contactLinks = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'View Profile',
    href: personalInfo.github,
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.875-.42-.405-1.02-.705-.015-.72.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.341 8.341 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Connect',
    href: personalInfo.linkedin,
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Contact"
          title={contactContent.headline}
          subtitle={contactContent.subtext}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="hover-lift group flex h-full items-center gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-bg text-muted transition-colors group-hover:border-white/20 group-hover:text-text">
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs font-medium tracking-wider text-muted uppercase">
                    {link.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-text transition-colors group-hover:text-white">
                    {link.value}
                  </p>
                </div>
              </GlassCard>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <GlassCard className="hover-lift flex flex-col items-center justify-between gap-6 p-8 sm:flex-row">
              <div>
                <h3 className="text-lg font-semibold text-text">Download Resume</h3>
                <p className="mt-1 text-sm text-muted">
                  Get a PDF overview of my skills, projects, and experience.
                </p>
              </div>
              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-bg transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
