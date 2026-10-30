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
  slug: "balinese-massage-complete-guide",
  title: "Balinese Massage: What It Is and What to Expect in Bali",
  metaTitle: "Balinese Massage in Bali: Complete Guide",
  description: "What Balinese massage actually involves, how it differs from deep tissue and Thai massage, what to expect in a villa session, and how to choose the right pressure.",
  excerpt: "A practical guide to Balinese massage: the technique, the pressure, the oils, and what a session at your villa or hotel actually feels like.",
  keyword: "balinese massage bali",
  category: "Treatments",
  datePublished: "2026-10-31T09:00:00+08:00",
  dateModified: "2026-10-31T09:00:00+08:00",
  readMinutes: 7,
  image: "/images/hero/hero-1.jpg",
  imageAlt: "Balinese massage being performed on a massage table at a villa in south Bali",
  intro: "Balinese massage is the default massage in Bali and the one most visitors book without knowing what it involves. It is not a light spa rub and it is not deep tissue either. It sits in the middle: long, firm strokes along the muscles, acupressure on specific points, and stretching at the end. This guide explains what happens in a session, how it compares with the other treatments on the menu, and how to get the pressure you actually want.",
  sections: [
    {
      "h2": "What Balinese massage actually is",
      html: "<p>It is a traditional Indonesian technique that combines gentle-to-firm pressure along the muscle fibres, acupressure with thumbs and palms on points along the back, neck, shoulders and legs, and slow passive stretching. Sessions usually run from feet to head, front and back, with the back and shoulders taking the most time.</p><p>The trademark is the long stroke: the therapist works from the lower back up to the shoulder in one continuous movement, then repeats with slightly more pressure. It should feel rhythmic rather than sharp. If it feels like someone is digging a thumb into a knot for a minute, that is deep tissue, not Balinese.</p>"
    },
    {
      "h2": "How it compares with deep tissue and Thai massage",
      html: "<p><strong>Deep tissue</strong> is slower and more targeted. The therapist works specific areas with sustained pressure, often on the knots that sit beside the shoulder blade or in the glutes. It is the better choice if you have one stubborn problem area.</p><p><strong>Thai massage</strong> is done on a mat, fully clothed, and is dominated by stretching and compression rather than oil. Balinese massage is done on a table, with oil, and is dominated by strokes and acupressure.</p><p><strong>Aromatherapy</strong> is the lightest option: same strokes, less pressure, more attention to scent and relaxation. If you want to fall asleep, pick aromatherapy. If you want to feel worked on, pick Balinese.</p>"
    },
    {
      "h2": "What a villa session looks like",
      html: "<p>The therapist arrives with a folding table, fresh sheets, towels and oil, and needs about ten to fifteen minutes to set up. A living room with the coffee table pushed aside, or a large bedroom, works well. Air conditioning on, phone on silent, and a power point within reach is all the preparation needed.</p><p>You stay covered by a sheet throughout; only the area being worked on is uncovered. Oil is used on the back, legs, arms and shoulders. If you have sunburn, say so at the start so the therapist can work around it or use less oil on the burned area.</p>"
    },
    {
      "h2": "How to get the right pressure",
      html: "<p>Balinese massage is normally medium-firm. Most therapists start lighter and build up over the first ten minutes, which is why first-time visitors often think the massage is too gentle and then change their mind halfway through.</p><p>Useful phrases: <em>more pressure</em>, <em>less pressure</em>, <em>lighter on the neck</em>, <em>please avoid my lower back</em>. Say it early. Therapists adjust immediately and it is far easier than enduring an hour and being sore the next day.</p>"
    },
    {
      "h2": "Where it is worth booking it",
      html: "<p>Balinese massage is the best all-round choice after a travel day, after a long week of surfing or hiking, or when you simply want a proper massage rather than a spa ritual. For a specific injury or a chronic problem, ask for deep tissue and tell the therapist where it hurts. For pregnancy, book a dedicated pregnancy massage, because positioning and pressure differ.</p><p>If you are staying in <a href=\"/areas/legian\">Legian</a> or <a href=\"/areas/seminyak\">Seminyak</a>, a villa session avoids the drive and the walk home afterwards, which is the part most people underestimate after a firm massage.</p>"
    },
    {
      "h2": "Aftercare that makes a difference",
      html: "<ul><li>Drink water for the rest of the day, especially if the pressure was firm.</li><li>Skip heavy exercise for a few hours; a gentle walk is fine.</li><li>Expect mild next-day soreness after a firm session. Sharp pain is not normal and is worth mentioning.</li><li>Shower before bed if you do not want oil on the sheets.</li></ul><p>Booking a 90-minute session rather than 60 makes a real difference with Balinese massage, because the technique is designed to cover the whole body at an even pace.</p>"
    }
  ],
  faqs: [
    {
      q: "Is Balinese massage painful?",
      a: "It should feel firm but not painful. The pressure builds gradually. If a stroke is sharp, tell the therapist to ease off; they will adjust without any awkwardness."
    },
    {
      q: "Do I need to be naked for a Balinese massage?",
      a: "No. You undress to the level you are comfortable with and stay under a sheet. Underwear can stay on."
    },
    {
      q: "How long should a Balinese massage be?",
      a: "Sixty minutes covers the body at a brisk pace. Ninety minutes is better because the technique includes work on feet, legs, back, shoulders, arms and head."
    },
    {
      q: "Is oil always used?",
      a: "Yes, Balinese massage uses oil. If you prefer less oil or no oil on your hair and face, say so at the start."
    },
    {
      q: "Can I book it at my hotel?",
      a: "Yes, in most Kuta, Legian and Seminyak hotels. Tell reception a therapist is arriving so security lets them through."
    }
  ],
  related: [
    "first-home-massage-kuta-what-to-expect",
    "massage-etiquette-bali-guide"
  ]
},
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
    related: ["first-home-massage-kuta-what-to-expect", "balinese-massage-complete-guide"],
  },
];
