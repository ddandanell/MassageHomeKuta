# Google Rich Results Testing Checklist

This checklist helps verify that structured data is properly implemented and eligible for rich results in Google Search.

## Testing Tool
**Google Rich Results Test:** https://search.google.com/test/rich-results

## How to Test

### Option 1: Test Live URLs
1. Go to Google Rich Results Test
2. Enter the full URL (e.g., `https://homemassagekuta.com/`)
3. Click "Test URL"
4. Review detected structured data

### Option 2: Test Code Directly
1. Go to Google Rich Results Test
2. Click "Code" tab
3. Copy-paste the JSON-LD from the sections below
4. Click "Test Code"
5. Verify no errors

---

## Page-by-Page Testing Checklist

### ✅ 1. Homepage (`/`)

**URL to Test:** `https://homemassagekuta.com/`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ Review (4 reviews)
- ✓ AggregateRating (4.9★, 500 reviews)
- ✓ WebSite with SearchAction

**Key Validations:**
- [ ] Business name: "Home Massage Kuta"
- [ ] Address: Kuta, Bali, Indonesia
- [ ] Phone: +62 811-2656-869
- [ ] Opening Hours: Mo-Su 07:00-22:00
- [ ] 4 reviews with ratings
- [ ] Aggregate rating: 4.9/5
- [ ] No errors or warnings

**Example JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://homemassagekuta.com/#localbusiness",
  "name": "Home Massage Kuta",
  "url": "https://homemassagekuta.com",
  "telephone": "+62 811-2656-869",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kuta Beach Area",
    "addressLocality": "Kuta",
    "addressRegion": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  },
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
      "reviewBody": "We booked a couples massage..."
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

### ✅ 2. Reviews Page (`/reviews`)

**URL to Test:** `https://homemassagekuta.com/reviews`

**Expected Structured Data:**
- ✓ LocalBusiness with Reviews
- ✓ Service

**Key Validations:**
- [ ] LocalBusiness with 4 reviews
- [ ] Each review has author, rating, and body
- [ ] Service schema present
- [ ] No duplicate LocalBusiness entities

---

### ✅ 3. Services Overview (`/services`)

**URL to Test:** `https://homemassagekuta.com/services`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ Service (general)

**Key Validations:**
- [ ] Service provider references LocalBusiness
- [ ] Service type: "Massage Therapy"
- [ ] Area served includes Kuta, Legian, etc.
- [ ] Offers with availability

---

### ✅ 4. Balinese Massage Page (`/services/balinese-massage`)

**URL to Test:** `https://homemassagekuta.com/services/balinese-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList (3 items)
- ✓ Service (Balinese Massage specific)

**Key Validations:**
- [ ] Service name: "Balinese Massage in Kuta - In-Villa Mobile Massage Service"
- [ ] Service type: "Balinese Massage"
- [ ] Area served: Kuta, Legian, Tuban, Seminyak
- [ ] Pricing information present
- [ ] Breadcrumbs: Home → Services → Balinese Massage

**Example Service Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Balinese Massage in Kuta - In-Villa Mobile Massage Service",
  "serviceType": "Balinese Massage",
  "provider": {
    "@id": "https://homemassagekuta.com/#localbusiness"
  },
  "areaServed": [
    {"@type": "City", "name": "Kuta"},
    {"@type": "City", "name": "Legian"}
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "IDR",
    "priceRange": "IDR 350,000 - IDR 650,000"
  }
}
```

---

### ✅ 5. Deep Tissue Massage Page (`/services/deep-tissue-massage`)

**URL to Test:** `https://homemassagekuta.com/services/deep-tissue-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Deep Tissue specific)

**Key Validations:**
- [ ] Service type: "Deep Tissue Massage"
- [ ] Service description matches page content
- [ ] Provider links to LocalBusiness via @id

---

### ✅ 6. Aromatherapy Massage Page (`/services/aromatherapy-massage`)

**URL to Test:** `https://homemassagekuta.com/services/aromatherapy-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Aromatherapy specific)

