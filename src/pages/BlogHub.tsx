import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, DollarSign, MessageCircle, MapPin, Clock, Heart, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const BlogHub = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi! I'm interested in booking a massage in Kuta. Can you help me?")}`;

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
      "name": "Blog",
      "item": `${SITE_CONFIG.url}/blog`
    }
  ];

  // Top 3 featured posts
  const featuredPosts = [
    {
      title: "How Much Does a Massage Cost in Kuta, Bali? (2026 Price Guide)",
      excerpt: "Complete breakdown of massage pricing in Kuta with verified rates from IDR 250K to IDR 1,550K. Includes Balinese, deep tissue, hot stone, couples massage, and specialty services.",
      slug: "/blog/massage-kuta-bali-price-guide",
      icon: DollarSign,
      color: "text-professional-gold"
    },
    {
      title: "How to Book a Massage in Kuta: WhatsApp Booking Guide (2026)",
      excerpt: "Step-by-step process for booking massage via WhatsApp, from first contact to therapist arrival. Includes exact message templates and what to expect at each stage.",
      slug: "/blog/how-to-book-massage-kuta-whatsapp",
      icon: MessageCircle,
      color: "text-professional-green"
    },
    {
      title: "What to Expect from Your First Home Massage in Kuta",
      excerpt: "Comprehensive first-timer guide covering setup, privacy, tipping, and cultural considerations. Removes anxiety about trying home massage for the first time.",
      slug: "/blog/first-home-massage-kuta-what-to-expect",
      icon: Info,
      color: "text-blue-600"
    }
  ];

  // Transactional support posts
  const transactionalPosts = [
    {
      title: "How Much Does a Massage Cost in Kuta, Bali? (2026 Price Guide)",
      excerpt: "Complete pricing transparency for all massage types in Kuta.",
      slug: "/blog/massage-kuta-bali-price-guide"
    },
    {
      title: "How to Book a Massage in Kuta: WhatsApp Booking Guide (2026)",
      excerpt: "Step-by-step booking process explained with message templates.",
      slug: "/blog/how-to-book-massage-kuta-whatsapp"
    },
    {
      title: "Best Massage for Jet Lag Recovery in Kuta",
      excerpt: "Optimal massage choice for travel fatigue and long flights.",
      slug: "/blog/best-massage-jet-lag-recovery-kuta"
    },
    {
      title: "Couples Massage in Kuta: Everything You Need to Know",
      excerpt: "Complete guide to romantic and partner massage experiences.",
      slug: "/blog/couples-massage-kuta-guide"
    },
    {
      title: "Deep Tissue vs. Balinese Massage: Which Should You Choose?",
      excerpt: "Compare massage styles and find your perfect match.",
      slug: "/blog/deep-tissue-vs-balinese-massage-kuta"
    }
  ];

  // Informational support posts
  const informationalPosts = [
    {
      title: "What to Expect from Your First Home Massage in Kuta",
      excerpt: "Everything first-timers need to know about home massage.",
      slug: "/blog/first-home-massage-kuta-what-to-expect"
    },
    {
      title: "The Complete Guide to Balinese Massage",
      excerpt: "Deep dive into Bali's traditional massage style and techniques.",
      slug: "/blog/balinese-massage-complete-guide"
    },
    {
      title: "Massage Etiquette in Bali: Tipping, Draping, and Cultural Guidelines",
      excerpt: "Navigate cultural norms and etiquette with confidence.",
      slug: "/blog/massage-etiquette-bali-guide"
    },
    {
      title: "7 Health Benefits of Regular Massage Therapy",
      excerpt: "Scientific benefits of therapeutic massage while traveling.",
      slug: "/blog/health-benefits-massage-therapy-bali"
    },
    {
      title: "How to Prepare Your Villa or Hotel Room for a Home Massage",
      excerpt: "Practical preparation guide and simple checklist.",
      slug: "/blog/prepare-villa-hotel-room-home-massage"
    }
  ];

  // Local relevance posts
  const localPosts = [
    {
      title: "Best Areas in Kuta for Home Massage Service",
      excerpt: "Area-by-area coverage and response time information.",
      slug: "/blog/best-areas-kuta-home-massage-coverage"
    },
    {
      title: "Top 10 Hotels & Villas in Kuta That Welcome Mobile Massage Services",
      excerpt: "Massage-friendly accommodation guide for Kuta.",
      slug: "/blog/kuta-hotels-villas-allow-mobile-massage"
    }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta
        title="Kuta Massage Guides & Expert Tips | Complete Knowledge Hub"
        description="Complete resource for massage in Kuta, Bali. Pricing guides, booking tips, service comparisons, cultural etiquette, health benefits, and local logistics. Make informed decisions about your massage experience."
        keywords="massage kuta guide, massage booking tips, massage prices kuta, home massage information, villa massage guide, massage etiquette bali, massage types comparison, kuta massage blog"
        canonical="/blog"
      />

      <StructuredData type="organization" />
      <StructuredData type="breadcrumb" data={breadcrumbData} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-professional-green via-emerald-600 to-teal-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Complete Guide to Massage in Kuta, Bali
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert guides covering pricing, booking, massage types, cultural etiquette, health benefits, 
              and local logistics. Make informed decisions about your massage experience.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-spa-stone leading-relaxed mb-6">
                Welcome to the Kuta Massage Knowledge Hub – your complete resource for understanding, 
                booking, and enjoying professional massage services in Kuta, Bali. Whether you're planning 
                your first visit to Bali, comparing massage options, or looking for specific information 
                about home massage services, you'll find everything you need here.
              </p>
              <p className="text-lg text-spa-stone leading-relaxed">
                Our guides cover pricing transparency, booking processes, service comparisons, cultural 
                etiquette, health benefits, and local logistics. Each article is written by massage therapy 
                professionals with deep local knowledge of Kuta and the surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Start Here - Featured Guides */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 px-4 py-2 bg-professional-gold text-white">
                  Start Here
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
                  Essential Reading for First-Time Visitors
                </h2>
                <p className="text-lg text-spa-stone max-w-3xl mx-auto">
                  New to Kuta or home massage? Start with these three comprehensive guides that 
                  cover the most important topics for first-time visitors.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => {
                  const IconComponent = post.icon;
                  return (
                    <Card key={index} className="border-2 border-professional-gold/30 hover:border-professional-gold hover:shadow-xl transition-all duration-300 bg-white">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-full bg-${post.color}/10 flex items-center justify-center mb-4`}>
                          <IconComponent className={`w-6 h-6 ${post.color}`} />
                        </div>
                        <CardTitle className="text-xl text-spa-earth">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-spa-stone">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link to={post.slug}>
                          <Button variant="default" className="w-full bg-professional-green hover:bg-professional-green/90">
                            Read Guide <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Booking & Pricing Guides */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-professional-gold" />
                  <h2 className="text-3xl md:text-4xl font-bold text-spa-earth">
                    Booking & Pricing Guides
                  </h2>
                </div>
                <p className="text-lg text-spa-stone">
                  Make smart booking decisions with complete pricing transparency and step-by-step 
                  booking instructions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {transactionalPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-spa-earth">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-spa-stone">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={post.slug}>
                        <Button variant="link" className="text-professional-green p-0 h-auto font-semibold">
                          Read Guide <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Massage Education & Wellness */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-red-500" />
                  <h2 className="text-3xl md:text-4xl font-bold text-spa-earth">
                    Massage Education & Wellness
                  </h2>
                </div>
                <p className="text-lg text-spa-stone">
                  Understand massage therapy in Bali with guides covering techniques, benefits, 
                  etiquette, and preparation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {informationalPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-spa-earth">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-spa-stone">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={post.slug}>
                        <Button variant="link" className="text-professional-green p-0 h-auto font-semibold">
                          Read Guide <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Kuta Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl md:text-4xl font-bold text-spa-earth">
                    Navigate Massage Services in Kuta
                  </h2>
                </div>
                <p className="text-lg text-spa-stone">
                  Local knowledge about coverage areas, response times, and massage-friendly 
                  accommodations in Kuta.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {localPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-spa-earth">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-spa-stone">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={post.slug}>
                        <Button variant="link" className="text-professional-green p-0 h-auto font-semibold">
                          Read Guide <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Book Your Massage CTA */}
        <section className="py-16 bg-gradient-to-r from-professional-green to-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience Professional Massage in Kuta?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                All our massage services include certified therapists with professional training, 
                all equipment, oils, and linens provided, transparent pricing with no hidden fees, 
                same-day booking available throughout Kuta, and service 7 AM - 10 PM daily.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="default" className="bg-white text-professional-green hover:bg-gray-100 text-lg px-8">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </Button>
                </a>
                <Link to="/message-kuta-bali">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-professional-green">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm opacity-75">
                WhatsApp: {SITE_CONFIG.whatsapp}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default BlogHub;
