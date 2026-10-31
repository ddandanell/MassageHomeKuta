import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/** GA4 measurement ID for homemassagekuta.com (property 541392795). */
export const GA_MEASUREMENT_ID = "G-B8P4D8WGLK";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(path: string, title: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title,
    });
  }
}

/**
 * Fires a GA4 page_view on client-side (react-router <Link>) navigations.
 * The first mount is skipped: the prerendered <head> gtag.js snippet already
 * fires the initial page_view on every full page load, so firing here too
 * would double-count the landing page.
 */
export default function GaTracker() {
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    trackPageView(location.pathname + location.search, document.title);
  }, [location.pathname, location.search]);

  return null;
}
