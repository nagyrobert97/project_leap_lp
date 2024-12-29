import React from 'react';
import { FileText, History, BookTemplate } from 'lucide-react';
import UserProfile from './UserProfile';

const Sidebar = () => {
  const menuItems = [
    { icon: FileText, label: 'New Advice', href: '#new' },
    { icon: History, label: 'Past Projects', href: '#past' },
    { icon: BookTemplate, label: 'Templates', href: '#templates' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform -translate-x-full md:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col">
      <nav className="p-4 space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150"
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
      <UserProfile />
    </aside>
  );
};

export default Sidebar;