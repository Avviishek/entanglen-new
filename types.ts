
export interface Tutor {
  id: number;
  name: string;
  image: string;
  subjects: string[];
  experience: string;
  languages: string[];
  availability: 'Full-time' | 'Part-time';
  testimonial: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
}

export interface PricingPlan {
  plan: string;
  hours: number;
  price: number;
  costPerHour: number;
  highlight?: boolean;
  features: string[];
}
