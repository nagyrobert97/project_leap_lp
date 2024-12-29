import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-150
          ${isActive 
            ? 'bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400' 
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    </motion.div>
  );
};

export default MenuItem;