export interface SocialLink {
  platform: string;
  url: string;
}

export interface Attorney {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  slug: string;
  fullBio?: string;
  education?: string[];
  barAdmissions?: string[];
  awards?: string[];
  practiceAreas?: string[];
  socialLinks?: SocialLink[];
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon?: string;
  slug: string;
  content?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position?: string;
  content: string;
  image?: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  author: string;
  image?: string;
  categories?: string[];
  tags?: string[];
}

export interface AboutSection {
  title: string;
  content: string;
  image?: string;
}

export interface LawFirmData {
  name: string;
  logo?: string;
  address?: string;
  phone?: string;
  email?: string;
  about: {
    headline?: string;
    mission?: string;
    vision?: string;
    values?: string[];
    sections?: AboutSection[];
  };
  attorneys: Attorney[];
  practiceAreas: PracticeArea[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  homepageContent: {
    hero: {
      title: string;
      subtitle?: string;
      backgroundImage?: string;
      ctaText?: string;
      ctaLink?: string;
      secondaryCtaText?: string;
      secondaryCtaLink?: string;
    };
    aboutSection?: {
      title: string;
      content: string;
      image?: string;
    };
    featuredPracticeAreas?: string[]; // Array of practice area IDs
    featuredAttorneys?: string[]; // Array of attorney IDs
    featuredTestimonials?: string[]; // Array of testimonial IDs
  };
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };
} 