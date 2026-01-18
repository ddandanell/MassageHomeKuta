import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Crown, Sparkles, Shield, Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const LuxuryVillaWellnessBali = () => {
  const whatsappMessage = "Hi! I'm interested in luxury villa wellness service for a premium spa experience in Bali. Can you tell me more?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Premium Spa Service",
    "name": "Luxury Villa Wellness Bali",
    "description": "Experience VIP luxury villa wellness in Bali. Premium therapists, exclusive treatments, concierge spa service. For discerning travelers.",
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
      "priceRange": "1,250,000 - 2,450,000 IDR"
    },
    "areaServed": ["Seminyak", "Uluwatu", "Ubud", "Nusa Dua", "Canggu"],
    "offers": [
      {
        "@type": "Offer",
        "name": "Premium 90-minute session",
        "price": "1250000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "Luxury 120-minute session",
        "price": "1650000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "VIP 180-minute journey",
        "price": "2450000",
        "priceCurrency": "IDR"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "65"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes this a luxury service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Master-level therapists with 10+ years experience, premium organic products, extended treatment times, personalized consultation, and concierge coordination. Five-star quality without resort prices."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a specific therapist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer therapist selection as part of our luxury service. You can request specific therapists based on their specializations or previous positive experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What premium treatments are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beyond traditional massage, we offer exotic treatments including hot stone therapy with rare minerals, rare essential oil blends, specialized facial treatments, and custom wellness consultations."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_CONFIG.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Luxury Villa Wellness", "item": `${SITE_CONFIG.url}/luxury-villa-wellness-bali/` }
  ];

  const features = [
    { icon: Crown, title: "Master-Level Therapists", description: "Certified therapists with 10+ years experience in luxury spa settings" },
    { icon: Sparkles, title: "Premium Product Selection", description: "Luxury organic oils and exotic treatment products from around the world" },
    { icon: Sparkles, title: "Luxury Spa Ambiance", description: "Professional-grade music systems, premium aromatherapy, and spa environment" },
    { icon: CheckCircle2, title: "Premium Refreshments", description: "Exclusive beverages, premium herbal teas, and gourmet refreshments" },
    { icon: Clock, title: "Extended Treatment Times", description: "Generous session durations with no rushing - up to 180 minutes available" },
    { icon: Shield, title: "Concierge Service", description: "Personal coordination support and special requests accommodated" }
  ];

  const benefits = [
    { title: "Five-Star Quality", description: "Resort-quality spa experience at competitive villa prices" },
    { title: "Completely Private", description: "Exclusive service in your own luxury accommodation" },
    { title: "Master Therapist Expertise", description: "Access to the most experienced and highly-trained therapists" },
    { title: "Flexible Scheduling", description: "24-hour notice for luxury availability - we prioritize VIP clients" },
    { title: "Customized Experiences", description: "Every detail personalized to your preferences and needs" },
    { title: "VIP Treatment", description: "Discretion, professionalism, and white-glove service standards" }
  ];

  const pricing = [
    { duration: "90-minute", price: "1,250,000 IDR", description: "Premium therapeutic session with master therapist" },
    { duration: "120-minute", price: "1,650,000 IDR", description: "Luxury extended treatment with premium services" },
    { duration: "180-minute", price: "2,450,000 IDR", description: "VIP complete wellness journey with all premium inclusions" }
  ];

  const serviceAreas = [
    { name: "Seminyak", slug: "seminyak" },
    { name: "Uluwatu", slug: "uluwatu" },
    { name: "Ubud", slug: "ubud" },
    { name: "Nusa Dua", slug: "nusa-dua" },
    { name: "Canggu", slug: "canggu" }
  ];

  const faqs = [
    {
      question: "What makes this a luxury service?",
      answer: "Our luxury service features master-level therapists with 10+ years of professional experience, premium organic and exotic products, extended treatment durations, personalized wellness consultation, and dedicated concierge coordination. You receive five-star resort-quality service at competitive villa pricing."
    },
    {
      question: "Can I request a specific therapist?",
      answer: "Absolutely! Therapist selection is part of our luxury service. You can request based on specializations (sports massage, aromatherapy, wellness, etc.) or previous positive experiences. We maintain relationships with our best master therapists for VIP clients."
    },
    {
      question: "What premium treatments are available?",
      answer: "Beyond traditional massage, we offer hot stone therapy with rare minerals, rare essential oil blends, specialized facial treatments, advanced wellness consultations, energy work, and custom treatment combinations. Ask about exotic treatment options when booking."
    },
    {
      question: "How much notice is required?",
      answer: "We recommend 24-hour notice for premium availability, though we do accommodate VIP clients with shorter notice when possible. Book early for multiple-therapist or multi-day experiences."
    },
    {
      question: "Do you serve celebrity clients?",
      answer: "Yes, we serve high-profile clients with complete discretion. Privacy and confidentiality are paramount in our luxury service. We maintain strict confidentiality agreements with all VIP clients."
    },
    {
      question: "What's included in concierge service?",
      answer: "Our concierge service includes: scheduling coordination, special request accommodation, product recommendations, wellness consultation, post-treatment care guidance, and ongoing relationship management for repeat bookings."
    },
    {
      question: "Are exotic treatments available?",
      answer: "Yes! We offer exotic treatments including Ayurvedic spa therapies, specialized hot stone techniques, rare essential oil treatments, and custom wellness journeys. Discuss your preferences when booking your VIP experience."
    }
  ];

  const testimonials = [
    { name: "Distinguished Guest", location: "International", text: "Five-star resort quality at my villa. The master therapist was exceptional and the entire experience was seamlessly coordinated. Booking again next visit.", rating: 5 },
    { name: "Executive Client", location: "Asia", text: "Professional, discreet, and exactly what we needed after a busy schedule. Premium quality throughout. Highly recommend for discerning travelers.", rating: 5 },
    { name: "Luxury Villa Guest", location: "Europe", text: "Outstanding service and attention to detail. The therapist's expertise was evident, and the concierge coordination made everything effortless. Perfect luxury experience.", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Luxury Villa Wellness Bali | Premium VIP Spa Experience"
        description="Experience VIP luxury villa wellness in Bali. Premium therapists, exclusive treatments, concierge spa service. For discerning travelers. Book premium wellness now!"
        keywords="luxury villa wellness bali, premium villa spa bali, vip massage bali, luxury wellness bali, exclusive spa bali, high-end villa massage"
        canonical="/luxury-villa-wellness-bali/"
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
            <img src="/images/hero/hero-1.jpg" alt="Premium luxury wellness at Bali villa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/85 via-amber-900/80 to-orange-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Crown className="w-4 h-4 inline mr-2" />
              Premium · VIP · Exclusive
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Luxury Villa Wellness
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Premium VIP Spa Experience – Master Therapists & Concierge Service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Premium Service
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>24-Hour Notice Required</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Indulge in the finest <strong>villa wellness experience Bali has to offer</strong>. Our premium service brings certified master therapists, exotic treatments, and five-star concierge care directly to your luxury accommodation for an unparalleled wellness journey.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Premium Wellness Service Inclusions
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Five-star luxury experience with master-level expertise
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
                Why Choose Luxury Villa Wellness
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Premium experience with personalized service and discretion
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
                For Discerning Travelers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏨 Luxury Villa Guests</h3>
                  <p className="text-spa-stone text-sm">Private villa rentals seeking premium in-room spa services</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">💼 High-Net-Worth Travelers</h3>
                  <p className="text-spa-stone text-sm">Executive wellness and rejuvenation during business travels</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">⭐ VIP & Celebrity Clients</h3>
                  <p className="text-spa-stone text-sm">Discreet, confidential service for high-profile guests</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🌟 Special Occasions</h3>
                  <p className="text-spa-stone text-sm">Milestone celebrations and exclusive wellness experiences</p>
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
                Luxury Wellness Pricing
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Premium investment in your wellbeing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">{pkg.duration} Session</CardTitle>
                    <CardDescription className="text-2xl font-bold text-spa-gold">{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone text-sm">{pkg.description}</p>
                    <Button asChild className="w-full mt-4">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Request Booking
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-spa-stone mt-8 max-w-2xl mx-auto">
              Exclusive multi-day programs and premium add-ons available. Contact for custom VIP experiences and special requests.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Serving Bali's Premier Properties
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Exclusive service to luxury accommodations across Bali
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                What VIP Clients Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">5.0/5 from 65+ VIP clients</span>
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
                Related Premium Services
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
              <Link to="/couples-villa-massage-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Couples Villa Massage</CardTitle>
                    <CardDescription>Romantic in-room spa experience</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/mobile-spa-day-package-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Mobile Spa Day Package</CardTitle>
                    <CardDescription>Complete wellness experience at your villa</CardDescription>
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
              Elevate Your Wellness Experience
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your luxury villa wellness service now and discover the pinnacle of private spa excellence.
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Master therapists, premium products, five-star concierge service. Experience true luxury wellness in your villa.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default LuxuryVillaWellnessBali;
