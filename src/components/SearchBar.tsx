import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from './ui/Input';
import Button from './ui/Button';

const SUGGESTIONS = [
  "How can I improve my product-market fit?",
  "What's the best pricing strategy for my SaaS product?",
  "How to reduce customer acquisition costs?",
  "Ways to improve team productivity"
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = () => {
    if (query.trim()) {
      console.log('Submitting query:', query);
      // Handle query submission
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="What's your biggest business challenge today?"
          icon={<Search className="h-6 w-6" />}
          onSubmit={handleSubmit}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Button
            onClick={handleSubmit}
            variant="primary"
            size="sm"
            className="rounded-xl"
            aria-label="Submit question"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 z-10"
          >
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Try asking:
              <ul className="mt-2 space-y-2">
                {SUGGESTIONS.map((suggestion, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-150"
                    onClick={() => {
                      setQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;