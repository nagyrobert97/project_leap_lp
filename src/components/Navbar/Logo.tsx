import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2"
    >
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-1.5 bg-blue-500 rounded-lg"
      >
        <Brain className="h-6 w-6 text-white" />
      </motion.div>
      <span className="text-xl font-semibold text-blue-900 dark:text-blue-400">
        ConsultAI
      </span>
    </motion.div>
  );
};

export default Logo;