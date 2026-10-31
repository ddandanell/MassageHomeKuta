/**
 * Customer Reviews Data
 * 
 * Contains actual customer testimonials used for:
 * 1. Display in Testimonials component on homepage/reviews page
 * 2. Review schema (JSON-LD) for rich results in Google Search
 * 
 * IMPORTANT GUIDELINES:
 * - Only add reviews that are visible on the website
 * - Never fabricate or fake reviews
 * - Each review must include: author name, rating, review body
 * - Date published is optional but recommended
 * - Rating scale: 1-5 stars (use whole numbers)
 * 
 * When adding/removing reviews:
 * 1. Update this file with the new review
 * 2. Update aggregateRating in /src/config/site.ts:
 *    - Increment/decrement reviewCount
 *    - Recalculate ratingValue if needed
 * 3. Ensure review appears visually on the website
 * 
 * @see /SCHEMA_DOCUMENTATION.md for schema implementation details
 */

export interface ReviewData {
  author: string;      // Customer name (or "Anonymous" if preferred)
  location: string;    // Customer location/origin (e.g., "UK – Villa in Legian")
  rating: number;      // Star rating: 1-5 (whole numbers only)
  reviewBody: string;  // The actual testimonial text
  datePublished?: string; // ISO date format: "YYYY-MM-DD" (optional)
}

/**
 * Array of customer testimonials
 * These reviews appear on homepage and reviews page with includeReviews={true}
 */
export const testimonialReviews: ReviewData[] = [];

/* Emptied 2026-10-31 (Chief of Staff ruling C-0005, QA T-0006 item 2).
 * The four testimonials that lived here named guests, dates and ratings that no
 * approved source ever backed, and they were emitted as Review JSON-LD.
 * A review may only re-enter this file once it can be matched to a completed
 * booking or a connected Google Business Profile feed, with its source and date. */
