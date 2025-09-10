import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, MapPin } from "lucide-react";

const services = [
  {
    name: "Balinese Traditional Massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 350k",
    description: "Ancient healing technique combining gentle stretches, acupressure, and aromatherapy oils to restore balance and harmony.",
    benefits: ["Stress relief", "Improved circulation", "Deep relaxation", "Cultural experience"]
  },
  {
    name: "Deep Tissue Massage",
    duration: "60-90 minutes", 
    price: "Starting from IDR 400k",
    description: "Therapeutic massage targeting deep muscle layers to release chronic tension and alleviate muscle pain.",
    benefits: ["Muscle pain relief", "Improved mobility", "Tension release", "Athletic recovery"]
  },
  {
    name: "Aromatherapy Massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 380k", 
    description: "Relaxing massage using premium essential oils to promote emotional well-being and stress relief.",
    benefits: ["Emotional balance", "Stress reduction", "Better sleep", "Mood enhancement"]
  },
  {
    name: "Hot Stone Massage",
    duration: "75-90 minutes",
    price: "Starting from IDR 450k",
    description: "Luxurious treatment using heated volcanic stones to melt away tension and promote deep relaxation.",
    benefits: ["Deep muscle relaxation", "Improved circulation", "Luxury experience", "Pain relief"]
  },
  {
    name: "Thai Massage",
    duration: "60-90 minutes", 
    price: "Starting from IDR 370k",
    description: "Dynamic massage combining stretching, pressure points, and yoga-like movements for flexibility and energy.",
    benefits: ["Increased flexibility", "Energy boost", "Posture improvement", "Stress relief"]
  },
  {
    name: "Couples Massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 700k",
    description: "Romantic massage experience for two, perfect for couples and friends wanting to relax together.",
    benefits: ["Shared relaxation", "Romantic ambiance", "Quality time", "Stress relief"]
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SiteMeta 
        title="Our Massage Services in Kuta"
        description="Explore our professional massage services in Kuta, Bali. We offer Balinese, Deep Tissue, Aromatherapy, Hot Stone, and Thai massages."
        keywords="massage services kuta, balinese massage, deep tissue massage, aromatherapy, hot stone massage, thai massage, couples massage bali"
        canonical="/services"
      />
      <StructuredData type="service" />
      <Header />
      <main className="py-12 md:py-20">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-teal-500 to-cyan-600 text-white overflow-hidden">
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
        <section className="py-20 bg-background">
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
              {services.map((service) => (
                <Card key={service.name} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300 flex flex-col">
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
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default ServicesPage;