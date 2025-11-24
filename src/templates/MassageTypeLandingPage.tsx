import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, Users, CheckCircle } from "lucide-react";
import { MassageTypeData } from "@/types/landingPageTypes";

interface MassageTypeLandingPageProps {
  data: MassageTypeData;
}

const MassageTypeLandingPage = ({ data }: MassageTypeLandingPageProps) => {
  const whatsappNumber = "+62 811-2656-869";
  const whatsappMessage = `Hi! I'd like to book a ${data.name} service in Kuta. Can you help me with availability?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const breadcrumbData = [
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
      "name": data.name,
      "item": `https://homemassagekuta.com/services/${data.slug}`
    }
  ];

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
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-emerald-500 to-teal-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-professional-gold text-professional-navy px-4 py-2 text-sm">
              Professional Mobile Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {data.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Now - WhatsApp
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Available 7 AM – 10 PM Daily</span>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xl text-spa-stone leading-relaxed">
              {data.introText}
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-spa-earth text-center mb-12">
              Key Benefits of {data.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-spa-gold flex-shrink-0 mt-1" />
                      <p className="text-spa-earth font-medium">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques & Ideal For */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
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
        <section className="py-12 bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Serving All of Kuta & Surrounding Areas
            </h3>
            <p className="text-lg max-w-3xl mx-auto opacity-95">
              We provide {data.name} across Kuta, Legian, Tuban, and Seminyak's southern border. 
              Fast response times and professional equipment delivered to your villa or hotel.
            </p>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-spa-earth text-center mb-12">
              Packages & Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data.packages.map((pkg, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-2xl text-center">
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
                        Book {pkg.duration}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-spa-earth text-center mb-12">
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
                  Available daily from 7 AM to 10 PM with same-day booking options for your convenience.
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

        {/* Final CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience {data.name}?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book now and our certified therapists will bring the spa experience directly to your location in Kuta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-professional-navy">
                <a href="/services">
                  View All Services
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
