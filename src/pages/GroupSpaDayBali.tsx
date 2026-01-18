import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Users, Sparkles, Shield, Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const GroupSpaDayBali = () => {
  const whatsappMessage = "Hi! I'd like to book a group spa day at our villa in Bali. Can you provide information about group packages?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Group Spa",
    "name": "Group Spa Day Bali",
    "description": "Group spa day packages in Bali. Transform your villa into a luxury spa for 3-20+ people. Simultaneous professional treatments for girls' trips, family celebrations, and group events.",
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
      "priceRange": "325,000 - 350,000 IDR per person"
    },
    "areaServed": ["Seminyak", "Canggu", "Ubud", "Uluwatu", "Sanur", "Nusa Dua"],
    "offers": [
      {
        "@type": "Offer",
        "name": "Small Group (3-5 people)",
        "price": "350000",
        "priceCurrency": "IDR",
        "description": "Starting price per person for small groups"
      },
      {
        "@type": "Offer",
        "name": "Medium Group (6-10 people)",
        "price": "325000",
        "priceCurrency": "IDR",
        "description": "Per person rate for medium groups"
      },
      {
        "@type": "Offer",
        "name": "Large Group (11+ people)",
        "price": "0",
        "priceCurrency": "IDR",
        "description": "Custom pricing available"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many therapists can you provide at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can provide simultaneous massage for groups from 3 to 20+ people. We coordinate therapist teams based on your group size for synchronized treatments."
        }
      },
      {
        "@type": "Question",
        "name": "Can each person choose a different massage type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Each group member can select their preferred massage style - Balinese, Swedish, deep tissue, aromatherapy, or any combination. Our therapists customize based on individual preferences."
        }
      },
      {
        "@type": "Question",
        "name": "How much advance notice do you need for groups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 5-7 days in advance for larger groups to ensure availability of our full therapist team. Smaller groups may arrange same-day bookings when possible."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_CONFIG.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Group Spa Day", "item": `${SITE_CONFIG.url}/group-spa-day-bali/` }
  ];

  const features = [
    { icon: Users, title: "Multiple Professional Therapists", description: "One therapist per person for simultaneous synchronized treatments" },
    { icon: Sparkles, title: "Complete Equipment & Supplies", description: "All massage beds, tables, linens, oils, and equipment provided" },
    { icon: Sparkles, title: "Spa Ambiance Creation", description: "Relaxing music, aromatherapy diffusers, and perfect spa atmosphere" },
    { icon: CheckCircle2, title: "Flexible Treatment Options", description: "Each person chooses their preferred massage style and duration" },
    { icon: Clock, title: "Coordinated Timing", description: "We manage all logistics so everyone experiences treatments together" },
    { icon: Shield, title: "Professional Coordination", description: "Event planning and scheduling support for your group wellness" }
  ];

  const benefits = [
    { title: "Shared Experience", description: "Create bonding moments while enjoying wellness together" },
    { title: "No Travel Hassle", description: "No need to arrange transportation to different spas" },
    { title: "Complete Privacy", description: "Exclusive spa experience for your group only" },
    { title: "Flexible Customization", description: "Each person gets exactly the treatment they want" },
    { title: "Better Value", description: "More affordable than resort spa packages for groups" },
    { title: "Perfect Bonding Activity", description: "Relaxation and wellness as a fun group activity" }
  ];

  const pricing = [
    { size: "Small Groups (3-5 people)", rate: "350,000 IDR per person", description: "Perfect for intimate group experiences" },
    { size: "Medium Groups (6-10 people)", rate: "325,000 IDR per person", description: "Volume discount applied" },
    { size: "Large Groups (11+ people)", rate: "Custom Pricing", description: "Contact for tailored group quotes" }
  ];

  const serviceAreas = [
    { name: "Seminyak", slug: "seminyak" },
    { name: "Canggu", slug: "canggu" },
    { name: "Ubud", slug: "ubud" },
    { name: "Uluwatu", slug: "uluwatu" },
    { name: "Sanur", slug: "sanur" },
    { name: "Nusa Dua", slug: "nusa-dua" }
  ];

  const faqs = [
    {
      question: "How many therapists can you provide at once?",
      answer: "We can provide simultaneous massage for groups from 3 to 20+ people. We coordinate our therapist network based on your group size. For very large groups (20+), we coordinate with partner therapists to ensure quality. Message us with your group size for specific availability."
    },
    {
      question: "Can each person choose a different massage type?",
      answer: "Yes! Each group member can select their preferred massage style - Balinese, Swedish, deep tissue, aromatherapy, or any combination. Our therapists customize based on individual preferences and needs."
    },
    {
      question: "How much advance notice do you need for groups?",
      answer: "We recommend booking 5-7 days in advance for larger groups (10+) to ensure full therapist availability. Smaller groups (3-5) may have last-minute availability. Contact us for your specific group size."
    },
    {
      question: "What space is required for group sessions?",
      answer: "We need approximately 4-5 square meters per person for massage space. Most large villa living areas, poolside pavilions, or garden spaces work perfectly. Send photos via WhatsApp and we'll confirm suitability."
    },
    {
      question: "Do you offer family-friendly treatments?",
      answer: "Absolutely! We offer gentler massage styles for all ages and preferences. We can accommodate mixed-age groups with appropriate treatment modifications for younger or elderly group members."
    },
    {
      question: "Can we add wellness activities beyond massage?",
      answer: "Yes! We can coordinate healthy refreshments, guided relaxation, breathing exercises, or wellness consultations. Ask about wellness add-ons when booking your group spa day."
    },
    {
      question: "What's the largest group you've accommodated?",
      answer: "We've coordinated spa experiences for groups of 18+ people. Through our network, we can handle even larger groups. Pricing and logistics adjust based on group size - contact us for custom quotes."
    },
    {
      question: "Do you offer special pricing for large groups?",
      answer: "Yes! We offer tiered pricing: Small (3-5) at 350K per person, Medium (6-10) at 325K per person, and Large (11+) at custom rates. The larger your group, the better the per-person value."
    }
  ];

  const testimonials = [
    { name: "Jessica & friends", location: "USA", text: "Best girls' trip activity ever! All of us got different massages and the coordination was seamless. Everyone loved it.", rating: 5 },
    { name: "The Chen Family", location: "Singapore", text: "Perfectly coordinated family spa day. Our kids had gentle massage, adults got deeper work. Amazing experience together.", rating: 5 },
    { name: "Wedding Party", location: "Australia", text: "Organized group massage for bridesmaids before wedding. Professional, fun, and helped everyone relax before the big day!", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Group Spa Day Bali | Villa Spa Parties & Group Packages"
        description="Host a group spa day at your Bali villa. Simultaneous treatments, family packages, girls' trips. Flexible group wellness experiences. Book your group spa now!"
        keywords="group spa day bali, group massage bali, villa spa party bali, family spa package bali, group wellness bali, girls trip spa bali"
        canonical="/group-spa-day-bali/"
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
            <img src="/images/hero/hero-1.jpg" alt="Group receiving spa treatments at Bali villa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-pink-900/80 to-rose-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Users className="w-4 h-4 inline mr-2" />
              Group Fun · Shared Wellness · Flexible
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Group Spa Day Bali
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Villa Spa Parties & Wellness Events for 3-20+ People
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Group Spa Day
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Flexible Group Scheduling</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Transform your villa into a <strong>luxury spa for your group</strong>. Whether it's a girls' trip, family celebration, or special event, we provide simultaneous professional treatments for groups of 3-20+ people. All therapists, equipment, and ambiance included – no travel required.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                What's Included in Your Group Spa Day
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Complete professional spa experience for your entire group
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
                Benefits of Private Group Wellness
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Experience wellness together without hassle
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
                Perfect for Groups & Celebrations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">👯 Girls' Trips & Hen Parties</h3>
                  <p className="text-spa-stone text-sm">Fun wellness bonding activity for group of friends</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">👨‍👩‍👧‍👦 Family Vacation Wellness</h3>
                  <p className="text-spa-stone text-sm">All ages welcome with customized treatments</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🎉 Birthday & Celebrations</h3>
                  <p className="text-spa-stone text-sm">Special occasion pampering for your group</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">👰 Wedding Party Prep</h3>
                  <p className="text-spa-stone text-sm">Bridal party relaxation before the big day</p>
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
                Group Spa Pricing & Packages
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Flexible pricing tiers based on group size
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-base">{pkg.size}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-spa-gold">{pkg.rate}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone text-sm">{pkg.description}</p>
                    <Button asChild className="w-full mt-4">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Get Group Quote
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-spa-stone mt-8 max-w-2xl mx-auto">
              Flexible duration options (60, 90, or 120 minutes). Mix and match treatment styles per person. Event planning add-ons available.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Serving Villas Across Bali
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Mobile group spa service throughout Bali's premier villa destinations
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
                What Groups Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">4.9/5 from 120+ groups</span>
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
              <Link to="/mobile-spa-day-package-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Mobile Spa Day Package</CardTitle>
                    <CardDescription>Complete wellness experience at your villa</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/couples-villa-massage-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Couples Villa Massage</CardTitle>
                    <CardDescription>Romantic spa experience for two</CardDescription>
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
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Create Unforgettable Group Memories
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your group spa day now and let us transform your villa into a luxury wellness retreat!
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Professional simultaneous treatments, flexible customization, complete coordination. Perfect bonding activity for your group in Bali.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default GroupSpaDayBali;
