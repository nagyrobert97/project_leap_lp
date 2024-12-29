import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="#terms" className="hover:text-blue-900 dark:hover:text-blue-400">Terms</a>
          <a href="#privacy" className="hover:text-blue-900 dark:hover:text-blue-400">Privacy</a>
          <a href="#contact" className="hover:text-blue-900 dark:hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;