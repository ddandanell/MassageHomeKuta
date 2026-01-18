import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import BlogPlugModule from "@/components/BlogPlugModule";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, CheckCircle2, Shield, Phone } from "lucide-react";
import { MessageCircle, Clock, Star, MapPin, Zap, Shield, Users, ArrowRight, CheckCircle2, Heart, Sparkles, Phone, Award, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const MessageKutaBali = () => {
  const whatsappMessage = "Hi! I'm interested in booking a message in Kuta, Bali. Can you help me with availability?";
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
    name: "Professional Massage Service in Kuta, Bali",
    description: "Professional in-villa and hotel massage service in Kuta, Bali. Certified therapists deliver authentic Balinese massage, deep tissue, aromatherapy and more to your location. Operating daily 07:00-22:00.",
    serviceType: "Massage Therapy and Wellness Services",
    areaServed: ["Kuta", "Legian", "Seminyak", "Tuban", "Canggu", "Jimbaran", "Nusa Dua"],
    offers: {
      priceRange: "$$",
    name: "Message Kuta Bali - Professional Home Massage Service",
    description: "Looking for message kuta Bali? We deliver professional massage and spa treatments to your villa or hotel in Kuta. Certified therapists, transparent pricing, same-day booking. From IDR 250K.",
    serviceType: "In-Villa Massage and Spa Services",
    areaServed: "Kuta, Bali, Indonesia",
    offers: {
      priceRange: "IDR 250,000 - IDR 1,550,000",
      priceCurrency: "IDR"
    }
  };

  const faqSchemaData = [
    {
      "@type": "Question",
      "name": "What is message kuta Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When people search for 'message kuta Bali,' they're typically looking for professional massage services in the Kuta area of Bali. This refers to in-villa massage, hotel massage, or outcall massage therapy where certified therapists come to your location in Kuta, Legian, Seminyak, Tuban, and surrounding areas. It's a convenient alternative to visiting traditional spa facilities, allowing you to enjoy authentic Balinese massage, deep tissue therapy, aromatherapy, and other wellness treatments in the comfort and privacy of your own accommodation."
      }
    },
    {
      "@type": "Question",
      "name": "How much does massage cost in Kuta, Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional massage prices in Kuta range from IDR 250,000 to IDR 1,550,000 depending on treatment type and duration. Traditional Balinese massage costs IDR 350,000 (60 min), IDR 500,000 (90 min), or IDR 650,000 (120 min). Deep Tissue is IDR 400,000/550,000/700,000. Hot Stone is IDR 450,000/580,000/730,000. Four Hands massage for couples is IDR 850,000/1,200,000/1,550,000. All prices include therapist travel, professional equipment, premium oils, and setup with no hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book same-day massage in Kuta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, same-day massage booking is available in Kuta. We operate daily from 07:00 to 22:00 and can typically accommodate bookings with 1-2 hours notice, subject to therapist availability. Contact us via WhatsApp at +62 811-2656-869 for fastest response. During peak season (July-August, December-January), we recommend booking 3-4 hours in advance to guarantee your preferred time slot."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Kuta do you cover for massage service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide message service throughout Kuta, Legian, Seminyak, Tuban, Canggu, Jimbaran, and Nusa Dua. Our service covers all hotels, villas, resorts, guesthouses, and private accommodations in these areas. Response times range from 20-45 minutes depending on your exact location. Central Kuta and Legian have the fastest response times of 20-30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a massage in Kuta, Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book massage in Kuta by contacting us via WhatsApp at +62 811-2656-869. Simply send your preferred treatment type, duration, date, time, and location details. We'll confirm therapist availability within 15-30 minutes and send therapist details before arrival. You can also call us or use our online booking form. WhatsApp provides the fastest response for same-day bookings."
      }
    },
    {
      "@type": "Question",
      "name": "Are your massage therapists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all massage therapists are professionally certified with specialized training in Balinese massage, Swedish massage, deep tissue, aromatherapy, and other therapeutic modalities. Our therapists hold certifications from recognized institutions in Bali and Indonesia, undergo regular professional development, and are fully vetted through background checks and health screenings. We maintain a 4.9/5 rating from 500+ verified client reviews."
      }
    },
    {
      "@type": "Question",
      "name": "What should I expect during an in-villa massage in Kuta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your therapist arrives 10 minutes before your scheduled time with professional massage table, fresh linens, premium oils, and ambient music. They set up in your room or preferred space, then provide a consultation about pressure preferences and any concerns. During the massage session, you're covered with sheets with only the area being worked on exposed. The therapist will ask about pressure and comfort throughout the treatment. After your session, they clean and pack all equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to provide anything for the massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you don't need to provide anything for your message in Kuta. Our therapists bring all necessary equipment including professional massage table, fresh linens, premium therapeutic oils, towels, and ambient music. You simply need to ensure adequate space in your room for the massage table (approximately 2m x 1m). Some clients prefer to have drinking water available for after the treatment."
      }
    },
    {
      "@type": "Question",
      "name": "What are your operating hours for massage service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide massage service in Kuta daily from 07:00 to 22:00 (7 AM to 10 PM), seven days per week including holidays. Last bookings are accepted until 20:30 for 90-minute sessions or 21:00 for 60-minute treatments. Early morning sessions (07:00-09:00) are popular for jet lag recovery, while evening appointments (18:00-21:00) are preferred by guests returning from beach or activities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request male or female massage therapists?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can request your preferred therapist gender when booking massage in Kuta. Simply specify male or female therapist preference when contacting us via WhatsApp, and we'll match you with an appropriately certified professional. We respect all preferences and maintain professional standards regardless of therapist gender."
      }
    },
    {
      "@type": "Question",
      "name": "Is tipping expected for massage therapists in Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tipping is appreciated but not mandatory for massage service in Kuta, Bali. Our therapists receive fair compensation, but if you're satisfied with your treatment, tips of 10-20% or IDR 30,000-50,000 for standard sessions are customary in Bali and greatly appreciated by therapists. Tips can be given in cash (IDR or USD) directly to your therapist."
      }
    },
    {
      "@type": "Question",
      "name": "What's your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We require at least 2 hours advance notice for cancellations to avoid charges. Bookings canceled with 2+ hours notice incur no fees. Cancellations made less than 2 hours before your appointment or no-shows may incur a 50% cancellation fee to compensate therapists for travel time and lost scheduling opportunities. To reschedule, contact us via WhatsApp as early as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Can couples book massage together in Kuta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, couples massage in Kuta is available with our Four Hands massage service. Two therapists work simultaneously on two people in the same room, creating a synchronized shared experience. Couples massage prices are IDR 850,000 (60 min), IDR 1,200,000 (90 min), or IDR 1,550,000 (120 min) for both people. This is popular for anniversaries, honeymoons, and romantic getaways in Bali."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide massage to all hotels in Kuta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide message service to virtually all hotels, resorts, villas, guesthouses, hostels, and private accommodations throughout Kuta and surrounding areas. Some larger resorts require advance notification for therapist entry, so please provide your hotel name and room number when booking. We have experience accessing all major properties in Kuta, Legian, Seminyak, and Tuban."
      }
    },
    {
      "@type": "Question",
      "name": "Which massage is best for jet lag and travel fatigue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For jet lag recovery after arriving in Bali, we recommend Balinese massage (gentle to medium pressure, promotes relaxation and circulation) or Lymphatic Drainage massage (reduces swelling and travel-related water retention). Both help reset your body clock and alleviate travel fatigue. Many visitors book massage within 24 hours of arrival for faster adjustment to Bali time. A 90-minute session provides optimal benefits for jet lag."
      }
    }
  ];

  const pricingData = [
    { service: "Balinese Massage", duration60: "IDR 350,000", duration90: "IDR 500,000", duration120: "IDR 650,000" },
    { service: "Deep Tissue Massage", duration60: "IDR 400,000", duration90: "IDR 550,000", duration120: "IDR 700,000" },
    { service: "Aromatherapy Massage", duration60: "IDR 380,000", duration90: "IDR 530,000", duration120: "IDR 680,000" },
    { service: "Hot Stone Massage", duration60: "IDR 450,000", duration90: "IDR 580,000", duration120: "IDR 730,000" },
    { service: "Four Hands Massage", duration60: "IDR 850,000", duration90: "IDR 1,200,000", duration120: "IDR 1,550,000" },
    { service: "Pregnancy Massage", duration60: "IDR 380,000", duration90: "IDR 530,000", duration120: "IDR 680,000" },
    { service: "Foot Reflexology", duration60: "IDR 250,000", duration90: "IDR 330,000", duration120: "IDR 480,000" }
  ];

  const servicesOffered = [
    {
      name: "Balinese Massage",
      slug: "balinese-massage",
      benefit: "Traditional technique combining gentle stretching, acupressure, and aromatherapy for full-body relaxation and stress relief. Improves circulation and promotes deep sleep.",
      recommendedDuration: "90 or 120 minutes"
    },
    {
      name: "Deep Tissue Massage",
      slug: "deep-tissue-massage",
      benefit: "Firm pressure targeting chronic muscle tension, knots, and pain. Ideal for sports recovery, surf-related soreness, and postural issues.",
      recommendedDuration: "90 minutes"
    },
    {
      name: "Aromatherapy Massage",
      slug: "aromatherapy-massage",
      benefit: "Gentle massage with premium essential oils for emotional balance, anxiety reduction, and deep relaxation. Perfect for stress relief after travel.",
      recommendedDuration: "90 minutes"
    },
    {
      name: "Hot Stone Massage",
      slug: "hot-stone-massage",
      benefit: "Smooth heated volcanic stones placed on key points to release deep muscle tension, improve circulation, and promote profound relaxation and detoxification.",
      recommendedDuration: "90 or 120 minutes"
    },
    {
      name: "Four Hands Massage",
      slug: "four-hands-massage",
      benefit: "Two therapists work simultaneously in synchronized movements for a unique sensory experience. Popular for couples seeking shared relaxation.",
      recommendedDuration: "90 or 120 minutes"
    },
    {
      name: "Pregnancy Massage",
      slug: "pregnancy-massage",
      benefit: "Specialized prenatal treatment reducing back pain, swelling, and pregnancy discomfort. Safe positioning for all trimesters with trained therapists.",
      recommendedDuration: "60 or 90 minutes"
    },
    {
      name: "Foot Reflexology",
      slug: "foot-reflexology",
      benefit: "Focused pressure on reflex points in feet corresponding to body organs. Promotes full-body healing, relieves tired feet, and improves overall wellness.",
      recommendedDuration: "60 minutes"
    }
  ];

  const useCases = [
    {
      title: "Jet Lag Recovery",
      description: "Just arrived in Bali? Massage helps reset your circadian rhythm and alleviates travel fatigue. Balinese or Lymphatic Drainage massage within 24 hours of arrival speeds adjustment to local time and reduces swelling from long flights. Many guests book evening sessions on arrival day for better sleep."
    },
    {
      title: "Surf & Sports Recovery",
      description: "Surfing Kuta's waves or engaging in active water sports creates muscle soreness and tension. Deep Tissue massage targets overworked shoulders, backs, and legs, reducing inflammation and accelerating recovery. Book after surf sessions for faster return to activities."
    },
    {
      title: "Couples & Romance",
      description: "Celebrate anniversaries, honeymoons, or romantic getaways with synchronized Four Hands couples massage. Two therapists work in harmony while you relax together, creating memorable shared experiences in your private villa or hotel suite in Kuta."
    },
    {
      title: "Post-Work Stress Relief",
      description: "Digital nomads and remote workers in Bali's growing co-working scene accumulate desk-related tension. Shoulder and neck-focused treatments combined with Aromatherapy massage relieve computer posture strain and mental stress, restoring productivity and wellbeing."
    },
    {
      title: "Pre-Event Preparation",
      description: "Preparing for beach weddings, special occasions, or important meetings? Massage reduces anxiety, improves appearance through better circulation and lymphatic drainage, and creates mental clarity. Book 1-2 days before significant events for optimal results."
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

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Message Kuta Bali – Professional In-Villa Massage Service | Home Massage Kuta"
        description="Professional message in Kuta, Bali. Certified therapists deliver authentic massage to your villa or hotel. Operating daily 07:00-22:00. From IDR 250K. Same-day booking available."
        keywords="message kuta bali, massage kuta bali, massage kuta, in villa massage kuta, hotel massage kuta, balinese massage kuta, massage service kuta, mobile massage bali"
        canonical="/message-kuta-bali"
      />
      
      <StructuredData type="organization" />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="service" data={serviceSchemaData} />
      <StructuredData type="faq" data={faqSchemaData} />
      
      <Header />
      
      <main>
        {/* Hero Section - Top 10% Aggressive Conversion */}
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-2.jpg"
              alt="Professional massage service in Kuta, Bali - in-villa and hotel massage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/80 to-green-900/85 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-spa-gold text-spa-earth px-4 py-2 text-sm font-semibold">
              ✓ Certified Therapists · ✓ Same-Day Booking · ✓ No Hidden Fees
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Message Kuta Bali – Professional In-Villa Massage Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md font-medium">
              Authentic Balinese massage delivered to your hotel or villa in Kuta. Certified therapists, transparent pricing, daily 07:00-22:00.
            </p>
            
            {/* 3 Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="flex items-start gap-3 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-spa-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Same-Day Availability</h3>
                  <p className="text-sm opacity-90">Book today, relax today. 20-45 minute response times across Kuta area.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-spa-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Certified Professionals</h3>
                  <p className="text-sm opacity-90">500+ verified reviews. 4.9/5 rating. Licensed therapists only.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-spa-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">All-Inclusive Pricing</h3>
                  <p className="text-sm opacity-90">No hidden fees. Travel, equipment, oils, and setup included.</p>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
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

            {/* Trust Row */}
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
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does massage cost in Kuta, Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional home massage in Kuta ranges from IDR 250,000 to IDR 1,550,000 depending on treatment type and duration. Traditional Balinese massage starts at IDR 350K (60 min), IDR 500K (90 min), and IDR 650K (120 min). Deep tissue costs IDR 400K/550K/700K. All prices include therapist travel, oils, equipment, and linens with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book same-day massage in Kuta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We accommodate same-day massage bookings throughout Kuta with typical response times of 20-30 minutes from first contact to therapist arrival. Contact us via WhatsApp (+62 811-2656-869) for fastest availability confirmation."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Kuta do you cover for home massage service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide mobile massage throughout Kuta Beach area (20-30 min), Legian (15-25 min), Tuban near airport (25-35 min), Seminyak border (30-40 min), and Kerobokan (25-35 min). Extended coverage includes Canggu, Sanur, Jimbaran, Nusa Dua, and Uluwatu."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book massage in Kuta via WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Message +62 811-2656-869 on WhatsApp with your location, preferred massage type, preferred time, and number of people. We respond within 5-10 minutes to confirm therapist availability, provide exact pricing, and arrange dispatch."
        }
      }
    ]
  };

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
      <script type="application/ld+json">
        {JSON.stringify(faqSchemaData)}
      </script>

      <Header />

      <main>
        {/* ABOVE-THE-FOLD SALES SECTION - 10% */}
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
            
            {/* 3 Bullet Benefits */}
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-6">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </Button>
              </a>
              <a href={`tel:${SITE_CONFIG.whatsapp}`}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {SITE_CONFIG.whatsapp}
                </Button>
              </a>
            </div>

            {/* Trust Row */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-professional-gold" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-professional-gold" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-professional-gold" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: What is "message kuta Bali" */}
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
                What people actually mean by <strong>message kuta Bali</strong> is <strong>in-villa massage</strong>, <strong>hotel massage</strong>, or <strong>outcall massage service</strong> in Kuta. This type of mobile wellness service brings certified massage therapists to your exact location throughout Kuta, Legian, Seminyak, Tuban, and surrounding areas, eliminating travel time and providing privacy, convenience, and comfort that traditional spas cannot match.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The Kuta area of Bali is one of the island's most popular tourist destinations, known for its beaches, surfing, nightlife, and proximity to Ngurah Rai International Airport. Visitors and expats seeking massage in Kuta prioritize convenience after long flights, surf sessions, or busy days exploring the island. In-villa massage service addresses this need by delivering professional therapy directly to your doorstep.
              </p>
              <p className="text-lg leading-relaxed">
                Home Massage Kuta specializes in this exact service: <strong>professional, certified massage therapists</strong> who travel to your location with all necessary equipment, premium oils, fresh linens, and expertise in traditional Balinese massage, deep tissue therapy, aromatherapy, hot stone treatments, and specialized wellness modalities. Whether you're staying in a luxury resort, budget guesthouse, private villa, or anywhere in between, we provide the same exceptional service quality with transparent, all-inclusive pricing and no hidden fees.
              </p>
        {/* SEO CORE SECTION 1: What is "message kuta Bali" */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
                What is "Message Kuta Bali" and What People Actually Mean
              </h2>
              <div className="prose prose-lg max-w-none text-spa-stone">
                <p className="text-lg leading-relaxed mb-4">
                  When searching for "message kuta Bali," most travelers are actually looking for <strong>massage services in Kuta, Bali</strong>. This common search variation reflects what thousands of visitors need: professional therapeutic massage delivered to their villa, hotel, or accommodation in the Kuta area.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  The service is also known as <strong>home massage in Kuta</strong>, <strong>in-villa massage</strong>, <strong>hotel massage service</strong>, or <strong>outcall massage Bali</strong>. Rather than traveling to a spa, the spa comes to you – bringing certified therapists, professional equipment, premium oils, and fresh linens directly to your location.
                </p>
                <p className="text-lg leading-relaxed">
                  This mobile massage service serves Kuta Beach, Legian, Tuban, Seminyak border areas, and 25+ additional locations across Bali. Whether you're staying in a luxury villa, mid-range hotel, budget guesthouse, or beachfront resort, professional massage therapy is available at your doorstep with typical response times of 20-30 minutes in central Kuta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Home / In-Villa Massage Coverage */}
        <section className="py-16 bg-spa-sand/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              Home & In-Villa Massage Service Throughout Kuta, Bali
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-spa-stone mb-10">
              <p className="text-lg leading-relaxed mb-4">
                Finding quality <strong>massage near me in Kuta</strong> has never been easier. Our mobile massage service covers all major areas within and around Kuta, ensuring fast response times regardless of where you're staying in Bali's most popular tourist region.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We provide <strong>in-villa massage in Kuta</strong> to all types of accommodations: five-star resorts, boutique hotels, budget guesthouses, hostels, Airbnb properties, private villas, and long-term rental apartments. Our therapists are experienced with entry procedures at major hotel chains and can navigate any property type efficiently.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're searching for <strong>"massage near me"</strong> from Kuta Beach, Legian's shopping streets, Seminyak's upscale restaurants, or Tuban near the airport, our certified therapists reach you quickly with everything needed for a professional spa-quality treatment in your own private space.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center text-spa-earth">
              Service Coverage Areas & Response Times
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {coverageAreas.map((area) => (
                <Card key={area.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          <Link to={`/areas/${area.slug}`} className="text-professional-navy hover:text-spa-leaf">
                            {area.name}
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          <MapPin className="w-3 h-3 inline mr-1" />
                          Response: {area.response}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto text-spa-stone">
              <p className="text-lg leading-relaxed">
                <strong>Travel fees are included</strong> in all pricing with no additional charges for massage service in Kuta, Legian, Seminyak, or Tuban. Extended areas like Canggu, Jimbaran, and Nusa Dua also include complimentary therapist travel. We maintain consistent pricing across all service areas, ensuring transparency and fairness regardless of your location in the greater Kuta region.
        {/* SEO CORE SECTION 2: Home/In-villa massage in Kuta */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
                Home / In-Villa Massage in Kuta, Bali – Local Coverage
              </h2>
              <div className="prose prose-lg max-w-none text-spa-stone mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  Our certified therapists cover all neighborhoods and accommodation types throughout Kuta and surrounding areas. Whether you're searching for <strong>"massage near me in Kuta"</strong> or need service at a specific location, we respond quickly to requests across the region.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-professional-green" />
                      Primary Coverage Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-spa-stone">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Kuta Beach Area:</strong> 20-30 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Legian:</strong> 15-25 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Tuban (Airport Area):</strong> 25-35 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Seminyak Border:</strong> 30-40 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Kuta Beachfront Properties:</strong> 20-30 minutes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-professional-gold" />
                      Extended Service Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-spa-stone">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Canggu:</strong> 30-45 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Jimbaran:</strong> 35-50 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Nusa Dua:</strong> 45-60 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Sanur:</strong> 40-60 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0" />
                        <span><strong>Uluwatu/Pecatu:</strong> 50-70 minutes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-spa-stone leading-relaxed">
                All timing includes therapist travel from our base in Kuta. For same-day bookings, contact us via WhatsApp for real-time availability confirmation. Advanced bookings (3-4 hours ahead or evening before) guarantee your preferred time slot, especially during peak tourist season (July-August, December-January).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              Massage Prices in Kuta, Bali
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-spa-stone mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Transparent, all-inclusive pricing with <strong>no hidden fees</strong>. Every price listed below includes professional therapist travel to your location, massage table and equipment setup, premium therapeutic oils, fresh linens, ambient music, and post-treatment cleanup. What you see is exactly what you pay.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-spa-leaf text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service Type</th>
                    <th className="px-6 py-4 text-center font-semibold">60 Minutes</th>
                    <th className="px-6 py-4 text-center font-semibold">90 Minutes</th>
                    <th className="px-6 py-4 text-center font-semibold">120 Minutes</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={item.service} className={index % 2 === 0 ? "bg-spa-sand/20" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-spa-earth">{item.service}</td>
                      <td className="px-6 py-4 text-center text-spa-stone">{item.duration60}</td>
                      <td className="px-6 py-4 text-center text-spa-stone">{item.duration90}</td>
                      <td className="px-6 py-4 text-center text-spa-stone">{item.duration120}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-spa-sand/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-spa-earth">What's Included in Every Price</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-spa-leaf flex-shrink-0 mt-0.5" />
                  <span className="text-spa-stone">Therapist travel to your location (all areas)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-spa-leaf flex-shrink-0 mt-0.5" />
                  <span className="text-spa-stone">Professional massage table & equipment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-spa-leaf flex-shrink-0 mt-0.5" />
                  <span className="text-spa-stone">Premium therapeutic oils & lotions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-spa-leaf flex-shrink-0 mt-0.5" />
                  <span className="text-spa-stone">Fresh linens, towels, & face cradle covers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-spa-leaf flex-shrink-0 mt-0.5" />
                  <span className="text-spa-stone">Setup & breakdown (10 min before/after)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-spa-leaf flex-shrink-0 mt-0.5" />
                  <span className="text-spa-stone">Ambient relaxation music</span>
                </div>
              </div>
              <p className="mt-4 text-spa-stone font-medium">
                <strong>No hidden fees.</strong> No additional charges for travel, equipment, oils, or service areas. Payment accepted in cash (IDR or USD) at the end of your session.
              </p>
        {/* SEO CORE SECTION 3: Transparent Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                Prices for Massage in Kuta – Transparent, All-Inclusive Pricing
              </h2>
              <div className="prose prose-lg max-w-none text-spa-stone mb-8 text-center">
                <p className="text-lg leading-relaxed">
                  All prices include therapist travel to your location, professional massage equipment, premium oils, and fresh linens. <strong>No hidden fees. No surprise charges. No travel fees.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-2 border-professional-green/20">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2 bg-professional-green text-white">Most Popular</Badge>
                    <CardTitle>Traditional Balinese</CardTitle>
                    <CardDescription>Relaxation & stress relief</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm">60 minutes</span>
                        <span className="font-bold text-lg">IDR 350K</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b bg-green-50">
                        <span className="text-sm font-semibold">90 minutes</span>
                        <span className="font-bold text-lg text-professional-green">IDR 500K</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm">120 minutes</span>
                        <span className="font-bold text-lg">IDR 650K</span>
                      </div>
                    </div>
                    <p className="text-sm text-spa-stone mb-4">Includes: massage oil, fresh linens, professional massage bed</p>
                    <Link to="/services/balinese-massage">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-2 border-professional-gold/20">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2 bg-professional-gold text-white">Therapeutic</Badge>
                    <CardTitle>Deep Tissue</CardTitle>
                    <CardDescription>Pain relief & muscle recovery</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm">60 minutes</span>
                        <span className="font-bold text-lg">IDR 400K</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b bg-amber-50">
                        <span className="text-sm font-semibold">90 minutes</span>
                        <span className="font-bold text-lg text-professional-gold">IDR 550K</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm">120 minutes</span>
                        <span className="font-bold text-lg">IDR 700K</span>
                      </div>
                    </div>
                    <p className="text-sm text-spa-stone mb-4">Includes: deep tissue techniques, pressure adjustments, linens</p>
                    <Link to="/services/deep-tissue-massage">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2 bg-blue-600 text-white">Couples</Badge>
                    <CardTitle>Four Hands Massage</CardTitle>
                    <CardDescription>Two therapists, double relaxation</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm">60 minutes</span>
                        <span className="font-bold text-lg">IDR 850K</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b bg-blue-50">
                        <span className="text-sm font-semibold">90 minutes</span>
                        <span className="font-bold text-lg text-blue-600">IDR 1,200K</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm">120 minutes</span>
                        <span className="font-bold text-lg">IDR 1,550K</span>
                      </div>
                    </div>
                    <p className="text-sm text-spa-stone mb-4">Includes: 2 therapists, synchronized massage, full setup</p>
                    <Link to="/services/four-hands-massage">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-spa-earth mb-4">Additional Services & Pricing</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span><strong>Aromatherapy Massage:</strong> 60/90/120 min</span>
                    <span className="font-semibold">IDR 380K/530K/680K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span><strong>Hot Stone Massage:</strong> 60/90/120 min</span>
                    <span className="font-semibold">IDR 450K/580K/730K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span><strong>Thai Massage:</strong> 60/90/120 min</span>
                    <span className="font-semibold">IDR 370K/520K/670K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span><strong>Lymphatic Drainage:</strong> 60/90/120 min</span>
                    <span className="font-semibold">IDR 420K/580K/730K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span><strong>Pregnancy Massage:</strong> 60/90/120 min</span>
                    <span className="font-semibold">IDR 380K/530K/680K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span><strong>Foot Reflexology:</strong> 60/90 min</span>
                    <span className="font-semibold">IDR 250K/330K</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-professional-gold p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-spa-earth mb-3">What Drives Price Differences?</h3>
                <ul className="space-y-2 text-spa-stone">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-professional-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Duration:</strong> Longer sessions provide deeper therapeutic benefits and more comprehensive coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-professional-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Technique complexity:</strong> Specialized techniques (hot stone, lymphatic) require advanced training and additional equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-professional-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Number of therapists:</strong> Four-hands and couples massage require coordinating two certified therapists simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-professional-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Premium additions:</strong> Hot stones, premium essential oils, and specialized equipment add material costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG PLUG MODULE - Knowledge Hub Showcase */}
        <BlogPlugModule />

        {/* Mid-Page CTA */}
        <section className="py-12 bg-spa-leaf text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Professional Massage in Kuta?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-95">
              Book your in-villa massage now. Same-day appointments available daily from 07:00 to 22:00.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-spa-leaf hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp: +62 811-2656-869
                </a>
              </Button>
        {/* MID-PAGE CTA */}
        <section className="py-12 bg-gradient-to-r from-professional-green to-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Massage in Kuta?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">Same-day availability throughout Kuta. Book now via WhatsApp for fastest response.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="default" className="bg-white text-professional-green hover:bg-gray-100 text-lg px-8">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Now via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Services Available */}
        <section className="py-16 bg-spa-sand/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              Massage Services Available in Kuta
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-spa-stone mb-10">
              <p className="text-lg leading-relaxed text-center">
                Our certified therapists are trained in a comprehensive range of massage modalities, from traditional Balinese techniques to specialized therapeutic treatments. Each service can be customized to your pressure preferences and specific wellness goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {servicesOffered.map((service) => (
                <Card key={service.slug} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-spa-earth">
                      <Link to={`/services/${service.slug}`} className="hover:text-spa-leaf">
                        {service.name}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-spa-stone/60">
                      Recommended: {service.recommendedDuration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone leading-relaxed">{service.benefit}</p>
                    <div className="mt-4">
                      <Link to={`/services/${service.slug}`} className="text-spa-leaf hover:text-spa-earth font-medium inline-flex items-center">
                        Learn more about {service.name}
                        <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-spa-stone mb-4">
                Not sure which massage type is right for you? Our therapists provide consultations before each session to recommend the best treatment based on your needs, preferences, and any specific concerns.
              </p>
              <Button asChild variant="outline" className="border-2 border-spa-leaf text-spa-leaf hover:bg-spa-leaf hover:text-white">
                <Link to="/services">View All Services</Link>
              </Button>
        {/* SEO CORE SECTION 4: Services Available */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                Services Available – Professional Massage Treatments
              </h2>
              <p className="text-lg text-spa-stone text-center mb-12 max-w-3xl mx-auto">
                All massage services are performed by certified therapists with professional training in traditional and modern therapeutic techniques. Each treatment is customizable to your specific needs and preferences.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      Traditional Balinese Massage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Combines gentle stretching, acupressure, reflexology, and aromatherapy oils. Perfect for stress relief, improved circulation, and jet lag recovery. Recommended duration: 90 minutes for optimal benefits.
                    </p>
                    <Link to="/services/balinese-massage" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-500" />
                      Deep Tissue Massage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Targets chronic muscle tension, knots, and pain with firm pressure and slow strokes. Ideal for athletes, post-surf recovery, back pain, and sports injuries. Recommended duration: 90-120 minutes for deep muscle work.
                    </p>
                    <Link to="/services/deep-tissue-massage" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      Aromatherapy Massage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Combines therapeutic massage with premium essential oils (lavender, eucalyptus, frangipani). Promotes deep relaxation, improved sleep, anxiety reduction, and emotional balance. Recommended: 90 minutes.
                    </p>
                    <Link to="/services/aromatherapy-massage" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-orange-500" />
                      Hot Stone Massage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Heated volcanic stones placed on key points while therapist uses warm stones for massage strokes. Deep muscle relaxation, pain relief, improved circulation, and detoxification. Recommended: 90-120 minutes.
                    </p>
                    <Link to="/services/hot-stone-massage" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      Four Hands Massage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Two therapists work simultaneously in synchronized rhythm. Double the relaxation in half the perceived time. Perfect for couples, special occasions, or those seeking the ultimate relaxation experience. Recommended: 90 minutes.
                    </p>
                    <Link to="/services/four-hands-massage" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      Pregnancy Massage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Safe prenatal massage for expectant mothers (all trimesters). Reduces back pain, leg swelling, and pregnancy anxiety. Side-lying positions with specialized cushioning. Certified prenatal therapists only. Recommended: 60-90 minutes.
                    </p>
                    <Link to="/services/pregnancy-massage" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-teal-500" />
                      Thai Massage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Ancient healing art combining acupressure, assisted yoga stretches, and energy line work. Increases flexibility, releases tension, boosts energy flow. Performed on floor mat in loose clothing. Recommended: 90-120 minutes.
                    </p>
                    <Link to="/services/thai-massage" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      Foot Reflexology
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Pressure point therapy on feet corresponding to organs and systems throughout the body. Promotes whole-body wellness, stress relief, improved circulation. Great standalone treatment or combination add-on. Recommended: 60 minutes.
                    </p>
                    <Link to="/services/foot-reflexology" className="text-professional-green hover:underline flex items-center gap-1">
                      Read full details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-spa-stone mb-4">View our complete service menu with detailed descriptions and benefits.</p>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: How Booking Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              How to Book Massage in Kuta, Bali
            </h2>
            <div className="prose prose-lg max-w-none text-spa-stone mb-8">
              <p className="text-lg leading-relaxed text-center mb-8">
                Booking your <strong>message in Kuta Bali</strong> takes less than 5 minutes. We've streamlined the process to make it as convenient as receiving the massage itself.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <Card className="border-l-4 border-l-spa-leaf">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-spa-leaf text-white flex items-center justify-center font-bold">1</div>
                    Contact Us via WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-spa-stone">
                  <p className="mb-3">
                    Send a message to <strong className="text-spa-earth">+62 811-2656-869</strong> on WhatsApp (fastest response) or call directly. WhatsApp provides the quickest confirmation, typically within 15-30 minutes.
                  </p>
                  <Button asChild size="sm" className="bg-spa-leaf hover:bg-spa-earth">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Open WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-spa-leaf">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-spa-leaf text-white flex items-center justify-center font-bold">2</div>
                    Provide Booking Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-spa-stone">
                  <p className="mb-2">Include the following information in your message:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Preferred massage type (e.g., Balinese, Deep Tissue, Aromatherapy)</li>
                    <li>Duration (60, 90, or 120 minutes)</li>
                    <li>Date and preferred time</li>
                    <li>Your location (hotel name and room number, or villa address)</li>
                    <li>Number of people (single or couples massage)</li>
                    <li>Therapist gender preference (if any)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-spa-leaf">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-spa-leaf text-white flex items-center justify-center font-bold">3</div>
                    Receive Confirmation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-spa-stone">
                  <p>
                    We'll confirm therapist availability and send booking confirmation with final pricing, therapist name, and estimated arrival time. For same-day bookings, confirmation typically arrives within 15-30 minutes. Advanced bookings receive confirmation within 1-2 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-spa-leaf">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-spa-leaf text-white flex items-center justify-center font-bold">4</div>
                    Therapist Arrival & Setup
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-spa-stone">
                  <p>
                    Your therapist arrives 10 minutes before your scheduled time with all equipment. They'll set up the massage table, prepare oils, arrange linens, and create a relaxing atmosphere with ambient music. Setup takes approximately 5-7 minutes, ensuring your treatment begins exactly on time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-spa-leaf">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-spa-leaf text-white flex items-center justify-center font-bold">5</div>
                    Enjoy Your Treatment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-spa-stone">
                  <p>
                    Relax and enjoy your professional massage in the privacy and comfort of your own space. Your therapist will check pressure preferences and comfort levels throughout the session. After your treatment, the therapist cleans all equipment and quietly departs, leaving no trace except your renewed sense of wellbeing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-spa-leaf">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-spa-leaf text-white flex items-center justify-center font-bold">6</div>
                    Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-spa-stone">
                  <p>
                    Payment is collected at the end of your session in cash (Indonesian Rupiah or USD accepted). We also accept bank transfer for advance bookings. Tips are appreciated but never required – they can be given directly to your therapist if you're satisfied with the service.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-spa-sand/30 p-6 rounded-lg text-center">
              <p className="text-lg text-spa-stone mb-4">
                <strong>Need to reschedule or cancel?</strong> Contact us via WhatsApp at least 2 hours before your appointment. Cancellations made with adequate notice incur no fees.
              </p>
        {/* SEO CORE SECTION 5: How Booking Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                How Booking Works – Simple 4-Step Process
              </h2>
              <p className="text-lg text-spa-stone text-center mb-12">
                From first contact to therapist arrival, the entire process typically takes 20-30 minutes for bookings in central Kuta. Here's exactly what happens:
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-professional-green">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-professional-green text-white flex items-center justify-center font-bold">1</div>
                      Contact Us via WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Send a message to <strong>+62 811-2656-869</strong> via WhatsApp. You'll receive a response within 5-10 minutes during operating hours (7 AM - 10 PM daily). If you prefer calling, the same number works for voice calls.
                    </p>
                    <p className="text-spa-stone">
                      <strong>What to include in your message:</strong> Your location (hotel/villa name and area), preferred massage type, preferred time, and number of people. Example: "Hi! I'm at Kuta Beach Hotel and would like a 90-minute Balinese massage for 2 people at 3 PM today."
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-professional-gold">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-professional-gold text-white flex items-center justify-center font-bold">2</div>
                      Confirm Details & Pricing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      We'll confirm therapist availability for your requested time and provide the exact total price (no hidden fees). We'll also ask about any specific areas of focus, pressure preferences, and whether you have any health conditions we should know about.
                    </p>
                    <p className="text-spa-stone">
                      For hotel guests: We may ask for your room number to coordinate entry. For villa guests: We'll request the villa address or location pin for navigation. For gated communities: We'll need gate/security contact information.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</div>
                      Therapist Dispatched & Travel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Once confirmed, your therapist departs immediately with all equipment: professional massage table, fresh linens, premium oils, and sanitized tools. You'll receive the therapist's name and estimated arrival time via WhatsApp.
                    </p>
                    <p className="text-spa-stone">
                      <strong>Travel times from our Kuta base:</strong> Central Kuta (20-30 min), Legian (15-25 min), Tuban (25-35 min), Seminyak border (30-40 min). For areas beyond Kuta, confirm timing when booking.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-emerald-600">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">4</div>
                      Setup, Service & Payment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-3">
                      Therapist arrives, sets up the massage table in your preferred location (bedroom, villa terrace, poolside), and begins your treatment at the scheduled time. Setup takes 5-10 minutes. Your massage runs for the full duration you booked.
                    </p>
                    <p className="text-spa-stone">
                      <strong>Payment:</strong> Collected after your massage. We accept cash (IDR or USD), bank transfer (Indonesian accounts), and most digital wallets. No advance payment required. Tipping is appreciated but not required (typical: IDR 50K-100K for excellent service).
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-spa-earth mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-professional-green" />
                  Same-Day vs. Advance Booking
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-spa-stone">
                  <div>
                    <h4 className="font-semibold mb-2">Same-Day (Most Common)</h4>
                    <p className="text-sm">Contact us 2-4 hours before desired time. High availability most days. Fastest via WhatsApp. Perfect for spontaneous relaxation or addressing unexpected muscle pain.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advance Booking (Recommended Peak Season)</h4>
                    <p className="text-sm">Book evening before or morning of for guaranteed time slot. Essential during July-August, December-January, and major holidays. Allows you to secure preferred therapist and prime time slots.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Why Choose This Service */}
        <section className="py-16 bg-spa-sand/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              Why Choose Home Massage Kuta?
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-spa-stone mb-10">
              <p className="text-lg leading-relaxed text-center">
                Kuta has dozens of massage providers, but we've built our reputation on verifiable quality, transparency, and genuine care for every client's experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Star className="w-8 h-8 text-spa-gold fill-spa-gold flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl text-spa-earth">4.9/5 Rating from 500+ Reviews</CardTitle>
                      <CardDescription className="text-spa-stone/70 mt-2">
                        Verified client reviews from guests across Kuta, Legian, and Seminyak consistently rate our therapists, professionalism, and service quality at 4.9 out of 5 stars. Real experiences from real people.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Shield className="w-8 h-8 text-spa-leaf flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl text-spa-earth">Certified Professional Therapists</CardTitle>
                      <CardDescription className="text-spa-stone/70 mt-2">
                        Every therapist holds professional certifications in massage therapy with specialized training in Balinese, Swedish, deep tissue, aromatherapy, and therapeutic modalities. All undergo background checks and health screenings.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-8 h-8 text-spa-leaf flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl text-spa-earth">No Hidden Fees Policy</CardTitle>
                      <CardDescription className="text-spa-stone/70 mt-2">
                        The price we quote is the price you pay. All listed rates include therapist travel, equipment, oils, linens, setup, and cleanup with zero additional charges regardless of your location in our service area.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Clock className="w-8 h-8 text-spa-leaf flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl text-spa-earth">Same-Day Availability</CardTitle>
                      <CardDescription className="text-spa-stone/70 mt-2">
                        Operating daily from 07:00 to 22:00 with typical response times of 20-45 minutes across Kuta. Book in the morning, relax by afternoon. Evening appointments available until 21:00 for 60-minute sessions.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-8 h-8 text-spa-leaf flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl text-spa-earth">Comprehensive Area Coverage</CardTitle>
                      <CardDescription className="text-spa-stone/70 mt-2">
                        Service extends throughout Kuta, Legian, Seminyak, Tuban, Canggu, Jimbaran, and Nusa Dua with consistent quality and pricing. We reach virtually all hotels, villas, and accommodations in these areas.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-8 h-8 text-spa-leaf flex-shrink-0" />
                    <div>
                      <CardTitle className="text-xl text-spa-earth">Responsive Communication</CardTitle>
                      <CardDescription className="text-spa-stone/70 mt-2">
                        WhatsApp booking provides fastest response with typical confirmation times of 15-30 minutes. Our team speaks fluent English and Indonesian, ensuring clear communication for all booking and treatment details.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-spa-earth">The Home Massage Kuta Difference</h3>
              <p className="text-lg text-spa-stone leading-relaxed mb-6">
                Unlike anonymous hotel spa services or unlicensed independent therapists, we provide <strong>verifiable quality with transparent pricing and professional accountability</strong>. Every therapist is employed directly by Home Massage Kuta, ensuring consistent training, equipment quality, and service standards. Our business operates legally with proper licensing and insurance, protecting both clients and therapists.
              </p>
              <p className="text-lg text-spa-stone leading-relaxed">
                We don't compromise on quality to offer the lowest prices – we offer <strong>fair pricing that reflects professional service</strong>. When you book with us, you're supporting licensed therapists who earn fair wages in safe working conditions, not unlicensed operators undercutting the market through exploitation.
              </p>
        {/* SEO CORE SECTION 6: Why Choose This Service */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                Why Choose Home Massage Kuta – Differentiation & Trust
              </h2>
              <p className="text-lg text-spa-stone text-center mb-12 max-w-3xl mx-auto">
                What sets our mobile massage service apart from walk-in spas, beach massage, and other outcall providers in Kuta.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-professional-green/10 flex items-center justify-center">
                      <Award className="w-8 h-8 text-professional-green" />
                    </div>
                    <CardTitle>Certified & Licensed Therapists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone">
                      All therapists hold professional certifications in their specialties, government-issued licenses, and minimum 3 years experience. Background checks completed. Regular skills training and technique updates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-professional-gold/10 flex items-center justify-center">
                      <Star className="w-8 h-8 text-professional-gold" />
                    </div>
                    <CardTitle>4.9/5 Rating from 500+ Clients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone">
                      Consistently excellent service verified through actual client reviews. Read testimonials on our website and Google. High repeat booking rate among returning Bali visitors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle>Transparent Pricing Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone">
                      Price quoted = price paid. No hidden travel fees, no equipment charges, no surprise additions. All pricing includes therapist travel, oils, linens, and full setup. No pressure for tips.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-spa-earth mb-6">What You Avoid by Choosing Us</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg text-spa-earth mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Avoid Hidden Fees
                    </h4>
                    <p className="text-spa-stone text-sm">
                      Unlike some mobile services that advertise low base rates then add travel fees (IDR 50-100K), therapist selection fees, or equipment charges, our pricing is all-inclusive from the start.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-spa-earth mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Avoid Inconsistent Quality
                    </h4>
                    <p className="text-spa-stone text-sm">
                      We employ therapists directly rather than using freelance networks. This ensures consistent training, technique standards, hygiene protocols, and professionalism across every appointment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-spa-earth mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Avoid Communication Issues
                    </h4>
                    <p className="text-spa-stone text-sm">
                      Responsive English-speaking booking staff available via WhatsApp and phone. Clear confirmation messages, arrival notifications, and post-service follow-up. No language barriers or missed messages.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-spa-earth mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Avoid Booking Delays
                    </h4>
                    <p className="text-spa-stone text-sm">
                      Fast response times (5-10 minutes via WhatsApp), real-time availability checking, and reliable therapist dispatch. Other services may take hours to confirm or frequently cancel last-minute.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO CORE SECTION 7: Common Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                Common Use-Cases – Problem → Solution → Outcome
              </h2>
              <p className="text-lg text-spa-stone text-center mb-12">
                Real scenarios from our 500+ satisfied clients showing how massage in Kuta addresses specific traveler needs.
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle>Scenario 1: Jet Lag & Travel Exhaustion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-2"><strong>Problem:</strong> Just arrived from 20+ hour flight, body clock completely disrupted, muscles stiff from airplane seats, exhausted but can't sleep properly.</p>
                    <p className="text-spa-stone mb-2"><strong>Solution:</strong> 90-minute traditional Balinese massage at your hotel within hours of arrival. Combines gentle rhythmic strokes, acupressure, and aromatherapy to reset your system.</p>
                    <p className="text-spa-stone"><strong>Outcome:</strong> Improved circulation helps combat jet lag, tense muscles release, body adjusts to new timezone faster, deep sleep follows massage. Most clients feel 60-70% recovered within 24 hours vs. 3-4 days without massage.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-amber-500">
                  <CardHeader>
                    <CardTitle>Scenario 2: Post-Surf Muscle Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-2"><strong>Problem:</strong> Been surfing Kuta Beach daily for a week. Shoulders burning, lower back tight, arms exhausted. Want to surf more but body needs recovery.</p>
                    <p className="text-spa-stone mb-2"><strong>Solution:</strong> 120-minute deep tissue massage focusing on shoulders, lats, lower back, and arms. Therapist uses sports massage techniques and trigger point therapy to target surf-specific muscle groups.</p>
                    <p className="text-spa-stone"><strong>Outcome:</strong> Muscle soreness reduced by 50-70%, improved range of motion in shoulders, able to surf again next day without pain. Many surf guests book 2-3 times per week during extended stays.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-pink-500">
                  <CardHeader>
                    <CardTitle>Scenario 3: Couples Romantic Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-2"><strong>Problem:</strong> On honeymoon in Bali, want couples spa experience but don't want to leave villa, coordinate schedules, or deal with spa crowds. Want private, romantic atmosphere.</p>
                    <p className="text-spa-stone mb-2"><strong>Solution:</strong> Four-hands couples massage (two therapists, two people) at villa poolside during sunset. Synchronized massage techniques, romantic setup, complete privacy.</p>
                    <p className="text-spa-stone"><strong>Outcome:</strong> Intimate shared experience creates lasting memory, both partners fully relaxed simultaneously, no travel stress, perfect Instagram moment. Frequently booked for anniversaries and special occasions.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-600">
                  <CardHeader>
                    <CardTitle>Scenario 4: Work-from-Bali Stress Relief</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-2"><strong>Problem:</strong> Digital nomad working from Kuta villa. Long laptop hours causing neck tension, shoulder knots, and lower back pain. Stress from deadlines building up.</p>
                    <p className="text-spa-stone mb-2"><strong>Solution:</strong> Weekly 90-minute massage alternating between deep tissue (for muscle work) and aromatherapy (for stress). Therapist focuses on desk-work problem areas: neck, traps, lower back, wrists.</p>
                    <p className="text-spa-stone"><strong>Outcome:</strong> Chronic pain managed preventively, better posture awareness, stress levels reduced, higher work productivity. Many digital nomad clients maintain weekly/bi-weekly schedules throughout their Bali stay.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle>Scenario 5: Pregnancy Comfort & Wellness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-2"><strong>Problem:</strong> Traveling while pregnant (second trimester), experiencing back pain, leg swelling, and pregnancy anxiety. Want safe massage but nervous about finding properly trained therapist.</p>
                    <p className="text-spa-stone mb-2"><strong>Solution:</strong> 60-minute pregnancy massage with certified prenatal therapist at your hotel. Side-lying position with specialized cushioning, gentle techniques safe for all trimesters.</p>
                    <p className="text-spa-stone"><strong>Outcome:</strong> Back pain relief, reduced leg swelling, stress and anxiety decrease, improved sleep quality. Safe, professional care provides peace of mind. Many expectant mothers book multiple sessions during Bali babymoon.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Common Use-Cases */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              Common Reasons for Massage in Kuta
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-spa-stone mb-10">
              <p className="text-lg leading-relaxed text-center">
                Our clients choose <strong>message kuta Bali</strong> for many different reasons. Here are five of the most common use-cases we encounter:
              </p>
            </div>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-spa-earth flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-spa-leaf text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone leading-relaxed">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-lg text-spa-stone mb-6">
                Whatever your reason for seeking massage in Kuta, our therapists have the training and experience to address your specific needs with professionalism and care.
              </p>
        {/* SEO CORE SECTION 8: FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                Frequently Asked Questions – Message Kuta Bali
              </h2>
              <p className="text-lg text-spa-stone text-center mb-12">
                Everything you need to know about booking massage service in Kuta, Bali.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="faq-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    How much does massage cost in Kuta, Bali?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Professional home massage in Kuta ranges from IDR 250,000 to IDR 1,550,000 depending on treatment type and duration. Traditional Balinese massage starts at IDR 350K (60 min), IDR 500K (90 min), and IDR 650K (120 min). Deep tissue costs IDR 400K/550K/700K. Premium treatments like four-hands massage cost IDR 850K-1,550K. All prices include therapist travel, oils, equipment, and linens with no hidden fees. Mobile massage typically costs 30-40% less than hotel spa pricing while delivering equivalent quality in the privacy of your accommodation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Can I book same-day massage in Kuta?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Yes. We accommodate same-day massage bookings throughout Kuta with typical response times of 20-30 minutes from first contact to therapist arrival. Contact us via WhatsApp (+62 811-2656-869) for fastest availability confirmation – we respond within 5-10 minutes during operating hours (7 AM - 10 PM daily). For guaranteed time slots during peak season (July-August, December-January), we recommend booking 3-4 hours in advance or the evening before. Most spontaneous bookings within 2-4 hours are successfully accommodated.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    What areas in Kuta do you cover for home massage service?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      We provide mobile massage throughout Kuta Beach area (20-30 min), Legian (15-25 min), Tuban near airport (25-35 min), Seminyak border (30-40 min), Kuta beachfront properties (20-30 min), and Kerobokan (25-35 min). Extended coverage includes Canggu (30-45 min), Sanur (40-60 min), Jimbaran (35-50 min), Nusa Dua (45-60 min), and Uluwatu (50-70 min). We serve all accommodation types from budget guesthouses to luxury villas. If your location isn't listed, contact us – we often accommodate special requests outside our primary service radius.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    How do I book massage in Kuta via WhatsApp?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Message +62 811-2656-869 on WhatsApp with: (1) Your location (hotel/villa name and area), (2) Preferred massage type (Balinese, deep tissue, etc.), (3) Preferred time, (4) Number of people. Example: "Hi! I'm at Hard Rock Hotel Kuta and would like 90-minute Balinese massage for 2 people at 5 PM today." We respond within 5-10 minutes to confirm therapist availability, provide exact pricing, and arrange dispatch. You'll receive therapist name and arrival notification. Payment is collected after your massage – cash, transfer, or digital wallet accepted.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    What's included in the massage service price?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      All quoted prices include: professional massage table transport and setup, fresh linens and towels, premium massage oils (coconut, essential oils), therapist travel to your location throughout Kuta area, full session duration as booked, and post-massage cleanup. No hidden travel fees, no equipment charges, no surprise additions. We bring everything needed for professional spa-quality treatment. The only additional cost might be discretionary tipping (typical IDR 50K-100K for excellent service, but never required or pressured). What you see is what you pay.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-6" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Are your massage therapists certified and licensed?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Yes. All therapists hold professional certifications in their massage specialties, Indonesian government-issued business licenses, and minimum 3 years hands-on experience. We conduct background checks, verify credentials, and provide ongoing training in new techniques and hygiene protocols. Pregnancy massage therapists have specialized prenatal certification. We employ therapists directly (not freelance networks) ensuring consistent quality, professionalism, and accountability. Therapists carry identification and service documentation at all times.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-7" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Do you provide massage to hotels in Kuta, or only villas?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      We deliver massage service to all accommodation types: hotels (budget to luxury), resorts, villas (private and shared), guesthouses, hostels, and apartments throughout Kuta and 27 additional Bali areas. Some larger hotel chains require advance notification for therapist entry – simply provide your hotel name when booking and we'll handle coordination. We've successfully served clients at Hard Rock Hotel, Discovery Kartika Plaza, Ramada Bintang, Sheraton Kuta, and hundreds of smaller properties. Whether you're in a IDR 200K/night guesthouse or IDR 5M/night villa, service quality remains identical.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-8" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    What's the best massage for jet lag recovery in Kuta?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Traditional Balinese massage (90-120 minutes) is most effective for jet lag. The combination of rhythmic strokes improves circulation (helping body clock adjustment), acupressure targets energy points, gentle stretching releases travel stiffness, and aromatherapy oils promote relaxation. Best timing: within 6-12 hours of Bali arrival, preferably late afternoon so improved sleep follows. Alternatively, lymphatic drainage massage (90 min) specifically addresses fluid retention, swelling, and sluggish system often caused by long flights. Both treatments significantly reduce jet lag recovery time from 3-4 days to 1-2 days based on client feedback.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-9" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Is tipping required for massage therapists in Kuta?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Tipping is appreciated but not required or expected. Our pricing already includes fair therapist wages for skilled professional work. If you'd like to tip for exceptional service, IDR 50,000-100,000 (approximately $3-7 USD) is standard in Bali for 60-90 minute sessions. Some guests tip more (IDR 150K-200K) for particularly skilled therapists, complex techniques, or special accommodations. Tips can be given in cash (IDR or USD) directly to your therapist at service end. We never pressure for tips or suggest amounts – it's entirely at your discretion based on satisfaction.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-10" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Can I request male or female massage therapist in Kuta?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Absolutely. We accommodate all gender preferences for therapists. Simply specify your preference when booking via WhatsApp ("I'd like a female therapist" or "male therapist please") and we'll match you appropriately. This is especially common for solo female travelers, couples with specific comfort levels, and guests with cultural or religious considerations. Both our male and female therapists are equally skilled, certified, and professional. Gender preference requests never affect pricing or availability – we maintain adequate staff of all genders to fulfill most preference requests even for same-day bookings.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-11" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    What should I prepare before the massage therapist arrives?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Minimal preparation needed. Choose a location for massage table setup (bedroom, living area, terrace, poolside – needs approximately 2m x 1m space). Ensure area has shade if outdoors. If you have mobility issues or prefer specific room, mention this when booking. We bring all equipment, linens, and oils. Shower before massage is recommended but not required. Wear comfortable loose clothing (we provide coverage during treatment). Turn off phone/devices for uninterrupted relaxation. Have payment ready (cash, transfer info, or digital wallet). That's it – we handle everything else from setup to cleanup.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-12" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    What's your cancellation and rescheduling policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Cancellations or reschedules made more than 2 hours before appointment time: no charge, fully flexible. We'll work with you to find a new time that fits your schedule. Cancellations with less than 2-hour notice: small IDR 50,000 ($3 USD) rescheduling fee applies to compensate therapist for travel time already invested. No-shows without notification: full session charge applies. Life happens – if you need to change plans, just contact us via WhatsApp as soon as possible and we'll accommodate. Weather delays, traffic, or late flight arrivals are never penalized.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-13" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Do you offer couples massage in Kuta for two people simultaneously?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Yes. Couples massage (two people, two therapists, simultaneous treatment) is extremely popular in Kuta for honeymoons, anniversaries, and romantic getaways. We dispatch two therapists with two massage tables for synchronized massage experience. Pricing: each person pays individual treatment rate (e.g., two 90-min Balinese = IDR 500K × 2 = IDR 1,000K total). Four-hands massage (single person, two therapists) is different premium service at IDR 850K-1,550K. Couples sessions typically run 90-120 minutes and can be set up poolside, bedroom, villa terrace, or anywhere with adequate space for two tables (approximately 4m x 2m area needed).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-14" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Is pregnancy massage safe in Kuta, and which trimester can I book?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Pregnancy massage is safe for all trimesters when performed by certified prenatal therapists. Our pregnancy-certified therapists use side-lying positions with specialized cushioning, avoid pressure points that stimulate contractions, and focus on safe areas (back, legs, feet, shoulders, neck). Gentle techniques reduce back pain, leg swelling, stress, and improve sleep quality. We ask about your trimester, any complications, and doctor restrictions during booking. First trimester: lighter pressure, shorter duration recommended. Second/third trimester: full therapeutic treatment safe. Always consult your doctor before booking if you have high-risk pregnancy or specific medical concerns.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-15" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-spa-earth hover:text-professional-green">
                    Can I book massage at my Kuta villa for a group or party?
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone">
                    <p className="leading-relaxed">
                      Yes. We regularly provide massage for group events, villa parties, wellness retreats, corporate groups, bachelorette parties, and family gatherings. We can dispatch 3-8 therapists simultaneously depending on your group size and villa space. Popular formats: sequential bookings (each person gets their turn throughout afternoon), simultaneous sessions (everyone massaged at same time with multiple therapists), or spa day packages (massage plus add-ons). Contact us via WhatsApp with group size, location, date, and preferred timing for customized group pricing and therapist coordination. Advance booking (48-72 hours) recommended for groups of 4+ people.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* SEO CORE SECTION 9: Service Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                Service Specifications – What You Need to Know
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-professional-green" />
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-2"><strong>Daily:</strong> 7:00 AM - 10:00 PM (last booking 9 PM)</p>
                    <p className="text-spa-stone text-sm">Open 7 days a week including holidays. Early morning sessions popular for jet lag. Evening slots (7-9 PM) fill quickly during peak season.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-professional-green" />
                      Areas Served
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone mb-2"><strong>Primary:</strong> Kuta, Legian, Tuban, Seminyak border</p>
                    <p className="text-spa-stone mb-2"><strong>Extended:</strong> Canggu, Sanur, Jimbaran, Nusa Dua, Uluwatu, +20 more</p>
                    <p className="text-spa-stone text-sm">View complete service area map with response times on our areas page.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-professional-green" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-spa-stone text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Professional massage table transport & setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Fresh linens, towels, and privacy draping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Premium massage oils (coconut, essential oils)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Therapist travel to all Kuta locations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Full session duration as booked</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Post-massage cleanup and equipment removal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-professional-green" />
                      Hygiene & Safety
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-spa-stone text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Fresh linens for every client (never reused)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Sanitized equipment between appointments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Therapist health screening and hygiene protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Allergen-free oil options available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-professional-green flex-shrink-0 mt-0.5" />
                        <span>Professional liability insurance coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-spa-earth mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  Payment Methods Accepted
                </h3>
                <div className="text-spa-stone space-y-2">
                  <p><strong>Cash:</strong> Indonesian Rupiah (IDR) or US Dollars (USD) – payment collected after massage</p>
                  <p><strong>Bank Transfer:</strong> Indonesian bank accounts (BCA, Mandiri, BNI) – details provided before service</p>
                  <p><strong>Digital Wallets:</strong> GoPay, OVO, Dana – QR code or transfer available</p>
                  <p className="text-sm italic">Note: No advance payment required. No credit card surcharges. Exchange rate for USD payments based on current Bank Indonesia rate.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-br from-spa-leaf to-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Message in Kuta, Bali Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Same-day appointments available. Professional certified therapists. Transparent all-inclusive pricing. Operating daily 07:00-22:00.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button asChild size="lg" className="text-lg px-10 py-7 bg-white text-spa-leaf hover:bg-white/90 shadow-2xl">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  WhatsApp: +62 811-2656-869
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-7 bg-transparent text-white border-2 border-white hover:bg-white/20">
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <p className="text-sm opacity-90">
              Available 7 days per week · All service areas in Kuta covered · 4.9/5 rating · 500+ reviews
            </p>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-16 bg-spa-sand/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-spa-earth">
              Frequently Asked Questions About Massage in Kuta, Bali
            </h2>
            <div className="prose prose-lg max-w-3xl mx-auto text-spa-stone mb-8">
              <p className="text-lg leading-relaxed text-center">
                Common questions about booking <strong>message kuta Bali</strong> service, pricing, therapist credentials, and what to expect during your in-villa massage treatment.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqSchemaData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-lg font-semibold text-spa-earth pr-4">
                      {faq.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-spa-stone leading-relaxed pb-5">
                    {faq.acceptedAnswer.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-spa-earth">Still Have Questions?</h3>
              <p className="text-spa-stone mb-4">
                Our team is available daily from 07:00 to 22:00 to answer any questions about massage services, pricing, booking, or therapist qualifications.
              </p>
              <Button asChild className="bg-spa-leaf hover:bg-spa-earth">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
        {/* SEO CORE SECTION 10: Internal Linking */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6 text-center">
                Related Pages – Explore More Services & Areas
              </h2>
              <p className="text-lg text-spa-stone text-center mb-12">
                Discover our full range of massage treatments and service coverage across Bali.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Massage Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/services/balinese-massage" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Traditional Balinese Massage in Kuta
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/deep-tissue-massage" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Deep Tissue Massage Kuta
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/aromatherapy-massage" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Aromatherapy Massage Bali
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/hot-stone-massage" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Hot Stone Massage Kuta
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/pregnancy-massage" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Pregnancy Massage in Bali
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="text-professional-green hover:underline flex items-center gap-1 font-semibold">
                          <ArrowRight className="w-3 h-3" />
                          View All Massage Types
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
                        <Link to="/areas/kuta" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Home Massage Kuta Area
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas/legian" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Massage Service Legian
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas/seminyak" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          In-Villa Massage Seminyak
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas/canggu" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Mobile Massage Canggu
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas/jimbaran" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Outcall Massage Jimbaran
                        </Link>
                      </li>
                      <li>
                        <Link to="/areas" className="text-professional-green hover:underline flex items-center gap-1 font-semibold">
                          <ArrowRight className="w-3 h-3" />
                          View All Service Areas
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Helpful Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/packages" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Massage Packages & Deals
                        </Link>
                      </li>
                      <li>
                        <Link to="/therapists" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Our Certified Therapists
                        </Link>
                      </li>
                      <li>
                        <Link to="/reviews" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Client Reviews & Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Complete FAQ Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="text-professional-green hover:underline flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          About Our Service
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="text-professional-green hover:underline flex items-center gap-1 font-semibold">
                          <ArrowRight className="w-3 h-3" />
                          Back to Homepage
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-spa-earth mb-3">Looking for Something Specific?</h3>
                <p className="text-spa-stone mb-4">
                  Can't find exactly what you're looking for? We customize treatments to individual needs and accommodate special requests whenever possible.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask Us on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-16 bg-gradient-to-br from-professional-green via-emerald-600 to-teal-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your Professional Massage in Kuta Today
              </h2>
              <p className="text-xl mb-3">
                Certified therapists · Same-day availability · 20-30 minute response in Kuta
              </p>
              <p className="text-lg mb-8 opacity-90">
                From IDR 250K · All prices include travel & equipment · No hidden fees · Open 7 AM - 10 PM daily
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="default" className="bg-white text-professional-green hover:bg-gray-100 text-lg px-10 py-6">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Book via WhatsApp Now
                  </Button>
                </a>
                <a href={`tel:${SITE_CONFIG.whatsapp}`}>
                  <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white/10">
                    <Phone className="mr-2 h-6 w-6" />
                    Call {SITE_CONFIG.whatsapp}
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>4.9/5 · 500+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Same-Day Booking Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Licensed & Insured</span>
                </div>
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

export default MessageKutaBali;
