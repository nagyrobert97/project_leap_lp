import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewAdviceButton = () => {
  return (
    <Link to="/">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mb-6 mx-4"
      >
        <button className="w-full group flex items-center space-x-2 px-4 py-3 rounded-xl
          bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
          text-white shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/20
          transition-all duration-200 ease-in-out"
        >
          <PlusCircle className="h-5 w-5 transition-transform group-hover:rotate-90 duration-200" />
          <span className="font-medium">New Advice</span>
        </button>
      </motion.div>
    </Link>
  );
};

export default NewAdviceButton;