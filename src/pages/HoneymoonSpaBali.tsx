import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Heart, Sparkles, Shield, Star, CheckCircle2, MapPin, ArrowRight, Camera, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const HoneymoonSpaBali = () => {
  const whatsappMessage = "Hi! I'd like to book a honeymoon spa package in Bali. Can you help with availability?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Spa Package",
    "name": "Honeymoon Spa Bali",
    "description": "Luxury honeymoon spa packages in Bali. Exclusive couples treatments, romantic ambiance, and unforgettable wellness experiences for newlyweds.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Home Massage Kuta",
      "priceRange": "1,250,000 - 2,450,000 IDR"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Honeymoon Bliss Package",
        "price": "1250000",
        "priceCurrency": "IDR",
        "description": "90-minute romantic couples massage with flowers and champagne"
      },
      {
        "@type": "Offer",
        "name": "Romantic Escape Package",
        "price": "1650000",
        "priceCurrency": "IDR",
        "description": "120-minute luxury spa experience for two"
      },
      {
        "@type": "Offer",
        "name": "Ultimate Luxury Package",
        "price": "2450000",
        "priceCurrency": "IDR",
        "description": "180-minute complete wellness journey with premium add-ons"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "75"
    }
  };

  const packages = [
    {
      name: "Honeymoon Bliss Package",
      duration: "90 minutes",
      price: "1,250,000 IDR",
      description: "Perfect introduction to honeymoon wellness",
      includes: [
        "90-minute synchronized couples massage",
        "Rose petal decoration",
        "Tropical fruit refreshments",
        "Romantic music selection",
        "Keepsake honeymoon certificate",
        "Anniversary return discount"
      ]
    },
    {
      name: "Romantic Escape Package",
      duration: "120 minutes",
      price: "1,650,000 IDR",
      description: "Our most popular honeymoon package",
      includes: [
        "120-minute luxury couples massage",
        "Premium flower petal arrangements",
        "Champagne or tropical cocktails",
        "Aromatherapy customization",
        "Professional photo moment setup",
        "Keepsake certificate & discount"
      ],
      featured: true
    },
    {
      name: "Ultimate Luxury Package",
      duration: "180 minutes",
      price: "2,450,000 IDR",
      description: "Once-in-a-lifetime honeymoon experience",
      includes: [
        "180-minute extended spa journey",
        "Luxury flower arrangements",
        "Premium champagne service",
        "Optional professional photography (30 min)",
        "Exotic aromatherapy blends",
        "Luxury refreshments & fruit",
        "Keepsake album & certificate"
      ]
    }
  ];

  const features = [
    { icon: Heart, title: "Flower Petal Decorations", description: "Beautiful romantic setup with fresh flower petals" },
    { icon: Sparkles, title: "Champagne Service", description: "Toast your new life together with premium beverages" },
    { icon: Camera, title: "Photography Add-On", description: "Professional photos to capture your spa memories" },
    { icon: Sparkles, title: "Customized Aromatherapy", description: "Personalized essential oil blends for couples" },
    { icon: Gift, title: "Keepsake Certificate", description: "Beautiful honeymoon spa certificate to treasure" },
    { icon: Heart, title: "Anniversary Discount", description: "Complimentary return discount for future anniversaries" }
  ];

  const faqs = [
    {
      question: "How far in advance should we book our honeymoon spa?",
      answer: "We recommend booking 3-7 days in advance for honeymoon packages to ensure availability and allow time for special preparations. Same-day bookings may be available during low season, but advance booking guarantees your preferred date and time."
    },
    {
      question: "Can you accommodate special requests for our honeymoon?",
      answer: "Absolutely! We love personalizing honeymoon experiences. Whether you want specific flowers, particular music, special dietary refreshments, or unique romantic touches, just let us know. We'll do our best to make your vision a reality."
    },
    {
      question: "Do you offer photography services?",
      answer: "Yes! Professional photography is available as an add-on to our Romantic Escape and Ultimate Luxury packages. Our photographer captures beautiful moments of your spa setup and experience (approximately 30 minutes, delivered digitally within 48 hours)."
    },
    {
      question: "What makes this different from a regular couples massage?",
      answer: "Our honeymoon spa includes special romantic setup (flower petals, candles), premium refreshments (champagne/cocktails), keepsake certificate, optional photography service, and complimentary anniversary return discount. It's designed specifically for celebrating newlyweds with extra luxury touches."
    },
    {
      question: "Can we customize our honeymoon spa package?",
      answer: "Yes! All packages are customizable. You can adjust massage styles, treatment durations, add extra services, select specific flowers or aromatherapy blends, and include special touches. Contact us via WhatsApp to discuss your perfect honeymoon spa experience."
    },
    {
      question: "Do you provide gift certificates for pre-wedding gifts?",
      answer: "Yes! Honeymoon spa gift certificates make perfect wedding gifts. They can be purchased by friends or family and presented to the couple. Certificates are valid for 12 months and can be redeemed at the couple's convenience."
    },
    {
      question: "What's included in the romantic setup?",
      answer: "Romantic setup includes fresh flower petal arrangements on massage tables and floor, scented candles (flameless for safety), relaxing music playlist, dimmed ambient lighting, aromatherapy diffusers, and complete spa atmosphere creation in your villa."
    }
  ];

  const testimonials = [
    { name: "Emma & James", location: "UK", text: "The highlight of our honeymoon! Everything was perfect - the massage, the flowers, the champagne. We'll treasure these memories forever.", rating: 5 },
    { name: "Sophie & David", location: "Australia", text: "Absolutely magical experience. The therapists were professional, the romantic setup was stunning, and it felt so special. Highly recommend for honeymooners!", rating: 5 },
    { name: "Maria & Carlos", location: "Spain", text: "We got the Ultimate Luxury package and it exceeded all expectations. The photography service captured beautiful moments. Worth every penny!", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Honeymoon Spa Bali | Luxury Couples Wellness Packages"
        description="Celebrate your honeymoon with luxury spa packages in Bali. Private villa treatments, romantic add-ons, professional service. Book your unforgettable spa experience!"
        keywords="honeymoon spa bali, honeymoon massage bali, newlywed spa package bali, romantic spa bali, honeymoon wellness bali, luxury honeymoon massage"
        canonical="/honeymoon-spa-bali/"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/hero-1.jpg" alt="Honeymoon spa in Bali" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/85 via-rose-900/80 to-red-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Heart className="w-4 h-4 inline mr-2" />
              Luxury Honeymoon Experience
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Honeymoon Spa Bali
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Luxury Wellness for Newlyweds – Create Unforgettable Memories Together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Your Honeymoon Spa
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>Perfect 5-Star Honeymoon Reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Celebrate your new life together with our exclusive <strong>honeymoon spa packages in Bali</strong>. Luxurious couples treatments, romantic ambiance, and unforgettable wellness experiences designed specifically for newlyweds. More affordable than resort spa packages with complete privacy and personalization in your own villa or chosen location.
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Exclusive Honeymoon Spa Packages
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Choose the perfect package to celebrate your marriage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className={`bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300 ${pkg.featured ? 'ring-2 ring-spa-gold' : ''}`}>
                  <CardHeader>
                    {pkg.featured && (
                      <Badge className="mb-2 bg-spa-gold text-spa-earth w-fit">Most Popular</Badge>
                    )}
                    <CardTitle className="text-spa-earth">{pkg.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-spa-gold">{pkg.price}</CardDescription>
                    <p className="text-sm text-spa-stone">{pkg.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-spa-stone mb-4">{pkg.description}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-spa-stone">
                          <CheckCircle2 className="w-4 h-4 text-spa-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Book This Package
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Why Choose Our Honeymoon Wellness Experience
              </h2>
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

            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-spa-gold/10 to-spa-cream/30 border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-spa-earth mb-4 text-center">
                    ✨ Once-in-a-Lifetime Experience ✨
                  </h3>
                  <p className="text-spa-stone text-center leading-relaxed">
                    More affordable than resort spa packages • Complete privacy and personalization • Flexible location (your villa, beach, garden) • Professional luxury service • Create lasting memories together • Anniversary return discount included
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Serving Bali's Premier Honeymoon Destinations
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Luxury honeymoon spa service throughout Bali's most romantic locations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Seminyak Villas", slug: "seminyak" },
                { name: "Uluwatu Cliffside", slug: "uluwatu" },
                { name: "Ubud Jungle Retreats", slug: "ubud" },
                { name: "Nusa Dua Beachfront", slug: "nusa-dua" },
                { name: "Canggu Exclusive", slug: "canggu" },
                { name: "Sanur Romantic", slug: "sanur" }
              ].map((area, index) => (
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
                Honeymoon Spa Questions
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
                Honeymoon Memories
              </h2>
              <div className="flex items-center justify-center gap-2 text-spa-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-spa-stone ml-2">5.0/5 from 75+ honeymooners</span>
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
                Related Romantic Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/couples-villa-massage-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Couples Villa Massage</CardTitle>
                    <CardDescription>Private in-room spa for two</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/luxury-villa-wellness-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Luxury Villa Wellness</CardTitle>
                    <CardDescription>Premium VIP spa experiences</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/services">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">All Services</CardTitle>
                    <CardDescription>Explore all wellness offerings</CardDescription>
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
              Start Your Married Life with Unforgettable Spa
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your honeymoon spa package now and create memories that last forever!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-professional-navy">
                <Link to="/services">
                  View All Packages
                </Link>
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

export default HoneymoonSpaBali;
