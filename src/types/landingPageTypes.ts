export interface MassageTypeData {
  name: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  introText: string;
  benefits: string[];
  techniques: string[];
  idealFor: string[];
  pressureLevels: string[];
  packages: {
    duration: string;
    price: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    location: string;
  };
}

export interface ServiceAreaData {
  name: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  introText: string;
  responseTime: string;
  landmarks: string[];
  popularMassageTypes: {
    name: string;
    slug: string;
    description: string;
  }[];
  accommodationTypes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  nearbyAreas: string[];
}
