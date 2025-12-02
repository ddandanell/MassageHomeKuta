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
  // Extended SEO content sections (optional for backwards compatibility)
  extendedContent?: {
    historyAndOrigin?: string;
    detailedProcess?: string;
    preparationTips?: string;
    aftercareTips?: string;
    comparisonWithOthers?: string;
    expertInsights?: string;
    localContext?: string;
  };
  additionalTestimonials?: {
    text: string;
    author: string;
    location: string;
    rating?: number;
  }[];
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
  // Extended SEO content sections (optional for backwards compatibility)
  extendedContent?: {
    areaDescription?: string;
    localCulture?: string;
    villaCulture?: string;
    touristBehavior?: string;
    neighborhoodDetails?: string;
    localDishes?: string;
    problemsWeSolve?: string;
    pricingContext?: string;
    whyChooseUs?: string;
  };
  localTestimonials?: {
    text: string;
    author: string;
    accommodation?: string;
    rating?: number;
  }[];
}
