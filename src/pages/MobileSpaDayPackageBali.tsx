import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Sparkles, Zap, Shield, Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const MobileSpaDayPackageBali = () => {
  const whatsappMessage = "Hi! I'm interested in a complete mobile spa day package at my villa in Bali. Can you tell me about the options?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Spa Package",
    "name": "Mobile Spa Day Package Bali",
    "description": "Complete mobile spa day packages in Bali. Multiple treatments, full wellness experience at your villa. Massage, facial, scrub packages.",
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
      "priceRange": "1,250,000 - 3,200,000 IDR"
    },
    "areaServed": ["Seminyak", "Canggu", "Ubud", "Uluwatu", "Sanur", "Nusa Dua"],
    "offers": [
      {
        "@type": "Offer",
        "name": "Half-Day Package (3 hours)",
        "price": "1250000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "Full Spa Day (5 hours)",
        "price": "2200000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "Ultimate Wellness Day (7 hours)",
        "price": "3200000",
        "priceCurrency": "IDR"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "110"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a spa day package take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our packages range from 3 hours (half-day) to 7 hours (full day). You can customize the exact timing and treatment sequence based on your preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize the treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Each package is customizable. Mix and match massage, facials, body scrubs, and other treatments to create your perfect spa day."
        }
      },
      {
        "@type": "Question",
        "name": "Is this available for couples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer couples spa day packages with treatments for both partners. Perfect for romantic getaways or anniversaries."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_CONFIG.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Mobile Spa Day Package", "item": `${SITE_CONFIG.url}/mobile-spa-day-package-bali/` }
  ];

  const features = [
    { icon: Sparkles, title: "Multiple Treatment Options", description: "Choose from massage, facials, body scrubs, foot treatments, and more" },
    { icon: Zap, title: "Professional Therapists", description: "Skilled therapists and beauticians for each treatment type" },
    { icon: Sparkles, title: "All Products Included", description: "Complete product and equipment suite provided" },
    { icon: CheckCircle2, title: "Spa Ambiance Creation", description: "Full spa environment with music, aromatherapy, and comfort" },
    { icon: Clock, title: "Treatment Coordination", description: "Expert sequencing of treatments for optimal relaxation" },
    { icon: Shield, title: "Refreshments Between Services", description: "Healthy beverages and snacks throughout your spa day" }
  ];

  const benefits = [
    { title: "Complete Spa Experience", description: "Full wellness day without leaving your villa" },
    { title: "No Travel Required", description: "All treatments happen in your comfortable accommodation" },
    { title: "Better Value", description: "More affordable than multiple spa appointments" },
    { title: "Private Relaxation", description: "Exclusive experience in your personal space" },
    { title: "Flexible Scheduling", description: "Start times and treatment sequences customized to you" },
    { title: "Customizable Journey", description: "Create the spa day experience you've always wanted" }
  ];

  const pricing = [
    { 
      name: "Half-Day Package", 
      duration: "3 hours", 
      price: "1,250,000 IDR", 
      treatments: "90-min massage + body scrub",
      description: "Perfect introduction to full spa experience" 
    },
    { 
      name: "Full Spa Day", 
      duration: "5 hours", 
      price: "2,200,000 IDR", 
      treatments: "90-min massage + scrub + facial + foot treatment",
      description: "Complete wellness experience" 
    },
    { 
      name: "Ultimate Wellness Day", 
      duration: "7 hours", 
      price: "3,200,000 IDR", 
      treatments: "All treatments + premium add-ons",
      description: "Full day of luxury pampering" 
    }
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
      question: "How long does a spa day package take?",
      answer: "Our packages range from 3 hours (half-day) to 7 hours (full day). You can customize the exact timing and treatment sequence. Treatments can be sequential or parallel depending on your preference and villa space."
    },
    {
      question: "Can I customize the treatments?",
      answer: "Absolutely! Each package is fully customizable. Mix and match massage styles, add facials, body scrubs, foot treatments, or other services. Design the spa day that's perfect for you."
    },
    {
      question: "Is this available for couples?",
      answer: "Yes! We offer couples spa day packages with simultaneous or sequential treatments for both partners. Perfect for romantic getaways, anniversaries, or shared wellness experiences."
    },
    {
      question: "How much space do you need?",
      answer: "We need adequate room for treatment tables and a comfortable relaxation area. Most villa living areas, poolside pavilions, or garden spaces work perfectly. Send photos via WhatsApp to confirm suitability."
    },
    {
      question: "Can I add additional treatments?",
      answer: "Yes! You can add treatments to any package - extra massage time, additional facials, hair treatments, or specialized services. We'll adjust pricing and timing accordingly."
    },
    {
      question: "What products do you use?",
      answer: "We use premium, professional-grade spa products. You can request specific brands or product types, and we work with the best options available to ensure quality and safety."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 3-5 days in advance to ensure full team availability. Smaller packages may have shorter notice options. Contact us for your specific needs."
    }
  ];

  const testimonials = [
    { name: "Sarah", location: "UK", text: "Best spa day ever, in my own villa! The coordination was seamless and I felt completely pampered and relaxed. Already planning my next one.", rating: 5 },
    { name: "Marcus & Lisa", location: "USA", text: "Anniversary spa day was absolutely magical. Both of us had amazing treatments and the entire experience was wonderfully organized.", rating: 5 },
    { name: "Elena", location: "Australia", text: "Perfect self-care experience. From start to finish, everything was luxurious and relaxing. Highly recommend this for anyone staying in Bali.", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Mobile Spa Day Package Bali | Complete Villa Wellness Experience"
        description="Complete mobile spa day packages in Bali. Multiple treatments, full wellness experience at your villa. Massage, facial, scrub packages. Book your spa day now!"
        keywords="mobile spa day package bali, villa spa package bali, full spa day bali, mobile spa experience bali, home spa package bali, complete wellness package bali"
        canonical="/mobile-spa-day-package-bali/"
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
            <img src="/images/hero/hero-1.jpg" alt="Complete mobile spa day at Bali villa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/85 via-rose-900/80 to-red-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Complete · Customizable · Luxurious
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Mobile Spa Day Package
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Complete Wellness at Your Villa – Full Spa Experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Spa Day
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>3-7 Hours of Bliss</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Transform your villa into a <strong>complete spa sanctuary</strong>. Our mobile spa day packages bring multiple professional treatments to you – massage, body scrubs, facials, and more. Enjoy a full wellness day without leaving your accommodation.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                What's Included in Mobile Spa Packages
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Complete professional spa experience at your villa
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
                Benefits of Complete Spa Days
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Ultimate wellness and relaxation experience
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
                Perfect for Wellness & Celebrations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🎉 Special Occasions</h3>
                  <p className="text-spa-stone text-sm">Birthdays, anniversaries, and milestone celebrations</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🧘 Self-Care Retreats</h3>
                  <p className="text-spa-stone text-sm">Personal wellness and rejuvenation days</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">💑 Couples Experiences</h3>
                  <p className="text-spa-stone text-sm">Romantic wellness experiences for two</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">👯 Girls' Spa Days</h3>
                  <p className="text-spa-stone text-sm">Group pampering and fun wellness time</p>
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
                Spa Package Pricing & Options
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Multiple packages to fit your wellness needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">{pkg.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-spa-gold">{pkg.duration}</CardDescription>
                    <CardDescription className="text-2xl font-bold text-spa-earth mt-2">{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-spa-stone font-semibold mb-2">Includes: {pkg.treatments}</p>
                    <p className="text-spa-stone text-sm mb-4">{pkg.description}</p>
                    <Button asChild className="w-full">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-spa-stone mt-8 max-w-2xl mx-auto">
              Custom package creation available. Mix and match treatments to create your perfect spa day. Couples packages and group rates available.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Mobile Service Across Bali
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Spa day packages throughout Bali's villa destinations
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
                What Spa Day Guests Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">4.9/5 from 110+ guests</span>
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
              <Link to="/group-spa-day-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Group Spa Day</CardTitle>
                    <CardDescription>Wellness experience for groups</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/luxury-villa-wellness-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Luxury Villa Wellness</CardTitle>
                    <CardDescription>Premium VIP spa experience</CardDescription>
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
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Treat Yourself to a Complete Wellness Experience
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your mobile spa day package and enjoy luxury spa treatments in the comfort of your villa!
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Complete multi-treatment spa experience. Professional coordination, flexible customization, villa convenience. Your perfect spa day awaits!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default MobileSpaDayPackageBali;
