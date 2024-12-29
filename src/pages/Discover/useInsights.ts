import { useState, useEffect } from 'react';
import { Insight } from './types';

const MOCK_INSIGHTS: Insight[] = [
  {
    id: '1',
    type: 'tip',
    category: 'Strategy',
    title: 'Customer Feedback Loop',
    description: 'Learn how to implement an effective customer feedback loop to improve your product continuously.',
  },
  {
    id: '2',
    type: 'trend',
    category: 'Marketing',
    title: 'AI in Digital Marketing',
    description: 'Discover how AI is transforming digital marketing and how to leverage it for your business.',
  },
  {
    id: '3',
    type: 'guide',
    category: 'Finance',
    title: 'Cash Flow Management',
    description: 'Essential strategies for maintaining healthy cash flow in your growing business.',
  },
  {
    id: '4',
    type: 'tip',
    category: 'Operations',
    title: 'Remote Team Productivity',
    description: 'Best practices for maintaining high productivity in remote and hybrid teams.',
  },
  {
    id: '5',
    type: 'trend',
    category: 'Strategy',
    title: 'Sustainable Business Models',
    description: 'Emerging trends in sustainable business practices and their impact on growth.',
  },
  {
    id: '6',
    type: 'guide',
    category: 'Marketing',
    title: 'Content Strategy Guide',
    description: 'Comprehensive guide to creating and executing an effective content marketing strategy.',
  },
];

export const useInsights = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchInsights = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setInsights(MOCK_INSIGHTS);
      setIsLoading(false);
    };

    fetchInsights();
  }, []);

  return { insights, isLoading };
};