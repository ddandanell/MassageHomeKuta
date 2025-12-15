import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import PageFAQSection from "@/components/PageFAQSection";
import { packagesFaqs } from "@/data/pageFaqs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Clock, Gift, Star } from "lucide-react";

const packages = [
  {
    name: "Romantic Couples Retreat",
    duration: "2 hours",
    price: "IDR 1,200k",
    originalPrice: "IDR 1,400k",
    savings: "Save IDR 200k",
    description: "Perfect romantic experience for couples featuring side-by-side massages with premium aromatherapy oils and romantic ambiance.",
    includes: [
      "2x 60-minute Balinese massages",
      "Romantic candle setup",
      "Premium aromatherapy oils",
      "Rose petals decoration",
      "Complimentary herbal tea"
    ],
    icon: Heart,
    popular: true
  },
  {
    name: "Wellness Weekend Package",
    duration: "3 sessions over 2 days",
    price: "IDR 2,800k",
    originalPrice: "IDR 3,300k", 
    savings: "Save IDR 500k",
    description: "Complete wellness experience with multiple massage sessions and wellness treatments for ultimate relaxation.",
    includes: [
      "3x 90-minute massages (your choice)",
      "Hot stone therapy session",
      "Aromatherapy session",
      "Reflexology treatment",
      "Wellness consultation"
    ],
    icon: Users,
    popular: false
  },
  {
    name: "Executive Stress Relief",
    duration: "90 minutes",
    price: "IDR 650k",
    originalPrice: "IDR 750k",
    savings: "Save IDR 100k",
    description: "Intensive stress relief package designed for busy professionals, combining deep tissue and relaxation techniques.",
    includes: [
      "90-minute deep tissue massage",
      "Neck and shoulder focus",
      "Stress-relief aromatherapy",
      "Posture improvement techniques",
      "Take-home stress relief tips"
    ],
    icon: Clock,
    popular: false
  },
  {
    name: "Birthday Special Package",
    duration: "2 hours",
    price: "IDR 950k", 
    originalPrice: "IDR 1,150k",
    savings: "Save IDR 200k",
    description: "Celebrate your special day with a luxurious spa experience including massage and special birthday touches.",
    includes: [
      "90-minute massage of choice",
      "Birthday decoration setup",
      "Premium gift package",
      "Celebration photos",
      "Special birthday surprise"
    ],
    icon: Gift,
    popular: false
  }
];

const Packages = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Special Massage Packages in Kuta"
        description="Save with our exclusive massage packages in Kuta. Romantic couples retreats, wellness weekends, and birthday specials. Professional in-villa spa service with great value."
        keywords="massage packages kuta, couples massage bali, spa packages kuta, wellness packages, romantic massage bali, birthday massage package"
        canonical="/packages"
      />
      
      <StructuredData type="service" />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Special Massage Packages
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Save more with our carefully curated spa packages. Perfect for couples, special occasions, 
              or extended wellness experiences in the comfort of your villa.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <Badge variant="outline" className="text-primary-foreground border-primary-foreground px-4 py-2">
                Up to 30% Savings
              </Badge>
              <Badge variant="outline" className="text-primary-foreground border-primary-foreground px-4 py-2">
                All Equipment Included
              </Badge>
              <Badge variant="outline" className="text-primary-foreground border-primary-foreground px-4 py-2">
                Licensed Therapists
              </Badge>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Choose Your Perfect Package
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Each package is designed to provide exceptional value while delivering a complete spa experience 
                tailored to different occasions and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                  <Card key={index} className={`bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-spa-gold' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-spa-gold text-spa-earth px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-spa-gold" />
                        </div>
                      </div>
                      <CardTitle className="text-spa-earth text-2xl mb-2">
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-spa-stone mb-4">
                        {pkg.description}
                      </CardDescription>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-3xl font-bold text-spa-earth">{pkg.price}</span>
                          <span className="text-lg text-spa-stone line-through">{pkg.originalPrice}</span>
                        </div>
                        <Badge variant="secondary" className="bg-spa-gold/20 text-spa-earth">
                          {pkg.savings}
                        </Badge>
                        <p className="text-sm text-spa-stone mt-2">{pkg.duration}</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-spa-earth">Package Includes:</h4>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-spa-stone">
                              <Star className="w-4 h-4 text-spa-gold mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full mt-6">
                          <a href="/#booking">Book This Package</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <div className="bg-spa-cream/30 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-spa-earth mb-4">
                  Custom Packages Available
                </h3>
                <p className="text-spa-stone mb-6">
                  Need something different? We can create a custom package tailored to your specific needs, 
                  group size, and preferences. Contact us to discuss your requirements.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href="https://wa.me/628112656869?text=I'd like to inquire about custom massage packages">
                    Create Custom Package
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-gradient-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-8">
              Why Choose Our Packages?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-primary-foreground">
              <div>
                <h3 className="text-xl font-semibold mb-4">Better Value</h3>
                <p className="opacity-90">
                  Save up to 30% compared to individual bookings while enjoying enhanced experiences and added amenities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Complete Experience</h3>
                <p className="opacity-90">
                  Each package includes everything needed for a memorable spa experience, from setup to special touches.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
                <p className="opacity-90">
                  Same certified therapists and professional equipment, with enhanced service levels for special occasions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <PageFAQSection 
          faqs={packagesFaqs}
          title="Package Questions & Answers"
          description="Learn more about our special massage packages, how to customize them, and how they save you money on your Kuta spa experience."
        />
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Packages;