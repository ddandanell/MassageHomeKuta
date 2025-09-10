import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/config/site";

interface SiteMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SiteMeta = ({
  title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  canonical,
  ogImage = `${SITE_CONFIG.url}/og-image.jpg?v=3`,
  ogType = "website",
  noindex = false
}: SiteMetaProps) => {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const canonicalUrl = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_CONFIG.author} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Local Business */}
      <meta name="geo.region" content="ID-BA" />
      <meta name="geo.placename" content="Kuta, Bali" />
      <meta name="geo.position" content="-8.7203;115.1672" />
      <meta name="ICBM" content="-8.7203,115.1672" />
    </Helmet>
  );
};

export default SiteMeta;