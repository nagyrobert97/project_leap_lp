import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  BarChart2, 
  Lightbulb 
} from 'lucide-react';

interface SearchSuggestionsProps {
  onSuggestionClick: (query: string) => void;
}

const suggestions = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    query: "How can I improve my product-market fit?"
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy",
    query: "What's the best pricing strategy for my SaaS product?"
  },
  {
    icon: Users,
    title: "Team Management",
    query: "How to build and motivate high-performing teams?"
  },
  {
    icon: Target,
    title: "Marketing",
    query: "How to reduce customer acquisition costs?"
  },
  {
    icon: BarChart2,
    title: "Analytics",
    query: "What KPIs should I track for my business?"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    query: "How to foster innovation in my company?"
  }
];

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ onSuggestionClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
    >
      {suggestions.map((suggestion, index) => {
        const Icon = suggestion.icon;
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSuggestionClick(suggestion.query)}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 cursor-pointer shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {suggestion.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {suggestion.query}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SearchSuggestions;