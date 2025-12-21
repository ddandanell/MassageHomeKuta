import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Hello! I'd like to book a massage service.")}`;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
    }`}>
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full h-16 w-16 md:h-auto md:w-auto md:rounded-lg md:px-6 md:py-3 group"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-6 w-6 md:mr-2 group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline-block font-semibold">Book Now</span>
          <Sparkles className="hidden md:inline-block ml-2 h-4 w-4 animate-pulse" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsAppButton;