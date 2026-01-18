import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Heart, Sparkles, Shield, Star, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const CouplesVillaMassageBali = () => {
  const whatsappMessage = "Hi! I'd like to book a couples villa massage in Bali. Can you help with availability?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Couples Massage",
    "name": "Couples Villa Massage Bali",
    "description": "Romantic couples villa massage service in Bali. Two professional therapists perform synchronized treatments in the privacy of your own villa.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Home Massage Kuta",
      "url": "https://www.homemassagekuta.com",
      "telephone": SITE_CONFIG.whatsapp,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kuta",
        "addressRegion": "Bali",
        "addressCountry": "ID"
      },
      "priceRange": "650,000 - 1,250,000 IDR"
    },
    "areaServed": ["Seminyak", "Canggu", "Ubud", "Uluwatu", "Sanur", "Nusa Dua"],
    "offers": [
      {
        "@type": "Offer",
        "name": "60-minute couples session",
        "price": "650000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "90-minute couples session",
        "price": "950000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "120-minute couples session",
        "price": "1250000",
        "priceCurrency": "IDR"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide everything needed for the massage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide everything - massage beds, premium oils, towels, music, and ambiance setup. You don't need to prepare anything."
        }
      },
      {
        "@type": "Question",
        "name": "Can we choose different massage styles for each person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Each person can select their preferred massage style - Balinese, Swedish, deep tissue, or aromatherapy."
        }
      },
      {
        "@type": "Question",
        "name": "How much space do we need in our villa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We need approximately 4x4 meters of space for two massage beds side by side. Most villa bedrooms or living areas work perfectly."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_CONFIG.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Couples Villa Massage", "item": `${SITE_CONFIG.url}/couples-villa-massage-bali/` }
  ];

  const features = [
    { icon: Heart, title: "Two Certified Therapists", description: "Professional synchronized massage techniques performed by experienced therapists" },
    { icon: Sparkles, title: "Premium Massage Oils", description: "Choice of aromatherapy blends including lavender, eucalyptus, and frangipani" },
    { icon: Sparkles, title: "Romantic Ambiance Setup", description: "Candles, relaxing music, and complete spa atmosphere creation" },
    { icon: CheckCircle2, title: "Complimentary Refreshments", description: "Fresh herbal teas and hydration provided after your treatment" },
    { icon: Clock, title: "Flexible Sessions", description: "Choose from 60, 90, or 120-minute treatments to fit your schedule" },
    { icon: Shield, title: "All Equipment Provided", description: "Professional massage tables, fresh linens, and complete setup included" }
  ];

  const benefits = [
    { title: "Complete Privacy", description: "Enjoy intimate spa treatments in your own space without crowded resort spas" },
    { title: "No Travel Time", description: "Zero commute to spa facilities - we bring everything to your villa" },
    { title: "Personalized Atmosphere", description: "Create your perfect romantic environment with customized music and scents" },
    { title: "Flexible Scheduling", description: "Book from early morning to late evening based on your vacation plans" },
    { title: "Professional Quality", description: "Resort-level service at competitive villa massage prices" },
    { title: "Synchronized Experience", description: "Two therapists work in harmony for a shared relaxation journey" }
  ];

  const pricing = [
    { duration: "60-minute", price: "650,000 IDR", description: "Perfect introduction to couples villa massage" },
    { duration: "90-minute", price: "950,000 IDR", description: "Our most popular couples treatment duration" },
    { duration: "120-minute", price: "1,250,000 IDR", description: "Extended luxury experience for special occasions" }
  ];

  const serviceAreas = [
    { name: "Seminyak", slug: "seminyak" },
    { name: "Canggu", slug: "canggu" },
    { name: "Ubud", slug: "ubud" },
    { name: "Uluwatu", slug: "uluwatu" },
    { name: "Sanur", slug: "sanur" },
    { name: "Nusa Dua", slug: "nusa-dua" },
    { name: "Legian", slug: "legian" },
    { name: "Kerobokan", slug: "kerobokan" }
  ];

  const faqs = [
    {
      question: "Do you provide everything needed for the massage?",
      answer: "Yes, we provide everything - massage beds, premium oils, towels, music, and ambiance setup. You don't need to prepare anything. Our therapists arrive 15 minutes early to set up your private spa sanctuary."
    },
    {
      question: "Can we choose different massage styles for each person?",
      answer: "Absolutely! Each person can select their preferred massage style - Balinese, Swedish, deep tissue, or aromatherapy. You can also choose different durations if needed. Our therapists customize each treatment to individual preferences."
    },
    {
      question: "How much space do we need in our villa?",
      answer: "We need approximately 4x4 meters of space for two massage beds side by side. Most villa bedrooms, living areas, or covered outdoor pavilions work perfectly. If you're unsure, send us photos via WhatsApp and we'll confirm suitability."
    },
    {
      question: "Do you offer same-day booking for couples?",
      answer: "Yes! We accommodate same-day couples bookings when therapist availability permits. For best availability, especially during high season, we recommend booking 3-4 hours in advance or the evening before."
    },
    {
      question: "Can we add romantic extras to our booking?",
      answer: "Yes, we offer romantic package add-ons including flower petal arrangements, champagne service, extended aromatherapy experiences, and special anniversary/honeymoon touches. Discuss your preferences when booking."
    },
    {
      question: "What aromatherapy oils do you offer?",
      answer: "We offer lavender (relaxation), eucalyptus (respiratory clarity), lemongrass (energy), frangipani (romance), jasmine (sensuality), and custom blends. You can select oils individually or together as a couple."
    },
    {
      question: "How long does the setup take?",
      answer: "Our therapists arrive 15 minutes before your scheduled treatment time to set up massage tables, arrange ambiance, and prepare oils. You can relax knowing everything will be ready when your session begins."
    }
  ];

  const testimonials = [
    { name: "Sarah & Mike", location: "Australia", text: "Perfect honeymoon experience! The privacy of our villa combined with professional massage made it unforgettable.", rating: 5 },
    { name: "Emma & James", location: "UK", text: "The best couples massage we've ever had. The therapists were synchronized and the romantic setup was beautiful.", rating: 5 },
    { name: "Lisa & Tom", location: "USA", text: "Celebrating our anniversary in Bali, this was the highlight. So convenient and intimate.", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Couples Villa Massage Bali | Private In-Room Spa for Two"
        description="Book a romantic couples villa massage in Bali. Professional therapists, luxury in-room spa experience. Perfect for honeymooners & anniversaries. Book now via WhatsApp!"
        keywords="couples villa massage bali, romantic massage bali, couples spa in villa bali, private couple massage bali, in-room couples massage, villa spa treatment bali"
        canonical="/couples-villa-massage-bali/"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": breadcrumbData })}
      </script>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/hero-1.jpg" alt="Couples villa massage in Bali" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/80 to-cyan-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Heart className="w-4 h-4 inline mr-2" />
              Romantic · Private · Synchronized
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Couples Villa Massage Bali
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Luxury Romantic Spa Experience in the Privacy of Your Villa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Romantic Massage
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Same-Day Booking Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Experience the ultimate romantic escape with our <strong>couples villa massage service in Bali</strong>. Two professional therapists perform synchronized treatments in the privacy of your own villa, creating an intimate spa sanctuary just for you. Perfect for honeymooners, anniversaries, or any couple seeking a luxurious shared wellness experience.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                What's Included in Your Couples Villa Massage
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Complete professional spa experience delivered to your private villa accommodation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-spa-gold" />
                    </div>
                    <CardTitle className="text-spa-earth">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Why Choose Our Private Couples Spa Service
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Experience intimacy and luxury without leaving your villa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-spa-earth flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-spa-gold" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Perfect For Romantic Occasions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">💑 Honeymooners</h3>
                  <p className="text-spa-stone text-sm">Seeking romantic spa experiences to celebrate your new life together</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🎉 Anniversary Celebrations</h3>
                  <p className="text-spa-stone text-sm">Mark special milestones with intimate couples wellness</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏝️ Romantic Getaways</h3>
                  <p className="text-spa-stone text-sm">Couples on vacation wanting quality relaxation time together</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏡 Villa Guests</h3>
                  <p className="text-spa-stone text-sm">Luxury villa rentals wanting premium in-room spa services</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Couples Massage Pricing & Packages
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Transparent pricing for luxury villa spa experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">{pkg.duration} Couples Session</CardTitle>
                    <CardDescription className="text-2xl font-bold text-spa-gold">{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone text-sm">{pkg.description}</p>
                    <Button asChild className="w-full mt-4">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-spa-stone mt-8 max-w-2xl mx-auto">
              Romantic package add-ons available including flower arrangements and champagne. Gift certificates for couples also available.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Service Areas Across Bali
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Available across Bali's most romantic villa destinations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Link key={index} to={`/${area.slug}`} className="block">
                  <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300 text-center">
                    <CardContent className="pt-6">
                      <MapPin className="w-6 h-6 text-spa-gold mx-auto mb-2" />
                      <p className="text-spa-earth font-semibold">{area.name}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
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

        {/* Testimonials Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                What Couples Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">4.9/5 from 150+ couples</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-spa-gold" />
                      ))}
                    </div>
                    <p className="text-spa-stone mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-sm text-spa-earth font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-spa-stone">{testimonial.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
                Related Wellness Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/honeymoon-spa-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Honeymoon Spa Bali</CardTitle>
                    <CardDescription>Luxury wellness packages for newlyweds</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/services">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">All Services</CardTitle>
                    <CardDescription>Explore our complete massage offerings</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/luxury-villa-wellness-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Luxury Villa Wellness</CardTitle>
                    <CardDescription>Premium VIP spa experiences</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Romantic Spa Memory?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your couples villa massage now via WhatsApp for same-day availability!
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Transform your Bali villa into an intimate spa sanctuary. Professional service, complete privacy, unforgettable romantic experience.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default CouplesVillaMassageBali;
