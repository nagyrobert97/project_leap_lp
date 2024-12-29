import React from 'react';
import { motion } from 'framer-motion';
import { Insight } from './types';
import { Lightbulb, TrendingUp, BookOpen } from 'lucide-react';

interface InsightCardProps {
  insight: Insight;
  index: number;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight, index }) => {
  const icons = {
    tip: Lightbulb,
    trend: TrendingUp,
    guide: BookOpen,
  };

  const Icon = icons[insight.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 space-y-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {insight.category}
          </span>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {insight.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {insight.description}
          </p>
          <div className="pt-4">
            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;