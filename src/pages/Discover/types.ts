export type InsightType = 'tip' | 'trend' | 'guide';

export interface Insight {
  id: string;
  type: InsightType;
  category: string;
  title: string;
  description: string;
}