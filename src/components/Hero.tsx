import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Shield, Clock, Star, MapPin, CheckCircle } from "lucide-react";
import EnhancedBookingDialog from "./EnhancedBookingDialog";
import { SITE_CONFIG } from "@/config/site";

const Hero = () => {
  const whatsappMessage = "Hello Home Massage Kuta! I saw your website and I'm interested in booking a massage. Can you help me with availability and pricing?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-1.jpg"
          alt="Professional massage therapist providing relaxing treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white max-w-5xl">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-lg">
          Premium Home Massage
          <span className="block text-professional-gold mt-2 italic">in Kuta, Bali</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
          Experience the ultimate relaxation with professional spa treatments delivered directly to your villa or hotel.
          Licensed therapists, premium oils, and a sanctuary of calm.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm md:text-base tracking-wide">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 transition-colors">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
            <span className="font-medium">Same Day Booking</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 transition-colors">
            <Clock className="h-5 w-5 text-professional-gold" />
            <span className="font-medium">Arrives in 30-60 Mins</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 transition-colors">
            <Shield className="h-5 w-5 text-blue-300" />
            <span className="font-medium">Certified Therapists</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <EnhancedBookingDialog
            trigger={
              <Button
                size="lg"
                className="text-lg px-10 py-8 bg-professional-gold hover:bg-amber-600 text-white font-serif tracking-wide shadow-floating border-0 min-w-[280px] rounded-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Book Appointment
              </Button>
            }
            triggerClassName=""
          />

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-10 py-8 border border-white/40 text-white hover:bg-white/10 hover:text-white font-serif tracking-wide min-w-[280px] bg-transparent rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <a href={`tel:${SITE_CONFIG.whatsapp}`}>
              <Phone className="w-6 h-6 mr-3" />
              Call Us Directly
            </a>
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <p className="text-lg opacity-80 font-light tracking-wider">
            Trusted by <strong>500+ clients</strong> • Available Daily 07:00 - 22:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;