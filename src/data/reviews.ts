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
export const testimonialReviews: ReviewData[] = [
  {
    author: "Anna & James",
    location: "UK – Villa in Legian",
    rating: 5,
    reviewBody: "We booked a couples massage in our villa, and it was the best decision of our trip. The therapists were on time, professional, and created such a calming environment. It felt like having a luxury spa in our living room!",
    datePublished: "2024-10-15"
  },
  {
    author: "Mark",
    location: "Australia – Surf Trip in Kuta",
    rating: 5,
    reviewBody: "After five days of surfing, my back and shoulders were destroyed. I booked a deep tissue massage at my guesthouse, and it was incredible. The therapist knew exactly how to target the sore spots. Highly recommend for surfers.",
    datePublished: "2024-10-20"
  },
  {
    author: "Sofia",
    location: "Spain – Digital Nomad in Seminyak",
    rating: 5,
    reviewBody: "I work online and spend 8+ hours at my laptop. The aromatherapy massage helped release all the tension in my neck and lower back. The therapist was so kind, and I loved that I didn't have to leave my apartment.",
    datePublished: "2024-11-01"
  },
  {
    author: "Michael & Laura",
    location: "USA – Honeymoon in Jimbaran",
    rating: 5,
    reviewBody: "We booked the four-hands massage in our villa for our honeymoon. Two therapists worked in perfect sync, and it was pure bliss. Better than any spa we've ever been to.",
    datePublished: "2024-11-10"
  }
];
