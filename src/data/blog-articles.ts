export type BlogSection = { h2: string; html: string };

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  keyword: string;
  category: string;
  datePublished: string;
  dateModified?: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  faqs?: { q: string; a: string }[];
  related?: string[];
};

/**
 * Generated guides served by /blog/:slug.
 * Publishing = append one object + add the URL to the sitemap. No route edits.
 */
export const blogArticles: BlogArticle[] = [
  {
    slug: "first-home-massage-kuta-what-to-expect",
    title: "Your First Home Massage in Kuta: What Actually Happens",
    metaTitle: "First Home Massage in Kuta: What to Expect",
    description:
      "A step-by-step look at your first in-villa massage in Kuta: booking, setup, what the therapist brings, pressure, tipping and privacy.",
    excerpt:
      "What a first in-villa massage in Kuta looks like from the WhatsApp message to the therapist leaving, including setup, privacy and payment.",
    keyword: "first home massage kuta",
    category: "Booking & Basics",
    datePublished: "2026-10-31T08:00:00+08:00",
    readMinutes: 7,
    image: "/images/hero/hero-4.jpg",
    imageAlt: "Therapist setting up a massage table in a villa in Kuta, Bali",
    intro:
      "A home massage is a normal hotel-room or villa service in Bali, but the first time you book one it is fair to wonder what you are actually letting into the room. This is the plain version: what happens, what the therapist brings, how long it takes to set up, and what you are expected to pay and tip.",
    sections: [
      {
        h2: "Booking takes one WhatsApp message",
        html:
          "<p>You send your name, the area (Kuta, Legian, Seminyak, Canggu and so on), the treatment, the number of people, and the time you want. The therapist confirms availability and the price for your area before anyone moves. If you are booking for the same evening, say so early in the message because travel time between Kuta and Uluwatu, for example, is not trivial.</p><p>Give the villa or hotel name and the room number, not just a pin. Drivers and therapists work faster when the address is exact.</p>",
      },
      {
        h2: "What the therapist brings and what they need from you",
        html:
          "<p>Standard kit: a folding massage table, fresh sheets, towels, oil, and a small speaker for music. You do not need to own anything.</p><p>You need a space roughly 2 metres by 1 metre, a power point within reach, and air conditioning or a fan. A living room with the sofa pushed back is fine. Outdoors under a fan is fine in the evening. A bed works for some treatments but a table gives better pressure and a better session.</p>",
      },
      {
        h2: "The setup window is real",
        html:
          "<p>Expect 10 to 15 minutes of setup before the massage starts. If you book a 60-minute treatment at 7pm, the hands-on time begins around 7:10 and finishes at 8:10. Build that into dinner plans and driver pickups.</p><p>If you are in a hotel, tell reception a therapist is coming. Some hotels ask guests to meet their therapist in the lobby, some allow direct access to the corridor. A quick call to the front desk prevents a 20-minute delay at security.</p>",
      },
      {
        h2: "Pressure, privacy and what you keep on",
        html:
          "<p>You stay covered by a sheet the whole session; only the area being worked on is uncovered. Balinese massage is medium pressure with long strokes, deep tissue is slower and firmer on specific muscles, and a relaxation massage is lighter throughout. Speak up in the first five minutes if the pressure is wrong: therapists adjust immediately, and it is easier than pretending for an hour.</p><p>You can keep underwear on. You can ask for a female or male therapist when booking. You can ask them to skip a body area entirely. None of that is an unusual request.</p>",
      },
      {
        h2: "Payment and tipping",
        html:
          "<p>Most bookings are paid in cash in Indonesian rupiah at the end of the session, and some therapists accept transfer. Confirm the amount and the method when you book so nobody is counting notes in the dark.</p><p>Tipping is optional. In Bali a tip of around 10 percent is a normal gesture for good service and is genuinely appreciated, but it is not obligatory and it is not a hidden charge.</p>",
      },
      {
        h2: "After the massage",
        html:
          "<p>Drink water, avoid going straight into a heavy meal, and give yourself ten minutes before driving a scooter. If you booked deep tissue for a specific problem, expect mild soreness the next day, similar to after a gym session. That is normal; sharp pain is not, and it is worth telling the therapist.</p>",
      },
    ],
    faqs: [
      {
        q: "Do I need to provide a massage table?",
        a: "No. The therapist brings a professional folding table, fresh linen, towels and oil. You only need floor space and a power point.",
      },
      {
        q: "How much space is needed for a home massage?",
        a: "Roughly two metres by one metre of clear floor, plus a little room to walk around the table. A living room or a large bedroom usually works.",
      },
      {
        q: "Can two people be massaged at the same time?",
        a: "Yes, couples bookings are standard. Two therapists arrive together with two tables, which needs more floor space than a single session.",
      },
      {
        q: "Is it normal to tip the therapist?",
        a: "Tipping is optional. Around ten percent is a common gesture in Bali for good service, but the quoted price is the full price.",
      },
    ],
    related: ["massage-etiquette-bali-guide", "balinese-massage-complete-guide"],
  },
  {
    slug: "massage-etiquette-bali-guide",
    title: "Massage Etiquette in Bali: The Unwritten Rules Visitors Ask About",
    metaTitle: "Massage Etiquette in Bali: What to Know",
    description:
      "Practical massage etiquette in Bali: what to wear, tipping, talking during a session, late arrivals, cancellations and how to ask for a different pressure.",
    excerpt:
      "The practical etiquette questions visitors actually ask about massage in Bali, answered without the myths.",
    keyword: "massage etiquette bali",
    category: "Booking & Basics",
    datePublished: "2026-10-31T08:30:00+08:00",
    readMinutes: 6,
    image: "/images/hero/hero-2.jpg",
    imageAlt: "Folded towels and massage oil prepared for an in-villa massage in Bali",
    intro:
      "Most etiquette questions about massage in Bali have simple answers, and the simple answers are almost always 'ask, and it is fine'. Here is what to do so the session is comfortable for you and straightforward for the therapist.",
    sections: [
      {
        h2: "Before the therapist arrives",
        html:
          "<ul><li>Confirm the address and room number in writing.</li><li>Clear floor space and turn the air conditioning on early so the room is cool.</li><li>Shower first if you have been at the beach; sand and salt shorten the useful part of a massage.</li><li>Tell reception if you are in a hotel.</li></ul>",
      },
      {
        h2: "What to wear and what to remove",
        html:
          "<p>Undress to the level you are comfortable with and get under the sheet. Underwear can stay on. The therapist works around the sheet and only uncovers the area being treated. Nobody expects you to be naked and nobody comments on it either way.</p>",
      },
      {
        h2: "Talking during the massage",
        html:
          "<p>Silence is normal and so is conversation. If you want quiet, say 'quiet please' at the start and the therapist will let you rest. If you want to chat about Bali, that is equally normal. What therapists do want is feedback on pressure, temperature and any painful spot.</p>",
      },
      {
        h2: "Late arrivals and cancellations",
        html:
          "<p>If you are running late, message immediately. Most therapists will shorten the session to protect the next booking rather than extend the end time. Cancellations with a few hours' notice are usually free; a no-show wastes a therapist's evening, and repeated no-shows get deposits requested.</p>",
      },
      {
        h2: "Payment and tipping without awkwardness",
        html:
          "<p>Have the cash ready at the end, in the amount you agreed. If you want to tip, hand it over separately and say thank you; a folded note is normal, a speech is not required. Card payment is uncommon for mobile therapists in Bali, so ask before the session if you are relying on it.</p>",
      },
      {
        h2: "Requests that are always acceptable",
        html:
          "<p>A female therapist, a male therapist, no oil on the hair, no work on the feet, extra attention on the shoulders, a firmer or lighter touch, no talking, an extra towel. These are routine requests, not inconveniences. Making them at the start is better than enduring an hour you did not enjoy.</p>",
      },
    ],
    faqs: [
      {
        q: "Should I shower before a massage?",
        a: "Yes if you have been at the beach or sweating. A quick rinse makes the massage more comfortable and protects the therapist's table linen.",
      },
      {
        q: "Is it rude to fall asleep during a massage?",
        a: "No. Falling asleep is common and therapists take it as a sign the pressure is right.",
      },
      {
        q: "Can I ask for a female therapist?",
        a: "Yes. Say so when booking and the request is normally accommodated.",
      },
      {
        q: "How much should I tip in Bali?",
        a: "Tipping is optional. Around ten percent of the treatment price is a common gesture for good service.",
      },
    ],
    related: ["first-home-massage-kuta-what-to-expect", "prepare-villa-hotel-room-home-massage"],
  },
];
