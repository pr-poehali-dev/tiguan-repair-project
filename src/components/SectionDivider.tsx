import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'wave' | 'dots' | 'gradient';
}

const SectionDivider = ({ variant = 'gradient' }: SectionDividerProps) => {
  if (variant === 'wave') {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
            className="text-primary/5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex justify-center items-center gap-2 py-3">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/30"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-px my-3">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <motion.div
        className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary/50 to-transparent"
        initial={{ x: '-100%' }}
        whileInView={{ x: '300%' }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        viewport={{ once: false }}
      />
    </div>
  );
};

export default SectionDivider;