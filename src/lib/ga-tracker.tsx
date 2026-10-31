import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Vite and prerender resolve the ID from the same scripts/ga4-config.mjs module.
declare const __GA4_ID__: string;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(url: string, title: string) {
  if (__GA4_ID__ && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      send_to: __GA4_ID__,
      page_location: url,
      page_title: title,
    });
  }
}

/**
 * A full load is counted by the initial gtag config in the prerendered head.
 * For SPA navigations, SiteMeta supplies the resolved destination title before
 * Helmet's deferred DOM update. GA4 stream history-change pageviews are off.
 */
export default function GaTracker() {
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!__GA4_ID__) return;
    const path = location.pathname + location.search;
    let frame = 0;
    let cancelled = false;
    let attempts = 0;
    const sendWhenMetaReady = () => {
      if (cancelled) return;
      const { gaPath, gaTitle } = document.documentElement.dataset;
      if (gaPath === path && gaTitle) {
        trackPageView(window.location.href, gaTitle);
      } else if (++attempts < 10) {
        frame = window.requestAnimationFrame(sendWhenMetaReady);
      } else {
        console.warn("GA4: destination metadata not ready; page_view not sent", path);
      }
    };
    frame = window.requestAnimationFrame(sendWhenMetaReady);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname, location.search]);

  return null;
}
