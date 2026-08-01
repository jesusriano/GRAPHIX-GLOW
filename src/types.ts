export type CategoryType = 
  | 'all'
  | 'ia'
  | 'web'
  | 'apps'
  | 'automation'
  | 'branding'
  | 'marketing'
  | 'seo'
  | 'consulting';

export interface ServiceItem {
  id: string;
  title: string;
  category: CategoryType;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  benefits: string[];
  deliverables: string[];
  deliverTime: string;
  featured?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: CategoryType;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  year: string;
  featured?: boolean;
  logoUrl?: string;
  country?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string; // Markdown or styled text
  featuredImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  tableOfContents: { id: string; title: string }[];
  commentsCount: number;
  schemaJson: object;
}

export interface Comment {
  id: string;
  postId: string;
  authorName: string;
  authorEmail: string;
  content: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  serviceUsed: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  industry: string;
  badgeBg?: string;
  textColor?: string;
  borderColor?: string;
  glowColor?: string;
  iconBg?: string;
  iconName?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price?: string;
  period?: string;
  badgeText?: string;
  targetAudience?: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  category: 'web' | 'ia' | 'complete';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Desarrollo' | 'IA' | 'Marketing & SEO' | 'Soporte';
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  estimatedBudget: string;
  message: string;
  createdAt: string;
  status: 'Nuevo' | 'En Proceso' | 'Cotizado' | 'Cerrado';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
}

export interface SeoMetaData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
}
