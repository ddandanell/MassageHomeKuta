import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import baliMassage from "@/assets/balinese-massage.jpg";
import deepTissue from "@/assets/deep-tissue.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";
import lymphatic from "@/assets/lymphatic.jpg";
import thaiMassage from "@/assets/thai-massage.jpg";
import fourHands from "@/assets/four-hands.jpg";
import hotStone from "@/assets/hot-stone.jpg";
import { Clock, Users, Star, Heart, Zap, Shield, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const services = [
  {
    title: "Traditional Balinese Massage",
    description: "Traditional full-body massage combining palm pressure, acupressure, and stretching with aromatic oils. Perfect for stress relief, muscle tension release, and overall relaksasi, especially beneficial for managing tekanan and nyeri otot.",
    detailedDescription: "Our signature Balinese massage uses traditional techniques passed down through generations. The therapist applies gentle stretching, acupressure, and reflexology (pijat refleksi) to improve blood flow and ease tension. Premium natural oils including frangipani, coconut, and essential oils nourish your skin while creating deep relaxation, improving kualitas tidur and manfaat kesehatan overall. Each session is tailored to your individual needs, ensuring a personalized experience that targets your specific areas of discomfort. The combination of skilled touch and soothing scents helps calm the mind, restore energy, and promote a profound sense of well-being. Whether you are seeking relief from daily stress or looking to enhance your overall kesehatan, Traditional Balinese Massage offers a holistic approach to rejuvenation and balance.",
    image: baliMassage,
    benefits: ["Stress Relief", "Muscle Relaxation", "Better Sleep", "Improved Circulation"],
    bestFor: ["First-time clients", "Stress relief", "General wellness", "Couples"],
    popular: true,
    pressure: "Light to Medium",
    prices: [
      { duration: "60 Min", price: "IDR 350K", savings: "" },
      { duration: "90 Min", price: "IDR 500K", savings: "Save 50K" },
      { duration: "120 Min", price: "IDR 650K", savings: "Most Popular" }
    ]
  },
  {
    title: "Deep Tissue Massage",
    description: "Intensive treatment targeting chronic muscle tension and deep knots using firm pressure and specialized techniques. Ideal for sports recovery, chronic pain, and work-related tension. This pijat technique is especially effective for releasing deep nyeri and for therapeutic recovery.",
    detailedDescription: "Our certified terapis use advanced deep tissue techniques to target chronic muscle tension, adhesions, and trigger points. This therapeutic massage (pijat) focuses on the deeper layers of muscle tissue using firm pressure and slow strokes. Ideal for athletes, office workers, and those with chronic pain conditions. Each session is carefully tailored to address your unique needs, ensuring that problem areas receive focused attention. Deep tissue massage not only helps alleviate persistent discomfort but also improves flexibility, range of motion, and overall muscle function. Regular treatments can accelerate recovery from injuries, reduce inflammation, and support long-term kesehatan otot. Whether you are seeking relief from intense physical activity or daily stress, deep tissue massage provides a powerful solution for lasting comfort and well-being.",
    image: deepTissue,
    benefits: ["Pain Relief", "Muscle Recovery", "Increased Flexibility", "Posture Improvement"],
    bestFor: ["Athletes", "Chronic pain", "Office workers", "Injury recovery"],
    popular: true,
    pressure: "Firm to Deep",
    prices: [
      { duration: "60 Min", price: "IDR 400K", savings: "" },
      { duration: "90 Min", price: "IDR 550K", savings: "Recommended" },
      { duration: "120 Min", price: "IDR 700K", savings: "Best Value" }
    ]
  },
  {
    title: "Aromatherapy Massage",
    description: "Relaxing full-body massage using premium essential oils like lavender, lemongrass, or eucalyptus. This treatment, also known as pijat aromaterapi, uses light to medium pressure to promote deep relaxation, improved quality of sleep, and enhanced kesehatan.",
    detailedDescription: "Experience the healing power of essential oils combined with therapeutic massage. Choose from our collection of premium oils: lavender for relaxation, eucalyptus for respiratory relief, lemongrass for energy, or our custom blend. The gentle massage (pijat) techniques enhance oil absorption while promoting both mental and physical well-being.",
    image: aromatherapy,
    benefits: ["Mental Clarity", "Emotional Balance", "Better Sleep", "Skin Nourishment"],
    bestFor: ["Anxiety relief", "Sleep issues", "Sensitive skin", "Pregnancy (2nd/3rd trimester)"],
    popular: false,
    pressure: "Light to Medium",
    prices: [
      { duration: "60 Min", price: "IDR 350K", savings: "" },
      { duration: "90 Min", price: "IDR 500K", savings: "Popular Choice" },
      { duration: "120 Min", price: "IDR 650K", savings: "Ultimate Relaxation" }
    ]
  },
  {
    title: "Lymphatic Drainage Massage",
    description: "Gentle rhythmic massage that stimulates lymphatic drainage to reduce swelling and boost immunity. Perfect for post-flight recovery and detox support.",
    detailedDescription: "This specialized therapeutic technique uses gentle, rhythmic movements to stimulate the lymphatic system. This detoxifying massage (pijat) helps reduce water retention, boost immune function, and eliminate toxins, contributing to overall kesehatan and recovery.",
    image: lymphatic,
    benefits: ["Reduced Swelling", "Detoxification", "Boosted Immunity", "Post-Surgery Recovery"],
    bestFor: ["Post-flight", "Water retention", "Immune support", "Recovery"],
    popular: false,
    pressure: "Very Light",
    prices: [
      { duration: "60 Min", price: "IDR 450K", savings: "" },
      { duration: "90 Min", price: "IDR 650K", savings: "Optimal Duration" },
      { duration: "120 Min", price: "IDR 850K", savings: "Intensive Detox" }
    ]
  },
  {
    title: "Thai Massage",
    description: "Energizing treatment combining yoga-like stretches with pressure along energy lines. Performed fully clothed, it improves flexibility and relieves stiffness. Great after hiking, surfing, or long sitting—plus this pijat is a fantastic way to renew your energy.",
    detailedDescription: "Ancient healing art combining acupressure, Indian Ayurvedic principles, and assisted yoga postures. The therapist uses hands, knees, legs, and feet to move you into a series of yoga-like stretches while applying deep muscle compression, joint mobilization, and acupressure. Performed on a mat in comfortable clothing, this approach ensures both physical relief and mental relaksasi.",
    image: thaiMassage,
    benefits: ["Increased Flexibility", "Energy Boost", "Joint Mobility", "Mental Clarity"],
    bestFor: ["Active people", "Flexibility issues", "Energy boost", "Spiritual wellness"],
    popular: false,
    pressure: "Medium to Firm",
    prices: [
      { duration: "60 Min", price: "IDR 450K", savings: "" },
      { duration: "90 Min", price: "IDR 650K", savings: "Traditional Length" },
      { duration: "120 Min", price: "IDR 850K", savings: "Full Experience" }
    ]
  },
  {
    title: "Four Hands Massage",
    description: "Luxury treatment with two synchronized therapists working together for complete body coverage. Creates deep relaxation and is perfect for special occasions or ultimate indulgence. This unique pijat experience, performed by experienced terapis, offers double the healing touch.",
    detailedDescription: "The ultimate luxury experience with two skilled terapis working in perfect harmony. This synchronized massage provides complete body coverage and deeper relaxation than traditional single-therapist treatments. The choreographed movements create a unique sensory experience that's both deeply relaxing and therapeutically beneficial. Each session is carefully designed to balance pressure and rhythm, ensuring that every part of your body receives equal attention and care. The dual touch helps to quiet the mind, melt away stress, and promote a profound sense of tranquility. Four Hands Massage is ideal for those seeking a truly immersive escape, making it a memorable choice for celebrations, romantic getaways, or anyone in need of total rejuvenation.",
    image: fourHands,
    benefits: ["Ultimate Relaxation", "Complete Coverage", "Unique Experience", "Deep Restoration"],
    bestFor: ["Special occasions", "Ultimate luxury", "Deep relaxation", "Unique experience"],
    popular: true,
    pressure: "Customizable",
    prices: [
      { duration: "60 Min", price: "IDR 600K", savings: "" },
      { duration: "90 Min", price: "IDR 850K", savings: "Perfect Duration" },
      { duration: "120 Min", price: "IDR 1,100K", savings: "VIP Experience" }
    ]
  },
  {
    title: "Hot Stone Massage",
    description: "Therapeutic massage using smooth heated volcanic stones placed on key points of the body. The warmth penetrates deep into muscles, releasing tension, alleviating nyeri, and promoting profound relaxation. Perfect for muscle stiffness and stress relief.",
    detailedDescription: "Combines traditional massage techniques with the healing power of heated volcanic basalt stones. The stones are placed on specific points along your spine, in your palms, and between your toes to improve energy flow. The heat helps muscles relax, allowing the therapist to work deeper while maintaining gentle pressure, ultimately enhancing relaksasi and overall kesehatan.",
    image: hotStone,
    benefits: ["Deep Muscle Relief", "Stress Reduction", "Better Circulation", "Pain Management"],
    bestFor: ["Muscle stiffness", "Chronic tension", "Cold weather", "Stress relief"],
    popular: false,
    pressure: "Medium",
    prices: [
      { duration: "60 Min", price: "IDR 500K", savings: "" },
      { duration: "90 Min", price: "IDR 700K", savings: "Recommended" },
      { duration: "120 Min", price: "IDR 900K", savings: "Full Stone Ritual" }
    ]
  }
];

const Services = () => {
  const whatsappMessage = "Hi! I'm interested in booking a massage service. Can you help me choose the right treatment?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <section id="services" className="py-12 md:py-20 bg-professional-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-professional-gold/10 text-professional-gold border-professional-gold/20">
            Professional Massage Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-professional-navy mb-4 md:mb-6">
            Our Complete Massage Menu & Pricing
          </h2>
          <p className="text-lg md:text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            All treatments are delivered directly to your villa, hotel, or private home in Kuta & surrounding areas. Our certified terapis bring everything needed for a professional body massage (pijat) and spa experience - massage table, oils, towels, and music.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-professional-navy">
              <Shield className="h-4 w-4 text-professional-gold" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-professional-navy">
              <Clock className="h-4 w-4 text-professional-gold" />
              Same Day Booking
            </div>
            <div className="flex items-center gap-2 text-professional-navy">
              <Users className="h-4 w-4 text-professional-gold" />
              500+ Happy Clients
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300 overflow-hidden">
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-2/5 lg:w-1/3">
                  <div className="aspect-[4/3] md:aspect-square relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - Professional massage service in Kuta, Bali`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-professional-gold text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      Pressure: {service.pressure}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 lg:w-2/3 p-6 md:p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <CardTitle className="text-xl md:text-2xl text-professional-navy">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-professional-gray text-base leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                    <p className="text-sm text-professional-gray leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-professional-navy mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-professional-gold" />
                        Key Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-professional-gold/10 text-professional-navy">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-professional-navy mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-professional-gold" />
                        Perfect For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.bestFor.map((item, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-professional-gold/30 text-professional-gray">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-professional-navy mb-3">Duration & Pricing</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {service.prices.map((price, priceIndex) => (
                          <div key={priceIndex} className="relative text-center p-4 bg-white rounded-lg border-2 border-professional-light hover:border-professional-gold/30 transition-colors">
                            <div className="font-semibold text-professional-navy text-sm mb-1">{price.duration}</div>
                            <div className="text-professional-gold font-bold text-lg mb-1">{price.price}</div>
                            {price.savings && (
                              <div className="text-xs text-professional-gold font-medium bg-professional-gold/10 px-2 py-1 rounded">
                                {price.savings}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking Button */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 bg-gradient-to-r from-professional-navy to-professional-gold hover:from-professional-gold hover:to-professional-navy text-white font-semibold py-3 transition-all duration-300">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <Zap className="h-4 w-4 mr-2" />
                          Book {service.title}
                        </a>
                      </Button>
                        triggerClassName="flex-1"
                      />
                      <Button variant="outline" className="sm:w-auto border-professional-gold/30 text-professional-navy hover:bg-professional-gold/10">
                        <Clock className="h-4 w-4 mr-2" />
                        Quick Info
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <Card className="bg-gradient-to-r from-professional-navy to-professional-gold text-white p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Can't Decide Which Massage to Choose?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Our experienced terapis can recommend the perfect treatment based on your needs, preferences, and any health conditions. Get personalized advice via WhatsApp before booking. We take the time to understand your goals—whether you seek relaxation, pain relief, or a specific therapeutic benefit—so you can feel confident in your choice. Let us guide you to the massage experience that will deliver the best results for your body and mind.
            </p>
            <Button asChild size="lg" className="bg-white text-professional-navy hover:bg-professional-light font-semibold px-8 py-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Get Personal Recommendation
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;