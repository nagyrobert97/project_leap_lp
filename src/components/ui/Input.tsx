import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  onSubmit?: () => void;
}

const Input: React.FC<InputProps> = ({ icon, onSubmit, className = '', ...props }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full"
    >
      <input
        className={`w-full h-16 px-6 py-4 bg-white dark:bg-gray-900 border border-gray-200 
        dark:border-gray-700 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 
        focus:ring-blue-500 focus:border-transparent pl-14 pr-14 text-lg transition-all duration-200 
        text-gray-900 dark:text-gray-100
        placeholder-gray-400 dark:placeholder-gray-500 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] ${className}`}
        onKeyDown={handleKeyDown}
        {...props}
      />
      {icon && (
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
    </motion.div>
  );
};

export default Input;