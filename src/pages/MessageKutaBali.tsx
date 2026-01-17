import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Clock, Star, MapPin, CheckCircle2, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const MessageKutaBali = () => {
  const whatsappMessage = "Hi! I'm interested in booking a message in Kuta, Bali. Can you help me with availability?";
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
            </div>
          </div>
        </section>

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
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default MessageKutaBali;