**Key Validations:**
- [ ] Service type: "Aromatherapy Massage"
- [ ] All service pages follow same schema pattern

---

### ✅ 7. Thai Massage Page (`/services/thai-massage`)

**URL to Test:** `https://homemassagekuta.com/services/thai-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Thai Massage specific)

---

### ✅ 8. Hot Stone Massage Page (`/services/hot-stone-massage`)

**URL to Test:** `https://homemassagekuta.com/services/hot-stone-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Hot Stone specific)

---

### ✅ 9. Four Hands Massage Page (`/services/four-hands-massage`)

**URL to Test:** `https://homemassagekuta.com/services/four-hands-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Four Hands specific)

---

### ✅ 10. Pregnancy Massage Page (`/services/pregnancy-massage`)

**URL to Test:** `https://homemassagekuta.com/services/pregnancy-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Pregnancy Massage specific)

---

### ✅ 11. Foot Reflexology Page (`/services/foot-reflexology`)

**URL to Test:** `https://homemassagekuta.com/services/foot-reflexology`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Foot Reflexology specific)

---

### ✅ 12. Lymphatic Drainage Page (`/services/lymphatic-drainage-massage`)

**URL to Test:** `https://homemassagekuta.com/services/lymphatic-drainage-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Lymphatic Drainage specific)

---

### ✅ 13. Jet Lag Recovery Page (`/services/jet-lag-recovery-massage`)

**URL to Test:** `https://homemassagekuta.com/services/jet-lag-recovery-massage`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Jet Lag Recovery specific)

---

### ✅ 14. Kuta Area Page (`/areas/kuta`)

**URL to Test:** `https://homemassagekuta.com/areas/kuta`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Area-specific)

**Key Validations:**
- [ ] Service name: "Home Massage Service in Kuta Area"
- [ ] Area served: "Kuta"
- [ ] Breadcrumbs: Home → Service Areas → Kuta Area

**Example Area Service Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Massage Service in Kuta Area",
  "serviceType": "In-Villa Massage and Spa Services",
  "provider": {
    "@id": "https://homemassagekuta.com/#localbusiness"
  },
  "areaServed": {
    "@type": "City",
    "name": "Kuta"
  }
}
```

---

### ✅ 15. Legian Area Page (`/areas/legian`)

**URL to Test:** `https://homemassagekuta.com/areas/legian`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Legian-specific)

**Key Validations:**
- [ ] Area served: "Legian"

---

### ✅ 16. Seminyak Area Page (`/areas/seminyak`)

**URL to Test:** `https://homemassagekuta.com/areas/seminyak`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Seminyak-specific)

---

### ✅ 17. Tuban Area Page (`/areas/tuban`)

**URL to Test:** `https://homemassagekuta.com/areas/tuban`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Tuban-specific)

---

### ✅ 18. Kuta Beachfront Area Page (`/areas/kuta-beachfront`)

**URL to Test:** `https://homemassagekuta.com/areas/kuta-beachfront`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Kuta Beachfront-specific)

---

### ✅ 19. Kuta Central Area Page (`/areas/kuta-central`)

**URL to Test:** `https://homemassagekuta.com/areas/kuta-central`

**Expected Structured Data:**
- ✓ LocalBusiness
- ✓ BreadcrumbList
- ✓ Service (Kuta Central-specific)

---

### ✅ 20. About Page (`/about`)

**URL to Test:** `https://homemassagekuta.com/about`

**Expected Structured Data:**
- ✓ LocalBusiness

**Key Validations:**
- [ ] LocalBusiness only (no reviews on this page)
- [ ] All NAP information consistent

---

## Common Validation Checks

### For All Pages:
- [ ] No critical errors
- [ ] LocalBusiness has @id property
- [ ] Phone number in international format: +62 811-2656-869
- [ ] Address is complete and consistent
- [ ] URL matches canonical URL
- [ ] No duplicate entities

