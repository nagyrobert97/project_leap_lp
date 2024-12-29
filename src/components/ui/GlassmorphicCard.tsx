import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`
        relative overflow-hidden
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-md
        border border-gray-200/30 dark:border-gray-700/30
        dark:bg-gradient-to-b dark:from-gray-900/90 dark:to-gray-950/90
        shadow-md dark:shadow-dark-md
        hover:shadow-glow dark:hover:shadow-glow
        rounded-xl
        transition-all duration-300 ease-in-out
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-accent from-primary-light/5 to-secondary-light/5 dark:from-primary/10 dark:to-secondary/10" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassmorphicCard;