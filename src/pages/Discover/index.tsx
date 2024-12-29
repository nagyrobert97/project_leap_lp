import React from 'react';
import { motion } from 'framer-motion';
import InsightCard from './InsightCard';
import { useInsights } from './useInsights';

const Discover = () => {
  const { insights, isLoading } = useInsights();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Discover Business Insights
          </h1>
          <div className="flex space-x-4">
            <select className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-800">
              <option>All Categories</option>
              <option>Strategy</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Operations</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <InsightCard key={insight.id} insight={insight} index={index} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Discover;