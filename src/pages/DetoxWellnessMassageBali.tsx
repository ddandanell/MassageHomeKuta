import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Droplets, Leaf, Shield, Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const DetoxWellnessMassageBali = () => {
  const whatsappMessage = "Hi! I'm interested in detox wellness massage and lymphatic drainage treatment in Bali. Can you tell me more?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wellness Massage",
    "name": "Detox Wellness Massage Bali",
    "description": "Detox and cleanse with specialized wellness massage in Bali. Lymphatic drainage, toxin release, body purification. Perfect for wellness programs.",
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
      "priceRange": "500,000 - 700,000 IDR"
    },
    "areaServed": ["Ubud", "Canggu", "Seminyak"],
    "offers": [
      {
        "@type": "Offer",
        "name": "60-minute detox session",
        "price": "500000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "90-minute deep detox",
        "price": "700000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "3-day program",
        "price": "1900000",
        "priceCurrency": "IDR",
        "description": "3 sessions with guidance"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "95"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does detox massage work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lymphatic drainage massage uses gentle techniques to encourage the body's lymphatic system to function optimally, helping naturally move toxins and waste products through the body."
        }
      },
      {
        "@type": "Question",
        "name": "Should I be on a cleanse program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, detox massage is beneficial whether or not you're on a formal cleanse. It supports your body's natural detoxification processes and works well alongside wellness programs."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I get detox massage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For optimal benefits, 1-2 times per week during a cleanse period is ideal. Even single sessions help with reducing bloating and supporting wellness goals."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_CONFIG.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Detox Wellness Massage", "item": `${SITE_CONFIG.url}/detox-wellness-massage-bali/` }
  ];

  const features = [
    { icon: Droplets, title: "Lymphatic Drainage", description: "Gentle techniques to support natural lymph flow and immune function" },
    { icon: Leaf, title: "Detoxifying Strokes", description: "Specialized massage strokes designed to encourage toxin release" },
    { icon: Shield, title: "Lymph Node Focus", description: "Targeted work on key lymphatic system areas for optimal flow" },
    { icon: Leaf, title: "Natural Oil Blends", description: "Detox-supporting oils including eucalyptus, lemongrass, and juniper" },
    { icon: Clock, title: "Body Brushing", description: "Dry brushing techniques to stimulate lymphatic circulation" },
    { icon: Shield, title: "Wellness Guidance", description: "Hydration and dietary recommendations to support detoxification" }
  ];

  const benefits = [
    { title: "Natural Detoxification", description: "Support your body's natural ability to eliminate toxins and waste" },
    { title: "Reduce Bloating", description: "Decrease water retention and bloating through lymphatic support" },
    { title: "Boost Immunity", description: "Enhance immune system function through lymphatic optimization" },
    { title: "Improve Skin", description: "Clearer, more radiant skin as toxins are naturally eliminated" },
    { title: "Increased Energy", description: "Feel more energized and vital as your body flushes waste" },
    { title: "Holistic Wellness", description: "Complete approach combining massage, guidance, and lifestyle support" }
  ];

  const pricing = [
    { duration: "60-minute session", price: "500,000 IDR", description: "Single detox massage treatment" },
    { duration: "90-minute deep detox", price: "700,000 IDR", description: "Extended treatment for deeper work" },
    { duration: "3-day program", price: "1,900,000 IDR", description: "Three sessions with wellness consultation" },
    { duration: "7-day program", price: "3,000,000 IDR", description: "Five sessions with full dietary guidance" }
  ];

  const serviceAreas = [
    { name: "Ubud", slug: "ubud" },
    { name: "Canggu", slug: "canggu" },
    { name: "Seminyak", slug: "seminyak" }
  ];

  const faqs = [
    {
      question: "How does detox massage work?",
      answer: "Lymphatic drainage massage uses gentle, rhythmic techniques to encourage your body's lymphatic system to function optimally. This helps naturally move toxins, waste, and excess fluid through the body's natural detoxification channels. Unlike deep tissue massage, detox massage is gentle and focuses on stimulating flow rather than muscle work."
    },
    {
      question: "Should I be on a cleanse program?",
      answer: "No, you don't need to be on a formal cleanse program to benefit from detox massage. However, it works beautifully alongside wellness programs, juice cleanses, or detox diets. It supports your body's natural processes regardless of your current program."
    },
    {
      question: "How often should I get detox massage?",
      answer: "For optimal benefits during a cleanse, 1-2 sessions per week is ideal. Single sessions are also beneficial for reducing bloating and supporting wellness. Even one session helps jumpstart lymphatic flow and reduce water retention."
    },
    {
      question: "What should I eat before/after?",
      answer: "Eat light meals before your session to allow comfortable positioning. After massage, drink plenty of water to support the flushing process. We provide dietary recommendations during your session and can discuss optimal pre/post-session nutrition."
    },
    {
      question: "Is this suitable during fasting?",
      answer: "Yes! Detox massage is excellent during fasting periods. The gentle techniques support your body's natural cleansing processes. Just ensure you're well-hydrated and let us know about your fasting protocol so we can adjust intensity appropriately."
    },
    {
      question: "Can this help with bloating?",
      answer: "Absolutely! Lymphatic drainage is specifically effective for reducing bloating and water retention. Many clients experience noticeably reduced bloating after just one session, with continued improvement across multiple sessions."
    },
    {
      question: "What are the contraindications?",
      answer: "Detox massage is generally safe for most people. However, we recommend consulting your doctor if you have: active infections, recent surgeries, heart conditions, or are taking certain medications. Let us know about any health conditions when booking."
    }
  ];

  const testimonials = [
    { name: "Maria", location: "Spain", text: "Perfect for my cleanse week! I could feel the difference immediately. Combined with the dietary guidance, I felt completely revitalized.", rating: 5 },
    { name: "Priya", location: "India", text: "Amazing detox experience. The therapist really knew lymphatic anatomy. My bloating decreased noticeably after three sessions.", rating: 5 },
    { name: "Elena", location: "Italy", text: "Wellness retreat recommended this and it was transformative. Felt lighter, clearer, and more energized throughout my stay.", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Detox Wellness Massage Bali | Lymphatic Drainage Treatment"
        description="Detox and cleanse with specialized wellness massage in Bali. Lymphatic drainage, toxin release, body purification. Perfect for wellness programs. Book your detox massage!"
        keywords="detox wellness massage bali, lymphatic drainage massage bali, detox massage bali, wellness detox bali, body cleanse massage, toxin release massage bali"
        canonical="/detox-wellness-massage-bali/"
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
            <img src="/images/hero/hero-1.jpg" alt="Detox wellness massage in Bali" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/80 to-green-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Leaf className="w-4 h-4 inline mr-2" />
              Cleanse · Wellness · Revitalize
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Detox Wellness Massage
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Purify & Revitalize Your Body – Lymphatic Drainage Treatment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Detox Session
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Wellness Programs Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Support your body's natural detoxification with <strong>specialized wellness massage techniques</strong>. Our lymphatic drainage and detox-focused treatments help eliminate toxins, reduce bloating, and enhance your wellness journey in Bali.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                What's Included in Detox Wellness Massage
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Complete lymphatic support and wellness treatment
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
                Benefits of Lymphatic Drainage
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Support natural wellness and revitalization
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
                Who Benefits from Detox Massage
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🌿 Wellness Retreat Participants</h3>
                  <p className="text-spa-stone text-sm">Perfect complement to cleanse and wellness programs</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🧘 Cleanse Followers</h3>
                  <p className="text-spa-stone text-sm">Support your body during juice cleanses and detox diets</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">💧 Those with Bloating</h3>
                  <p className="text-spa-stone text-sm">Reduce water retention and uncomfortable bloating</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🌟 Wellness Seekers</h3>
                  <p className="text-spa-stone text-sm">Anyone starting or maintaining wellness journeys</p>
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
                Detox Wellness Pricing & Programs
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Single sessions or comprehensive detox programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">{pkg.duration}</CardTitle>
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
              Multi-day programs include wellness consultation and dietary guidance. Perfect for wellness retreats and cleanse periods.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Mobile Wellness Service Across Bali
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We come to you to support your detox journey
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
                What Wellness Seekers Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">4.8/5 from 95+ wellness seekers</span>
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
              <Link to="/post-yoga-recovery-massage">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Post-Yoga Recovery</CardTitle>
                    <CardDescription>Enhance flexibility and wellness practice</CardDescription>
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
              <Link to="/ubud">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Ubud Wellness Hub</CardTitle>
                    <CardDescription>Explore Ubud wellness services</CardDescription>
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
              Start Your Body Purification Journey
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your detox wellness massage and feel lighter, more energized, and revitalized!
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Professional lymphatic drainage support for your wellness journey. Mobile service, wellness consultation, and dietary guidance included.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default DetoxWellnessMassageBali;
