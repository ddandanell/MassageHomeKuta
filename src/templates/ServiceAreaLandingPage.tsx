import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, Zap, Shield, Users } from "lucide-react";
import { ServiceAreaData } from "@/types/landingPageTypes";

interface ServiceAreaLandingPageProps {
  data: ServiceAreaData;
}

const ServiceAreaLandingPage = ({ data }: ServiceAreaLandingPageProps) => {
  const whatsappNumber = "+62 811-2656-869";
  const whatsappMessage = `Hi! I'm in ${data.name} and would like to book a massage service. Can you help me with availability?`;
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
      "name": "Service Areas",
      "item": "https://homemassagekuta.com/areas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": data.name,
      "item": `https://homemassagekuta.com/areas/${data.slug}`
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={data.keywords}
        canonical={`/areas/${data.slug}`}
      />
      
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="service" />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-green-500 to-lime-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-professional-gold text-professional-navy px-4 py-2 text-sm">
              Fast Response · {data.responseTime}
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

        {/* Key Landmarks */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-spa-earth text-center mb-12">
              Areas We Serve in {data.name}
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                        <span className="text-spa-earth">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Massage Types for this Area */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-spa-earth text-center mb-12">
              Popular Massage Services in {data.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.popularMassageTypes.map((massage, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">
                      {massage.name}
                    </CardTitle>
                    <CardDescription className="text-spa-stone">
                      {massage.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full" variant="default">
                      <a href={`/services/${massage.slug}`}>
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <a href="/services">
                  View All Massage Services
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Accommodation Types */}
        <section className="py-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">
              We Serve All Accommodation Types
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {data.accommodationTypes.map((type, index) => (
                <Badge key={index} className="bg-white/20 text-white px-4 py-2 text-base backdrop-blur-sm">
                  {type}
                </Badge>
              ))}
            </div>
            <p className="text-center mt-6 text-lg max-w-3xl mx-auto opacity-95">
              No matter where you're staying in {data.name}, we'll find you and bring professional massage service to your location.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-spa-earth text-center mb-12">
              Why We're {data.name}'s Top Choice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Fast Response</h3>
                <p className="text-spa-stone">
                  Average response time of {data.responseTime} to {data.name} locations. We know the area inside out.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Licensed & Insured</h3>
                <p className="text-spa-stone">
                  All therapists are certified, background-checked, and insured. 100% safe and professional service.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Local Experts</h3>
                <p className="text-spa-stone">
                  We've served hundreds of clients in {data.name}. We navigate the area efficiently and know all major locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
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

        {/* Nearby Areas */}
        <section className="py-12 bg-spa-cream/30">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-spa-earth mb-6">
              We Also Serve Nearby Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {data.nearbyAreas.map((area, index) => (
                <a 
                  key={index}
                  href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-spa-gold hover:text-spa-earth transition-colors font-medium"
                >
                  {area}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h3 className="text-2xl font-bold text-spa-earth mb-6">
              Trusted by Travelers in {data.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-spa-stone">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-spa-gold" />
                <span>500+ Monthly Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-spa-gold" />
                <span>2,500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-spa-gold" />
                <span>100% Safe & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-spa-gold" />
                <span>Same-Day Booking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Massage in {data.name}?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our certified therapists can be at your location in {data.responseTime}. Book now for same-day availability!
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

export default ServiceAreaLandingPage;
