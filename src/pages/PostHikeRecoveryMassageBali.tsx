import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Mountain, Shield, Star, CheckCircle2, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const PostHikeRecoveryMassageBali = () => {
  const whatsappMessage = "Hi! I just finished hiking Mount Batur/Agung and would like to book a post-hike recovery massage. Are you available today?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sports Massage",
    "name": "Post-Hike Recovery Massage Bali",
    "description": "Recover from Mount Batur or Mount Agung hikes with specialized post-hike massage. Leg muscle relief, fatigue recovery. Mobile service in Ubud area.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Home Massage Kuta",
      "url": "https://www.homemassagekuta.com",
      "telephone": SITE_CONFIG.whatsapp,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ubud",
        "addressRegion": "Bali",
        "addressCountry": "ID"
      },
      "priceRange": "450,000 - 650,000 IDR"
    },
    "areaServed": ["Ubud", "Amed", "Sidemen"],
    "offers": [
      {
        "@type": "Offer",
        "name": "60-minute leg-focused recovery",
        "price": "450000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "name": "90-minute full body recovery",
        "price": "650000",
        "priceCurrency": "IDR"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "105"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How soon after hiking should I book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideally within 2-6 hours after finishing your hike. Same-day booking is best for preventing DOMS (next-day soreness). Even next-day massage helps reduce existing soreness."
        }
      },
      {
        "@type": "Question",
        "name": "Will this prevent next-day soreness?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Post-hike massage within hours of finishing significantly reduces DOMS when combined with hydration and light activity. Even if you're already sore, massage accelerates recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Do you understand hiking muscle strain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our therapists specialize in sports recovery and understand mountain hiking muscle strain patterns. We focus on calves, thighs, glutes, lower back, and hip flexors stressed by trekking."
        }
      }
    ]
  };

  const breadcrumbData = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_CONFIG.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Post-Hike Recovery Massage", "item": `${SITE_CONFIG.url}/post-hike-recovery-massage-bali/` }
  ];

  const features = [
    { icon: Mountain, title: "Deep Tissue Leg Work", description: "Specialized focus on calves, thighs, and glutes stressed by mountain climbing" },
    { icon: Shield, title: "Lower Back & Hip Relief", description: "Target areas that bear weight during long descents" },
    { icon: Zap, title: "Lactic Acid Release", description: "Techniques to help flush metabolic waste from muscle tissue" },
    { icon: CheckCircle2, title: "Stretching for Tight Muscles", description: "Assisted stretching to restore flexibility after hiking" },
    { icon: Mountain, title: "Full Body Relaxation", description: "Complete relaxation after physical exertion" },
    { icon: Shield, title: "Recovery Recommendations", description: "Anti-inflammatory guidance and stretching routines" }
  ];

  const benefits = [
    { title: "Rapid Recovery", description: "Recover quickly from mountain hiking and enjoy your vacation" },
    { title: "Prevent DOMS", description: "Reduce or prevent next-day soreness when done within hours of hiking" },
    { title: "Release Lactic Acid", description: "Speed up elimination of metabolic waste from muscles" },
    { title: "Restore Flexibility", description: "Regain normal leg mobility and range of motion" },
    { title: "Enjoy Your Vacation", description: "Feel better and explore Bali without hiking pain" },
    { title: "Professional Sports Approach", description: "Treatment from therapists trained in athletic recovery" }
  ];

  const pricing = [
    { duration: "60-minute", price: "450,000 IDR", description: "Leg-focused recovery targeting hiking muscles" },
    { duration: "90-minute", price: "650,000 IDR", description: "Full body recovery with extended relaxation" }
  ];

  const serviceAreas = [
    { name: "Ubud", slug: "ubud" },
    { name: "Amed", slug: "amed" },
    { name: "Sidemen", slug: "sidemen" }
  ];

  const faqs = [
    {
      question: "How soon after hiking should I book?",
      answer: "Ideally within 2-6 hours after finishing your hike. Same-day booking is best for preventing DOMS (next-day soreness). The sooner after your hike, the more effective the prevention. Even next-day massage helps significantly reduce existing soreness and accelerates recovery."
    },
    {
      question: "Will this prevent next-day soreness?",
      answer: "Yes! Post-hike massage within a few hours of finishing significantly reduces DOMS (Delayed Onset Muscle Soreness) when combined with hydration and light activity. Even if you're already sore, massage accelerates recovery and provides relief."
    },
    {
      question: "Do you understand hiking muscle strain?",
      answer: "Absolutely! Our therapists specialize in sports recovery and mountain hiking. We focus on the exact muscle groups stressed: calves, thighs, glutes, lower back, and hip flexors. We understand the unique demands of mountain trekking and climbing."
    },
    {
      question: "Can you come to Ubud accommodations?",
      answer: "Yes! We provide mobile service to accommodations throughout Ubud, Amed, Sidemen, and surrounding areas. Just message us your location and we'll arrive at your hotel, villa, or guest house."
    },
    {
      question: "What if I hiked yesterday and I'm sore today?",
      answer: "No problem! Even next-day or multi-day post-hike massage helps significantly. While same-day is more preventative, massage several days after hiking still reduces soreness, restores flexibility, and speeds recovery."
    },
    {
      question: "Is deep tissue painful after hiking?",
      answer: "We adjust intensity based on your current soreness level. You control pressure - we can work gently on sore muscles or more deeply on areas that aren't tender. After hiking, we typically focus on gentle-to-medium depth work."
    },
    {
      question: "Should I rest before the massage?",
      answer: "Yes! Light rest before massage is good. Hydrate well and eat something small 30-60 minutes before. Avoid additional intense exercise immediately before massage. Light walking is fine."
    }
  ];

  const testimonials = [
    { name: "David", location: "UK", text: "Saved my vacation after Batur! Could barely walk after the hike, but after the massage I felt human again and could enjoy the rest of Bali pain-free.", rating: 5 },
    { name: "Mei", location: "Singapore", text: "Booked Mount Agung recovery massage same day. Best decision! No soreness the next day and I could hike again if I wanted to.", rating: 5 },
    { name: "Tom", location: "USA", text: "Tour operator recommended your service. Professional, knowledgeable therapist who really knew hiking strains. Absolutely worth it.", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Post-Hike Recovery Massage Bali | Mount Batur & Agung Relief"
        description="Recover from Mount Batur or Mount Agung hikes with specialized post-hike massage. Leg muscle relief, fatigue recovery. Mobile service in Ubud area. Book recovery now!"
        keywords="post-hike recovery massage bali, mount batur massage, hiking recovery massage bali, mountain trek massage, post-trekking treatment bali, leg muscle massage bali"
        canonical="/post-hike-recovery-massage-bali/"
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
            <img src="/images/hero/hero-1.jpg" alt="Post-hike recovery massage in Bali" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-amber-900/80 to-yellow-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Mountain className="w-4 h-4 inline mr-2" />
              Recovery · Relief · Adventure
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Post-Hike Recovery Massage
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Relief After Mountain Treks – Specialized Hiking Recovery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Recovery
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
              Conquered Mount Batur or Mount Agung? Reward your legs with <strong>specialized post-hike recovery massage</strong>. We target the exact muscle groups stressed by mountain trekking for rapid recovery so you can enjoy the rest of your Bali adventure pain-free.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Post-Hike Recovery Treatment Details
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Specialized techniques for hiking-fatigued muscles
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
                Benefits After Mountain Trekking
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Accelerate recovery and get back to enjoying Bali
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
                Perfect for Bali Hikers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏔️ Mount Batur Climbers</h3>
                  <p className="text-spa-stone text-sm">Sunrise trek participants recovering from early morning hike</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">⛰️ Mount Agung Trekkers</h3>
                  <p className="text-spa-stone text-sm">Those recovering from intense multi-hour mountain climbing</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🚶 Multi-Day Hikers</h3>
                  <p className="text-spa-stone text-sm">Adventure travelers with cumulative hiking fatigue</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🥾 Active Travelers</h3>
                  <p className="text-spa-stone text-sm">Anyone with hiking fatigue wanting rapid recovery</p>
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
                Hiking Recovery Pricing
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Affordable recovery massage for hikers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">{pkg.duration} Recovery</CardTitle>
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
              Multi-trek adventure packages available. Same-day booking encouraged for optimal recovery timing.
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Serving Ubud & Hiking Areas
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Mobile service to accommodations near hiking areas
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
                What Hikers Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-spa-stone ml-2">4.9/5 from 105+ hikers</span>
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
                    <CardDescription>Enhance flexibility and practice</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/uluwatu-surf-massage">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Surf Recovery Massage</CardTitle>
                    <CardDescription>Sports recovery for wave riders</CardDescription>
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
              Don't Let Sore Legs Ruin Your Bali Experience
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your post-hike recovery massage and bounce back quickly!
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mt-8">
              Professional sports massage therapy for hikers. Same-day availability, mobile service, local Ubud expertise.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default PostHikeRecoveryMassageBali;
