import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, Zap, Shield, Users, ArrowRight, CheckCircle2, Heart, Phone, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const MessageKutaBali = () => {
  const whatsappMessage = "Hi! I'm looking for massage in Kuta, Bali. Can you help me with availability and pricing?";
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
      "name": "Message Kuta Bali",
      "item": `${SITE_CONFIG.url}/message-kuta-bali`
    }
  ];

  const serviceSchemaData = {
    name: "Message Kuta Bali - Professional Home Massage Service",
    description: "Looking for message kuta Bali? We deliver professional massage and spa treatments to your villa or hotel in Kuta. Certified therapists, transparent pricing, same-day booking. From IDR 250K.",
    serviceType: "In-Villa Massage and Spa Services",
    areaServed: "Kuta, Bali, Indonesia",
    offers: {
      priceRange: "IDR 250,000 - IDR 1,550,000",
      priceCurrency: "IDR"
    }
  };

  const massageServices = [
    {
      name: "Traditional Balinese Massage",
      description: "Ancient healing technique combining gentle stretches, acupressure, and aromatherapy oils to restore balance and harmony.",
      prices: { "60": "IDR 350K", "90": "IDR 500K", "120": "IDR 650K" },
      slug: "balinese-massage"
    },
    {
      name: "Deep Tissue Massage",
      description: "Intensive treatment targeting chronic muscle tension and deep knots using firm pressure.",
      prices: { "60": "IDR 400K", "90": "IDR 550K", "120": "IDR 700K" },
      slug: "deep-tissue-massage"
    },
    {
      name: "Aromatherapy Massage",
      description: "Relaxing massage using premium essential oils to promote emotional well-being.",
      prices: { "60": "IDR 350K", "90": "IDR 500K", "120": "IDR 650K" },
      slug: "aromatherapy-massage"
    },
    {
      name: "Hot Stone Massage",
      description: "Luxurious treatment using heated volcanic stones to melt away tension.",
      prices: { "60": "IDR 450K", "90": "IDR 580K", "120": "IDR 730K" },
      slug: "hot-stone-massage"
    },
    {
      name: "Four Hands Massage",
      description: "Ultimate luxury with two therapists working in perfect synchronization.",
      prices: { "60": "IDR 850K", "90": "IDR 1,200K", "120": "IDR 1,550K" },
      slug: "four-hands-massage"
    }
  ];

  const coverageAreas = [
    { name: "Kuta", slug: "kuta", response: "20-30 min" },
    { name: "Legian", slug: "legian", response: "20-30 min" },
    { name: "Seminyak", slug: "seminyak", response: "25-35 min" },
    { name: "Tuban", slug: "tuban", response: "25-35 min" },
    { name: "Canggu", slug: "canggu", response: "30-45 min" },
    { name: "Jimbaran", slug: "jimbaran", response: "35-50 min" },
    { name: "Nusa Dua", slug: "nusa-dua", response: "40-55 min" }
  ];

  const faqs = [
    {
      question: "What is message kuta Bali?",
      answer: "When people search for 'message kuta Bali,' they're typically looking for professional massage services in the Kuta area of Bali. This refers to in-villa massage, hotel massage, or outcall massage therapy where certified therapists come to your location in Kuta, Legian, Seminyak, Tuban, and surrounding areas."
    },
    {
      question: "How much does massage cost in Kuta, Bali?",
      answer: "Professional massage prices in Kuta range from IDR 250,000 to IDR 1,550,000 depending on treatment type and duration. Traditional Balinese massage costs IDR 350,000 (60 min), IDR 500,000 (90 min), or IDR 650,000 (120 min). All prices include therapist travel, professional equipment, premium oils, and setup with no hidden fees."
    },
    {
      question: "Can I book same-day massage in Kuta?",
      answer: "Yes, same-day massage booking is available in Kuta. We operate daily from 07:00 to 22:00 and can typically accommodate bookings with 1-2 hours notice, subject to therapist availability. Contact us via WhatsApp at +62 811-2656-869 for fastest response."
    },
    {
      question: "Which areas in Kuta do you cover for massage service?",
      answer: "We provide massage service throughout Kuta, Legian, Seminyak, Tuban, Canggu, Jimbaran, and Nusa Dua. Response times range from 20-45 minutes depending on your exact location."
    },
    {
      question: "Are your massage therapists certified?",
      answer: "Yes, all massage therapists are professionally certified with specialized training in Balinese massage, Swedish massage, deep tissue, aromatherapy, and other therapeutic modalities. We maintain a 4.9/5 rating from 500+ verified client reviews."
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta
        title="Message Kuta Bali - Professional Home Massage & Spa Service"
        description="Professional massage service in Kuta, Bali. In-villa & hotel spa treatments by certified therapists. Same-day booking available. Transparent pricing from IDR 250K. WhatsApp to book."
        keywords="message kuta bali, massage kuta bali, home massage kuta, in-villa massage, hotel massage bali, outcall massage kuta, mobile spa kuta, spa service bali, massage near me kuta"
        canonical="/message-kuta-bali"
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
              src="/images/hero/hero-4.jpg"
              alt="Professional massage service delivered to your villa or hotel in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-900/70 to-teal-900/80 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-4 px-4 py-2 bg-professional-gold text-white border-0">
              <Star className="w-4 h-4 mr-2 inline" />
              4.9/5 from 500+ Clients
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Message Kuta Bali – Professional Home Massage Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Certified therapists deliver spa-quality massage to your villa or hotel in Kuta. Same-day booking. Transparent pricing. No hidden fees.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-professional-gold flex-shrink-0" />
                <span className="text-lg">20-30 min response in Kuta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-professional-gold flex-shrink-0" />
                <span className="text-lg">All prices include travel & oils</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-professional-gold flex-shrink-0" />
                <span className="text-lg">Open 7 AM - 10 PM daily</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button asChild size="lg" className="text-lg px-10 py-7 bg-white text-professional-navy hover:bg-white/90 shadow-2xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Book Now via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-7 bg-white/20 text-white border-2 border-white hover:bg-white/30">
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call +62 811-2656-869
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-spa-gold fill-spa-gold" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-spa-gold" />
                <span className="font-semibold">500+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-spa-gold" />
                <span className="font-semibold">Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-spa-gold" />
                <span className="font-semibold">Daily 07:00 - 22:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* What is Message Kuta Bali */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              What is Message Kuta Bali?
            </h2>
            <div className="prose prose-lg max-w-none text-spa-stone">
              <p className="text-lg leading-relaxed mb-4">
                When travelers and residents search for <strong>"message kuta Bali"</strong>, they're looking for professional <strong>massage services in the Kuta area of Bali, Indonesia</strong>. This search typically indicates interest in convenient, high-quality massage therapy delivered directly to hotels, villas, or private accommodations rather than visiting traditional spa facilities.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                What people actually mean by <strong>message kuta Bali</strong> is <strong>in-villa massage</strong>, <strong>hotel massage</strong>, or <strong>outcall massage service</strong> in Kuta. This type of mobile wellness service brings certified massage therapists to your exact location throughout Kuta, Legian, Seminyak, Tuban, and surrounding areas.
              </p>
              <p className="text-lg leading-relaxed">
                Home Massage Kuta specializes in this exact service: <strong>professional, certified massage therapists</strong> who travel to your location with all necessary equipment, premium oils, fresh linens, and expertise in traditional Balinese massage, deep tissue therapy, aromatherapy, hot stone treatments, and specialized wellness modalities.
              </p>
            </div>
          </div>
        </section>

        {/* Massage Services & Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
                Massage Services & Transparent Pricing
              </h2>
              <p className="text-lg text-spa-stone max-w-2xl mx-auto">
                All prices include therapist travel, professional equipment, premium oils, and setup. No hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {massageServices.map((service, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-spa-stone">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-spa-stone">60 min</span>
                        <span className="font-bold text-spa-earth">{service.prices["60"]}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-spa-stone">90 min</span>
                        <span className="font-bold text-spa-earth">{service.prices["90"]}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-spa-stone">120 min</span>
                        <span className="font-bold text-spa-earth">{service.prices["120"]}</span>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <Link to={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-semibold">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Massage Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
                Service Coverage in Kuta & Bali
              </h2>
              <p className="text-lg text-spa-stone max-w-2xl mx-auto">
                We deliver professional massage services throughout southern Bali with fast response times.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
              {coverageAreas.map((area, index) => (
                <Link
                  key={index}
                  to={`/areas/${area.slug}`}
                  className="flex flex-col items-center p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300 text-center"
                >
                  <MapPin className="w-6 h-6 text-spa-gold mb-2" />
                  <span className="text-spa-earth font-medium">{area.name}</span>
                  <span className="text-xs text-spa-stone">{area.response}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
                Why Choose Home Massage Kuta?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-3">Certified Therapists</h3>
                <p className="text-spa-stone">All therapists hold professional certifications and undergo regular training.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-3">Transparent Pricing</h3>
                <p className="text-spa-stone">No hidden fees. All prices include transport, equipment, and premium oils.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-3">Fast Response</h3>
                <p className="text-spa-stone">20-30 minute response time in Kuta. Same-day booking available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-spa-earth">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-spa-stone text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-8 text-center">
                Explore More Services & Areas
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Massage Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/services/balinese-massage" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Traditional Balinese Massage
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/deep-tissue-massage" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Deep Tissue Massage
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/aromatherapy-massage" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Aromatherapy Massage
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="text-spa-gold hover:underline flex items-center gap-1 font-semibold">
                          <ArrowRight className="w-3 h-3" />
                          View All Services
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Service Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/areas/kuta" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Kuta Area
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas/seminyak" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Seminyak
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas/canggu" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Canggu
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas" className="text-spa-gold hover:underline flex items-center gap-1 font-semibold">
                          <ArrowRight className="w-3 h-3" />
                          View All Areas
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Special Packages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/couples-massage-kuta" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Couples Massage
                        </Link>
                      </li>
                      <li>
                        <Link to="/packages" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Special Packages
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="text-spa-gold hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/reviews" className="text-spa-gold hover:underline flex items-center gap-1 font-semibold">
                          <ArrowRight className="w-3 h-3" />
                          Customer Reviews
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-spa-leaf to-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Massage in Kuta?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience professional in-villa massage service. Certified therapists, transparent pricing, same-day availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-spa-leaf hover:bg-white/90 font-bold shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Now via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-spa-leaf">
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default MessageKutaBali;
