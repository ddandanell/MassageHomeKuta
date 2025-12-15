# Design System Documentation

## Overview

This design system ensures consistency across the entire Home Massage Kuta website. All design decisions follow the principles of **consistency over creativity**, **clarity over cleverness**, and **actions before aesthetics**.

## Core Principles

1. **Consistency over creativity** - Use established patterns everywhere
2. **Clarity over cleverness** - Users should never be confused
3. **Actions before aesthetics** - CTAs and navigation are prioritized
4. **Fewer patterns, reused everywhere** - Limited set of well-defined components
5. **System should feel intentional, calm, and professional**

## Usage

Import the design system constants in your components:

```typescript
import { DESIGN_SYSTEM, generateWhatsAppUrl, generateBreadcrumbs } from "@/config/designSystem";
import { SITE_CONFIG } from "@/config/site";
```

## Color Palette & Gradients

### Hero Section Gradients

All hero sections should use one of these standardized gradients:

- **Primary** (`from-emerald-600 to-teal-600`): Main pages (Home, Services)
- **Secondary** (`from-teal-600 to-cyan-600`): Secondary pages (About, Reviews, FAQ)
- **Service** (`from-emerald-700 to-teal-700`): Service-specific pages
- **Area** (`from-teal-700 to-cyan-700`): Area-specific pages

```tsx
<section className={`relative ${DESIGN_SYSTEM.spacing.hero} text-white overflow-hidden`}>
  <div className={`absolute inset-0 bg-gradient-to-br ${DESIGN_SYSTEM.heroGradients.primary} opacity-90`}></div>
  {/* Content */}
</section>
```

### Section Backgrounds

Use these standardized section backgrounds:

- **White/Background**: `bg-background` - Clean white sections
- **Cream**: `bg-spa-cream/30` - Subtle alternating sections
- **Professional Gradient**: `bg-gradient-professional` - CTA sections
- **Accent Gradient**: `bg-gradient-accent` - Special sections

```tsx
<section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.cream}`}>
  {/* Content */}
</section>
```

## Spacing

### Section Padding

Consistent vertical spacing for all sections:

- **Hero**: `py-32 md:py-40` - Hero sections
- **Section**: `py-16` - Standard content sections
- **Section Large**: `py-20` - Emphasized sections
- **Section Small**: `py-12` - Compact sections

```tsx
<section className={DESIGN_SYSTEM.spacing.section}>
  <div className={DESIGN_SYSTEM.spacing.container}>
    {/* Content */}
  </div>
</section>
```

### Container

Always use the standard container pattern:

```tsx
<div className={DESIGN_SYSTEM.spacing.container}>
  {/* container mx-auto px-4 */}
</div>
```

## Typography

### Heading Sizes

```tsx
// Hero Title
<h1 className={DESIGN_SYSTEM.typography.heroTitle}>
  {/* text-4xl md:text-6xl font-bold */}
</h1>

// Hero Subtitle
<p className={DESIGN_SYSTEM.typography.heroSubtitle}>
  {/* text-xl md:text-2xl */}
</p>

// Section Title
<h2 className={DESIGN_SYSTEM.typography.sectionTitle}>
  {/* text-4xl md:text-5xl font-bold */}
</h2>

// Subsection Title
<h3 className={DESIGN_SYSTEM.typography.subsectionTitle}>
  {/* text-3xl font-bold */}
</h3>

// Card Title
<h4 className={DESIGN_SYSTEM.typography.cardTitle}>
  {/* text-xl font-semibold */}
</h4>
```

## Buttons & CTAs

### Button Variants

Use shadcn/ui button variants consistently:

```tsx
// Primary CTA - Primary actions (Book Now)
<Button 
  asChild 
  size="lg" 
  className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-semibold shadow-xl"
>
  <a href={url}>{DESIGN_SYSTEM.ctaText.bookNow}</a>
</Button>

// WhatsApp Button
<Button variant="whatsapp" size="lg">
  <MessageCircle className={DESIGN_SYSTEM.iconSizes.medium} />
  {DESIGN_SYSTEM.ctaText.bookWhatsApp}
</Button>

// Secondary Button
<Button variant="outline" size="lg">
  {DESIGN_SYSTEM.ctaText.viewServices}
</Button>

// Professional Style
<Button variant="professional" size="lg">
  {/* Professional gradient background */}
</Button>
```

### CTA Text Standards

Always use standardized terminology:

- **Book Now** - Primary booking action
- **Book via WhatsApp** - WhatsApp booking
- **View All Services** - Navigate to services
- **View Service Areas** - Navigate to areas
- **Learn More** - General info pages
- **Contact Us** - Contact actions
- **Call Now** - Phone actions

```tsx
<Button>{DESIGN_SYSTEM.ctaText.bookNow}</Button>
```

## Icons

### Icon Sizes

Consistent icon sizing across the application:

```tsx
// Small (w-4 h-4) - In buttons, inline text
<Clock className={DESIGN_SYSTEM.iconSizes.small} />

// Medium (w-5 h-5) - Standard icons
<MessageCircle className={DESIGN_SYSTEM.iconSizes.medium} />

// Large (w-6 h-6) - Emphasized icons
<CheckCircle className={DESIGN_SYSTEM.iconSizes.large} />

