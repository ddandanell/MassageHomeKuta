import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Balinese Traditional Massage",
    slug: "balinese-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 350k",
    description: "Ancient healing technique combining gentle stretches, acupressure, and aromatherapy oils to restore balance and harmony.",
    benefits: ["Stress relief", "Improved circulation", "Deep relaxation", "Cultural experience"],
    image: "/images/hero/hero-1.jpg"
  },
  {
    name: "Deep Tissue Massage",
    slug: "deep-tissue-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 400k",
    description: "Therapeutic massage targeting deep muscle layers to release chronic tension and alleviate muscle pain.",
    benefits: ["Muscle pain relief", "Improved mobility", "Tension release", "Athletic recovery"],
    image: "/images/hero/hero-2.jpg"
  },
  {
    name: "Aromatherapy Massage",
    slug: "aromatherapy-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 380k",
    description: "Relaxing massage using premium essential oils to promote emotional well-being and stress relief.",
    benefits: ["Emotional balance", "Stress reduction", "Better sleep", "Mood enhancement"],
    image: "/images/hero/hero-3.jpg"
  },
  {
    name: "Hot Stone Massage",
    slug: "hot-stone-massage",
    duration: "75-90 minutes",
    price: "Starting from IDR 450k",
    description: "Luxurious treatment using heated volcanic stones to melt away tension and promote deep relaxation.",
    benefits: ["Deep muscle relaxation", "Improved circulation", "Luxury experience", "Pain relief"],
    image: "/images/hero/hero-4.jpg"
  },
  {
    name: "Thai Massage",
    slug: "thai-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 370k",
    description: "Dynamic massage combining stretching, pressure points, and yoga-like movements for flexibility and energy.",
    benefits: ["Increased flexibility", "Energy boost", "Posture improvement", "Stress relief"],
    image: "/images/hero/hero-1.jpg"
  },
  {
    name: "Four Hands Massage",
    slug: "four-hands-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 800k",
    description: "Luxurious experience with two therapists working in perfect synchronization for ultimate relaxation.",
    benefits: ["Ultimate relaxation", "Dual therapist coordination", "Luxury experience", "Enhanced results"],
    image: "/images/hero/hero-2.jpg"
  },
  {
    name: "Pregnancy Massage",
    slug: "pregnancy-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 400k",
    description: "Gentle, specialized massage designed for expectant mothers to relieve pregnancy-related discomfort.",
    benefits: ["Safe for pregnancy", "Reduces swelling", "Relieves back pain", "Improves sleep"],
    image: "/images/hero/hero-3.jpg"
  },
  {
    name: "Foot Reflexology",
    slug: "foot-reflexology",
    duration: "45-60 minutes",
    price: "Starting from IDR 250k",
    description: "Therapeutic foot massage targeting pressure points to promote healing throughout the body.",
    benefits: ["Stress relief", "Improved circulation", "Pain relief", "Energy boost"],
    image: "/images/hero/hero-4.jpg"
  },
  {
    name: "Lymphatic Drainage Massage",
    slug: "lymphatic-drainage-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 450k",
    description: "Gentle massage technique that helps reduce swelling and supports the body's natural detoxification.",
    benefits: ["Reduces swelling", "Detoxification", "Boosts immunity", "Improves skin"],
    image: "/images/hero/hero-1.jpg"
  },
  {
    name: "Jet Lag Recovery Massage",
    slug: "jet-lag-recovery-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 400k",
    description: "Specialized treatment to help you recover from travel fatigue and adjust to local time.",
    benefits: ["Combats jet lag", "Restores energy", "Improves sleep", "Quick recovery"],
    image: "/images/hero/hero-2.jpg"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteMeta
        title="Massage Treatments Kuta - Premium Service"
        description="Explore professional massage treatments in Kuta including Balinese, deep tissue, aromatherapy, hot stone, and Thai massage. Certified therapists deliver spa-quality treatments to your location."
        keywords="massage treatments Kuta, Balinese massage, deep tissue massage Kuta, aromatherapy massage Bali, hot stone massage, Thai massage Kuta, professional massage service"
        canonical="/services"
      />

      <StructuredData type="organization" />
      <StructuredData type="service" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-1.jpg"
              alt="Professional massage therapists providing various massage treatments including Balinese and deep tissue massage in Kuta"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-professional-navy/90 via-professional-green/80 to-professional-navy/90 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg tracking-tight">
              Massage Treatments Kuta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 drop-shadow-md font-light tracking-wide">
              Professional massage treatments delivered to your villa or hotel in Kuta. Choose from traditional Balinese, therapeutic deep tissue, aromatherapy, and more specialized treatments tailored to your needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-professional-navy mb-6">
                Curated Massage Menu
              </h2>
              <p className="text-xl text-professional-gray max-w-3xl mx-auto font-light">
                Choose from our range of therapeutic and relaxation treatments, each designed to
                address specific wellness needs and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <Card key={index} className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-500 flex flex-col overflow-hidden rounded-2xl bg-white">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                      <div className="font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                        {service.duration}
                      </div>
                      <div className="font-bold text-lg text-professional-gold">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-professional-navy text-2xl font-serif">
                      {service.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col pt-2">
                    <p className="text-professional-gray mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-professional-navy text-sm uppercase tracking-wider">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-professional-light text-professional-navy px-3 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild variant="outline" className="w-full mt-auto border-professional-navy/20 hover:bg-professional-navy hover:text-white transition-colors group-hover:border-professional-navy">
                      <Link to={`/services/${service.slug}`}>
                        View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-xl">
                <a href="/#booking">Book Your Massage Today</a>
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
                  Available daily from 07:00 to 22:00 with same-day booking options for your convenience.
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

export default Services;