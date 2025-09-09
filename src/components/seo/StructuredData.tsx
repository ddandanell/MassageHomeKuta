import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/config/site";

interface StructuredDataProps {
  type?: "organization" | "service" | "faq" | "breadcrumb" | "website";
  data?: any;
}

const StructuredData = ({ type = "organization", data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": SITE_CONFIG.name,
          "description": SITE_CONFIG.description,
          "url": SITE_CONFIG.url,
          "telephone": SITE_CONFIG.phone,
          "email": SITE_CONFIG.email,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kuta",
            "addressRegion": "Bali",
            "addressCountry": "Indonesia"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-8.7203",
            "longitude": "115.1672"
          },
          "areaServed": SITE_CONFIG.serviceAreas,
          "serviceType": ["Massage Therapy", "Spa Services", "Wellness Services"],
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card"],
          "openingHours": "Mo-Su 07:00-22:00",
          "sameAs": [
            SITE_CONFIG.socialMedia.instagram,
            SITE_CONFIG.socialMedia.facebook,
            SITE_CONFIG.socialMedia.whatsapp
          ]
        };

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Professional In-Villa Massage Service",
          "description": "Premium massage therapy delivered to your villa or hotel in Kuta, Bali",
          "provider": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.name
          },
          "areaServed": SITE_CONFIG.serviceAreas,
          "serviceType": "Massage Therapy",
          "offers": {
            "@type": "Offer",
            "priceRange": "$$",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString().split('T')[0]
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
            "target": `${SITE_CONFIG.url}/search?q={search_term_string}`,
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