import { useState, useEffect } from 'react';
import { Project } from './types';

// Simulated data - in a real app, this would come from an API
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Market Entry Strategy',
    description: 'Analysis and recommendations for entering the European market with our SaaS product.',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-20'),
    questionCount: 15,
  },
  {
    id: '2',
    title: 'Product Pricing Optimization',
    description: 'Comprehensive pricing strategy analysis for our enterprise solution.',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-18'),
    questionCount: 12,
  },
  {
    id: '3',
    title: 'Team Structure Review',
    description: 'Evaluation of current team structure and recommendations for scaling.',
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-16'),
    questionCount: 8,
  },
];

export const usePastProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects(MOCK_PROJECTS);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return { projects, isLoading };
};