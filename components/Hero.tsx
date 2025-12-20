import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Shield, Clock, Star, MapPin, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const Hero = () => {
  const whatsappMessage = "Hello Home Massage Kuta! I saw your website and I'm interested in booking a massage. Can you help me with availability and pricing?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/0718807a-c0dc-433f-962d-6ae7d5c1a4ae.png"
          alt="Professional massage therapist providing relaxing massage treatment in Kuta, Bali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white max-w-4xl">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Premium Massage Service
          <span className="block text-amber-400">in Kuta, Bali</span>
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Experience the ultimate holistik relaxation with professional spa treatments (terapi) and pijat delivered directly to your villa or hotel. Licensed terapis, premium oils, and a sanctuary of calm await you—helping you feel rileks and rejuvenated.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Same Day Available</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>30-60 Min Arrival</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Shield className="h-4 w-4 text-blue-400" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>4.9★ Rating</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-xl border-0 min-w-[280px]"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-3" />
              Book Your Massage Now
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold min-w-[280px] bg-transparent"
          >
            <a href={`tel:${SITE_CONFIG.whatsapp}`}>
              <Phone className="w-5 h-5 mr-3" />
              Call {SITE_CONFIG.whatsapp}
            </a>
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-8 text-center">
          <p className="text-lg opacity-90">
            Trusted by 500+ clients • Available Daily 07:00 - 22:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;