export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    bgColor: string;
  };
  date: string;
  imageUrl?: string;
  tags?: string[];
  category: string;
  readTime: string;
  visualType: 'stats' | 'tips' | 'future';
} 