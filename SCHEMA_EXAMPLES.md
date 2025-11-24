# Example JSON-LD Schema Outputs

This file contains example JSON-LD outputs for each schema type implemented on the website. Use these for quick reference or manual testing.

---

## 1. LocalBusiness Schema (Without Reviews)

**Used on:** Most pages (About, Services overview, etc.)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://homemassagekuta.com/#localbusiness",
  "name": "Home Massage Kuta",
  "description": "Kuta's premier home massage service. Professional therapists bring spa-quality treatments to your villa or hotel. Same-day booking available. Licensed, certified, and trusted by 500+ clients.",
  "url": "https://homemassagekuta.com",
  "image": "https://homemassagekuta.com/logo.svg",
  "telephone": "+62 811-2656-869",
  "email": "info@homemassagekuta.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kuta Beach Area",
    "addressLocality": "Kuta",
    "addressRegion": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-8.7203",
    "longitude": "115.1672"
  },
  "areaServed": [
    {"@type": "City", "name": "Kuta"},
    {"@type": "City", "name": "Seminyak"},
    {"@type": "City", "name": "Legian"},
    {"@type": "City", "name": "Canggu"},
    {"@type": "City", "name": "Jimbaran"},
    {"@type": "City", "name": "Nusa Dua"},
    {"@type": "City", "name": "Tuban"}
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "22:00"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "IDR",
  "sameAs": [
    "https://instagram.com/homemassagekuta",
    "https://facebook.com/homemassagekuta",
    "https://wa.me/6281126568369"
  ]
}
```

---

## 2. LocalBusiness Schema (With Reviews)

**Used on:** Homepage, Reviews Page

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://homemassagekuta.com/#localbusiness",
  "name": "Home Massage Kuta",
  "description": "Kuta's premier home massage service. Professional therapists bring spa-quality treatments to your villa or hotel. Same-day booking available. Licensed, certified, and trusted by 500+ clients.",
  "url": "https://homemassagekuta.com",
  "image": "https://homemassagekuta.com/logo.svg",
  "telephone": "+62 811-2656-869",
  "email": "info@homemassagekuta.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kuta Beach Area",
    "addressLocality": "Kuta",
    "addressRegion": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-8.7203",
    "longitude": "115.1672"
  },
  "areaServed": [
    {"@type": "City", "name": "Kuta"},
    {"@type": "City", "name": "Seminyak"},
    {"@type": "City", "name": "Legian"},
    {"@type": "City", "name": "Canggu"},
    {"@type": "City", "name": "Jimbaran"},
    {"@type": "City", "name": "Nusa Dua"},
    {"@type": "City", "name": "Tuban"}
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "22:00"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "IDR",
  "sameAs": [
    "https://instagram.com/homemassagekuta",
    "https://facebook.com/homemassagekuta",
    "https://wa.me/6281126568369"
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Anna & James"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "We booked a couples massage in our villa, and it was the best decision of our trip. The therapists were on time, professional, and created such a calming environment. It felt like having a luxury spa in our living room!",
      "datePublished": "2024-10-15",
      "itemReviewed": {
        "@id": "https://homemassagekuta.com/#localbusiness"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mark"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "After five days of surfing, my back and shoulders were destroyed. I booked a deep tissue massage at my guesthouse, and it was incredible. The therapist knew exactly how to target the sore spots. Highly recommend for surfers.",
      "datePublished": "2024-10-20",
      "itemReviewed": {
        "@id": "https://homemassagekuta.com/#localbusiness"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sofia"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I work online and spend 8+ hours at my laptop. The aromatherapy massage helped release all the tension in my neck and lower back. The therapist was so kind, and I loved that I didn't have to leave my apartment.",
      "datePublished": "2024-11-01",
      "itemReviewed": {
        "@id": "https://homemassagekuta.com/#localbusiness"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Michael & Laura"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "We booked the four-hands massage in our villa for our honeymoon. Two therapists worked in perfect sync, and it was pure bliss. Better than any spa we've ever been to.",
      "datePublished": "2024-11-10",
      "itemReviewed": {
        "@id": "https://homemassagekuta.com/#localbusiness"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5"
  }
}
```

---

## 3. Service Schema - Massage Type Specific

