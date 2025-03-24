import { LawFirmData } from '../types/lawfirm';
import { lawFirmTemplate } from '../data-template';
import { v4 as uuidv4 } from 'uuid';

export interface GeneratorInput {
  firmName: string;
  logo?: string;
  address?: string;
  phone?: string;
  email?: string;
  primaryColor?: string;
  secondaryColor?: string;
  attorneys?: {
    name: string;
    title: string;
    image?: string;
    bio: string;
  }[];
  practiceAreas?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  testimonials?: {
    name: string;
    position?: string;
    content: string;
    image?: string;
    rating?: number;
  }[];
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: string;
}

export function generateLawFirmData(input: GeneratorInput): LawFirmData {
  // Start with the template data
  const data: LawFirmData = JSON.parse(JSON.stringify(lawFirmTemplate));

  // Update basic information
  data.name = input.firmName;
  if (input.logo) data.logo = input.logo;
  if (input.address) data.address = input.address;
  if (input.phone) data.phone = input.phone;
  if (input.email) data.email = input.email;

  // Update homepage hero content if provided
  if (input.heroTitle) data.homepageContent.hero.title = input.heroTitle;
  if (input.heroSubtitle) data.homepageContent.hero.subtitle = input.heroSubtitle;
  if (input.heroImage) data.homepageContent.hero.backgroundImage = input.heroImage;

  // Update SEO info
  data.seo = {
    title: `${input.firmName} | Experienced Law Firm`,
    description: `${input.firmName} is a trusted law firm providing expert legal representation in ${
      input.practiceAreas && input.practiceAreas.length > 0 
        ? input.practiceAreas.slice(0, 3).map(pa => pa.title).join(', ')
        : 'various practice areas'
    }.`,
    keywords: ["law firm", "attorney", "legal services"]
  };

  // Replace attorneys if provided
  if (input.attorneys && input.attorneys.length > 0) {
    data.attorneys = input.attorneys.map((attorney, index) => {
      const slug = slugify(attorney.name);
      return {
        id: (index + 1).toString(),
        name: attorney.name,
        title: attorney.title,
        image: attorney.image || `/images/attorneys/default${(index % 3) + 1}.jpg`,
        bio: attorney.bio,
        slug,
        fullBio: attorney.bio,
        education: [],
        barAdmissions: [],
        awards: [],
        practiceAreas: [],
        socialLinks: [
          { platform: "linkedin", url: "https://linkedin.com" }
        ]
      };
    });
    
    // Update featuredAttorneys
    data.homepageContent.featuredAttorneys = data.attorneys
      .slice(0, Math.min(3, data.attorneys.length))
      .map(a => a.id);
  }

  // Replace practice areas if provided
  if (input.practiceAreas && input.practiceAreas.length > 0) {
    data.practiceAreas = input.practiceAreas.map((area, index) => {
      const slug = slugify(area.title);
      return {
        id: (index + 1).toString(),
        title: area.title,
        description: area.description,
        slug,
        icon: area.icon || `/images/icons/default${(index % 4) + 1}.png`,
        content: area.description
      };
    });
    
    // Update featuredPracticeAreas
    data.homepageContent.featuredPracticeAreas = data.practiceAreas
      .slice(0, Math.min(4, data.practiceAreas.length))
      .map(a => a.id);
  }

  // Replace testimonials if provided
  if (input.testimonials && input.testimonials.length > 0) {
    data.testimonials = input.testimonials.map((testimonial, index) => {
      return {
        id: (index + 1).toString(),
        name: testimonial.name,
        position: testimonial.position || "Client",
        content: testimonial.content,
        image: testimonial.image,
        rating: testimonial.rating || 5
      };
    });
    
    // Update featuredTestimonials
    data.homepageContent.featuredTestimonials = data.testimonials
      .slice(0, Math.min(3, data.testimonials.length))
      .map(t => t.id);
  }

  return data;
}

// Helper function to create URL-friendly slugs
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Example usage:
// const customData: GeneratorInput = {
//   firmName: "Smith & Jones Law",
//   address: "456 Main Street, Anytown, USA",
//   phone: "(555) 987-6543",
//   email: "info@smithjones.com",
//   attorneys: [
//     {
//       name: "John Smith",
//       title: "Founding Partner",
//       bio: "John has 25 years of experience in corporate law."
//     },
//     {
//       name: "Jane Jones",
//       title: "Senior Partner",
//       bio: "Jane specializes in intellectual property law."
//     }
//   ],
//   practiceAreas: [
//     {
//       title: "Corporate Law",
//       description: "We provide comprehensive legal services for businesses of all sizes."
//     },
//     {
//       title: "Intellectual Property",
//       description: "Protecting your inventions, trademarks, and creative works."
//     }
//   ]
// };
// 
// const generatedData = generateLawFirmData(customData); 