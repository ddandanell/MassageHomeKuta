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

const CouplesMassageKuta = () => {
  const whatsappMessage = "Hi! We'd like to book a couples massage in Kuta. Can you help us with availability?";
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
      "name": "Couples Massage Kuta",
      "item": `${SITE_CONFIG.url}/couples-massage-kuta`
    }
  ];

  const serviceSchemaData = {
    name: "Couples Massage Kuta - Romantic In-Villa Treatment",
    description: "Romantic couples massage in Kuta delivered to your villa or hotel. Synchronized treatments, certified therapists, same-day booking. Book now from $17 per person.",
    serviceType: "Couples Massage and Spa Services",
    areaServed: "Kuta, Bali",
    offers: {
      priceRange: "$$",
      priceCurrency: "USD"
    }
  };

  const massageOptions = [
    {
      name: "Traditional Balinese Couples Massage",
      description: "Our most popular couples treatment combining palm pressure, acupressure, gentle stretching, and aromatic Balinese oils. This authentic technique provides medium-to-firm pressure perfect for couples seeking cultural immersion and overall relaxation.",
      idealFor: "First-time visitors, couples wanting authentic Balinese healing traditions, partners with moderate stress and muscle tension.",
      prices: { "60": "$17 USD per person (IDR 260,000)", "90": "$24 USD per person (IDR 380,000)", "120": "$32 USD per person (IDR 500,000)" }
    },
    {
      name: "Aromatherapy Couples Massage",
      description: "Luxurious aromatherapy treatment using premium essential oils selected together. Choose from lavender for relaxation, eucalyptus for respiratory clarity, lemongrass for energy, or frangipani for romance. Light-to-medium pressure focuses on stress relief and sensory indulgence.",
      idealFor: "Romantic occasions, jet lag recovery, couples prioritizing relaxation over deep muscle work, partners sensitive to firm pressure.",
      prices: { "60": "$18 USD per person (IDR 290,000)", "90": "$27 USD per person (IDR 420,000)", "120": "$34 USD per person (IDR 540,000)" }
    },
    {
      name: "Deep Tissue Couples Massage",
      description: "Intensive therapeutic treatment targeting chronic muscle tension, knots, and deep tissue adhesions. Both therapists use focused pressure techniques to release stubborn tension in back, shoulders, neck, and legs.",
      idealFor: "Active couples (surfers, athletes), partners with chronic pain or postural issues, guests requiring serious therapeutic work rather than light relaxation.",
      prices: { "60": "$19 USD per person (IDR 300,000)", "90": "$28 USD per person (IDR 440,000)", "120": "$37 USD per person (IDR 580,000)" }
    },
    {
      name: "Hot Stone Couples Massage",
      description: "Premium treatment combining heated volcanic stones with traditional massage techniques. Smooth stones are placed on key energy points while therapists use additional stones during the massage sequence. Heat penetrates deep into muscles, creating profound relaxation.",
      idealFor: "Special occasions, luxury wellness experiences, couples wanting something beyond standard massage, partners with deep-seated muscle tension.",
      prices: { "60": "$22 USD per person (IDR 340,000)", "90": "$32 USD per person (IDR 500,000)", "120": "$42 USD per person (IDR 660,000)" }
    },
    {
      name: "Four Hands Couples Experience",
      description: "Our ultimate luxury offering: each partner receives four hands massage simultaneously, meaning four therapists work together – two therapists per person. This creates an extraordinary sensory experience with double the therapeutic impact.",
      idealFor: "Honeymoons, milestone celebrations, couples wanting the most indulgent spa experience possible.",
      prices: { "60": "$32 USD per person (IDR 500,000)", "90": "$46 USD per person (IDR 720,000)", "120": "$58 USD per person (IDR 920,000)" }
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
      question: "What exactly is couples massage?",
      answer: "Couples massage is a spa treatment where two people receive massage simultaneously in the same room by two different therapists. Unlike individual massage, couples treatments create shared relaxation experiences while providing therapeutic benefits. Tables are positioned side-by-side so partners can see each other and occasionally hold hands during treatment."
    },
    {
      question: "Do we have to get the same type of massage?",
      answer: "No. Many couples choose different massage styles based on individual needs. One partner might prefer firm deep tissue massage while the other enjoys gentle aromatherapy. Our therapists can provide different treatments simultaneously, though most couples find synchronized identical treatments create the most harmonious shared experience."
    },
    {
      question: "How much does couples massage cost in Kuta?",
      answer: "Couples massage in Kuta ranges from $17-58 USD per person depending on massage type and duration. Traditional Balinese couples massage starts at $17 USD per person for 60 minutes ($34 total for both partners). Luxury four hands couples experience costs $32 USD per person for 60 minutes. All pricing includes two therapists, equipment, oils, and villa delivery."
    },
    {
      question: "Do we need a large space for couples massage?",
      answer: "Most standard hotel rooms and villas accommodate couples massage tables comfortably. We need approximately 3 meters width to position two professional massage tables side-by-side with adequate space for therapists to move around. If you're concerned about space, message us your accommodation details and we'll confirm suitability."
    },
    {
      question: "Can we request male or female therapists?",
      answer: "Yes. We accommodate all preferences for therapist gender combinations – two female therapists, two male therapists, or one of each. Simply specify your preference when booking and we'll match you with appropriate professionals."
    },
    {
      question: "Is couples massage only for romantic partners?",
      answer: "No. While romantic couples are our primary clients, friends, family members, and any two people wanting shared wellness experiences can book couples massage. We serve parent-child pairs, siblings, close friends, and any relationship type seeking simultaneous treatments."
    },
    {
      question: "What should we wear during couples massage?",
      answer: "Most guests undress completely and are covered with fresh sheets during treatment, with only the area being massaged exposed. However, you may wear underwear if more comfortable. Your comfort and privacy are priorities – wear whatever makes you feel most relaxed."
    },
    {
      question: "How quickly can we book same-day couples massage?",
      answer: "We typically accommodate same-day couples bookings within 1-3 hours depending on therapist availability in Kuta. Because couples massage requires coordinating two therapists' schedules simultaneously, advance booking (3-4 hours or night before) increases availability certainty, especially during high season."
    },
    {
      question: "Do you provide couples massage to all hotels in Kuta?",
      answer: "Yes. We provide couples massage service to virtually all hotels, resorts, villas, and private accommodations throughout Kuta, Legian, Seminyak, and 27 additional Bali areas. Some larger resorts require advance notification or entry procedures – provide your hotel name when booking for smooth coordination."
    },
    {
      question: "Can we talk during couples massage?",
      answer: "Absolutely. Some couples enjoy quiet conversation during treatment while others prefer silent relaxation. There's no right or wrong approach – do whatever feels natural and enhances your experience together. Therapists maintain professional discretion regardless."
    },
    {
      question: "What if we have different pressure preferences?",
      answer: "Each therapist adjusts pressure independently for their client. One partner can receive firm deep tissue work while the other enjoys light aromatherapy – therapists customize pressure entirely to individual preferences throughout the session."
    },
    {
      question: "Is tipping expected for couples massage?",
      answer: "Tipping is appreciated but not required. If you're satisfied with your service, tips of 10-20% per therapist (IDR 30,000-50,000 each for standard sessions) are customary in Bali and deeply appreciated by our team."
    },
    {
      question: "Can we book couples massage during pregnancy?",
      answer: "Yes. We offer specialized pregnancy massage that can be combined with standard massage for the non-pregnant partner. One therapist uses prenatal-safe techniques and positioning while the other provides regular treatment. Always consult your doctor before booking any massage during pregnancy."
    },
    {
      question: "What areas of Bali do you serve for couples massage?",
      answer: "We provide couples massage throughout Kuta, Legian, Seminyak, Canggu, Sanur, Ubud, Nusa Dua, Jimbaran, Uluwatu, and 18 additional areas across Bali. View complete service area coverage with response times."
    },
    {
      question: "How often should couples get massage together?",
      answer: "For general wellness and relationship maintenance, monthly or bi-weekly couples massage provides excellent benefits. Vacation couples often book 2-3 sessions during week-long stays. Long-term Bali residents frequently schedule weekly couples massage as regular stress management and quality time rituals."
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Couples Massage Kuta – Romantic In-Villa Treatment | Home Massage Kuta"
        description="Romantic couples massage in Kuta delivered to your villa or hotel. Synchronized treatments, certified therapists, same-day booking. Book now from $17 per person."
        keywords="couples massage kuta, romantic massage kuta, couples spa kuta, synchronized massage kuta, honeymoon massage kuta, anniversary massage kuta, couples therapy kuta, two therapist massage kuta"
        canonical="/couples-massage-kuta"
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
              alt="Romantic couples massage in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/80 to-cyan-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              Synchronized Treatments · Two Therapists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Couples Massage Kuta
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Romantic Relaxation for Two. Experience the ultimate couples massage with synchronized treatments delivered directly to your villa or hotel room.
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
              Experience the ultimate <strong>couples massage in Kuta</strong> with synchronized treatments delivered directly to your villa or hotel room. Our certified therapists create an intimate wellness experience where you and your partner enjoy professional massage side-by-side, fostering connection while releasing stress and tension together. Whether you're celebrating a honeymoon, anniversary, or simply want to share a relaxing moment in Bali, our couples massage service brings spa-quality treatments to your private accommodation with complete discretion and professionalism.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Why Choose Our Couples Massage Service in Kuta
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Home Massage Kuta specializes in creating memorable couples wellness experiences that combine authentic Balinese healing traditions with modern convenience and romantic ambiance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Synchronized Treatments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Two certified therapists work in perfect harmony, creating a shared relaxation rhythm</p>
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
                  <p className="text-spa-stone">Enjoy your couples massage in the intimate comfort of your own villa or hotel room</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">20-30 Minute Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Same-day booking available throughout Kuta, Legian, and Seminyak</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Flexible Treatment Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Choose from Balinese massage, aromatherapy, deep tissue, or hot stone massage</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Premium Equipment Provided</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Two professional massage tables, fresh linens, therapeutic oils, and ambient music</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-spa-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-spa-gold" />
                  </div>
                  <CardTitle className="text-spa-earth">Affordable Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-spa-stone">Starting from just $17 USD per person for 60-minute sessions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Couples Massage Options */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Couples Massage Options in Kuta
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We offer multiple massage styles for couples, each delivering unique therapeutic benefits while maintaining the shared relaxation experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {massageOptions.map((option, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-xl mb-2">{option.name}</CardTitle>
                    <CardDescription className="text-spa-stone">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-spa-stone mb-4">
                      <strong className="text-spa-earth">Ideal for:</strong> {option.idealFor}
                    </p>
                    <div className="space-y-2 mb-4">
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
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Service Areas for Couples Massage Throughout Kuta & Bali
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We provide romantic couples massage services throughout Kuta and 27 additional areas across Bali with varying response times based on location.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-spa-earth mb-6 text-center">Primary Service Areas (15-35 minute response)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {primaryServiceAreas.map((area, index) => (
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
              <h3 className="text-2xl font-bold text-spa-earth mb-6 text-center">Extended Service Areas (30-90 minute response)</h3>
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
                Frequently Asked Questions About Couples Massage in Kuta
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Everything you need to know about booking and experiencing couples massage in Kuta.
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
              Book Your Romantic Couples Massage Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transform your Kuta stay with intimate, professional couples massage delivered to your private villa or hotel. Our certified therapists create synchronized wellness experiences that deepen connection while releasing stress and tension.
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
              Whether you're honeymooning, celebrating an anniversary, or simply want to share relaxation with your partner, our couples massage in Kuta delivers exceptional treatments in the romantic privacy you deserve. Same-day appointments available throughout Kuta, Legian, and Seminyak.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default CouplesMassageKuta;


