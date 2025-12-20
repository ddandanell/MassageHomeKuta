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
          "serviceType": ["Massage", "Massage Therapy", "Therapeutic Massage", "Relaxation Massage", "Spa Massage", "Home Massage", "Professional Massage", "Balinese Massage", "Deep Tissue Massage", "Aromatherapy Massage", "Thai Massage", "Hot Stone Massage", "Four Hands Massage", "Lymphatic Drainage Massage", "Pregnancy Massage", "Foot Reflexology Massage"],
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
          "name": "Professional Massage Service - Home Massage in Kuta, Bali",
          "description": "Premium massage service delivered to your villa or hotel in Kuta, Bali. Professional massage therapists provide therapeutic massage, relaxation massage, and spa-quality massage treatments including Balinese massage, deep tissue massage, aromatherapy massage, Thai massage, hot stone massage, and four hands massage.",
          "provider": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.name
          },
          "areaServed": SITE_CONFIG.serviceAreas,
          "serviceType": ["Massage", "Massage Therapy", "Therapeutic Massage", "Relaxation Massage", "Professional Massage", "Home Massage", "Spa Massage"],
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