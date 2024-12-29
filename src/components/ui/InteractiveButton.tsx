import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `
    relative overflow-hidden
    px-4 py-2 rounded-lg
    font-medium
    transition-all duration-300
    border border-transparent
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-primary/90 hover:bg-primary
      dark:bg-primary/80 dark:hover:bg-primary/90
      text-white
      shadow-md hover:shadow-glow
      dark:shadow-dark-md dark:hover:shadow-glow
    `,
    secondary: `
      bg-secondary/90 hover:bg-secondary
      dark:bg-secondary/80 dark:hover:bg-secondary/90
      text-white
      shadow-md hover:shadow-glow
      dark:shadow-dark-md dark:hover:shadow-glow
    `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-accent from-white/5 to-transparent dark:from-white/10" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default InteractiveButton;