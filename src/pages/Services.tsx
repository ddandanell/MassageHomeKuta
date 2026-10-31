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
    price: "Starting from IDR 320k",
    description: "Ancient healing technique combining gentle stretches, acupressure, and aromatherapy oils to restore balance and harmony.",
    benefits: ["Stress relief", "Improved circulation", "Deep relaxation", "Cultural experience"],
    image: "/assets/balinese-massage.jpg"
  },
  {
    name: "Deep Tissue Massage",
    slug: "deep-tissue-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 380k",
    description: "Therapeutic massage targeting deep muscle layers to release chronic tension and alleviate muscle pain.",
    benefits: ["Muscle pain relief", "Improved mobility", "Tension release", "Athletic recovery"],
    image: "/assets/deep-tissue.jpg"
  },
  {
    name: "Aromatherapy Massage",
    slug: "aromatherapy-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 350k",
    description: "Relaxing massage using premium essential oils to promote emotional well-being and stress relief.",
    benefits: ["Emotional balance", "Stress reduction", "Better sleep", "Mood enhancement"],
    image: "/assets/aromatherapy.jpg"
  },
  {
    name: "Hot Stone Massage",
    slug: "hot-stone-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 420k",
    description: "Luxurious treatment using heated volcanic stones to melt away tension and promote deep relaxation.",
    benefits: ["Deep muscle relaxation", "Improved circulation", "Luxury experience", "Pain relief"],
    image: "/assets/hot-stone.jpg"
  },
  {
    name: "Thai Massage",
    slug: "thai-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 390k",
    description: "Dynamic massage combining stretching, pressure points, and yoga-like movements for flexibility and energy.",
    benefits: ["Increased flexibility", "Energy boost", "Posture improvement", "Stress relief"],
    image: "/assets/thai-massage.jpg"
  },
  {
    name: "Four Hands Massage",
    slug: "four-hands-massage",
    duration: "60-90 minutes",
    price: "Starting from IDR 620k",
    description: "Luxurious experience with two therapists working in perfect synchronization for ultimate relaxation.",
    benefits: ["Ultimate relaxation", "Dual therapist coordination", "Luxury experience", "Enhanced results"],
    image: "/assets/four-hands.jpg"
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
    image: "/assets/lymphatic.jpg"
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
        title="Massage Services in Kuta, Bali | Villa, Hotel & Same-Day Booking"
        description="Compare home massage services in Kuta, Legian, Seminyak, Uluwatu, and nearby Bali areas. Book Balinese, deep tissue, hot stone, lymphatic, pregnancy, and four hands treatments by WhatsApp."
        keywords="massage services kuta, home massage services bali, villa massage kuta, hotel massage bali, lymphatic drainage massage kuta, hot stone massage bali, four hands massage kuta"
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
              src="/generated-images/services-hero.jpg"
              alt="Certified massage therapists preparing Balinese and deep tissue massage treatments for villa and hotel guests in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-professional-navy/90 via-professional-green/80 to-professional-navy/90 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg tracking-tight">
              In-Villa Massage Treatments in Kuta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 drop-shadow-md font-light tracking-wide">
              Professional massage treatments delivered to your villa or hotel in Kuta. Choose from traditional Balinese, therapeutic deep tissue, aromatherapy, and specialized treatments designed for travelers, couples, recovery-focused guests, and same-day bookings across Bali stay areas.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-professional-navy mb-6">
                Choose the Right Treatment for Your Stay
              </h2>
              <p className="text-lg text-professional-gray leading-relaxed mb-4">
                Guests usually book by need: deep recovery after flights or surfing, a calmer in-villa treatment for sleep and stress, or a premium experience for couples and special occasions. WhatsApp booking keeps it simple, and our team confirms the best fit for your location and schedule.
              </p>
              <p className="text-lg text-professional-gray leading-relaxed">
                Not sure what to budget? See our <Link to="/blog/massage-kuta-bali-price-guide" className="text-professional-green hover:underline font-medium">complete Kuta massage price guide</Link> with the 2026 rate card we publish.
              </p>
            </div>
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
                      alt={`${service.name} treatment in Kuta - professional massage therapy delivered to your villa`}
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

        <section className="py-20 bg-professional-light/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-professional-navy mb-6">
                Popular for Travel Recovery and Special Plans
              </h2>
              <p className="text-xl text-professional-gray max-w-3xl mx-auto font-light">
                These pages are getting traction in search, so we’re making them easier to reach from the main services hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-professional-navy">Post-Flight Swelling & Detox</CardTitle>
                  <CardDescription>Lighter, gentler treatment for bloating, water retention, and long-haul travel fatigue.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services/lymphatic-drainage-massage">View Lymphatic Drainage</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-professional-navy">Luxury Villa Unwinding</CardTitle>
                  <CardDescription>Heated stone therapy for slower evenings, sunset bookings, and deeper relaxation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services/hot-stone-massage">View Hot Stone Massage</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-professional-navy">Special Occasion Booking</CardTitle>
                  <CardDescription>Two-therapist treatment for honeymoons, birthdays, and premium in-villa experiences.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services/four-hands-massage">View Four Hands Massage</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-professional-navy mb-6">
                Popular Booking Areas
              </h2>
              <p className="text-xl text-professional-gray max-w-3xl mx-auto font-light">
                These area pages are already surfacing in search and deserve stronger support from the core services hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Legian",
                  path: "/areas/legian",
                  description: "Fast-response hotel and villa service near Kuta Beach."
                },
                {
                  name: "Pererenan",
                  path: "/areas/pererenan",
                  description: "Quiet north Canggu stays and post-surf recovery bookings."
                },
                {
                  name: "Uluwatu",
                  path: "/areas/uluwatu",
                  description: "Clifftop villas, surf stays, and sunset appointment demand."
                },
                {
                  name: "Ungasan",
                  path: "/areas/ungasan",
                  description: "Private Bukit villas and slower-paced in-villa wellness sessions."
                }
              ].map((area) => (
                <Link key={area.path} to={area.path} className="block">
                  <Card className="bg-white border border-professional-navy/10 shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-professional-navy">{area.name}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Services & Packages */}
        <section className="py-24 bg-gradient-to-br from-professional-light via-white to-professional-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-professional-navy mb-6">
                Specialty Experiences & Packages
              </h2>
              <p className="text-xl text-professional-gray max-w-3xl mx-auto font-light">
                Discover our curated wellness experiences designed for specific occasions and lifestyle needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-500 bg-white rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-rose-50 to-pink-50 pb-4">
                  <CardTitle className="text-professional-navy font-serif text-xl">
                    Romantic & Couples
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <Link to="/couples-villa-massage-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Couples Villa Massage
                  </Link>
                  <Link to="/honeymoon-spa-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Honeymoon Spa Packages
                  </Link>
                  <Link to="/luxury-villa-wellness-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Luxury Villa Wellness
                  </Link>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-500 bg-white rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50 pb-4">
                  <CardTitle className="text-professional-navy font-serif text-xl">
                    Active Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <Link to="/post-yoga-recovery-massage" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Post-Yoga Recovery
                  </Link>
                  <Link to="/uluwatu-surf-massage" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Surf Recovery Massage
                  </Link>
                  <Link to="/post-hike-recovery-massage-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Post-Hike Recovery
                  </Link>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-500 bg-white rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-emerald-50 to-green-50 pb-4">
                  <CardTitle className="text-professional-navy font-serif text-xl">
                    Wellness & Detox
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <Link to="/detox-wellness-massage-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Detox Wellness Massage
                  </Link>
                  <Link to="/pregnancy-massage-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Pregnancy Massage
                  </Link>
                  <Link to="/services/lymphatic-drainage-massage" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Lymphatic Drainage
                  </Link>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-500 bg-white rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-amber-50 to-orange-50 pb-4">
                  <CardTitle className="text-professional-navy font-serif text-xl">
                    Group & Event
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <Link to="/group-spa-day-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Group Spa Day Packages
                  </Link>
                  <Link to="/mobile-spa-day-package-bali" className="block text-professional-navy hover:text-professional-green transition-colors">
                    → Mobile Spa Day Package
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-spa-earth mb-8">
              Why Choose Our In-Villa Massage Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Professional Equipment</h3>
                <p className="text-spa-stone">
                  We bring everything needed: fresh linens, premium oils, and sanitized equipment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Certified Therapists</h3>
                <p className="text-spa-stone">
                  All our <Link to="/therapists" className="text-spa-gold hover:underline">certified massage therapists</Link> hold international certifications and are experienced in various massage techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Flexible Scheduling</h3>
                <p className="text-spa-stone">
                  Available daily from 07:00 to 22:00 with same-day booking options for your convenience.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-left bg-white p-8 rounded-lg shadow-soft">
              <p className="text-lg text-spa-stone leading-relaxed mb-4">
                Ready to experience professional massage treatments in Kuta? Our comprehensive range of services brings spa-quality relaxation directly to your location. Whether you're staying in Kuta, <Link to="/areas/seminyak" className="text-spa-gold hover:underline">Seminyak</Link>, <Link to="/areas/uluwatu" className="text-spa-gold hover:underline">Uluwatu</Link>, or <Link to="/areas/pererenan" className="text-spa-gold hover:underline">Pererenan</Link>, our experienced therapists arrive prepared with everything needed for a premium experience.
              </p>
              <p className="text-lg text-spa-stone leading-relaxed">
                Check out our <Link to="/packages" className="text-spa-gold hover:underline">special packages</Link>, explore our <Link to="/recommended-services" className="text-spa-gold hover:underline">recommended massage services</Link>, browse <Link to="/reviews" className="text-spa-gold hover:underline">customer feedback</Link>, or view the <Link to="/sitemap" className="text-spa-gold hover:underline">complete site directory</Link>. Book your treatment today for in-villa relaxation in Bali.
              </p>
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
