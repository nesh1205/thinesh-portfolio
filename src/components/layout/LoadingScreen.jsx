import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
        >
          <div className="relative mb-8">
            <motion.div
              className="h-16 w-16 rounded-2xl border border-border bg-card"
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{ boxShadow: ['0 0 20px rgba(255,255,255,0.1)', '0 0 40px rgba(255,255,255,0.2)', '0 0 20px rgba(255,255,255,0.1)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-medium tracking-[0.3em] text-muted uppercase"
          >
            Initializing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xl font-semibold text-text"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            className="mt-8 h-[1px] w-48 overflow-hidden bg-border"
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
