# Structured Data Schema Implementation Guide

## Overview
This document explains the structured data (JSON-LD) implementation for Home Massage Kuta website, designed to enhance SEO and enable rich results in Google Search.

## Table of Contents
1. [Schema Types Implemented](#schema-types-implemented)
2. [Architecture & Components](#architecture--components)
3. [Configuration Management](#configuration-management)
4. [Page-by-Page Schema](#page-by-page-schema)
5. [Maintenance Guide](#maintenance-guide)
6. [Testing & Validation](#testing--validation)

---

## Schema Types Implemented

### 1. LocalBusiness Schema
**Purpose:** Represents the business entity (Home Massage Kuta) across all pages.

**Key Features:**
- `@id`: Unique identifier (`https://homemassagekuta.com/#localbusiness`)
- Complete NAP (Name, Address, Phone) information
- Opening hours specification (7 AM - 10 PM, 7 days/week)
- Geographic coordinates for location
- Service areas (Kuta, Legian, Seminyak, etc.)
- Social media profiles
- Aggregate rating (4.9/5 from 500+ reviews)
- Payment methods and price range

**Where:** Present on all public pages via `<StructuredData type="organization" />`

### 2. Service Schema
**Purpose:** Describes specific massage services offered.

**Key Features:**
- References LocalBusiness via `@id` for entity linking
- Service-specific descriptions and names
- Area served (specific to each page)
- Pricing information (when available)
- Availability status

**Where:** 
- Homepage: General service description
- Service pages: Massage-type specific (e.g., "Balinese Massage in Kuta")
- Area pages: Location-specific (e.g., "Home Massage Service in Legian")

### 3. Review Schema
**Purpose:** Marks up customer testimonials and ratings.

**Key Features:**
- Person schema for review authors
- Rating values (1-5 stars)
- Review body (actual testimonial text)
- Date published
- References LocalBusiness via `@id`

**Where:** 
- Homepage (with `includeReviews={true}`)
- Reviews page (with `includeReviews={true}`)

### 4. WebSite Schema
**Purpose:** Represents the website as a whole with search functionality.

**Key Features:**
- Potential search action
- Site name and URL

**Where:** Homepage only

### 5. BreadcrumbList Schema
**Purpose:** Navigation breadcrumbs for enhanced search results.

**Where:** All service and area landing pages

### 6. FAQPage Schema
**Purpose:** Marks up frequently asked questions (when applicable).

**Where:** FAQ page (configured separately)

---

## Architecture & Components

### Core Component: `StructuredData.tsx`
**Location:** `/src/components/seo/StructuredData.tsx`

**Props Interface:**
```typescript
interface StructuredDataProps {
  type?: "organization" | "service" | "faq" | "breadcrumb" | "website";
  data?: any;
  includeReviews?: boolean;
}
```

**Usage Examples:**
```tsx
// LocalBusiness only
<StructuredData type="organization" />

// LocalBusiness with reviews
<StructuredData type="organization" includeReviews={true} />

// Service with custom data
<StructuredData type="service" data={serviceSchemaData} />

// Website schema (homepage only)
<StructuredData type="website" />

// Breadcrumbs
<StructuredData type="breadcrumb" data={breadcrumbData} />
```

---

## Configuration Management

### Site Configuration
**Location:** `/src/config/site.ts`

**Purpose:** Central source of truth for all business information used in schema.

**Key Fields:**
- `name`: Business name
- `url`: Canonical website URL
- `phone`, `email`: Contact information
- `logo`: Logo URL
- `address`: Structured postal address object
- `geo`: Latitude and longitude
- `openingHours`: Operating hours specification
- `serviceAreas`: Array of served cities
- `socialMedia`: Social media profile URLs
- `aggregateRating`: Overall rating information

**Why Centralized?**
- Ensures NAP consistency across all schema
- Easy to update business information in one place
- Propagates changes automatically to all pages

### Review Data
**Location:** `/src/data/reviews.ts`

**Purpose:** Contains all customer testimonials used for Review schema.

**Structure:**
```typescript
export interface ReviewData {
  author: string;
  location: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}
```

**Guidelines:**
- Only add reviews that are visible on the website
- Include actual customer testimonials (no fabricated reviews)
- Keep rating consistent with displayed stars
- Update `aggregateRating` in SITE_CONFIG when adding/removing reviews

---

## Page-by-Page Schema

### Homepage (`/`)
**File:** `/src/pages/Index.tsx`

**Schema Included:**
1. LocalBusiness (with reviews)
2. WebSite (with search action)

**Code:**
```tsx
<StructuredData type="organization" includeReviews={true} />
<StructuredData type="website" />
```

### Service Pages (e.g., `/services/balinese-massage`)
**Template:** `/src/templates/MassageTypeLandingPage.tsx`

**Schema Included:**
1. LocalBusiness
2. BreadcrumbList
3. Service (specific to massage type)

**Dynamic Schema Generation:**
```tsx
const serviceSchemaData = {
  name: `${data.name} in Kuta - In-Villa Mobile Massage Service`,
  description: data.introText.substring(0, 200) + "...",
  serviceType: data.name,
  areaServed: ["Kuta", "Legian", "Tuban", "Seminyak"],
  offers: {
    priceRange: `${data.packages[0].price} - ${data.packages[last].price}`,
    priceCurrency: "IDR"
  }
};
```

### Service Area Pages (e.g., `/areas/legian`)
**Template:** `/src/templates/ServiceAreaLandingPage.tsx`

**Schema Included:**
1. LocalBusiness
2. BreadcrumbList
3. Service (specific to area)

**Dynamic Schema Generation:**
```tsx
const serviceSchemaData = {
  name: `Home Massage Service in ${data.name}`,
  description: data.introText.substring(0, 200) + "...",
  serviceType: "In-Villa Massage and Spa Services",
  areaServed: data.name,
  offers: {
    priceRange: "$$",
    priceCurrency: "IDR"
  }
};
```

### Reviews Page (`/reviews`)
**File:** `/src/pages/ReviewsPage.tsx`

**Schema Included:**
1. LocalBusiness (with reviews)
2. Service

### About Page (`/about`)
**File:** `/src/pages/AboutPage.tsx`

**Schema Included:**
1. LocalBusiness

### Services Overview (`/services`)
**File:** `/src/pages/Services.tsx`

**Schema Included:**
1. LocalBusiness
2. Service (general)

---

## Maintenance Guide

### Updating Business Information
**To update NAP (Name, Address, Phone) or other business details:**

1. Edit `/src/config/site.ts`
2. Update the relevant fields
3. Changes automatically propagate to all pages
4. Rebuild the site: `npm run build`
5. Verify changes in Google Rich Results Test

### Adding New Reviews
**To add new customer testimonials:**

1. Add review to `/src/data/reviews.ts`:
```typescript
{
  author: "Customer Name",
  location: "Country/City",
  rating: 5,
  reviewBody: "The actual testimonial text...",
  datePublished: "2024-11-20"
}
```

2. Update `aggregateRating` in `/src/config/site.ts`:
```typescript
aggregateRating: {
  ratingValue: "4.9",  // Update if needed
  reviewCount: "501",  // Increment count
  bestRating: "5"
}
```

3. Ensure the testimonial appears visually on the website (in Testimonials component)
4. Rebuild and test

### Adding New Service Pages
**When creating a new massage type or area page:**

1. Use existing templates:
   - For massage types: `MassageTypeLandingPage`
   - For areas: `ServiceAreaLandingPage`

2. Create data file in `/src/data/` (if using template)

3. Schema is automatically generated from the template

4. For custom pages, add schema manually:
```tsx
<StructuredData type="organization" />
<StructuredData type="service" data={customServiceData} />
```

### Updating Service Prices
**To update massage pricing:**

1. Update data in `/src/data/massageTypes.ts` or relevant data file
2. Price ranges automatically update in Service schema
3. Rebuild the site

---

## Testing & Validation

### Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

**Testing Procedure:**

1. **Homepage Test**
   - Enter: `https://homemassagekuta.com/`
   - Expected Results:
     - LocalBusiness detected ✓
     - 4 Reviews detected ✓
     - AggregateRating detected ✓
     - WebSite schema detected ✓

2. **Service Page Test** (Example: Balinese Massage)
   - Enter: `https://homemassagekuta.com/services/balinese-massage`
   - Expected Results:
     - LocalBusiness detected ✓
     - Service detected ✓
     - BreadcrumbList detected ✓

3. **Area Page Test** (Example: Legian)
   - Enter: `https://homemassagekuta.com/areas/legian`
   - Expected Results:
     - LocalBusiness detected ✓
     - Service detected ✓
     - BreadcrumbList detected ✓

4. **Reviews Page Test**
   - Enter: `https://homemassagekuta.com/reviews`
   - Expected Results:
     - LocalBusiness detected ✓
     - Reviews detected ✓
     - Service detected ✓

### Schema Markup Validator
**URL:** https://validator.schema.org/

**Alternative testing tool for JSON-LD validation**

### Manual Validation Checklist

✅ **NAP Consistency**
- [ ] Business name is consistent across all pages
- [ ] Address format is consistent
- [ ] Phone number format is consistent (international format)
- [ ] URL/website is consistent

✅ **LocalBusiness Schema**
- [ ] @id is present: `https://homemassagekuta.com/#localbusiness`
- [ ] All required fields present (name, address, telephone, url)
- [ ] Opening hours correctly formatted
- [ ] Service areas include all locations
- [ ] Social media profiles are valid URLs

✅ **Service Schema**
- [ ] Provider references LocalBusiness via @id
- [ ] Area served matches page content
- [ ] Service descriptions match visible page content
- [ ] Pricing information is accurate

✅ **Review Schema**
- [ ] Reviews match visible testimonials
- [ ] Review count matches actual testimonial count
- [ ] Rating values are correct (1-5 scale)
- [ ] AggregateRating is accurate

✅ **Technical**
- [ ] All JSON-LD is valid JSON (no syntax errors)
- [ ] No duplicate schema entities per page
- [ ] Schema appears in page <head> via React Helmet

---

## Common Issues & Solutions

### Issue: Schema not appearing in Google
**Solution:** 
- Check that JSON-LD is in the page source (view page source, search for "application/ld+json")
- Verify JSON is valid using validator.schema.org
- Request indexing via Google Search Console

### Issue: Review count mismatch
**Solution:**
- Count testimonials in `/src/data/reviews.ts`
- Update `reviewCount` in SITE_CONFIG
- Only count reviews that appear on pages with `includeReviews={true}`

### Issue: NAP inconsistency warning
**Solution:**
- Use SITE_CONFIG as single source of truth
- Verify phone number format (use international format: +62 XXX-XXXX-XXX)
- Check address structure matches PostalAddress schema requirements

### Issue: Service schema not specific enough
**Solution:**
- Provide custom `data` prop to StructuredData component
- Include specific service names, areas, and pricing
- Reference page content in descriptions

---

## Best Practices

1. **Never fabricate reviews** - Only mark up actual customer testimonials
2. **Keep NAP consistent** - Always use SITE_CONFIG values
3. **Test after changes** - Use Google Rich Results Test after major updates
4. **Match visible content** - Schema should reflect what users see on the page
5. **Use @id references** - Link entities properly for knowledge graph
6. **Update aggregate ratings** - Keep in sync with actual review count
7. **Specific service names** - Use descriptive, unique service names per page
8. **Document changes** - Update this guide when adding new schema types

---

## Resources

- **Schema.org Documentation:** https://schema.org/
- **Google Structured Data Guidelines:** https://developers.google.com/search/docs/appearance/structured-data
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **LocalBusiness Schema:** https://schema.org/LocalBusiness
- **Service Schema:** https://schema.org/Service
- **Review Schema:** https://schema.org/Review

---

## Support & Questions

For questions about schema implementation or updates:
1. Review this documentation
2. Check existing schema in `/src/components/seo/StructuredData.tsx`
3. Verify configuration in `/src/config/site.ts`
4. Test changes with Google Rich Results Test before deploying

---

*Last Updated: November 2024*
*Version: 1.0*
