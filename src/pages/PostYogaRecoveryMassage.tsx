import SiteMeta from "@/components/seo/SiteMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Activity, Sparkles, Shield, Star, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const PostYogaRecoveryMassage = () => {
  const whatsappMessage = "Hi! I'd like to book a post-yoga recovery massage in Bali. Can you help?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const features = [
    { icon: Activity, title: "Yoga-Informed Techniques", description: "Massage therapists trained in yoga anatomy and movement patterns" },
    { icon: Sparkles, title: "Assisted Stretching", description: "Deep stretches beyond what you can achieve in solo practice" },
    { icon: Shield, title: "Muscle Release", description: "Target stubborn tension in hips, shoulders, and hamstrings" },
    { icon: Activity, title: "Energy Meridian Work", description: "Balance energy flow following yogic principles" },
    { icon: CheckCircle2, title: "Breath-Synchronized", description: "Movements coordinated with your breath for deeper relaxation" },
    { icon: Sparkles, title: "Focus on Yoga Areas", description: "Special attention to areas stressed during practice" }
  ];

  const benefits = [
    "Achieve deeper stretches than solo practice",
    "Prevent yoga-related injuries and overuse",
    "Release stubborn muscle tension and knots",
    "Enhance flexibility gains from your practice",
    "Accelerate recovery between sessions",
    "Complement your yoga journey with bodywork",
    "Therapists understand yoga anatomy"
  ];

  const faqs = [
    {
      question: "How soon after yoga should I book this massage?",
      answer: "Ideally within 2-4 hours after your yoga session. This allows your body to cool down while muscles are still warm and receptive to deeper stretching. Evening sessions after morning yoga classes work perfectly."
    },
    {
      question: "Is this different from regular massage?",
      answer: "Yes, significantly. Post-yoga recovery massage uses assisted stretching, focuses on yoga-stressed areas (hip flexors, shoulders, hamstrings), incorporates breath work, and follows energy meridians. Our therapists understand different yoga styles and their physical demands."
    },
    {
      question: "Do your therapists understand yoga?",
      answer: "Yes, our therapists are trained in yoga anatomy and work regularly with yoga practitioners. They understand the physical demands of Ashtanga, Vinyasa, Yin, and other styles, and know which muscle groups need attention after each practice."
    },
    {
      question: "Can you come to yoga retreats?",
      answer: "Absolutely! We provide mobile post-yoga recovery massage to yoga retreats, shalas, and studios throughout Bali. We can service multiple practitioners simultaneously for retreat groups. Contact us for group booking rates."
    },
    {
      question: "What styles of yoga do you work with?",
      answer: "We work with all yoga styles: Ashtanga, Vinyasa, Hatha, Yin, Restorative, Power Yoga, Hot Yoga, and more. Each style stresses different muscle groups, and our therapists adjust techniques accordingly."
    },
    {
      question: "Should I be flexible to benefit from this?",
      answer: "No! Post-yoga recovery massage benefits practitioners at all flexibility levels. Whether you're a beginner struggling with tight muscles or an advanced yogi seeking deeper opening, the treatment adapts to your body's needs."
    },
    {
      question: "Can this help with yoga injuries?",
      answer: "We can help prevent injuries and support recovery from minor strains, but serious injuries require medical attention first. Always inform your therapist about any pain or injury before treatment begins."
    }
  ];

  const pricing = [
    { duration: "60-minute", price: "450,000 IDR", description: "Focused post-yoga recovery session" },
    { duration: "90-minute", price: "650,000 IDR", description: "Deep recovery with extended stretching" }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Post-Yoga Recovery Massage Bali | Stretch & Release Treatment"
        description="Enhance your yoga practice with post-yoga recovery massage in Bali. Deep stretching, flexibility work, muscle release. Perfect after yoga sessions. Book now!"
        keywords="post-yoga recovery massage, yoga massage bali, post-yoga stretch bali, yoga recovery treatment, flexibility massage bali, yogi massage bali"
        canonical="/post-yoga-recovery-massage/"
      />
      
      <Header />
      
      <main>
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/hero-1.jpg" alt="Post-yoga recovery massage" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-indigo-900/80 to-violet-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm">
              <Activity className="w-4 h-4 inline mr-2" />
              Yoga-Informed Bodywork
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Post-Yoga Recovery Massage
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Enhance Your Practice with Specialized Stretching & Muscle Release
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90 shadow-xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Recovery Session
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Available in Ubud & Canggu</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-spa-stone leading-relaxed text-center">
              Complement your yoga practice with specialized <strong>post-yoga recovery massage</strong>. Our therapists understand yogic principles and provide targeted stretching, muscle release, and energy flow work to enhance your practice and prevent injury.
            </p>
          </div>
        </section>

        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                What's Included in Post-Yoga Recovery
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
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Benefits for Your Yoga Practice
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft">
                  <CardContent className="pt-6 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spa-gold flex-shrink-0 mt-0.5" />
                    <p className="text-spa-stone">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Perfect for Yoga Practitioners
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🧘 Dedicated Practitioners</h3>
                  <p className="text-spa-stone text-sm">Daily or regular yogis seeking to deepen their practice</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🏨 Retreat Participants</h3>
                  <p className="text-spa-stone text-sm">Yoga retreat guests with intensive practice schedules</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">💪 Ashtanga & Vinyasa</h3>
                  <p className="text-spa-stone text-sm">Practitioners of physically demanding yoga styles</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-spa-earth mb-2">🌟 Flexibility Seekers</h3>
                  <p className="text-spa-stone text-sm">Anyone working on increasing flexibility and range of motion</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Pricing for Yoga Recovery Sessions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pricing.map((pkg, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">{pkg.duration} Session</CardTitle>
                    <CardDescription className="text-2xl font-bold text-spa-gold">{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone text-sm mb-4">{pkg.description}</p>
                    <Button asChild className="w-full">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-spa-stone mt-8 max-w-2xl mx-auto">
              Multi-session yoga retreat packages available. Partner with local yoga studios for discounts.
            </p>
          </div>
        </section>

        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Serving Bali's Yoga Communities
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Ubud", slug: "ubud" },
                { name: "Canggu", slug: "canggu" },
                { name: "Seminyak", slug: "seminyak" },
                { name: "Sanur", slug: "sanur" }
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

        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
                Related Recovery Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/post-hike-recovery-massage-bali">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Post-Hike Recovery</CardTitle>
                    <CardDescription>Mountain trekking muscle relief</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/uluwatu-surf-massage">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">Surf Recovery</CardTitle>
                    <CardDescription>Paddling and surf strain relief</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/services">
                <Card className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth">All Services</CardTitle>
                    <CardDescription>Explore wellness offerings</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-professional text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Your Yoga Practice Deeper
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your post-yoga recovery massage and experience the difference professional bodywork makes!
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-professional-navy hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default PostYogaRecoveryMassage;
