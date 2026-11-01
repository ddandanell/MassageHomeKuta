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
  url: "https://www.homemassagekuta.com",
  title: "Home Massage Kuta | In-Villa & Hotel Massage in Bali",
  description: "Explore home massage services for villas and hotels in Kuta and nearby Bali areas. Check available treatments, prices and booking details before reserving.",
  keywords: "home massage kuta, in-villa massage kuta, hotel massage bali, villa massage kuta, couples massage kuta, balinese massage kuta, deep tissue massage bali, mobile spa kuta",
  author: "Home Massage Kuta",
  
  // Contact Information (NAP - Name, Address, Phone)
  phone: "+62 811 2656 869", // International format for schema
  whatsapp: "+628112656869", // WhatsApp format (no spaces, hyphens)
  email: "info@homemassagekuta.com",
  logo: "https://www.homemassagekuta.com/logo.svg",
  
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
    { name: "Kuta", type: "Place" },
    { name: "Legian", type: "Place" },
    { name: "Seminyak", type: "Place" },
    { name: "Tuban", type: "Place" },
    { name: "Canggu", type: "Place" },
    { name: "Pererenan", type: "Place" },
    { name: "Kerobokan", type: "Place" },
    { name: "Petitenget", type: "Place" },
    { name: "Jimbaran", type: "Place" },
    { name: "Nusa Dua", type: "Place" },
    { name: "Sanur", type: "Place" },
    { name: "Uluwatu", type: "Place" },
    { name: "Pecatu", type: "Place" },
    { name: "Ungasan", type: "Place" }
  ],

  priorityAreaLinks: [
    {
      name: "Legian",
      path: "/areas/legian",
      description: "Fast-response hotel and villa bookings close to Kuta Beach."
    },
    {
      name: "Pererenan",
      path: "/areas/pererenan",
      description: "Quiet north Canggu villas with growing search demand."
    },
    {
      name: "Uluwatu",
      path: "/areas/uluwatu",
      description: "Clifftop stays, surf recovery, and sunset-friendly villa sessions."
    },
    {
      name: "Ungasan",
      path: "/areas/ungasan",
      description: "Private Bukit villas and secluded mobile spa bookings."
    }
  ],
  
  // Social Media Profiles (Schema.org sameAs property)
  socialMedia: {
    instagram: "https://instagram.com/homemassagekuta",
    facebook: "https://facebook.com/homemassagekuta",
    whatsapp: "https://wa.me/628112656869" // WhatsApp link format
  },
  
  // No aggregateRating here on purpose. The previous values (4.9 / 500 reviews) had no
  // approved, verifiable source and are gone as of 2026-10-31 (QA review of 54f1967, item 7).
  // Add it back only with a written approved-facts record from David.
};
