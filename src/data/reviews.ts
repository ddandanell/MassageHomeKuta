export interface ReviewData {
  author: string;
  location: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

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
