import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Sparkles, Clock, Star } from "lucide-react";
import EnhancedBookingDialog from "./EnhancedBookingDialog";
import { SITE_CONFIG } from "@/config/site";

const BookingCTA = () => {
  const whatsappMessage = "Hello Home Massage Kuta! I'm ready to book a massage service. Please help me with the booking process.";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-12 md:py-20 bg-gradient-professional relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-professional-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-professional-gold/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto text-primary-foreground">
          <div className="mb-6">
            <Sparkles className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-professional-gold animate-pulse" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready for Pure Relaxation?
            <span className="block text-xl sm:text-2xl md:text-3xl mt-2 text-professional-gold font-medium">
              Your Perfect Massage Awaits
            </span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Don't let stress or sore muscles stand in the way of your Bali experience. Join <strong>500+ satisfied clients</strong> 
            who trust us for the ultimate home massage experience. Professional, licensed, and ready to serve you today.
          </p>

          {/* Urgent messaging */}
          <div className="bg-professional-gold/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-professional-gold/30 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-professional-gold" />
              <span className="font-bold text-lg md:text-xl">Available Right Now!</span>
            </div>
            <p className="text-sm md:text-base opacity-90">
              Book in the next 10 minutes and we can be at your location within the hour
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <EnhancedBookingDialog
              trigger={
                <Button 
                  size="lg" 
                  className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Book Instantly - FREE Consultation
                  <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                </Button>
              }
              triggerClassName=""
            />
            <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white hover:bg-white hover:text-professional-navy font-semibold transition-all duration-300">
              <a href={`tel:${SITE_CONFIG.whatsapp}`}>
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call {SITE_CONFIG.whatsapp}
              </a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm md:text-base">
              <Star className="h-4 w-4 text-professional-gold fill-current" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm md:text-base">
              <MessageCircle className="h-4 w-4 text-professional-gold" />
              <span className="font-semibold">15 Min Response</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm md:text-base">
              <Clock className="h-4 w-4 text-professional-gold" />
              <span className="font-semibold">Same Day Service</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 max-w-3xl mx-auto">
            <p className="text-base md:text-lg opacity-95 font-medium mb-2">
              🎯 <strong>What You Get:</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base opacity-90">
              <div>✅ Professional massage table & fresh linens</div>
              <div>✅ Premium organic oils & aromatherapy</div>
              <div>✅ Licensed, experienced therapists</div>
              <div>✅ Relaxing music & complete setup</div>
            </div>
          </div>

          <p className="text-base md:text-lg opacity-90 mt-6 font-medium">
            Your relaxation journey starts with a single click. Book now! 🌺
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;