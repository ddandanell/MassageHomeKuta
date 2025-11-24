/**
 * Site Configuration
 * 
 * Central source of truth for all business information used in structured data (JSON-LD).
 * This configuration ensures NAP (Name, Address, Phone) consistency across all pages.
 * 
 * IMPORTANT: When updating business information here, it automatically propagates to:
 * - LocalBusiness schema on all pages
 * - Service schema references
 * - Contact forms and footers
 * - Meta tags and SEO components
 * 
 * @see /SCHEMA_DOCUMENTATION.md for detailed implementation guide
 */
export const SITE_CONFIG = {
  // Business Identity
  name: "Home Massage Kuta",
  url: "https://homemassagekuta.com",
  title: "Home Massage Kuta - #1 Professional In-Villa Spa Service Bali",
  description: "Kuta's premier home massage service. Professional therapists bring spa-quality treatments to your villa or hotel. Same-day booking available. Licensed, certified, and trusted by 500+ clients.",
  keywords: "home massage kuta, villa massage bali, mobile spa kuta, balinese massage, deep tissue massage, aromatherapy massage, spa service kuta, in-villa massage, hotel massage bali",
  author: "Home Massage Kuta",
  
  // Contact Information (NAP - Name, Address, Phone)
  phone: "+62 811-2656-869", // International format for schema
  whatsapp: "+6281126568369", // WhatsApp format (no spaces, hyphens)
  email: "info@homemassagekuta.com",
  logo: "https://homemassagekuta.com/logo.svg",
  
  // Postal Address (Schema.org PostalAddress format)
  address: {
    streetAddress: "Kuta Beach Area",
    addressLocality: "Kuta",
    addressRegion: "Bali",
    postalCode: "80361",
    addressCountry: "ID" // ISO 3166-1 alpha-2 country code
  },
  
  // Geographic Coordinates (for Google Maps and local search)
  geo: {
    latitude: "-8.7203",  // Kuta, Bali coordinates
    longitude: "115.1672"
  },
  
  // Operating Hours (Schema.org OpeningHoursSpecification format)
  openingHours: {
    opens: "07:00",  // 7 AM
    closes: "22:00", // 10 PM
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  
  // Pricing (Simple indicator for schema)
  priceRange: "$$", // $$ = Moderate pricing
  
  // Service Areas (All locations we serve)
  // Used in LocalBusiness areaServed and Service schema
  serviceAreas: [
    { name: "Kuta", type: "City" },
    { name: "Seminyak", type: "City" },
    { name: "Legian", type: "City" },
    { name: "Canggu", type: "City" },
    { name: "Jimbaran", type: "City" },
    { name: "Nusa Dua", type: "City" },
    { name: "Tuban", type: "City" }
  ],
  
  // Social Media Profiles (Schema.org sameAs property)
  socialMedia: {
    instagram: "https://instagram.com/homemassagekuta",
    facebook: "https://facebook.com/homemassagekuta",
    whatsapp: "https://wa.me/6281126568369" // WhatsApp link format
  },
  
  // Aggregate Rating (Based on customer reviews)
  // UPDATE THIS when adding/removing reviews in /src/data/reviews.ts
  aggregateRating: {
    ratingValue: "4.9", // Average rating (1-5 scale)
    reviewCount: "500", // Total number of reviews
    bestRating: "5"     // Maximum possible rating
  }
};