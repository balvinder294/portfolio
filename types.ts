
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string;
  tags: string[];
  image?: string
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Cloud/DevOps' | 'Tools' | 'Security';
}