// XLarge (w-8 h-8) - Hero/feature icons
<MapPin className={DESIGN_SYSTEM.iconSizes.xlarge} />
```

## Cards

### Card Styles

```tsx
// Standard Card
<Card className={DESIGN_SYSTEM.cardStyles.standard}>
  {/* bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300 */}
</Card>

// Popular/Featured Card
<Card className={DESIGN_SYSTEM.cardStyles.popular}>
  {/* Standard + ring-2 ring-spa-gold */}
</Card>
```

## Badges

```tsx
// Popular Badge
<Badge className={DESIGN_SYSTEM.badgeStyles.popular}>
  Most Popular
</Badge>

// Available Badge
<Badge className={DESIGN_SYSTEM.badgeStyles.available}>
  {DESIGN_SYSTEM.availabilityBadge}
</Badge>

// Highlight Badge
<Badge className={DESIGN_SYSTEM.badgeStyles.highlight}>
  Professional Service
</Badge>
```

## Common Patterns

### Hero Section Pattern

```tsx
<section className={`relative ${DESIGN_SYSTEM.spacing.hero} text-white overflow-hidden`}>
  <div className="absolute inset-0">
    <img src="/images/hero/hero-1.jpg" alt="" className="w-full h-full object-cover" />
    <div className={`absolute inset-0 bg-gradient-to-br ${DESIGN_SYSTEM.heroGradients.primary} opacity-90`}></div>
  </div>
  <div className={`relative ${DESIGN_SYSTEM.spacing.container} text-center z-10`}>
    <h1 className={`${DESIGN_SYSTEM.typography.heroTitle} mb-6`}>
      Hero Title
    </h1>
    <p className={`${DESIGN_SYSTEM.typography.heroSubtitle} mb-8 max-w-4xl mx-auto opacity-95`}>
      Hero subtitle text
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* CTA Buttons */}
    </div>
  </div>
</section>
```

### Standard Content Section Pattern

```tsx
<section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.white}`}>
  <div className={DESIGN_SYSTEM.spacing.container}>
    <h2 className={`${DESIGN_SYSTEM.typography.sectionTitle} text-spa-earth text-center mb-12`}>
      Section Title
    </h2>
    {/* Content */}
  </div>
</section>
```

### CTA Section Pattern

```tsx
<section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.gradient} text-primary-foreground`}>
  <div className={`${DESIGN_SYSTEM.spacing.container} text-center`}>
    <h2 className={`${DESIGN_SYSTEM.typography.sectionTitle} mb-6`}>
      Ready to Book?
    </h2>
    <p className={`${DESIGN_SYSTEM.typography.bodyLarge} mb-8`}>
      Description text
    </p>
    <Button size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
      {DESIGN_SYSTEM.ctaText.bookWhatsApp}
    </Button>
  </div>
</section>
```

## Utilities

### WhatsApp URL Generation

```tsx
const whatsappMessage = "Hi! I'd like to book a massage service.";
const whatsappUrl = generateWhatsAppUrl(whatsappMessage, SITE_CONFIG.whatsapp);
```

### Breadcrumb Generation

```tsx
const breadcrumbData = generateBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Balinese Massage", path: "/services/balinese-massage" }
]);
```

## Required Components

Every page should include:

1. **SiteMeta** - SEO meta tags (use once, not with Helmet)
2. **StructuredData** - Schema.org structured data
3. **Header** - Site navigation
4. **Footer** - Site footer
5. **FloatingWhatsAppButton** - Floating WhatsApp CTA (required on ALL pages)

```tsx
const Page = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Page Title"
        description="Page description"
        keywords="keywords"
        canonical="/page-url"
      />
      <StructuredData type="organization" />
      
      <Header />
      
      <main>
        {/* Page content */}
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};
```

## Social Proof Elements

Use standardized social proof text:

```tsx
// Rating
{DESIGN_SYSTEM.socialProof.rating} // "4.9/5 Rating"

// Clients
{DESIGN_SYSTEM.socialProof.clients} // "500+ Happy Clients"

// Response Time
{DESIGN_SYSTEM.socialProof.responseTime} // "15 Min Response"

// Same Day Service
{DESIGN_SYSTEM.socialProof.sameDayService} // "Same Day Service"
```

## Availability Display

```tsx
// Full text
{DESIGN_SYSTEM.availabilityText} // "Available 07:00 – 22:00 Daily"

// Badge text
{DESIGN_SYSTEM.availabilityBadge} // "Available Now"
```

## Don'ts

❌ **Don't** create custom gradients - use design system gradients
❌ **Don't** use inconsistent spacing - use design system spacing
❌ **Don't** create custom button styles - use variants
❌ **Don't** mix Helmet and SiteMeta - use only SiteMeta
❌ **Don't** forget FloatingWhatsAppButton on any page
❌ **Don't** use different CTA terminology - use design system text
❌ **Don't** create custom card styles - use design system cards

## Migration Checklist

When updating an existing page:

- [ ] Replace hero gradient with design system gradient
- [ ] Update section spacing to use design system
- [ ] Replace inline button styles with design system patterns
- [ ] Use standardized CTA text
- [ ] Remove Helmet if using SiteMeta
- [ ] Add FloatingWhatsAppButton if missing
- [ ] Use design system typography classes
- [ ] Use design system icon sizes
- [ ] Use design system card styles
- [ ] Use design system section backgrounds

## Questions?

If you're unsure about a pattern or need to add something new to the design system, consult this documentation first and ensure any new patterns maintain the core principles of consistency, clarity, and professionalism.
