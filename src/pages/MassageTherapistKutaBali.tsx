import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, Zap, Shield, Users, ArrowRight, CheckCircle2, Heart, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const MassageTherapistKutaBali = () => {
  const whatsappMessage = "Hi! I'm looking for a professional massage therapist in Kuta, Bali. Can you help me?";
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
      "name": "Massage Therapist Kuta Bali",
      "item": `${SITE_CONFIG.url}/massage-therapist-kuta-bali`
    }
  ];

  const serviceSchemaData = {
    name: "Massage Therapist Kuta Bali - Certified Home Massage Service",
    description: "Professional massage therapist in Kuta, Bali. Certified experts deliver Balinese, deep tissue & aromatherapy to your villa. Book in 60 seconds.",
    serviceType: "Massage Therapy Services",
    areaServed: "Kuta, Bali",
    offers: {
      priceRange: "$",
      priceCurrency: "USD"
    }
  };

  const therapistSpecializations = [
    {
      name: "Certified Balinese Massage Therapists",
      slug: "balinese-massage",
      description: "Traditional Balinese massage specialists trained in centuries-old techniques combining acupressure, reflexology, and aromatherapy. These therapists use palm pressure, thumb work, and gentle stretching to release tension, improve circulation, and restore energy balance.",
      idealFor: "First-time spa guests and those seeking authentic Balinese wellness traditions."
    },
    {
      name: "Deep Tissue Massage Specialists",
      slug: "deep-tissue-massage",
      description: "Licensed deep tissue therapists with advanced training in myofascial release, trigger point therapy, and chronic pain management. These experts work systematically through muscle layers to address knots, adhesions, and long-standing tension patterns.",
      idealFor: "Athletes, desk workers, and guests with back, neck, or shoulder issues."
    },
    {
      name: "Aromatherapy Massage Experts",
      slug: "aromatherapy-massage",
      description: "Certified aromatherapy practitioners who blend therapeutic massage with pure essential oils—lavender for relaxation, eucalyptus for respiratory support, lemongrass for detox, frangipani for mood elevation.",
      idealFor: "Stress relief and sleep improvement."
    },
    {
      name: "Lymphatic Drainage Specialists",
      slug: "lymphatic-drainage-massage",
      description: "Trained lymphatic drainage therapists skilled in gentle, rhythmic techniques that stimulate the lymphatic system to reduce swelling, support detoxification, and improve circulation.",
      idealFor: "After long flights, for guests experiencing jet lag, or those recovering from injury or surgery."
    },
    {
      name: "Thai Massage Practitioners",
      slug: "thai-massage",
      description: "Certified Thai bodywork specialists who deliver traditional Thai massage combining acupressure, assisted yoga stretching, and energy line work—all performed fully clothed without oils.",
      idealFor: "Improving flexibility, posture, and joint mobility through passive stretching and rhythmic compression."
    },
    {
      name: "Hot Stone Massage Therapists",
      slug: "hot-stone-massage",
      description: "Hot stone therapy specialists trained in the safe application of heated volcanic stones to key pressure points and muscle groups. The sustained heat allows these therapists to work deeper into tissue layers while promoting profound relaxation.",
      idealFor: "Deep muscle relaxation and nervous system calming."
    },
    {
      name: "Prenatal Massage Specialists",
      slug: "pregnancy-massage",
      description: "Certified prenatal massage therapists with specialized training in safe positioning, appropriate pressure, and areas to avoid during each trimester. These experts use side-lying techniques and pregnancy-specific cushions.",
      idealFor: "Expectant mothers seeking safe relaxation and relief from lower back pain and swelling."
    },
    {
      name: "Sports & Recovery Massage Experts",
      slug: "sports-massage",
      description: "Licensed sports massage therapists experienced in pre-event preparation, post-workout recovery, and injury rehabilitation. These specialists combine deep tissue work, stretching, and muscle stripping techniques.",
      idealFor: "Surfers, yogis, and active travelers in Bali."
    }
  ];

  const pricingOptions = [
    {
      name: "Traditional Balinese Massage (Licensed Therapist)",
      description: "Authentic Balinese massage delivered by certified therapist – traditional full-body treatment combining palm pressure, acupressure, and gentle stretching with natural aromatic oils.",
      prices: { "60": "$17 USD (IDR 260K)", "90": "$24 USD (IDR 380K)", "120": "$32 USD (IDR 500K)" }
    },
    {
      name: "Deep Tissue Massage (Certified Therapist)",
      description: "Professional deep tissue therapist – intensive therapeutic treatment targeting deep muscle layers, chronic tension, and stubborn knots.",
      prices: { "60": "$19 USD (IDR 300K)", "90": "$28 USD (IDR 440K)", "120": "$37 USD (IDR 580K)" }
    },
    {
      name: "Aromatherapy Massage (Certified Aromatherapy Specialist)",
      description: "Licensed aromatherapy massage therapist – full-body massage using premium essential oils (lavender, lemongrass, eucalyptus, frangipani).",
      prices: { "60": "$18 USD (IDR 290K)", "90": "$27 USD (IDR 420K)", "120": "$34 USD (IDR 540K)" }
    },
    {
      name: "Lymphatic Drainage Massage (Specialized Therapist)",
      description: "Certified lymphatic drainage specialist – gentle rhythmic massage designed to stimulate the lymphatic system, reduce swelling, improve circulation, and support detoxification.",
      prices: { "60": "$23 USD (IDR 360K)", "90": "$33 USD (IDR 520K)", "120": "$43 USD (IDR 680K)" }
    },
    {
      name: "Thai Massage (Certified Thai Bodywork Therapist)",
      description: "Licensed Thai massage practitioner – traditional Thai bodywork combining assisted stretching and pressure along energy lines. Performed fully clothed without oil.",
      prices: { "60": "$22 USD (IDR 340K)", "90": "$32 USD (IDR 500K)", "120": "$42 USD (IDR 660K)" }
    },
    {
      name: "Hot Stone Massage (Certified Hot Stone Therapist)",
      description: "Trained hot stone massage specialist – therapeutic massage using smooth heated volcanic stones placed on key pressure points. Heat penetrates deep into muscles, relieving tension and calming the nervous system.",
      prices: { "60": "$22 USD (IDR 340K)", "90": "$32 USD (IDR 500K)", "120": "$42 USD (IDR 660K)" }
    },
    {
      name: "Four Hands Massage (Two Certified Therapists)",
      description: "Luxury four hands massage with two synchronized therapists – premium treatment performed by two professional therapists working together in perfect rhythm.",
      prices: { "60": "$32 USD (IDR 500K)", "90": "$46 USD (IDR 720K)", "120": "$58 USD (IDR 920K)" }
    },
    {
      name: "Pregnancy Massage (Certified Prenatal Therapist)",
      description: "Licensed prenatal massage specialist – safe, gentle massage specifically designed for expectant mothers using proper positioning and pregnancy-approved techniques.",
      prices: { "60": "$21 USD (IDR 330K)", "90": "$31 USD (IDR 480K)", "120": "$40 USD (IDR 630K)" }
    }
  ];

  const primaryServiceZones = [
    { name: "Kuta", slug: "kuta", response: "20-35 minutes" },
    { name: "Legian", slug: "legian", response: "20-35 minutes" },
    { name: "Seminyak", slug: "seminyak", response: "20-35 minutes" },
    { name: "Tuban", slug: "tuban", response: "20-35 minutes" },
    { name: "Kerobokan", slug: "kerobokan", response: "20-35 minutes" },
    { name: "Petitenget", slug: "petitenget", response: "20-35 minutes" }
  ];

  const extendedServiceAreas = [
    { name: "Canggu", slug: "canggu", response: "30-60 minutes" },
    { name: "Berawa", slug: "berawa", response: "30-60 minutes" },
    { name: "Batu Bolong", slug: "batu-bolong", response: "30-60 minutes" },
    { name: "Sanur", slug: "sanur", response: "30-60 minutes" },
    { name: "Jimbaran", slug: "jimbaran", response: "30-60 minutes" },
    { name: "Nusa Dua", slug: "nusa-dua", response: "30-60 minutes" },
    { name: "Benoa", slug: "benoa", response: "30-60 minutes" },
    { name: "Uluwatu", slug: "uluwatu", response: "30-60 minutes" },
    { name: "Pecatu", slug: "pecatu", response: "30-60 minutes" },
    { name: "Bukit Peninsula", slug: "bukit-peninsula", response: "30-60 minutes" }
  ];

  const specialRequestAreas = [
    { name: "Ubud", slug: "ubud", response: "60-90 minutes" },
    { name: "Denpasar", slug: "denpasar", response: "60-90 minutes" },
    { name: "Pererenan", slug: "pererenan", response: "60-90 minutes" },
    { name: "Echo Beach", slug: "echo-beach", response: "60-90 minutes" }
  ];

  const faqs = [
    {
      question: "Are your massage therapists certified and licensed?",
      answer: "Yes, every massage therapist in our network holds recognized certifications in their specialized modalities. Our Balinese massage therapists complete traditional apprenticeships plus modern anatomy training. Deep tissue, sports massage, and lymphatic drainage specialists hold international certifications from recognized massage therapy schools. We verify credentials, conduct background screening, and require ongoing professional development for all therapists on our team."
    },
    {
      question: "How quickly can a massage therapist arrive in Kuta?",
      answer: "For bookings in Kuta, Legian, and Seminyak, our massage therapists typically arrive within 20-35 minutes of booking confirmation. Same-day appointments are available from 9 AM to 11 PM daily. For areas like Canggu or Ubud, expect 40-90 minute response times depending on therapist availability and traffic."
    },
    {
      question: "What should I prepare before the massage therapist arrives?",
      answer: "Simply clear a space approximately 6 feet by 3 feet (about the size of a yoga mat) in a quiet room, villa bedroom, or covered outdoor area. Our massage therapist brings everything else: professional massage table, fresh linens, oils, towels, and any specialty equipment. We recommend having water available for after your treatment, but it's not required."
    },
    {
      question: "Do your massage therapists speak English?",
      answer: "Yes, all our massage therapists communicate clearly in English. They'll discuss your pressure preferences, any areas needing focus, injuries to avoid, and answer questions about techniques during the pre-treatment consultation. Many therapists also speak Indonesian and basic phrases in other languages common among Bali visitors."
    },
    {
      question: "Can I book two massage therapists for a couples massage?",
      answer: "Absolutely. For couples massage or four hands massage, we coordinate two certified therapists to arrive simultaneously with two massage tables. Both guests receive treatment at the same time in the same space—popular for partners, friends, or anyone wanting the luxury of synchronized dual-therapist massage. Add $3 USD for the second therapist setup."
    },
    {
      question: "What's the difference between a massage therapist and a spa technician?",
      answer: "Certified massage therapists have formal training in anatomy, physiology, pathology, and therapeutic techniques. They understand contraindications, can adapt pressure and methods for injuries or medical conditions, and deliver treatments with clinical knowledge behind each technique. Unlike untrained spa technicians who may learn basic routines, our therapists customize every session based on your body's specific needs and can address therapeutic goals like pain relief, mobility improvement, or injury recovery."
    },
    {
      question: "How do I tip my massage therapist in Bali?",
      answer: "Tipping is appreciated but not expected at the rates we charge. If you'd like to tip your massage therapist, IDR 50,000-100,000 (approximately $3-7 USD) is standard for excellent service. Some guests tip more for particularly skilled therapists, specialized treatments, or exceptional care. Tips can be given in cash directly to your therapist at the end of your session."
    },
    {
      question: "Can a massage therapist help with specific pain or injury?",
      answer: "Our deep tissue specialists and sports massage therapists are trained to address specific issues like chronic back pain, neck tension, shoulder injuries, sciatica, and muscle strains. During the consultation, inform your therapist about your pain location, intensity, and any diagnosed conditions. They'll adjust techniques accordingly—using targeted pressure, myofascial release, or stretching to address your specific needs. For serious injuries or medical conditions, we recommend consulting your doctor before massage therapy."
    },
    {
      question: "Are your massage therapists trained in prenatal massage?",
      answer: "Yes, we have certified prenatal massage specialists trained specifically in safe pregnancy massage techniques. These therapists use side-lying positioning with pregnancy pillows, avoid certain pressure points, and understand trimester-specific needs and restrictions. Pregnancy massage is safe throughout all trimesters when performed by properly trained therapists, and is excellent for relieving lower back pain, reducing swelling, and managing pregnancy stress."
    },
    {
      question: "What if I need to reschedule my massage therapist appointment?",
      answer: "Contact us via WhatsApp as soon as you know you need to change your appointment. We don't charge cancellation fees for reschedules made more than 2 hours before your appointment time. We'll work with you to find a new time that suits your schedule. For cancellations with less than 2-hour notice, a small IDR 50,000 ($3) rescheduling fee applies to compensate the therapist for travel time already invested."
    },
    {
      question: "Do massage therapists work late at night in Kuta?",
      answer: "Yes, our massage therapists are available from 9 AM to 11 PM daily across all service areas. Late-night bookings (after 10 PM) include a small +$3 surcharge to compensate therapists for evening availability. This makes us ideal for guests arriving on late flights, night owls, or anyone who prefers evening relaxation treatments after a full day exploring Bali."
    },
    {
      question: "Can I request the same massage therapist for multiple sessions?",
      answer: "Yes, if you particularly connect with a specific therapist's technique and style, let us know when booking your next appointment. We'll do our best to schedule the same massage therapist for your return session, subject to their availability. Many of our regular guests develop preferences for specific therapists and request them by name—especially useful for therapeutic work where consistency matters."
    },
    {
      question: "What massage styles do your therapists specialize in?",
      answer: "Our team includes specialists in: Balinese massage (traditional acupressure and stretching), Deep Tissue (myofascial release and trigger points), Aromatherapy (essential oils and relaxation), Thai Massage (stretching and energy work), Hot Stone (heated stone therapy), Lymphatic Drainage (detox and circulation), Swedish Massage (classic relaxation), Sports Massage (athletic recovery), and Prenatal (pregnancy-safe techniques). Tell us your goals and we'll match you with the right specialist."
    },
    {
      question: "How do massage therapists maintain hygiene standards?",
      answer: "Every therapist follows strict hygiene protocols: fresh sanitized linens for each client (never reused), hand washing before and after treatment, cleaned and disinfected massage table between appointments, and use of fresh oils from sealed bottles. Equipment is transported in sealed bags. We maintain the same hygiene standards you'd expect from Bali's top hotel spas, just delivered to your private accommodation."
    },
    {
      question: "What's included when I book a massage therapist?",
      answer: "Your booking includes: certified massage therapist with verified credentials, professional-grade portable massage table, fresh sanitized linens and towels, premium massage oils appropriate for your chosen treatment, all specialty equipment (hot stones, aromatherapy oils, Thai props, etc.), therapist travel to your location within our service areas, consultation and treatment customization, post-treatment guidance, and complete setup and cleanup. The only extras are optional add-ons (premium oil upgrades, late-night fees, etc.) which are clearly listed when booking."
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Massage Therapist Kuta Bali | Certified Home Massage Service"
        description="Professional massage therapist in Kuta, Bali. Certified experts deliver Balinese, deep tissue & aromatherapy to your villa. Book in 60 seconds."
        keywords="massage therapist kuta, certified massage therapist bali, professional massage therapist kuta, licensed massage therapist kuta, massage therapist near me kuta, balinese massage therapist kuta, deep tissue therapist kuta"
        canonical="/massage-therapist-kuta-bali"
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
              alt="Professional certified massage therapist in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/80 to-cyan-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              Internationally Certified · 20-60 Minute Arrival
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Professional Massage Therapist in Kuta, Bali
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Finding a qualified massage therapist in Kuta shouldn't mean leaving your villa or hotel. Home Massage Kuta brings internationally certified massage therapists directly to your accommodation across Bali.
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
                <span>Available Daily 09:00 - 23:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Whether you need a <strong>licensed massage therapist for deep tissue work</strong>, a <strong>certified Balinese massage specialist</strong>, or a <strong>professional aromatherapy expert</strong>, our team of trained therapists arrives within 20-60 minutes with everything needed: massage table, premium oils, fresh linens, and years of hands-on experience treating travelers, athletes, and wellness-focused guests throughout Kuta, Seminyak, Canggu, and beyond.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Why Choose Our Certified Massage Therapists in Kuta
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Internationally Certified & Experienced</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Every massage therapist on our team holds recognized certifications in their specialties—Balinese massage, deep tissue therapy, Thai bodywork, lymphatic drainage, and prenatal massage.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Local Balinese Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Our massage therapists combine authentic Balinese healing traditions passed down through generations with modern therapeutic techniques learned through international certification programs.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Fast Response, Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Book a professional massage therapist in Kuta and receive confirmation within minutes. Our therapists are strategically located across Bali's key areas, enabling 20-30 minute response times in Kuta, Legian, and Seminyak.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Premium Service, Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">No hidden fees, no pressure to tip excessively, no bait-and-switch pricing. Every massage therapist delivers the same quality service at consistent rates: traditional Balinese massage from $17 USD.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Complete Mobile Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Massage table, oils, linens, aromatherapy included. Your therapist brings everything needed for a professional treatment.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">English-Speaking Therapists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">All therapists communicate clearly in English about pressure preferences, areas needing focus, and treatment techniques.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Therapist Specializations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Our Massage Therapist Specializations
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We match you with certified specialists trained in the exact massage style you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {therapistSpecializations.map((specialization, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-xl mb-2">{specialization.name}</CardTitle>
                    <CardDescription className="text-spa-stone">{specialization.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-spa-stone mb-4">
                      <strong className="text-spa-earth">Ideal for:</strong> {specialization.idealFor}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/services/${specialization.slug}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Massage Therapist Pricing – Transparent Rates, No Hidden Fees
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                All prices include therapist travel, equipment, oils, and linens. Payment accepted via cash (IDR/USD), bank transfer, or digital wallets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {pricingOptions.map((option, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-lg mb-2">{option.name}</CardTitle>
                    <CardDescription className="text-spa-stone">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-spa-stone"><strong>60 Minutes:</strong> {option.prices["60"]}</p>
                      <p className="text-sm text-spa-stone"><strong>90 Minutes:</strong> {option.prices["90"]}</p>
                      <p className="text-sm text-spa-stone"><strong>120 Minutes:</strong> {option.prices["120"]}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Coverage Areas: Where Our Massage Therapists Serve
              </h2>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-spa-earth mb-6 text-center">Primary Service Zones (20-35 min response)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {primaryServiceZones.map((area, index) => (
                  <Card key={index} className="bg-white border-0 shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                        <div>
                          <Link to={`/areas/${area.slug}`} className="text-spa-earth font-semibold hover:text-spa-gold">
                            {area.name}
                          </Link>
                          <p className="text-sm text-spa-stone mt-1">{area.response}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-spa-earth mb-6 text-center">Extended Service Areas (30-60 min response)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {extendedServiceAreas.map((area, index) => (
                  <Card key={index} className="bg-white border-0 shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                        <div>
                          <Link to={`/areas/${area.slug}`} className="text-spa-earth font-semibold hover:text-spa-gold">
                            {area.name}
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
              <h3 className="text-2xl font-bold text-spa-earth mb-6 text-center">Special Request Areas (60-90 min response)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {specialRequestAreas.map((area, index) => (
                  <Card key={index} className="bg-white border-0 shadow-soft">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-spa-gold flex-shrink-0 mt-1" />
                        <div>
                          <Link to={`/areas/${area.slug}`} className="text-spa-earth font-semibold hover:text-spa-gold">
                            {area.name}
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
                  View Complete Service Area Coverage <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Frequently Asked Questions About Our Massage Therapists
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Everything you need to know about booking and working with our certified massage therapists in Kuta, Bali.
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
              Book a Certified Massage Therapist in Kuta Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready for professional massage therapy delivered to your villa or hotel? Choose your massage type, select your preferred duration (60/90/120 minutes), and receive instant confirmation with your therapist's name and arrival time. It's that simple.
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm">
              <div>
                <MessageCircle className="w-5 h-5 mx-auto mb-2" />
                <p>Respond within 5 minutes</p>
              </div>
              <div>
                <Clock className="w-5 h-5 mx-auto mb-2" />
                <p>9 AM - 11 PM daily</p>
              </div>
              <div>
                <Zap className="w-5 h-5 mx-auto mb-2" />
                <p>20-60 minutes arrival</p>
              </div>
              <div>
                <Shield className="w-5 h-5 mx-auto mb-2" />
                <p>Professional certified therapists</p>
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

export default MassageTherapistKutaBali;

