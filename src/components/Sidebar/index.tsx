import React from 'react';
import { History, Compass } from 'lucide-react';
import MenuItem from './MenuItem';
import NewAdviceButton from './NewAdviceButton';
import UserProfile from '../UserProfile';

const Sidebar = () => {
  const menuItems = [
    { icon: History, label: 'Past Projects', to: '/past-projects' },
    { icon: Compass, label: 'Discover', to: '/discover' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform -translate-x-full md:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col">
      <NewAdviceButton />
      <nav className="p-4 space-y-2 flex-1">
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.to}
          />
        ))}
      </nav>
      <UserProfile />
    </aside>
  );
};

export default Sidebar;