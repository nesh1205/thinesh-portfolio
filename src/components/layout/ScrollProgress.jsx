import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-white"
      style={{ width: `${progress}%` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: progress > 0 ? 1 : 0 }}
    />
  );
}
