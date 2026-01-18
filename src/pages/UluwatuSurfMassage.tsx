import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Zap, Shield, Star, CheckCircle2, MapPin, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const UluwatuSurfMassage = () => {
  const whatsappMessage = "Hi! I'd like to book a surf recovery massage in Uluwatu. Can you help with same-day availability?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sports Massage",
    "name": "Uluwatu Surf Massage",
    "description": "Specialized surf recovery massage in Uluwatu, Bali. Target paddling strain, shoulder tension, lower back relief. Mobile service to surf accommodations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Home Massage Kuta",
      "url": "https://www.homemassagekuta.com",
      "telephone": SITE_CONFIG.whatsapp,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Uluwatu",
        "addressRegion": "Bali",
        "addressCountry": "ID"
      },
      "priceRange": "450,000 - 650,000 IDR"
    },
    "areaServed": ["Uluwatu", "Padang Padang", "Bingin", "Dreamland", "Canggu"],
    "offers": [
      {
        "@type": "Offer",
        "name": "60-minute surf recovery",
        "price": "450000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "90-minute deep session",
        "price": "650000",
        "priceCurrency": "IDR"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How soon after surfing should I get massage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideally within 2-4 hours after surfing to help prevent next-day soreness (DOMS) and accelerate muscle recovery. Even the same day is beneficial."
        }
      },
      {
        "@type": "Question",
        "name": "Do you understand surf-specific injuries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our therapists specialize in sports massage and understand surfer's shoulder, paddling strain, lower back tension, and wipeout impacts. We focus on the exact muscles stressed by wave riding."
        }
      },
      {
        "@type": "Question",
        "name": "Can you come to surf camps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We provide mobile service to all Uluwatu surf camps, accommodations, and villas. Just let us know your location and we'll arrive with all equipment."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Areas", "item": `${SITE_CONFIG.url}/uluwatu` },
    { "@type": "ListItem", "position": 3, "name": "Uluwatu Surf Massage", "item": `${SITE_CONFIG.url}/uluwatu-surf-massage/` }
  ];

  const features = [
    { icon: Zap, title: "Sport-Specific Techniques", description: "Massage techniques designed specifically for paddling and wave riding muscles" },
    { icon: Shield, title: "Shoulder & Back Focus", description: "Deep work on shoulders, lats, and back - the core of paddling power" },
    { icon: CheckCircle2, title: "Paddling Strain Relief", description: "Targeted relief for paddle fatigue and repetitive strain injuries" },
    { icon: Waves, title: "Flexibility for Performance", description: "Stretching and mobility work to maintain your surfing performance" },
    { icon: Clock, title: "Same-Day Appointments", description: "Book directly after your surf session for optimal recovery" },
    { icon: Shield, title: "Anti-Inflammatory Care", description: "Techniques and recommendations to reduce inflammation and soreness" }
  ];

  const benefits = [
    { title: "Faster Recovery", description: "Recover between surf sessions and maintain your wave-riding stamina throughout your trip" },
    { title: "Injury Prevention", description: "Prevent surfer's shoulder and chronic back pain from repetitive paddling" },
    { title: "Maintain Flexibility", description: "Keep your range of motion for optimal wave performance and positioning" },
    { title: "Local Expertise", description: "Service based in Uluwatu with understanding of local breaks and surfer needs" },
    { title: "Evening Availability", description: "Perfect after dawn patrol sessions or afternoon sessions at your preferred breaks" },
    { title: "Surf Longer", description: "Feel better and be ready to paddle out fresh the next day" }
  ];

  const pricing = [
    { duration: "60-minute", price: "450,000 IDR", description: "Post-surf recovery targeting paddling muscles" },
    { duration: "90-minute", price: "650,000 IDR", description: "Deep recovery session for intense surf days" }
  ];

  const serviceAreas = [
    { name: "Uluwatu", slug: "uluwatu" },
    { name: "Padang Padang", slug: "padang-padang-area" },
    { name: "Bingin", slug: "bingin" },
    { name: "Dreamland", slug: "dreamland-area" },
    { name: "Canggu", slug: "canggu" }
  ];

  const faqs = [
    {
      question: "How soon after surfing should I get massage?",
      answer: "Ideally within 2-4 hours after surfing to help prevent next-day soreness (DOMS) and accelerate muscle recovery. Even the same day is beneficial. Our therapists are ready for post-session bookings!"
    },
    {
      question: "Do you understand surf-specific injuries?",
      answer: "Absolutely! Our therapists specialize in sports massage and understand surfer's shoulder, paddling strain, lower back tension, and wipeout impacts. We focus on the exact muscles stressed by wave riding."
    },
    {
      question: "Can you come to surf camps?",
      answer: "Yes! We provide mobile service to all Uluwatu surf camps, accommodations, and villas. Just send us your location via WhatsApp and we'll arrive with all equipment ready."
    },
    {
      question: "What if I surfed big waves today?",
      answer: "Big wave sessions create more muscle stress and potential micro-injuries. Our 90-minute deep session is perfect after intense days. We can focus on impact areas and provide comprehensive muscle recovery."
    },
    {
      question: "Do you offer same-day appointments?",
      answer: "Yes! We prioritize surfers and often have same-day availability, especially in the afternoons after morning sessions. Just message us via WhatsApp with your preferred time."
    },
    {
      question: "Can you help with chronic surfer's shoulder?",
      answer: "Yes! Surfer's shoulder (rotator cuff strain) responds well to consistent sports massage. Our therapists can work on chronic pain and provide stretches to prevent future issues."
    },
    {
      question: "What's the best timing for recovery massage?",
      answer: "The sweet spot is 2-4 hours post-session for prevention of soreness. However, even next-day massage helps reduce existing soreness and accelerates healing. Multiple sessions across your trip optimize recovery."
    }
  ];

  const testimonials = [
    { name: "Jake", location: "Australia", text: "Kept me surfing all week. After getting massage on day 2, my shoulders felt better and I could paddle strong every single day.", rating: 5 },
    { name: "Marcus", location: "USA", text: "Best sports massage I've had. The therapist actually understood surfing and focused exactly where I needed it.", rating: 5 },
    { name: "Chen", location: "Singapore", text: "Surf camp recommended your service. Booked after 4 days of big waves and felt human again. Definitely booking again next trip!", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Uluwatu Surf Massage | Post-Surf Recovery Treatment Bali"
        description="Specialized surf recovery massage in Uluwatu, Bali. Target paddling strain, shoulder tension, lower back relief. Mobile service to surf accommodations. Book now!"
        keywords="uluwatu surf massage, surf recovery massage bali, surfer massage uluwatu, post-surf treatment bali, paddling recovery massage, surf muscle massage"
        canonical="/uluwatu-surf-massage/"
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
            <img src="/images/hero/hero-1.jpg" alt="Surfer receiving massage in Uluwatu" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-teal-900/80 to-cyan-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Waves className="w-4 h-4 inline mr-2" />
              Surf Recovery · Performance · Local
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Uluwatu Surf Massage
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Recovery for Waves Riders – Specialized Paddling Muscle Relief
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Surf Recovery
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
              Surfed Padang Padang or Uluwatu today? Get <strong>specialized surf recovery massage</strong> at your cliffside villa or surf camp. We target the exact muscle groups stressed by paddling, duck-diving, and wave riding for optimal recovery so you can paddle out fresh tomorrow.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Surf-Specific Recovery Massage
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Techniques designed specifically for wave riders and paddling strains
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
                Why Surfers Choose Our Service
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Recover better and maintain performance throughout your Bali surf trip
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
                Perfect for Uluwatu Waves Riders
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏄 Surfers Staying in Uluwatu</h3>
                  <p className="text-spa-stone text-sm">Villa guests and accommodation seekers wanting recovery massage</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🌊 Surf Trip Participants</h3>
                  <p className="text-spa-stone text-sm">Multi-week surf trips needing regular recovery and maintenance</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">📍 Daily Waves Riders</h3>
                  <p className="text-spa-stone text-sm">Surfers with multiple sessions a day needing advanced recovery</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏕️ Surf Camp Attendees</h3>
                  <p className="text-spa-stone text-sm">Organized camps and group stays wanting group massage coordination</p>
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
                Surf Massage Pricing
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Affordable recovery massage for surfers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">{pkg.duration} Surf Recovery</CardTitle>
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
              Multi-session surf trip packages available. Same-day booking encouraged for optimal recovery timing.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Serving Uluwatu's Surf Breaks
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Mobile service throughout Uluwatu area near all major breaks
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
                What Surfers Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">4.9/5 from 85+ surfers</span>
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
                    <CardDescription>Enhance flexibility and practice recovery</CardDescription>
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
              <Link to="/post-hike-recovery-massage-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Post-Hike Recovery</CardTitle>
                    <CardDescription>Recovery after mountain trekking</CardDescription>
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
              Don't Let Sore Muscles Stop Your Surf Trip
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your Uluwatu surf massage and paddle out fresh tomorrow!
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Professional sports massage therapy designed for surfers. Same-day availability, local Uluwatu expertise, focused recovery for wave riders.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default UluwatuSurfMassage;
