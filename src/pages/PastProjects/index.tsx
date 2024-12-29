import React from 'react';
import { motion } from 'framer-motion';
import ProjectList from './ProjectList';
import { usePastProjects } from './usePastProjects';

const PastProjects = () => {
  const { projects, isLoading } = usePastProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Past Projects
          </h1>
          <div className="flex space-x-4">
            <select className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-800">
              <option>All Projects</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <ProjectList projects={projects} />
        )}
      </motion.div>
    </div>
  );
};

export default PastProjects;