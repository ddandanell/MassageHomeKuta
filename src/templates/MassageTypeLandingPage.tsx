import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, Users, CheckCircle, ArrowRight } from "lucide-react";
import { MassageTypeData } from "@/types/landingPageTypes";
import { Link } from "react-router-dom";
import { DESIGN_SYSTEM, generateWhatsAppUrl, generateBreadcrumbs } from "@/config/designSystem";
import { SITE_CONFIG } from "@/config/site";

interface MassageTypeLandingPageProps {
  data: MassageTypeData;
}

const MassageTypeLandingPage = ({ data }: MassageTypeLandingPageProps) => {
  const whatsappMessage = `Hi! I'd like to book a ${data.name} service in Kuta. Can you help me with availability?`;
  const whatsappUrl = generateWhatsAppUrl(whatsappMessage, SITE_CONFIG.whatsapp);

  const breadcrumbData = generateBreadcrumbs([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: data.name, path: `/services/${data.slug}` }
  ]);

  // Create service-specific schema data
  const serviceSchemaData = {
    name: `${data.name} in Kuta - In-Villa Mobile Massage Service`,
    description: data.introText ? data.introText.substring(0, 200) + "..." : `Professional ${data.name} delivered to your villa or hotel in Kuta, Bali.`,
    serviceType: data.name,
    areaServed: ["Kuta", "Legian", "Tuban", "Seminyak"],
    offers: {
      priceRange: data.packages && data.packages.length > 1
        ? `${data.packages[0].price} - ${data.packages[data.packages.length - 1].price}`
        : "$$",
      priceCurrency: "IDR"
    }
  };

  return (
    <div className="min-h-screen">
      <SiteMeta
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={data.keywords}
        canonical={`/services/${data.slug}`}
      />

      <StructuredData type="organization" />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="service" data={serviceSchemaData} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className={`relative ${DESIGN_SYSTEM.spacing.hero} text-white overflow-hidden`}>
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-2.jpg"
              alt={`Professional ${data.name} massage treatment session in Kuta, Bali`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${DESIGN_SYSTEM.heroGradients.service} opacity-90 backdrop-blur-[2px]`}></div>
          </div>
          <div className={`relative ${DESIGN_SYSTEM.spacing.container} text-center z-10`}>
            <Badge className={`${DESIGN_SYSTEM.badgeStyles.highlight} mb-6`}>
              {DESIGN_SYSTEM.badgeText.professionalService}
            </Badge>
            <h1 className={`${DESIGN_SYSTEM.typography.heroTitle} mb-6 drop-shadow-lg`}>
              {data.heroTitle}
            </h1>
            <p className={`${DESIGN_SYSTEM.typography.heroSubtitle} mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md`}>
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className={`${DESIGN_SYSTEM.iconSizes.medium} mr-2`} />
                  {DESIGN_SYSTEM.ctaText.bookWhatsApp}
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className={DESIGN_SYSTEM.iconSizes.small} />
                <span>{DESIGN_SYSTEM.availabilityText}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Intro */}
        <section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.white}`}>
          <div className={`${DESIGN_SYSTEM.spacing.container} max-w-4xl`}>
            <p className={`${DESIGN_SYSTEM.typography.bodyLarge} text-spa-stone leading-relaxed`}>
              {data.introText}
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.cream}`}>
          <div className={DESIGN_SYSTEM.spacing.container}>
            <h2 className={`${DESIGN_SYSTEM.typography.sectionTitle} text-spa-earth text-center mb-12`}>
              Key Benefits of {data.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.benefits.map((benefit, index) => (
                <Card key={index} className={DESIGN_SYSTEM.cardStyles.standard}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className={`${DESIGN_SYSTEM.iconSizes.large} text-spa-gold flex-shrink-0 mt-1`} />
                      <p className="text-spa-earth font-medium">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques & Ideal For */}
        <section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.white}`}>
          <div className={DESIGN_SYSTEM.spacing.container}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Techniques */}
              <div>
                <h3 className="text-3xl font-bold text-spa-earth mb-6">
                  Techniques Used
                </h3>
                <ul className="space-y-3">
                  {data.techniques.map((technique, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                      <span className="text-spa-stone">{technique}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div>
                <h3 className="text-3xl font-bold text-spa-earth mb-6">
                  Ideal For
                </h3>
                <ul className="space-y-3">
                  {data.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                      <span className="text-spa-stone">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pressure Levels */}
            {data.pressureLevels.length > 0 && (
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-spa-earth mb-6 text-center">
                  Pressure Level Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.pressureLevels.map((level, index) => (
                    <div key={index} className="bg-spa-cream/50 rounded-lg p-4 text-center">
                      <p className="text-spa-earth font-semibold">{level}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Service Area Mention */}
        <section className={`${DESIGN_SYSTEM.spacing.sectionSmall} bg-gradient-to-r ${DESIGN_SYSTEM.heroGradients.primary} text-white`}>
          <div className={`${DESIGN_SYSTEM.spacing.container} text-center`}>
            <MapPin className={`${DESIGN_SYSTEM.iconSizes.xlarge} mx-auto mb-4`} />
            <h3 className={`${DESIGN_SYSTEM.typography.subsectionTitle} mb-4`}>
              Serving All of Kuta & Surrounding Areas
            </h3>
            <p className={`${DESIGN_SYSTEM.typography.body} max-w-3xl mx-auto opacity-95`}>
              We provide {data.name} across Kuta, Legian, Tuban, and Seminyak's southern border.
              Fast response times and professional equipment delivered to your villa or hotel.
            </p>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.white}`}>
          <div className={DESIGN_SYSTEM.spacing.container}>
            <h2 className={`${DESIGN_SYSTEM.typography.sectionTitle} text-spa-earth text-center mb-12`}>
              Packages & Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data.packages.map((pkg, index) => (
                <Card key={index} className={DESIGN_SYSTEM.cardStyles.standard}>
                  <CardHeader>
                    <CardTitle className={`${DESIGN_SYSTEM.typography.cardTitle} text-spa-earth text-2xl text-center`}>
                      {pkg.duration}
                    </CardTitle>
                    <CardDescription className="text-center text-2xl font-bold text-spa-gold">
                      {pkg.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone text-center mb-4">{pkg.description}</p>
                    <Button asChild className="w-full" variant="default">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        {DESIGN_SYSTEM.ctaText.bookNow} {pkg.duration}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.cream}`}>
          <div className={DESIGN_SYSTEM.spacing.container}>
            <h2 className={`${DESIGN_SYSTEM.typography.sectionTitle} text-spa-earth text-center mb-12`}>
              Why Choose Our {data.name} Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Certified Therapists</h3>
                <p className="text-spa-stone">
                  All our therapists hold international certifications and are extensively trained in {data.name.toLowerCase()} techniques.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Mobile Convenience</h3>
                <p className="text-spa-stone">
                  We bring professional equipment directly to your villa or hotel. No travel hassle, just pure relaxation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Flexible Scheduling</h3>
                <p className="text-spa-stone">
                  Available daily from 07:00 to 22:00 with same-day booking options for your convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust Signals */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h3 className="text-2xl font-bold text-spa-earth mb-6">
              Trusted by Travelers Worldwide
            </h3>
            <p className="text-spa-stone text-lg mb-8">
              We serve guests staying at villas and hotels across Kuta, including properties near Waterbom Park,
              Beachwalk Mall, Discovery Mall, and along Kuta Beach. Our therapists are familiar with all major
              accommodation areas and can find you quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-spa-stone">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-spa-gold" />
                <span>500+ Monthly Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-spa-gold" />
                <span>2,500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-spa-gold" />
                <span>45+ Countries Served</span>
              </div>
            </div>
          </div>
        </section>

        {/* Extended Content Sections - Only render if extendedContent is provided */}
        {data.extendedContent && (
          <>
            {/* History and Origin */}
            {data.extendedContent.historyAndOrigin && (
              <section className="py-16 bg-spa-cream/30">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-spa-earth mb-6">
                    The History & Origins of {data.name}
                  </h2>
                  <div className="prose prose-lg text-spa-stone max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {data.extendedContent.historyAndOrigin}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Detailed Process */}
            {data.extendedContent.detailedProcess && (
              <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-spa-earth mb-6">
                    What to Expect During Your {data.name} Session
                  </h2>
                  <div className="prose prose-lg text-spa-stone max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {data.extendedContent.detailedProcess}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Preparation Tips */}
            {data.extendedContent.preparationTips && (
              <section className="py-16 bg-spa-cream/30">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-spa-earth mb-6">
                    How to Prepare for Your {data.name}
                  </h2>
                  <div className="prose prose-lg text-spa-stone max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {data.extendedContent.preparationTips}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Aftercare Tips */}
            {data.extendedContent.aftercareTips && (
              <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-spa-earth mb-6">
                    Post-{data.name} Care & Tips
                  </h2>
                  <div className="prose prose-lg text-spa-stone max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {data.extendedContent.aftercareTips}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Comparison with Others */}
            {data.extendedContent.comparisonWithOthers && (
              <section className="py-16 bg-spa-cream/30">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-spa-earth mb-6">
                    {data.name} vs. Other Massage Types
                  </h2>
                  <div className="prose prose-lg text-spa-stone max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {data.extendedContent.comparisonWithOthers}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Expert Insights */}
            {data.extendedContent.expertInsights && (
              <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-spa-earth mb-6">
                    Expert Insights on {data.name}
                  </h2>
                  <div className="prose prose-lg text-spa-stone max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {data.extendedContent.expertInsights}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Local Context */}
            {data.extendedContent.localContext && (
              <section className="py-16 bg-spa-cream/30">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-spa-earth mb-6">
                    {data.name} in Bali: A Unique Experience
                  </h2>
                  <div className="prose prose-lg text-spa-stone max-w-none">
                    <p className="leading-relaxed whitespace-pre-line">
                      {data.extendedContent.localContext}
                    </p>
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {/* Additional Testimonials - Only render if provided */}
        {data.additionalTestimonials && data.additionalTestimonials.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-spa-earth text-center mb-12">
                More Reviews from Our {data.name} Clients
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {data.additionalTestimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-spa-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-spa-stone italic mb-4">"{testimonial.text}"</p>
                      <div className="text-spa-earth font-semibold">{testimonial.author}</div>
                      <div className="text-spa-stone/70 text-sm">{testimonial.location}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-spa-earth text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-0 shadow-sm">
                    <AccordionTrigger className="text-left text-spa-earth font-semibold hover:text-spa-gold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-spa-stone leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {data.testimonial && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <Card className="max-w-3xl mx-auto bg-gradient-card border-0 shadow-floating">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-spa-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-spa-earth italic text-center mb-6">
                    "{data.testimonial.text}"
                  </p>
                  <p className="text-spa-stone text-center font-semibold">
                    {data.testimonial.author}
                  </p>
                  <p className="text-spa-stone/70 text-center text-sm">
                    {data.testimonial.location}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
                Explore Other Massage Services
              </h2>
              <p className="text-lg text-spa-stone max-w-2xl mx-auto">
                Discover our full range of professional massage treatments available in Kuta.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
              <Link
                to="/services/balinese-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Balinese Massage</div>
                <div className="text-xs text-spa-stone">Traditional healing</div>
              </Link>
              <Link
                to="/services/deep-tissue-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Deep Tissue</div>
                <div className="text-xs text-spa-stone">Muscle therapy</div>
              </Link>
              <Link
                to="/services/aromatherapy-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Aromatherapy</div>
                <div className="text-xs text-spa-stone">Essential oils</div>
              </Link>
              <Link
                to="/services/hot-stone-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Hot Stone</div>
                <div className="text-xs text-spa-stone">Luxury treatment</div>
              </Link>
              <Link
                to="/services/thai-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Thai Massage</div>
                <div className="text-xs text-spa-stone">Stretching therapy</div>
              </Link>
              <Link
                to="/services/four-hands-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Four Hands</div>
                <div className="text-xs text-spa-stone">Dual therapists</div>
              </Link>
              <Link
                to="/services/pregnancy-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Pregnancy</div>
                <div className="text-xs text-spa-stone">Safe & gentle</div>
              </Link>
              <Link
                to="/services/foot-reflexology"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Reflexology</div>
                <div className="text-xs text-spa-stone">Pressure points</div>
              </Link>
              <Link
                to="/services/lymphatic-drainage-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Lymphatic Drainage</div>
                <div className="text-xs text-spa-stone">Detoxification</div>
              </Link>
              <Link
                to="/services/jet-lag-recovery-massage"
                className="p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-spa-earth font-medium text-sm mb-1">Jet Lag Recovery</div>
                <div className="text-xs text-spa-stone">Travel fatigue</div>
              </Link>
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View All Services <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
                Available Throughout Bali
              </h2>
              <p className="text-lg text-spa-stone max-w-2xl mx-auto">
                We deliver {data.name} to your villa or hotel across these popular areas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto mb-8">
              <Link to="/areas/kuta" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Kuta</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/legian" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Legian</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/seminyak" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Seminyak</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/canggu" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Canggu</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/sanur" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Sanur</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/ubud" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Ubud</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/nusa-dua" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Nusa Dua</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/jimbaran" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Jimbaran</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/uluwatu" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Uluwatu</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/tuban" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Tuban</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/denpasar" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Denpasar</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
              <Link to="/areas/kerobokan" className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-spa-gold/10 transition-all duration-300">
                <span className="text-spa-earth text-sm font-medium">Kerobokan</span>
                <MapPin className="w-4 h-4 text-spa-gold" />
              </Link>
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/areas">
                  View All 27 Service Areas <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`${DESIGN_SYSTEM.spacing.section} ${DESIGN_SYSTEM.sectionBackgrounds.gradient} text-primary-foreground`}>
          <div className={`${DESIGN_SYSTEM.spacing.container} text-center`}>
            <h2 className={`${DESIGN_SYSTEM.typography.sectionTitle} mb-6`}>
              Ready to Experience {data.name}?
            </h2>
            <p className={`${DESIGN_SYSTEM.typography.bodyLarge} mb-8 opacity-90 max-w-2xl mx-auto`}>
              Book now and our certified therapists will bring the spa experience directly to your location in Kuta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className={`${DESIGN_SYSTEM.iconSizes.medium} mr-2`} />
                  {DESIGN_SYSTEM.ctaText.bookWhatsApp}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-professional-navy">
                <a href="/services">
                  {DESIGN_SYSTEM.ctaText.viewServices}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default MassageTypeLandingPage;
