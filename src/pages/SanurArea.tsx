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

const SanurArea = () => {
  const whatsappMessage = "Hi! I'm in Sanur and would like to book a massage service. Can you help me with availability?";
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
      "name": "Service Areas",
      "item": `${SITE_CONFIG.url}/areas`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Sanur",
      "item": `${SITE_CONFIG.url}/areas/sanur`
    }
  ];

  const serviceSchemaData = {
    name: "Premium Massage Services in Sanur - Professional Home Massage Delivery",
    description: "Professional massage services in Sanur, Bali. Certified therapists bring spa-quality treatments directly to your villa or hotel. Traditional Balinese, deep tissue, aromatherapy, hot stone, and more. Available 7 AM-10 PM daily.",
    serviceType: "In-Villa Massage and Spa Services",
    areaServed: "Sanur, Bali",
    offers: {
      priceRange: "$$",
      priceCurrency: "IDR"
    }
  };

  const massageServices = [
    {
      name: "Traditional Balinese Massage",
      slug: "balinese-massage",
      description: "Experience authentic Balinese massage that combines acupressure, gentle stretching, and aromatherapy using centuries-old healing techniques.",
      perfectFor: "First-time visitors seeking authentic Balinese wellness traditions, guests recovering from travel fatigue, anyone wanting holistic mind-body relaxation."
    },
    {
      name: "Deep Tissue Therapeutic Massage",
      slug: "deep-tissue-massage",
      description: "Intensive treatment targeting chronic muscle tension and pain using focused pressure techniques.",
      perfectFor: "Active travelers, surfers, and anyone dealing with persistent muscle discomfort."
    },
    {
      name: "Aromatherapy Massage",
      slug: "aromatherapy-massage",
      description: "Luxurious aromatherapy massage combines gentle Swedish techniques with therapeutic essential oils.",
      perfectFor: "Relaxation, energy, detoxification, or emotional balance."
    },
    {
      name: "Hot Stone Massage",
      slug: "hot-stone-massage",
      description: "Premium hot stone massage uses heated volcanic stones to melt away tension and promote deep relaxation.",
      perfectFor: "Muscle stiffness and stress relief."
    },
    {
      name: "Pregnancy Massage",
      slug: "pregnancy-massage",
      description: "Safe, gentle pregnancy massage designed specifically for expectant mothers.",
      perfectFor: "Expectant mothers seeking relief from pregnancy-related discomfort."
    },
    {
      name: "Foot Reflexology",
      slug: "foot-reflexology",
      description: "Therapeutic foot reflexology stimulates pressure points connected to organs throughout your body.",
      perfectFor: "Overall wellness and profound relaxation."
    },
    {
      name: "Jet Lag Recovery Massage",
      slug: "jet-lag-recovery-massage",
      description: "Specially designed jet lag recovery massage helps reset your body clock after long flights.",
      perfectFor: "Travelers arriving after long-haul flights."
    }
  ];

  const benefits = [
    "Villa vacationers seeking convenient in-villa spa experiences",
    "Long-term visitors maintaining wellness routines",
    "Couples and families with synchronized massage sessions",
    "Business travelers needing stress relief",
    "Active tourists requiring sports massage and recovery",
    "Wellness seekers prioritizing holistic healing"
  ];

  const coverageAreas = [
    "Sanur Beach Road properties",
    "Bypass Ngurah Rai accommodations",
    "Northern Sanur residential areas",
    "Southern beachfront villas",
    "Central Sanur hotels and guesthouses"
  ];

  const faqs = [
    {
      question: "How quickly can I book a massage in Sanur?",
      answer: "Most Sanur bookings are confirmed within 40-60 minutes. For same-day requests, contact us via WhatsApp for fastest response. Advanced bookings guarantee your preferred time slot."
    },
    {
      question: "What areas of Sanur do you serve?",
      answer: "We provide massage services throughout all Sanur neighborhoods, including beachfront properties, residential areas near Bypass Ngurah Rai, and accommodations along Sanur Beach Road. Response time averages 40-60 minutes depending on your exact location."
    },
    {
      question: "Do therapists bring all necessary equipment?",
      answer: "Yes, our therapists arrive fully equipped with professional massage tables, premium linens, therapeutic oils, and all supplies needed for your chosen treatment. You simply need to provide a comfortable space in your villa or hotel room."
    },
    {
      question: "Can I request male or female therapists?",
      answer: "Absolutely. We accommodate all preferences for therapist gender. Please specify your preference when booking to ensure we match you with the right professional."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash (IDR), bank transfers, and most major credit cards. Payment is collected after your treatment—no advance deposit required."
    },
    {
      question: "Are your massage therapists certified and insured?",
      answer: "Yes, all therapists serving Sanur hold professional certifications and are covered by comprehensive liability insurance. We maintain the highest safety and professional standards."
    },
    {
      question: "Can you accommodate couples massage?",
      answer: "Yes, we offer synchronized couples massage with two therapists providing simultaneous treatments. This is a popular choice for romantic getaways and special occasions in Sanur."
    },
    {
      question: "What if I'm staying in a small hotel room?",
      answer: "Our therapists are experienced in working within various space constraints. A standard hotel room typically provides sufficient space for one massage table. For couples treatments, we assess your space and may recommend alternative arrangements if needed."
    },
    {
      question: "Do you offer treatments for pregnant women?",
      answer: "Yes, our pregnancy massage service is specifically designed for expectant mothers with specialized training and positioning techniques to ensure complete safety and comfort."
    },
    {
      question: "Can I book regular weekly massage sessions?",
      answer: "Absolutely. Many long-term Sanur residents and extended-stay visitors schedule regular weekly or bi-weekly sessions. Contact us to arrange a consistent schedule with your preferred therapist."
    },
    {
      question: "What's the cancellation policy?",
      answer: "We request at least 2 hours notice for cancellations to avoid charges. For bookings canceled with sufficient notice, there are no fees. Last-minute cancellations may incur a small cancellation charge."
    },
    {
      question: "Do you serve other Bali areas besides Sanur?",
      answer: "Yes, we provide massage services across 27+ areas throughout Bali. Explore our complete coverage at our service areas page, including Seminyak, Canggu, Ubud, and more."
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Premium Massage Services in Sanur: Your Complete Guide to Relaxation and Wellness"
        description="Sanur, Bali's tranquil beachside haven, offers unmatched environment for therapeutic massage and holistic wellness. Certified therapists bring professional spa-quality massage directly to your Sanur accommodation. Same-day booking available with 40-60 minute response times."
        keywords="massage services sanur, sanur massage, home massage sanur, villa massage sanur, mobile spa sanur, balinese massage sanur, deep tissue massage sanur, aromatherapy massage sanur, hot stone massage sanur, pregnancy massage sanur, foot reflexology sanur, jet lag recovery massage sanur, professional massage sanur bali, certified massage therapist sanur"
        canonical="/areas/sanur"
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
              alt="Professional massage service in Sanur, Bali - tranquil beachside relaxation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/80 to-cyan-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              Fast Response · 40-60 Minutes
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Premium Massage Services in Sanur
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Your Complete Guide to Relaxation and Wellness. Sanur, Bali's tranquil beachside haven, offers an unmatched environment for therapeutic massage and holistic wellness.
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
              Sanur, Bali's tranquil beachside haven, offers an unmatched environment for therapeutic massage and holistic wellness. Whether you're seeking deep tissue therapy after island adventures, traditional Balinese healing techniques, or luxurious aromatherapy sessions in your villa, <Link to="/areas/sanur" className="text-spa-gold hover:underline font-semibold">massage services in Sanur</Link> deliver world-class treatments with authentic Balinese hospitality.
            </p>
            <p className="text-lg text-spa-stone leading-relaxed text-center mt-4">
              Our certified therapists bring professional spa-quality massage directly to your Sanur accommodation, eliminating travel stress and maximizing your relaxation time in this serene coastal paradise.
            </p>
          </div>
        </section>

        {/* Why Choose Professional Massage Services in Sanur */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Why Choose Professional Massage Services in Sanur
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Sanur's relaxed atmosphere makes it the ideal location for in-villa massage treatments. Unlike the bustling energy of Kuta or Seminyak, Sanur offers a peaceful backdrop where therapeutic bodywork can truly restore your mind and body.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Peaceful Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Sanur's calm beachside setting enhances relaxation and therapeutic results.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Villa Convenience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Professional therapists arrive at your accommodation with premium equipment and oils.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Certified Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Internationally trained massage therapists with traditional Balinese techniques.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Same-day bookings available with 40-60 minute response times to Sanur.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Authentic Treatments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Traditional healing methods passed down through generations of Balinese healers.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Privacy and Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Enjoy treatments in the familiar comfort of your own space.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Massage Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Comprehensive Massage Services Available in Sanur
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Our Sanur massage menu features both traditional Balinese techniques and contemporary therapeutic modalities, ensuring every guest finds their perfect treatment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {massageServices.map((service, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-xl mb-2">{service.name}</CardTitle>
                    <CardDescription className="text-spa-stone">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-spa-stone mb-4">
                      <strong className="text-spa-earth">Perfect for:</strong> {service.perfectFor}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/services">
                  View All Massage Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Who Benefits Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Who Benefits from Massage Services in Sanur
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Our Sanur massage services cater to diverse clientele with varying wellness needs:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                  <span className="text-spa-earth">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sanur is Perfect */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Why Sanur is Perfect for Massage and Wellness
              </h2>
              <p className="text-lg text-spa-stone leading-relaxed">
                Sanur's unique characteristics make it an exceptional location for therapeutic massage treatments. The area's calm energy, mature trees providing natural shade, and gentle ocean breezes create an environment that naturally enhances relaxation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-spa-earth mb-4">Sanur's Wellness Advantages</h3>
                  <ul className="space-y-2 text-spa-stone">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Quieter atmosphere compared to busier Bali areas allows deeper relaxation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Beachfront location provides soothing ocean sounds during treatments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Established villa community with spacious accommodations ideal for in-room massage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Lower tourist density means better therapist availability and scheduling flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Proximity to Denpasar enables access to experienced, certified massage professionals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="relative rounded-lg overflow-hidden shadow-soft">
                <img
                  src="/images/hero/hero-2.jpg"
                  alt="Peaceful Sanur beachside setting perfect for massage and wellness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Booking Massage Services in Sanur: Simple and Fast
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Our streamlined booking process ensures you receive professional massage services with minimal wait time. Most Sanur bookings are confirmed within 40-60 minutes, with therapists arriving fully equipped.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-spa-gold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Contact Us</h3>
                <p className="text-sm text-spa-stone">Contact us via WhatsApp with your preferred treatment and timing</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-spa-gold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Instant Confirmation</h3>
                <p className="text-sm text-spa-stone">Receive instant confirmation with therapist details and arrival estimate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-spa-gold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Therapist Arrives</h3>
                <p className="text-sm text-spa-stone">Therapist arrives at your Sanur location with premium equipment and supplies</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-spa-gold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Enjoy Treatment</h3>
                <p className="text-sm text-spa-stone">Enjoy your customized massage treatment in complete privacy</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-spa-gold">5</span>
                </div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Convenient Payment</h3>
                <p className="text-sm text-spa-stone">Pay conveniently after your session—no advance deposit required</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Coverage Areas Throughout Sanur
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We provide comprehensive massage services across all Sanur neighborhoods, from beachfront resorts to residential villa areas. Our therapists are familiar with Sanur's layout and can reach any location efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
              {coverageAreas.map((area, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-spa-gold flex-shrink-0" />
                      <span className="text-spa-earth font-medium">{area}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-spa-stone mb-6">
                We also serve nearby areas including <Link to="/areas/denpasar" className="text-spa-gold hover:underline font-semibold">Denpasar</Link>, <Link to="/areas/nusa-dua" className="text-spa-gold hover:underline font-semibold">Nusa Dua</Link>, and can coordinate treatments for guests exploring multiple Bali regions.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/areas">
                  View All Service Areas <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Transparent Pricing and Package Options
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Our Sanur massage pricing reflects fair market rates while maintaining the highest quality standards. We offer flexible packages designed for different needs and budgets.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-soft">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-spa-earth mb-6">Pricing Structure</h3>
                <ul className="space-y-4 text-spa-stone">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                    <span>Single session treatments starting from competitive base rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                    <span>Extended 90-minute and 2-hour sessions for deeper therapeutic work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                    <span>Couple's massage packages with synchronized treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                    <span>Multi-session packages offering savings for regular wellness maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                    <span>Specialty treatments (hot stone, pregnancy, four hands) at premium rates</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/packages">
                      View Special Massage Packages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meet Our Therapists */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Meet Our Certified Sanur Massage Therapists
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Every therapist serving Sanur holds international certifications and extensive training in multiple massage modalities. Our team combines traditional Balinese healing knowledge with contemporary therapeutic techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-spa-earth mb-2">Therapist Qualifications</h3>
                  <ul className="space-y-2 text-sm text-spa-stone">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Minimum 3+ years professional massage experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Certified in traditional Balinese massage techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Additional training in Swedish, deep tissue, and sports massage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Background-checked and fully insured professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Excellent English communication skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-0.5" />
                      <span>Understanding of Western wellness expectations and preferences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="relative rounded-lg overflow-hidden shadow-soft">
                <img
                  src="/images/hero/hero-3.jpg"
                  alt="Certified professional massage therapist in Sanur, Bali"
                  className="w-full h-full object-cover"
                />
              </div>

              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-spa-earth mb-4">Learn More About Our Team</h3>
                  <p className="text-spa-stone mb-4">
                    Our professional therapists are dedicated to providing exceptional massage experiences in Sanur.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/therapists">
                      Meet Our Therapists <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Frequently Asked Questions About Massage in Sanur
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Everything you need to know about our home massage service in Sanur.
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

        {/* Customer Reviews */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Customer Reviews: Sanur Massage Experiences
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Our Sanur massage services maintain a 4.9★ average rating based on hundreds of verified customer reviews. Guests consistently praise our therapists' professionalism, punctuality, and therapeutic expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-spa-gold fill-current" />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-spa-earth mb-4">Common Praise Themes</h3>
                  <ul className="space-y-2 text-spa-stone">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-1" />
                      <span>Exceptional therapeutic results and pain relief</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-1" />
                      <span>Professional, respectful therapist conduct</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-1" />
                      <span>Punctual arrival and streamlined booking process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-1" />
                      <span>High-quality oils and equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-1" />
                      <span>Excellent communication and service customization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="relative rounded-lg overflow-hidden shadow-soft">
                <img
                  src="/images/hero/hero-4.jpg"
                  alt="Happy customer enjoying professional massage service in Sanur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/reviews">
                  Read Detailed Guest Testimonials <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Sanur Massage Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience professional therapeutic massage in the comfort of your Sanur accommodation. Our certified therapists are ready to deliver exceptional treatments that restore your body and refresh your spirit.
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
              Whether you're seeking relief from travel fatigue, therapeutic treatment for muscle tension, or simply want to indulge in Bali's renowned wellness traditions, our Sanur massage services deliver exceptional results in the peaceful setting you deserve.
            </p>
            <p className="text-lg font-semibold mt-4 opacity-95">
              Don't let your Sanur stay pass without experiencing authentic Balinese massage therapy. Book your session today and discover why our guests consistently rate us as Sanur's premier mobile massage service.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default SanurArea;
