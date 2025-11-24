import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/config/site";
import { testimonialReviews } from "@/data/reviews";

/**
 * Service Schema Data Interface
 * Used to create page-specific Service schema with custom details
 */
interface ServiceSchemaData {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string | string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
    priceRange?: string;
  };
}

/**
 * StructuredData Component Props
 * @param type - Type of schema to generate
 * @param data - Optional data for dynamic schema (breadcrumbs, FAQ, service details)
 * @param includeReviews - Whether to include Review schema in LocalBusiness (homepage, reviews page)
 */
interface StructuredDataProps {
  type?: "organization" | "service" | "faq" | "breadcrumb" | "website";
  data?: ServiceSchemaData | Array<{ [key: string]: unknown }> | unknown;
  includeReviews?: boolean;
}

/**
 * StructuredData Component
 * 
 * Generates JSON-LD structured data for SEO and rich results in Google Search.
 * All business information is centralized in SITE_CONFIG for consistency.
 * 
 * Usage Examples:
 * - <StructuredData type="organization" /> - Basic LocalBusiness
 * - <StructuredData type="organization" includeReviews={true} /> - With reviews
 * - <StructuredData type="service" data={customServiceData} /> - Custom service
 * - <StructuredData type="breadcrumb" data={breadcrumbArray} /> - Breadcrumbs
 * 
 * @see /SCHEMA_DOCUMENTATION.md for complete implementation guide
 */
const StructuredData = ({ type = "organization", data, includeReviews = false }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        // Convert review data to Review schema format
        const reviews = includeReviews ? testimonialReviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating.toString(),
            "bestRating": "5"
          },
          "reviewBody": review.reviewBody,
          "datePublished": review.datePublished,
          "itemReviewed": {
            "@id": `${SITE_CONFIG.url}/#localbusiness`
          }
        })) : [];

        /**
         * LocalBusiness Schema
         * Represents the business entity across all pages
         * Uses @id for entity linking and knowledge graph building
         * NAP (Name, Address, Phone) must be consistent across all pages
         */
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_CONFIG.url}/#localbusiness`,
          "name": SITE_CONFIG.name,
          "description": SITE_CONFIG.description,
          "url": SITE_CONFIG.url,
          "image": SITE_CONFIG.logo,
          "telephone": SITE_CONFIG.phone,
          "email": SITE_CONFIG.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": SITE_CONFIG.address.streetAddress,
            "addressLocality": SITE_CONFIG.address.addressLocality,
            "addressRegion": SITE_CONFIG.address.addressRegion,
            "postalCode": SITE_CONFIG.address.postalCode,
            "addressCountry": SITE_CONFIG.address.addressCountry
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": SITE_CONFIG.geo.latitude,
            "longitude": SITE_CONFIG.geo.longitude
          },
          "areaServed": SITE_CONFIG.serviceAreas.map(area => ({
            "@type": "City",
            "name": area.name
          })),
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": SITE_CONFIG.openingHours.dayOfWeek,
            "opens": SITE_CONFIG.openingHours.opens,
            "closes": SITE_CONFIG.openingHours.closes
          },
          "priceRange": SITE_CONFIG.priceRange,
          "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
          "currenciesAccepted": "IDR",
          "sameAs": [
            SITE_CONFIG.socialMedia.instagram,
            SITE_CONFIG.socialMedia.facebook,
            SITE_CONFIG.socialMedia.whatsapp
          ],
          // Only include reviews and aggregate rating if requested
          ...(includeReviews && reviews.length > 0 && {
            "review": reviews,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": SITE_CONFIG.aggregateRating.ratingValue,
              "reviewCount": SITE_CONFIG.aggregateRating.reviewCount,
              "bestRating": SITE_CONFIG.aggregateRating.bestRating
            }
          })
        };

      case "service":
        const serviceData = data as ServiceSchemaData;
        // Convert area served to proper City schema format
        const areaServed = serviceData?.areaServed 
          ? (Array.isArray(serviceData.areaServed) 
              ? serviceData.areaServed.map(area => ({ "@type": "City", "name": area }))
              : { "@type": "City", "name": serviceData.areaServed })
          : SITE_CONFIG.serviceAreas.map(area => ({ "@type": "City", "name": area.name }));

        /**
         * Service Schema
         * Describes specific services offered (massage types, area-specific services)
         * Provider references LocalBusiness via @id for entity linking
         * Should be customized per page with relevant service details
         */
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceData?.name || "Professional In-Villa Massage Service",
          "description": serviceData?.description || "Premium massage therapy delivered to your villa or hotel in Kuta, Bali",
          "serviceType": serviceData?.serviceType || "Massage Therapy",
          "provider": {
            "@id": `${SITE_CONFIG.url}/#localbusiness`
          },
          "areaServed": areaServed,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": serviceData?.offers?.priceCurrency || "IDR",
            ...(serviceData?.offers?.price && { "price": serviceData.offers.price }),
            ...(serviceData?.offers?.priceRange && { "priceRange": serviceData.offers.priceRange }),
            "url": SITE_CONFIG.url
          }
        };

      case "faq":
        /**
         * FAQPage Schema
         * Marks up frequently asked questions for rich results
         * Data should be array of Question objects with name and acceptedAnswer
         */
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data || []
        };

      case "website":
        /**
         * WebSite Schema
         * Represents the website as a whole with search functionality
         * Should appear only on homepage
         * Note: Search functionality is not currently implemented on the site
         */
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": SITE_CONFIG.name,
          "url": SITE_CONFIG.url
        };

      case "breadcrumb":
        /**
         * BreadcrumbList Schema
         * Navigation breadcrumbs for enhanced search results
         * Data should be array of ListItem objects with position, name, and item URL
         */
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data || []
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  // Inject JSON-LD into page <head> via React Helmet
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;