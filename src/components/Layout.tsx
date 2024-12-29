import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import GridPattern from './background/GridPattern';
import NoiseTexture from './background/NoiseTexture';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <GridPattern />
      <NoiseTexture />
      <Navbar />
      <Sidebar />
      <div className="md:pl-64">
        <main className="min-h-[calc(100vh-8rem)] relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;