### For Service Pages:
- [ ] Service provider uses @id reference
- [ ] Service description matches page content
- [ ] Area served matches page focus
- [ ] Pricing (if present) is accurate

### For Area Pages:
- [ ] Area served matches page title
- [ ] Service name includes area name
- [ ] Breadcrumbs include correct area

### For Pages with Reviews:
- [ ] Review count matches aggregateRating
- [ ] Each review has author, rating, body
- [ ] Reviews match visible testimonials
- [ ] Rating values are 1-5 scale

---

## Expected Rich Results Eligibility

### LocalBusiness Rich Results
**Eligible on:** All pages

**Visible in Search:**
- Business name
- Address
- Phone number
- Opening hours
- Star rating (on pages with reviews)

### Review Snippets
**Eligible on:** Homepage, Reviews page

**Visible in Search:**
- Star rating
- Review count
- Individual review excerpts

### Breadcrumbs
**Eligible on:** Service and area landing pages

**Visible in Search:**
- Navigation breadcrumb trail in search results

---

## Testing Priority

### High Priority (Test First):
1. ✅ Homepage - Most important for brand search
2. ✅ Reviews Page - Showcases testimonials
3. ✅ Balinese Massage - Highest traffic service page
4. ✅ Kuta Area - Primary service area

### Medium Priority:
5-13. All other service pages
14-19. All other area pages

### Lower Priority:
20. About Page
21. Other info pages

---

## Troubleshooting

### If Schema Not Detected:
1. View page source (right-click → View Page Source)
2. Search for "application/ld+json"
3. Verify JSON is present in the HTML
4. Copy JSON to https://validator.schema.org
5. Fix any JSON syntax errors

### If Errors Appear:
- **Missing required property:** Add the property to SITE_CONFIG or component
- **Invalid format:** Check Schema.org documentation for correct format
- **Duplicate entities:** Ensure only one LocalBusiness per page

### If Warnings Appear:
- **Recommended property missing:** Consider adding if applicable
- **URL mismatch:** Verify canonical URLs match
- **Phone format:** Use international format (+country code)

---

## Post-Testing Actions

After testing all pages:

1. **Document Issues:**
   - [ ] List any errors found
   - [ ] Note which pages have issues
   - [ ] Prioritize fixes

2. **Fix Critical Errors:**
   - [ ] Syntax errors in JSON
   - [ ] Missing required properties
   - [ ] Incorrect data types

3. **Address Warnings:**
   - [ ] Add recommended properties
   - [ ] Improve descriptions
   - [ ] Add missing images

4. **Request Indexing:**
   - [ ] Submit updated URLs to Google Search Console
   - [ ] Request re-crawl for updated pages

5. **Monitor Results:**
   - [ ] Check Google Search Console for structured data reports
   - [ ] Monitor search appearance over time
   - [ ] Track click-through rates

---

## Regular Maintenance

**Monthly:**
- [ ] Test homepage and top 5 service pages
- [ ] Verify review count matches actual testimonials
- [ ] Check for new errors in Search Console

**Quarterly:**
- [ ] Test all pages
- [ ] Update documentation if schema changes
- [ ] Review and update pricing information

**When Content Changes:**
- [ ] Test affected pages immediately
- [ ] Verify new content is marked up correctly
- [ ] Update schema if services/areas change

---

## Success Criteria

Schema implementation is successful when:

✅ All tested pages show "Valid" in Rich Results Test  
✅ No critical errors on any page  
✅ LocalBusiness detected on all public pages  
✅ Reviews properly marked up (homepage, reviews page)  
✅ Service schema specific to each page's content  
✅ Breadcrumbs appear on service/area pages  
✅ NAP information consistent across all pages  
✅ Rich results appear in Google Search (allow 2-4 weeks)  

---

*Last Updated: November 2024*
*Test all pages after any schema changes*
