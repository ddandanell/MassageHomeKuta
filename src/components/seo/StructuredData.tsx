import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/config/site";
import { testimonialReviews } from "@/data/reviews";

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

interface StructuredDataProps {
  type?: "organization" | "service" | "faq" | "breadcrumb" | "website";
  data?: any;
  includeReviews?: boolean;
}

const StructuredData = ({ type = "organization", data, includeReviews = false }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
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
        const areaServed = serviceData?.areaServed 
          ? (Array.isArray(serviceData.areaServed) 
              ? serviceData.areaServed.map(area => ({ "@type": "City", "name": area }))
              : { "@type": "City", "name": serviceData.areaServed })
          : SITE_CONFIG.serviceAreas.map(area => ({ "@type": "City", "name": area.name }));

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
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data || []
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": SITE_CONFIG.name,
          "url": SITE_CONFIG.url,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${SITE_CONFIG.url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };

      case "breadcrumb":
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;