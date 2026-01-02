import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import PageFAQSection from "@/components/PageFAQSection";
import { servicesFaqs } from "@/data/pageFaqs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, MapPin } from "lucide-react";

const services = [
  {
    name: "Traditional Balinese Massage Ubud",
    duration: "60-120 minutes",
    price: "Starting from IDR 280K",
    description: "Ancient healing technique combining gentle stretches, acupressure, and aromatherapy oils to restore balance and harmony.",
    benefits: ["Stress relief", "Improved circulation", "Deep relaxation", "Cultural experience"]
  },
  {
    name: "Deep Tissue Massage Ubud",
    duration: "60-120 minutes", 
    price: "Starting from IDR 320K",
    description: "Therapeutic massage targeting deep muscle layers to release chronic tension and alleviate muscle pain.",
    benefits: ["Muscle pain relief", "Improved mobility", "Tension release", "Athletic recovery"]
  },
  {
    name: "Aromatherapy Massage Ubud",
    duration: "60-120 minutes",
    price: "Starting from IDR 304K", 
    description: "Relaxing massage using premium essential oils to promote emotional well-being and stress relief.",
    benefits: ["Emotional balance", "Stress reduction", "Better sleep", "Mood enhancement"]
  },
  {
    name: "Hot Stone Massage Ubud",
    duration: "60-120 minutes",
    price: "Starting from IDR 360K",
    description: "Luxurious treatment using heated volcanic stones to melt away tension and promote deep relaxation.",
    benefits: ["Deep muscle relaxation", "Improved circulation", "Luxury experience", "Pain relief"]
  },
  {
    name: "Thai Massage Ubud",
    duration: "60-120 minutes", 
    price: "Starting from IDR 360K",
    description: "Dynamic massage combining stretching, pressure points, and yoga-like movements for flexibility and energy.",
    benefits: ["Increased flexibility", "Energy boost", "Posture improvement", "Stress relief"]
  },
  {
    name: "Four Hands Massage Ubud",
    duration: "60-120 minutes",
    price: "Starting from IDR 520K",
    description: "Ultimate luxury experience with two therapists working together, perfect for special occasions.",
    benefits: ["Ultimate relaxation", "Complete coverage", "Unique experience", "Deep restoration"]
  },
  {
    name: "Lymphatic Drainage Massage Ubud",
    duration: "60-120 minutes",
    price: "Starting from IDR 384K",
    description: "Gentle rhythmic massage to stimulate lymphatic drainage, reduce swelling, and boost immunity.",
    benefits: ["Reduced swelling", "Detoxification", "Boosted immunity", "Post-flight recovery"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Professional Massage Services in Kuta - Complete Massage Menu"
        description="Discover our comprehensive range of professional massage services in Kuta. From traditional Balinese massage to therapeutic deep tissue massage, aromatherapy massage, hot stone massage, and Thai massage - all delivered to your villa or hotel by certified massage therapists."
        keywords="massage services, massage kuta, professional massage, balinese massage, deep tissue massage, aromatherapy massage, hot stone massage, thai massage, couples massage, massage therapist, massage treatment, massage therapy, home massage service, villa massage, hotel massage"
        canonical="/services"
      />
      
      <StructuredData type="service" />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-emerald-600 to-teal-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Professional Massage Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 drop-shadow-md">
              Experience the finest therapeutic and relaxation massages delivered directly to your villa or hotel.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Our Massage Menu
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Choose from our range of therapeutic and relaxation treatments, each designed to 
                address specific wellness needs and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-xl">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="flex justify-between items-center text-spa-stone">
                      <span>{service.duration}</span>
                      <span className="font-semibold text-spa-gold">{service.price}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-spa-stone mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-spa-earth">Benefits:</h4>
                      <ul className="text-sm text-spa-stone space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-spa-gold flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-semibold shadow-xl">
                <a href="/#booking">Book Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-spa-earth mb-8">
              Why Choose Our In-Villa Massage Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Professional Equipment</h3>
                <p className="text-spa-stone">
                  We bring everything needed: professional massage table, fresh linens, premium oils, and sanitized equipment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Certified Therapists</h3>
                <p className="text-spa-stone">
                  All our therapists hold international certifications and are experienced in various massage techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Flexible Scheduling</h3>
                <p className="text-spa-stone">
                  Available daily from 7 AM to 10 PM with same-day booking options for your convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <PageFAQSection 
          faqs={servicesFaqs}
          title="Common Questions About Our Massage Services"
          description="Get answers to frequently asked questions about choosing the right massage type, session duration, and what to expect from our professional home massage service in Kuta."
        />
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Services;