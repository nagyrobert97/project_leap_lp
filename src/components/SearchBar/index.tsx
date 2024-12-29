import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Input from '../ui/Input';
import Button from '../ui/Button';
import SearchSuggestions from './SearchSuggestions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (query.trim()) {
      console.log('Submitting query:', query);
      // Handle query submission
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsFocused(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="What's your biggest business challenge today?"
          icon={<Search className="h-6 w-6" />}
          onSubmit={handleSubmit}
          className="h-20 text-lg shadow-[0_0_20px_rgba(59,130,246,0.15)] dark:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Button
            onClick={handleSubmit}
            variant="primary"
            size="lg"
            className="rounded-xl"
            aria-label="Submit question"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>
      
      {isFocused && <SearchSuggestions onSuggestionClick={handleSuggestionClick} />}
    </div>
  );
};

export default SearchBar;