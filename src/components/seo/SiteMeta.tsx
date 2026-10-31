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
  ogImage = `${SITE_CONFIG.url}/og-image.jpg`,
  ogType = "website",
  noindex = false
}: SiteMetaProps) => {
  // Keep titles inside the SERP display limit: append the brand only when the
  // result still fits, and never repeat the brand if the page title has it.
  const baseTitle = title || SITE_CONFIG.title;
  const branded = `${baseTitle} | ${SITE_CONFIG.name}`;
  const fullTitle =
    baseTitle.includes(SITE_CONFIG.name) || branded.length > 62 ? baseTitle : branded;
  // One canonical spelling per route: no trailing slash except the root, and no
  // duplicated slashes. Ten specialty pages passed "/slug/" and shipped a
  // canonical that differed from the served URL (found by the 31 Oct gate).
  const canonicalPath = canonical
    ? "/" + canonical.replace(/^\/+/, "").replace(/\/+$/, "")
    : "/";
  const canonicalUrl =
    canonicalPath === "/" ? SITE_CONFIG.url + "/" : SITE_CONFIG.url + canonicalPath;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_CONFIG.author} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang for English / Indonesian variants */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
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