**Used on:** Balinese Massage, Deep Tissue, etc.

**Example: Balinese Massage**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Balinese Massage in Kuta - In-Villa Mobile Massage Service",
  "description": "Looking for the best Balinese massage in Kuta? Our licensed mobile therapists bring professional equipment and authentic Balinese healing techniques directly to your villa or hotel...",
  "serviceType": "Balinese Massage",
  "provider": {
    "@id": "https://homemassagekuta.com/#localbusiness"
  },
  "areaServed": [
    {"@type": "City", "name": "Kuta"},
    {"@type": "City", "name": "Legian"},
    {"@type": "City", "name": "Tuban"},
    {"@type": "City", "name": "Seminyak"}
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "IDR",
    "priceRange": "IDR 350,000 - IDR 650,000",
    "url": "https://homemassagekuta.com"
  }
}
```

---

## 4. Service Schema - Area Specific

**Used on:** Kuta Area, Legian Area, etc.

**Example: Kuta Area**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Massage Service in Kuta Area",
  "description": "Professional in-villa massage service covering all areas of Kuta, Bali. Fast response times, certified therapists, and premium spa treatments delivered to your location.",
  "serviceType": "In-Villa Massage and Spa Services",
  "provider": {
    "@id": "https://homemassagekuta.com/#localbusiness"
  },
  "areaServed": {
    "@type": "City",
    "name": "Kuta"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "IDR",
    "priceRange": "$$",
    "url": "https://homemassagekuta.com"
  }
}
```

---

## 5. Service Schema - General

**Used on:** Services overview page

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional In-Villa Massage Service",
  "description": "Premium massage therapy delivered to your villa or hotel in Kuta, Bali",
  "serviceType": "Massage Therapy",
  "provider": {
    "@id": "https://homemassagekuta.com/#localbusiness"
  },
  "areaServed": [
    {"@type": "City", "name": "Kuta"},
    {"@type": "City", "name": "Seminyak"},
    {"@type": "City", "name": "Legian"},
    {"@type": "City", "name": "Canggu"},
    {"@type": "City", "name": "Jimbaran"},
    {"@type": "City", "name": "Nusa Dua"},
    {"@type": "City", "name": "Tuban"}
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "IDR",
    "url": "https://homemassagekuta.com"
  }
}
```

---

## 6. WebSite Schema

**Used on:** Homepage only

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Home Massage Kuta",
  "url": "https://homemassagekuta.com"
}
```

---

## 7. BreadcrumbList Schema

**Used on:** Service and area landing pages

**Example: Balinese Massage**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://homemassagekuta.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://homemassagekuta.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Balinese Massage",
      "item": "https://homemassagekuta.com/services/balinese-massage"
    }
  ]
}
```

**Example: Kuta Area**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://homemassagekuta.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Service Areas",
      "item": "https://homemassagekuta.com/areas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Kuta Area",
      "item": "https://homemassagekuta.com/areas/kuta"
    }
  ]
}
```

---

## Testing These Examples

### Method 1: Copy to Schema Validator
1. Go to https://validator.schema.org/
2. Copy any example above
3. Paste into the validator
4. Click "Validate"
5. Should show "No errors found"

### Method 2: Copy to Rich Results Test
1. Go to https://search.google.com/test/rich-results
2. Click "Code" tab
3. Paste the example
4. Click "Test Code"
5. Review detected structured data

---

## Notes on Multiple Schema Per Page

Some pages have multiple schema blocks:

**Homepage has:**
- LocalBusiness (with reviews)
- WebSite

**Service pages have:**
- LocalBusiness
- BreadcrumbList
- Service (specific to page)

**All schemas coexist in separate `<script type="application/ld+json">` blocks in the page `<head>`.**

---

## Schema Relationships

```
LocalBusiness (@id: .../#localbusiness)
  ↓ (referenced by)
Service (provider: {@id: .../#localbusiness})
  
LocalBusiness
  ↓ (contains)
Review (itemReviewed: {@id: .../#localbusiness})
  ↓ (contains)
Rating
```

This entity linking helps Google understand relationships between your business, services, and reviews.

---

*Last Updated: November 2024*  
*All examples use actual data from SITE_CONFIG*
