import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, Users, CheckCircle2, ArrowRight, Heart, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { DESIGN_SYSTEM, generateWhatsAppUrl, generateBreadcrumbs } from "@/config/designSystem";
import { SITE_CONFIG } from "@/config/site";
import { kutaMassagePillarData } from "@/data/kutaMassageData";

const KutaMassagePillar = () => {
  const data = kutaMassagePillarData;
  const whatsappMessage = `Hi! I'd like to book a ${data.name} service. Can you help me with availability?`;
  const whatsappUrl = generateWhatsAppUrl(whatsappMessage, SITE_CONFIG.whatsapp);

  const breadcrumbData = generateBreadcrumbs([
    { name: "Home", path: "/" },
    { name: data.name, path: "/kuta-massage" }
  ]);

  const serviceSchemaData = {
    name: `${data.name} - Professional In-Villa Massage Services Bali`,
    description: data.metaDescription,
    serviceType: "Massage and Spa Services",
    areaServed: ["Kuta", "Legian", "Seminyak", "Tuban", "Canggu", "Sanur", "Ubud", "Nusa Dua", "Bali"],
    offers: {
      priceRange: "$$",
      priceCurrency: "IDR"
    }
  };

  return (
    <div className="min-h-screen">
      <SiteMeta
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={data.keywords}
        canonical="/kuta-massage"
      />

      <StructuredData type="organization" />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="service" data={serviceSchemaData} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/c09c4c92-fe1e-4fb3-9c77-faa1698be47e.png"
              alt="Professional Kuta massage therapy treatment in luxury villa setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-teal-700 opacity-90"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Professional Mobile Massage Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {data.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-emerald-700 hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Available Daily 7 AM – 10 PM</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.introText}
            </p>
          </div>
        </section>

        {/* Section 1: What is Balinese Massage? */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.whatIsBalineseMassage.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.sections.whatIsBalineseMassage.content}
            </p>
          </div>
        </section>

        {/* Section 2: Benefits of Balinese Massage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.benefits.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.benefits.content}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.sections.benefits.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Traditional Techniques Used */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.techniques.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.techniques.content}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.sections.techniques.techniques.map((technique, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{technique}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: What to Expect During Your Session */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.whatToExpect.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.sections.whatToExpect.content}
            </p>
          </div>
        </section>

        {/* Section 5: Who Should Try Balinese Massage? */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.whoShouldTry.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.whoShouldTry.content}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {data.sections.whoShouldTry.idealFor.map((person, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{person}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Our Kuta Massage Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.services.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.services.content}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {data.sections.services.serviceLinks.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link to={service.slug}>
                      <Button variant="outline" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Pricing Overview */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.pricing.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {data.sections.pricing.content}
            </p>
            <Link to={data.sections.pricing.pricingLink}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                View Complete Pricing Guide <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 8: How Balinese Massage Differs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.howItDiffers.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.sections.howItDiffers.content}
            </p>
          </div>
        </section>

        {/* Section 9: Preparation Tips */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.preparation.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.preparation.content}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.sections.preparation.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Health & Safety */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Shield className="h-8 w-8 text-emerald-600" />
              {data.sections.healthSafety.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.sections.healthSafety.content}
            </p>
          </div>
        </section>

        {/* Section 11: Frequency Recommendations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.frequency.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.sections.frequency.content}
            </p>
          </div>
        </section>

        {/* Section 12: Available Locations in Bali */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.locations.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.locations.content}
            </p>
            <div className="grid md:grid-cols-5 gap-3 mb-6">
              {data.sections.locations.cityLinks.map((city, index) => (
                <Link key={index} to={city.slug}>
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    {city.name}
                  </Button>
                </Link>
              ))}
            </div>
            <Link to={data.sections.locations.hubLink}>
              <Button size="lg" variant="outline">
                View All Locations <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 13: Booking Information */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.booking.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.booking.content}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-emerald-600">
                    {SITE_CONFIG.whatsapp}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold">
                    {data.sections.booking.contact.hours}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold">
                    {data.sections.booking.contact.responseTime}
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Your Kuta Massage Now
              </a>
            </Button>
          </div>
        </section>

        {/* Section 14: Customer Experience */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Heart className="h-8 w-8 text-emerald-600" />
              {data.sections.customerExperience.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.sections.customerExperience.content}
            </p>
          </div>
        </section>

        {/* Section 15: Learn More */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {data.sections.learnMore.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.sections.learnMore.content}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {data.sections.learnMore.knowledgeLinks.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{article.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link to={article.slug}>
                      <Button variant="outline" className="w-full">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Link to={data.sections.learnMore.hubLink}>
              <Button size="lg" variant="outline">
                Visit Knowledge Center <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Professional Kuta Massage?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Book your in-villa massage treatment today and discover why thousands of visitors choose our professional mobile massage service throughout Bali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-emerald-700 hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/kuta-massage/pricing">
                  View Pricing
                </Link>
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

export default KutaMassagePillar;
