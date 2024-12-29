import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';
import Button from '../ui/Button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#about">About</NavLink>
            <ThemeToggle />
            <Button variant="outline" size="sm">Pro</Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    whileHover={{ y: -2 }}
    href={href}
    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
  >
    {children}
  </motion.a>
);

export default Navbar;