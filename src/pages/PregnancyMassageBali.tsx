import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Heart, Shield, Star, CheckCircle2, MapPin, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const PregnancyMassageBali = () => {
  const whatsappMessage = "Hi! I'm pregnant and interested in safe prenatal massage in Bali. Can you tell me about your certified services?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Prenatal Massage",
    "name": "Pregnancy Massage Bali",
    "description": "Safe pregnancy massage in Bali by certified prenatal therapists. Relief for back pain, swelling, fatigue. Mobile service to your villa.",
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
    "areaServed": ["Seminyak", "Canggu", "Ubud", "Sanur", "Nusa Dua"],
    "offers": [
      {
        "@type": "Offer",
        "name": "60-minute prenatal session",
        "price": "500000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "90-minute extended care",
        "price": "700000",
        "priceCurrency": "IDR"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "78"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is pregnancy massage safe in all trimesters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pregnancy massage is safest in the 2nd and 3rd trimesters. First trimester is possible with doctor approval. We use specialized positioning and avoid pressure points, ensuring complete safety for mother and baby."
        }
      },
      {
        "@type": "Question",
        "name": "Are your therapists certified in prenatal massage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our prenatal massage therapists are certified and trained specifically in safe pregnancy massage techniques, anatomy, and contraindications."
        }
      },
      {
        "@type": "Question",
        "name": "What positions will I be in during massage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll be positioned comfortably on your side using specialized pregnancy cushions and pillows. We never place pressure on your abdomen. Comfort and safety are always our top priority."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_CONFIG.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Pregnancy Massage", "item": `${SITE_CONFIG.url}/pregnancy-massage-bali/` }
  ];

  const features = [
    { icon: Heart, title: "Certified Prenatal Therapists", description: "Specialized training in safe pregnancy massage techniques and anatomy" },
    { icon: Shield, title: "Trimester-Specific Techniques", description: "Modified methods appropriate for each stage of pregnancy" },
    { icon: Smile, title: "Specialized Pregnancy Cushions", description: "Comfortable side-lying positioning with support pillows" },
    { icon: CheckCircle2, title: "Safe Pressure Points", description: "Avoid pressure points and deep tissue on unsafe areas" },
    { icon: Heart, title: "Gentle Relaxation Focus", description: "Calming techniques for stress relief and relaxation" },
    { icon: Shield, title: "Swelling & Pain Relief", description: "Focus on areas of discomfort unique to pregnancy" }
  ];

  const benefits = [
    { title: "Relief from Back Pain", description: "Reduce pregnancy-related lower back and pelvic pain" },
    { title: "Reduce Swelling", description: "Help decrease leg and ankle swelling (edema) common in pregnancy" },
    { title: "Improve Sleep Quality", description: "Relaxation techniques help expectant mothers sleep better" },
    { title: "Reduce Stress & Anxiety", description: "Calming massage supports emotional wellness during pregnancy" },
    { title: "Safe for Mom & Baby", description: "Certified techniques ensure complete safety for mother and developing baby" },
    { title: "Comfortable & Supportive", description: "Specialized positioning and support make massage comfortable" }
  ];

  const pricing = [
    { duration: "60-minute", price: "500,000 IDR", description: "Standard prenatal massage session with full comfort focus" },
    { duration: "90-minute", price: "700,000 IDR", description: "Extended care session for deeper relaxation" }
  ];

  const serviceAreas = [
    { name: "Seminyak", slug: "seminyak" },
    { name: "Canggu", slug: "canggu" },
    { name: "Ubud", slug: "ubud" },
    { name: "Sanur", slug: "sanur" },
    { name: "Nusa Dua", slug: "nusa-dua" }
  ];

  const faqs = [
    {
      question: "Is pregnancy massage safe in all trimesters?",
      answer: "Pregnancy massage is safest in the 2nd and 3rd trimesters (weeks 14+). First trimester is possible with doctor approval. We use specialized positioning that avoids pressure on your abdomen and avoids certain pressure points that could stimulate uterine contractions. Safety for both mother and baby is always our priority."
    },
    {
      question: "Do I need doctor approval?",
      answer: "We recommend obtaining doctor approval before your massage, especially for first trimester or if you have any complications. This ensures your healthcare provider is comfortable with prenatal massage and there are no contraindications."
    },
    {
      question: "Are your therapists certified in prenatal massage?",
      answer: "Yes! All our prenatal massage therapists are certified and trained specifically in safe pregnancy massage techniques, prenatal anatomy, contraindications, and modifications for each trimester."
    },
    {
      question: "What positions will I be in during massage?",
      answer: "You'll be positioned comfortably on your side using specialized pregnancy cushions, body pillows, and supports. We never place pressure on your abdomen. Some gentle work may be done sitting or semi-reclined depending on your comfort. Your comfort is our priority."
    },
    {
      question: "Which pressure points do you avoid?",
      answer: "We avoid certain acupressure points on the ankles, inner thighs, and sacrum that could theoretically stimulate uterine activity. Our therapists know exactly which areas are safe and which to avoid. This is part of our prenatal certification."
    },
    {
      question: "Can this help with swelling and back pain?",
      answer: "Absolutely! Pregnancy massage is particularly effective for leg swelling (edema), lower back pain, pelvic discomfort, and hip tension. Many expectant mothers experience significant relief from common pregnancy discomforts."
    },
    {
      question: "What if I'm high-risk pregnancy?",
      answer: "For high-risk pregnancies, you must have explicit doctor approval. Many high-risk conditions can still benefit from gentle prenatal massage with proper clearance. Please consult your healthcare provider first."
    },
    {
      question: "Can my partner be present?",
      answer: "Yes! Your partner is welcome to be present during your massage for emotional support. Some mothers-to-be enjoy this, while others prefer privacy. It's completely your choice."
    }
  ];

  const testimonials = [
    { name: "Sophie", location: "UK", text: "Safe and comfortable throughout my pregnancy. The therapist was knowledgeable and my back pain completely disappeared after a few sessions. Felt secure and supported.", rating: 5 },
    { name: "Maria", location: "Spain", text: "So relieved to find certified prenatal massage while traveling. The gentle technique was perfect and my swelling improved noticeably. Highly recommend!", rating: 5 },
    { name: "Jessica", location: "USA", text: "Safe pregnancy massage was exactly what I needed during my third trimester. Professional, caring, and completely safe for my baby. Thank you!", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Pregnancy Massage Bali | Safe Prenatal by Certified Therapists"
        description="Safe pregnancy massage in Bali by certified prenatal therapists. Relief for back pain, swelling, fatigue. Mobile service to your villa. Book safe prenatal massage now!"
        keywords="pregnancy massage bali, prenatal massage bali, pregnant massage bali, maternity massage bali, pregnancy spa bali, safe pregnancy treatment bali"
        canonical="/pregnancy-massage-bali/"
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
            <img src="/images/hero/hero-1.jpg" alt="Safe pregnancy massage in Bali" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/85 via-purple-900/80 to-rose-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Heart className="w-4 h-4 inline mr-2" />
              Safe · Certified · Caring
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Pregnancy Massage Bali
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Safe Prenatal Care by Certified Therapists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Safe Prenatal Massage
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Doctor Approval Recommended</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Experience <strong>safe and nurturing pregnancy massage in Bali</strong> by certified prenatal therapists. We provide specialized care for each trimester, relieving back pain, reducing swelling, and promoting relaxation for expectant mothers throughout their Bali stay.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Safe Pregnancy Massage Inclusions
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Specialized care designed specifically for expectant mothers
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
                Benefits of Prenatal Massage
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Support your wellness during pregnancy
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
                For Expectant Mothers in Bali
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🤰 2nd & 3rd Trimester</h3>
                  <p className="text-spa-stone text-sm">Pregnant travelers in later stages of pregnancy</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">✈️ Traveling Mothers-to-be</h3>
                  <p className="text-spa-stone text-sm">Expectant mothers vacationing or relocating to Bali</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏡 Expat Mothers-to-be</h3>
                  <p className="text-spa-stone text-sm">Pregnant women living in Bali seeking safe care</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">💪 Pregnancy Relief Seekers</h3>
                  <p className="text-spa-stone text-sm">Mothers dealing with back pain, swelling, or fatigue</p>
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
                Prenatal Massage Pricing
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Safe prenatal care at accessible pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-spa-stone mt-8 max-w-2xl mx-auto">
              Trimester-specific protocols included in all sessions. Multiple session packages available for long-stay mothers.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Mobile Prenatal Service Across Bali
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We come to you for your comfort and safety
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
                What Expectant Mothers Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">5.0/5 from 78+ mothers</span>
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
              <Link to="/ubud">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Ubud Wellness</CardTitle>
                    <CardDescription>Explore Ubud wellness services</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/services">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">All Services</CardTitle>
                    <CardDescription>Complete massage offerings</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/seminyak">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Seminyak Services</CardTitle>
                    <CardDescription>Explore Seminyak area services</CardDescription>
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
              Enjoy Safe, Nurturing Pregnancy Massage in Bali
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book with our certified prenatal therapists and experience relief with complete peace of mind.
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Certified prenatal therapists, safe techniques, mobile service to your villa. Your wellness and your baby's safety are our priorities.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default PregnancyMassageBali;
