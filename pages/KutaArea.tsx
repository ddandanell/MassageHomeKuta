import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import PageFAQSection from "@/components/PageFAQSection";
import { kutaAreaFaqs } from "@/data/pageFaqs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Users, Zap, Shield } from "lucide-react";

const kutaAreas = [
  {
    name: "Kuta Beach Area",
    description: "Central Kuta, close to the beach and main tourist attractions",
    responseTime: "20-30 minutes",
    popular: true
  },
  {
    name: "Legian",
    description: "Popular area with many villas and hotels",
    responseTime: "15-25 minutes",
    popular: true
  },
  {
    name: "Tuban",
    description: "Near airport, convenient for travelers",
    responseTime: "25-35 minutes",
    popular: false
  },
  {
    name: "Seminyak Border",
    description: "Edge of Kuta towards Seminyak",
    responseTime: "30-40 minutes",
    popular: false
  }
];

const KutaArea = () => {
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
      "name": "Kuta Area",
      "item": "https://homemassagekuta.com/areas/kuta"
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Home Massage Service in Kuta Area, Bali"
        description="Professional in-villa massage service covering all areas of Kuta, Bali. Fast response times, certified therapists, and premium spa treatments delivered to your location."
        keywords="home massage kuta area, villa massage kuta beach, mobile spa legian, tuban massage service, kuta massage delivery, in-villa spa kuta bali"
        canonical="/areas/kuta"
      />
      
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="service" />
      
      <Header />
      
      <main>
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-green-500 to-lime-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Serving All of Kuta
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Our professional massage services are available in every corner of Kuta, Legian, and Seminyak. We come to your villa or hotel.
            </p>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Areas We Serve in Kuta
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We provide fast, reliable massage service throughout the Kuta area with different 
                response times based on your specific location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {kutaAreas.map((area, index) => (
                <Card key={index} className={`bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300 ${area.popular ? 'ring-2 ring-spa-gold' : ''}`}>
                  {area.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-spa-gold text-spa-earth px-4 py-1">
                        Popular Area
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-xl flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-spa-gold" />
                      {area.name}
                    </CardTitle>
                    <CardDescription className="text-spa-stone">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-spa-gold" />
                        <span className="text-spa-stone font-semibold">{area.responseTime}</span>
                      </div>
                      <Badge variant="secondary" className="bg-spa-gold/20 text-spa-earth">
                        Available 7AM-10PM
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-spa-cream/30 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-spa-earth mb-4">
                  Not Sure About Your Area?
                </h3>
                <p className="text-spa-stone mb-6">
                  Send us your location and we'll confirm our service availability and estimated arrival time. 
                  Most areas in and around Kuta are covered with fast response times.
                </p>
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <a href="https://wa.me/6281126568369?text=Hi! I'm in Kuta area and would like to check if you serve my location for massage service">
                    Check My Location
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Kuta */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-spa-earth mb-6">
                Why We're Kuta's #1 Home Massage Service
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Fast Response</h3>
                <p className="text-spa-stone">
                  Located in Kuta, we can reach most areas within 15-40 minutes. No long waits 
                  for your relaxation to begin.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Local Knowledge</h3>
                <p className="text-spa-stone">
                  We know Kuta inside and out. From villa addresses to hotel locations, 
                  we navigate the area efficiently.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Proven Track Record</h3>
                <p className="text-spa-stone">
                  Hundreds of satisfied clients throughout Kuta trust us for their wellness needs. 
                  Join our growing community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Book Your Kuta Massage?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're staying in central Kuta, Legian, or Tuban, we'll bring the spa experience 
              directly to you. Book now for same-day availability!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="professional" size="lg" className="text-lg px-8 py-4">
                <a href="https://wa.me/6281126568369?text=Hi! I'm in Kuta and would like to book a massage service today">
                  Book Now - Kuta Area
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-professional-navy">
                <a href="/services">
                  View All Services
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <PageFAQSection 
          faqs={kutaAreaFaqs}
          title="Service Area Questions"
          description="Find answers about our coverage areas, response times, and travel charges for home massage service throughout Kuta, Legian, and surrounding neighborhoods."
        />
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default KutaArea;