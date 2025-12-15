/**
 * Design System Constants
 * 
 * Central source of truth for all design patterns, ensuring consistency across the entire application.
 * This includes colors, spacing, typography, button variants, and component patterns.
 * 
 * PRINCIPLES:
 * - Consistency over creativity
 * - Clarity over cleverness
 * - Fewer patterns, reused everywhere
 * - System should feel intentional, calm, and professional
 */

export const DESIGN_SYSTEM = {
  // Hero Section Gradients - Standardized for all pages
  heroGradients: {
    primary: "from-emerald-600 to-teal-600",        // Main pages (Home, Services)
    secondary: "from-teal-600 to-cyan-600",        // Secondary pages (About, Reviews)
    accent: "from-professional-teal to-professional-blue", // Alternative
    service: "from-emerald-700 to-teal-700",       // Service-specific pages
    area: "from-teal-700 to-cyan-700",             // Area-specific pages
  },

  // Section Background Colors - Standardized
  sectionBackgrounds: {
    white: "bg-background",                         // Pure white/background
    cream: "bg-spa-cream/30",                       // Subtle cream
    gradient: "bg-gradient-professional",           // Professional gradient
    accent: "bg-gradient-accent",                   // Accent gradient
  },

  // Section Spacing - Standardized padding values
  spacing: {
    hero: "py-32 md:py-40",                        // Hero sections
    section: "py-16",                              // Standard sections
    sectionLarge: "py-20",                         // Large sections
    sectionSmall: "py-12",                         // Small sections
    container: "container mx-auto px-4",           // Container wrapper
  },

  // Typography - Standardized heading sizes
  typography: {
    heroTitle: "text-4xl md:text-6xl font-bold",
    heroSubtitle: "text-xl md:text-2xl",
    sectionTitle: "text-4xl md:text-5xl font-bold",
    subsectionTitle: "text-3xl font-bold",
    cardTitle: "text-xl font-semibold",
    body: "text-base md:text-lg",
    bodyLarge: "text-xl",
  },

  // Button Patterns - Standardized CTA implementations
  buttons: {
    // Primary CTAs
    primaryCTA: {
      variant: "default" as const,
      className: "bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-semibold shadow-xl",
      size: "lg" as const,
    },
    // WhatsApp buttons
    whatsapp: {
      variant: "whatsapp" as const,
      className: "",
      size: "lg" as const,
    },
    // Secondary actions
    secondary: {
      variant: "outline" as const,
      className: "",
      size: "lg" as const,
    },
    // Professional style
    professional: {
      variant: "professional" as const,
      className: "",
      size: "lg" as const,
    },
  },

  // CTA Text - Standardized terminology
  ctaText: {
    bookNow: "Book Now",
    bookWhatsApp: "Book via WhatsApp",
    viewServices: "View All Services",
    viewAreas: "View Service Areas",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    callNow: "Call Now",
  },

  // Badge Text - Standardized badge content
  badgeText: {
    professionalService: "Professional Mobile Service",
    fastResponse: "Fast Response",
    certifiedTherapists: "Certified Therapists",
    sameDayService: "Same Day Service",
  },

  // Icon sizes - Standardized
  iconSizes: {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    xlarge: "w-8 h-8",
  },

  // Card Styles - Standardized
  cardStyles: {
    standard: "bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300",
    popular: "bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300 ring-2 ring-spa-gold",
  },

  // Badge Styles - Standardized
  badgeStyles: {
    popular: "bg-spa-gold text-spa-earth px-4 py-1",
    available: "bg-green-500/10 text-green-700 border-green-500/20",
    highlight: "bg-professional-gold text-professional-navy px-4 py-2",
  },

  // Response Times Display
  responseTimeFormat: (minutes: string) => `${minutes} Response Time`,

  // Availability Display
  availabilityText: "Available 07:00 – 22:00 Daily",
  availabilityBadge: "Available Now",

  // Social Proof Elements
  socialProof: {
    rating: "4.9/5 Rating",
    clients: "500+ Happy Clients",
    countries: "25+ Countries Served",
    responseTime: "15 Min Response",
    sameDayService: "Same Day Service",
  },
} as const;

// Helper function to generate WhatsApp URLs
export const generateWhatsAppUrl = (message: string, phone?: string): string => {
  // Import SITE_CONFIG at runtime to avoid circular dependencies
  const phoneNumber = phone || "+628112656869"; // Fallback if phone is not provided
  return `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
};

// Helper function to generate breadcrumb data
export const generateBreadcrumbs = (items: Array<{ name: string; path: string }>): Array<{
  "@type": string;
  position: number;
  name: string;
  item: string;
}> => {
  return items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://www.homemassagekuta.com${item.path}`,
  }));
};
