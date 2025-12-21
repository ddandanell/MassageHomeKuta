import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, Zap, Shield, Users, ArrowRight, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const SpaNearMeKuta = () => {
  const whatsappMessage = "Hi! I'm looking for a spa near me in Kuta. Can you help me with availability?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const breadcrumbData = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${SITE_CONFIG.url}/`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Spa Near Me Kuta",
      "item": `${SITE_CONFIG.url}/spa-near-me-kuta`
    }
  ];

  const serviceSchemaData = {
    name: "Spa Near Me - Professional Mobile Spa in Kuta",
    description: "Looking for spa near me in Kuta? We deliver professional spa treatments to your villa or hotel. Certified therapists, same-day booking. From $17.",
    serviceType: "Mobile Spa and Wellness Services",
    areaServed: "Kuta, Bali",
    offers: {
      priceRange: "$",
      priceCurrency: "USD"
    }
  };

  const spaServices = [
    {
      name: "Traditional Balinese Spa Treatment",
      slug: "balinese-massage",
      benefits: "Full-body stress relief, improved circulation, muscle tension release, better sleep quality, jet lag recovery.",
      duration: "60, 90, or 120 minutes",
      price: "From $17 USD"
    },
    {
      name: "Deep Tissue Therapeutic Massage",
      slug: "deep-tissue-massage",
      benefits: "Chronic pain relief, improved mobility, sports recovery, postural correction, trigger point release.",
      duration: "60, 90, or 120 minutes",
      price: "From $19 USD"
    },
    {
      name: "Aromatherapy Spa Treatment",
      slug: "aromatherapy-massage",
      benefits: "Deep relaxation, anxiety reduction, improved sleep, emotional balance, respiratory benefits.",
      duration: "60, 90, or 120 minutes",
      price: "From $18 USD"
    },
    {
      name: "Hot Stone Spa Therapy",
      slug: "hot-stone-massage",
      benefits: "Deep muscle relaxation, improved circulation, pain relief, stress reduction, detoxification.",
      duration: "60, 90, or 120 minutes",
      price: "From $22 USD"
    },
    {
      name: "Lymphatic Drainage Spa Treatment",
      slug: "lymphatic-drainage-massage",
      benefits: "Reduces swelling, combats jet lag, supports detox, boosts immunity, improves skin appearance.",
      duration: "60, 90, or 120 minutes",
      price: "From $23 USD"
    },
    {
      name: "Thai Massage Therapy",
      slug: "thai-massage",
      benefits: "Enhanced flexibility, increased energy, improved posture, tension release, better range of motion.",
      duration: "60, 90, or 120 minutes",
      price: "From $22 USD"
    },
    {
      name: "Foot Reflexology Spa Treatment",
      slug: "foot-reflexology",
      benefits: "Full-body healing, stress relief, improved organ function, better circulation, deep relaxation.",
      duration: "60 or 90 minutes",
      price: "From $15 USD"
    },
    {
      name: "Couples Spa Experience",
      slug: "four-hands-massage",
      benefits: "Shared relaxation, relationship bonding, convenient scheduling, romantic atmosphere.",
      duration: "60, 90, or 120 minutes",
      price: "From $17 USD per person"
    },
    {
      name: "Pregnancy Spa Treatment",
      slug: "pregnancy-massage",
      benefits: "Back pain relief, reduces swelling, improves sleep, reduces anxiety, safe for all trimesters.",
      duration: "60 or 90 minutes",
      price: "From $20 USD"
    }
  ];

  const primaryServiceAreas = [
    { name: "Central Kuta", slug: "kuta", response: "20-30 minutes" },
    { name: "Legian", slug: "legian", response: "15-25 minutes" },
    { name: "Seminyak", slug: "seminyak", response: "20-35 minutes" },
    { name: "Tuban (Airport Area)", slug: "tuban", response: "25-35 minutes" },
    { name: "Kuta Beachfront", slug: "kuta-beachfront", response: "20-30 minutes" },
    { name: "Kerobokan", slug: "kerobokan", response: "25-35 minutes" }
  ];

  const extendedServiceAreas = [
    { name: "Canggu", slug: "canggu", response: "30-45 minutes" },
    { name: "Sanur", slug: "sanur", response: "40-60 minutes" },
    { name: "Ubud", slug: "ubud", response: "60-90 minutes" },
    { name: "Nusa Dua", slug: "nusa-dua", response: "45-60 minutes" },
    { name: "Jimbaran", slug: "jimbaran", response: "35-50 minutes" },
    { name: "Uluwatu", slug: "uluwatu", response: "50-70 minutes" },
    { name: "Berawa", slug: "berawa", response: "30-40 minutes" },
    { name: "Batu Bolong", slug: "batu-bolong", response: "25-35 minutes" }
  ];

  const faqs = [
    {
      question: "How do I find the best spa near me in Kuta?",
      answer: "Rather than searching for walk-in spas, consider mobile spa service that comes directly to you. Home Massage Kuta delivers professional spa treatments to your villa or hotel throughout Kuta with certified therapists, transparent pricing, and same-day availability – eliminating travel time and providing superior convenience."
    },
    {
      question: "How much does spa service cost in Kuta?",
      answer: "Professional spa near me service in Kuta ranges from $17-43 USD depending on treatment type and duration. Traditional Balinese massage starts at $17 for 60 minutes, aromatherapy costs $18, deep tissue costs $19, and specialized treatments like lymphatic drainage cost $23-43. Mobile spa typically costs 30-50% less than hotel spas."
    },
    {
      question: "Can I book same-day spa appointments in Kuta?",
      answer: "Yes. We accommodate same-day spa bookings throughout Kuta with typical response times of 20-30 minutes. Contact us via WhatsApp for fastest availability confirmation. For guaranteed time slots during peak season, we recommend booking 3-4 hours in advance or the evening before."
    },
    {
      question: "Do you provide spa service to all hotels in Kuta?",
      answer: "Absolutely. We deliver professional spa treatments to virtually all hotels, resorts, villas, guesthouses, and private accommodations throughout Kuta, Legian, Seminyak, and 27 additional Bali areas. Some larger resorts require advance notification for entry procedures – simply provide your hotel name when booking."
    },
    {
      question: "What areas do you cover for mobile spa service?",
      answer: "We provide spa near me service throughout Kuta, Legian, Seminyak, Canggu, Sanur, Ubud, Nusa Dua, Jimbaran, Uluwatu, and 18 additional areas across Bali. View complete service area coverage with response times."
    },
    {
      question: "Are your spa therapists certified and professional?",
      answer: "Yes. All therapists hold professional spa training certificates with specializations in traditional Balinese massage, Swedish massage, deep tissue, aromatherapy, and other modalities. Many have international certifications from institutions in Bali, Thailand, and Indonesia. All undergo background checks, health screenings, and continuous professional development."
    },
    {
      question: "Can I request male or female spa therapists?",
      answer: "Absolutely. We accommodate all preferences for therapist gender. Simply specify your preference when booking via WhatsApp or our online form, and we'll match you with an appropriate certified professional."
    },
    {
      question: "What should I wear during my spa treatment?",
      answer: "Most guests undress completely and are covered with fresh sheets during treatment, with only the area being massaged exposed at any time. However, you may wear underwear if more comfortable. Your comfort and privacy are our priorities – wear whatever makes you feel most relaxed."
    },
    {
      question: "Do I need to provide anything for the spa treatment?",
      answer: "No. Our therapists arrive fully equipped with professional massage table, fresh linens, premium therapeutic oils, ambient music, and all supplies needed for your treatment. You simply need to provide a comfortable space in your villa or hotel room with adequate room for the table."
    },
    {
      question: "How long before my appointment should the therapist arrive?",
      answer: "Therapists typically arrive 10 minutes before your scheduled treatment time to set up equipment and prepare your space. This ensures your treatment begins exactly at your booked time without delays."
    },
    {
      question: "What's your cancellation policy for spa bookings?",
      answer: "We request at least 2 hours notice for cancellations to avoid charges. Bookings canceled with sufficient notice incur no fees. Last-minute cancellations (under 2 hours) may incur a 50% cancellation fee to compensate therapists for travel time and lost scheduling opportunities."
    },
    {
      question: "Is tipping expected for spa therapists?",
      answer: "Tipping is appreciated but not required. Our therapists receive fair wages, but if you're satisfied with your service, tips of 10-20% (IDR 30,000-50,000 for standard sessions) are customary in Bali and deeply appreciated by our team."
    },
    {
      question: "Can I book spa treatments for groups or events?",
      answer: "Yes. We regularly provide spa treatments for group events, villa parties, wellness retreats, corporate events, bachelorette parties, and special occasions. Contact us via WhatsApp with your group size, location, preferred treatments, and date for customized group pricing and therapist coordination."
    },
    {
      question: "What payment methods do you accept for spa services?",
      answer: "We accept cash payment in USD or Indonesian Rupiah at the end of your session. Bank transfer is available for advance bookings. We're currently implementing card payment options for added convenience."
    },
    {
      question: "How often should I get spa treatments?",
      answer: "For general wellness and stress management, weekly or bi-weekly spa treatments provide optimal benefits. For chronic pain or therapeutic needs, 2-3 sessions weekly initially, tapering to weekly maintenance, is recommended. Vacation visitors often book 2-3 treatments during week-long stays."
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Spa Near Me – Professional Mobile Spa in Kuta | Home Massage Kuta"
        description="Looking for spa near me in Kuta? We deliver professional spa treatments to your villa or hotel. Certified therapists, same-day booking. From $17."
        keywords="spa near me kuta, mobile spa kuta, spa service kuta, home spa kuta, professional spa kuta, mobile massage kuta, spa treatment kuta, balinese spa kuta"
        canonical="/spa-near-me-kuta"
      />
      
      <StructuredData type="organization" />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="service" data={serviceSchemaData} />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-1.jpg"
              alt="Professional mobile spa service near me in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/80 to-cyan-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              Mobile Spa Service · 20-30 Minutes
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Spa Near Me – Professional Mobile Spa Service in Kuta
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Stop searching and start relaxing. Home Massage Kuta brings professional spa treatments directly to your villa, hotel room, or private accommodation throughout Kuta and 27 additional areas across Bali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Available Daily 07:00 - 22:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Searching for <strong>spa near me</strong> in Kuta, Bali? Our certified therapists deliver authentic Balinese massage, aromatherapy, deep tissue therapy, hot stone treatments, and specialized wellness services with the same quality you'd expect from Bali's top spas – but in the comfort and privacy of your own space. Same-day booking, transparent pricing, and 20-30 minute response times make us Kuta's most convenient spa solution.
            </p>
          </div>
        </section>

        {/* Why Choose Mobile Spa */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Why Choose Mobile Spa Service Over Traditional Spa Near Me
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                When you search "spa near me in Kuta", you typically find dozens of walk-in massage centers and hotel spas. Mobile spa service offers distinct advantages that transform your wellness experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Ultimate Convenience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">No travel required. No waiting in reception areas. No coordinating transportation. We eliminate 30-60 minutes of travel time and waiting.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Complete Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Experience spa treatments in familiar surroundings where you control the environment, temperature, music volume, and lighting.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Personalized Attention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Mobile spa service provides undivided therapist attention without the rushed atmosphere of busy spa centers.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Better Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Without expensive spa facility overhead, we offer professional treatments at 30-50% below hotel spa rates. All pricing is transparent with no hidden fees.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Same-Day Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Most walk-in spas near you experience long wait times during peak hours. We offer same-day booking with typical response times of 20-30 minutes in central Kuta.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Scheduling Freedom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Book spa sessions around your schedule, not spa operating hours. Early morning, late evening, and same-day appointments available.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Spa Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Comprehensive Spa Services Delivered to Your Location
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Our mobile spa near me service provides the full range of professional treatments you'd find at Bali's premier spa centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {spaServices.map((service, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-xl mb-2">{service.name}</CardTitle>
                    <CardDescription className="text-spa-stone">{service.benefits}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-spa-stone"><strong>Duration:</strong> {service.duration}</p>
                      <p className="text-sm text-spa-stone"><strong>Pricing:</strong> {service.price}</p>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Spa Near Me Service Areas Throughout Kuta & Bali
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We provide professional mobile spa services throughout Kuta and 27 additional areas across Bali with varying response times based on your location.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-spa-earth mb-6 text-center">Primary Kuta Service Areas (15-35 minute response)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {primaryServiceAreas.map((area, index) => (
                  <Card key={index} className="bg-white border-0 shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                        <div>
                          <Link to={`/areas/${area.slug}`} className="text-spa-earth font-semibold hover:text-spa-gold">
                            {area.name} spa service
                          </Link>
                          <p className="text-sm text-spa-stone mt-1">{area.response}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-spa-earth mb-6 text-center">Extended Bali Service Areas (30-90 minute response)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {extendedServiceAreas.map((area, index) => (
                  <Card key={index} className="bg-white border-0 shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                        <div>
                          <Link to={`/areas/${area.slug}`} className="text-spa-earth font-semibold hover:text-spa-gold">
                            {area.name} spa service
                          </Link>
                          <p className="text-sm text-spa-stone mt-1">{area.response}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/areas">
                  View All Service Areas <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Frequently Asked Questions About Spa Near Me in Kuta
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Everything you need to know about finding and booking spa services near you in Kuta.
              </p>
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

        {/* Final CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Professional Spa Treatment Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Stop searching "spa near me" and start experiencing professional spa treatments in the comfort and privacy of your own accommodation. Our certified therapists bring Bali's authentic healing traditions directly to your villa or hotel room throughout Kuta and surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-professional-navy">
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>

            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Whether you need post-flight recovery, vacation relaxation, stress relief, therapeutic treatment, or regular wellness maintenance, our spa near me service in Kuta delivers exceptional treatments without the inconvenience of traditional spa centers. Same-day appointments available throughout Kuta, Legian, Seminyak, and 27 additional Bali areas.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default SpaNearMeKuta;


