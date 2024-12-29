import React from 'react';
import { User, Settings } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-auto">
      <div className="px-4 mb-4">
        <div className="flex items-center space-x-3 p-2 rounded-lg">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
              John Doe
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              Pro Member
            </p>
          </div>
        </div>
      </div>
      <a
        href="#settings"
        className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150"
      >
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </a>
    </div>
  );
};

export default UserProfile;