import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Menu, X, Star, Clock, MapPin, Waves } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappMessage = "Hello Home Massage Kuta! I'd like to book a massage service. Can you help me with availability?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const navigationItems = [
    { href: "/", label: "Home", description: "Back to homepage" },
    { href: "/services", label: "Services", description: "View all massage types" },
    { href: "/about", label: "About", description: "Our story & credentials" },
    { href: "/reviews", label: "Reviews", description: "What clients say" },
    { href: "/faq", label: "FAQ", description: "Common questions" },
    { href: "/areas/kuta", label: "Areas", description: "Service locations" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-professional-gold/20 shadow-sm">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Waves className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <div className="text-lg md:text-xl font-bold text-professional-navy leading-tight">
                Home Massage Kuta
              </div>
              <div className="hidden md:flex items-center gap-3 text-xs text-professional-gray">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-professional-gold fill-current" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-professional-gold" />
                  <span>30-60min Arrival</span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-sm font-medium text-professional-navy hover:text-professional-gold transition-colors relative group"
              >
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-professional-navy text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {item.description}
                </div>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Trust Badge */}
            <div className="hidden md:flex items-center mr-3">
              <Badge className="bg-green-500/10 text-green-700 border-green-500/20 text-xs px-2 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                Available Now
              </Badge>
            </div>

            {/* WhatsApp Button */}
            <Button asChild variant="outline" size="sm" className="hidden sm:flex text-xs px-3 py-2 border-green-500/30 text-green-700 hover:bg-green-50">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-3 h-3 mr-1" />
                WhatsApp
              </a>
            </Button>

            {/* Book Now Button */}
            <Button asChild size="sm" className="text-xs px-3 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-semibold border-0">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="w-3 h-3 mr-1" />
                Book Now
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden ml-2 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-professional-gold/20 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              {/* Quick Stats */}
              <div className="flex justify-center gap-4 mb-6 text-xs">
                <div className="flex items-center gap-1 text-professional-gray">
                  <Star className="h-3 w-3 text-professional-gold fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-1 text-professional-gray">
                  <Clock className="h-3 w-3 text-professional-gold" />
                  <span>30-60min</span>
                </div>
                <div className="flex items-center gap-1 text-professional-gray">
                  <MapPin className="h-3 w-3 text-professional-gold" />
                  <span>15km Radius</span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 mb-6">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-professional-gold/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div>
                      <div className="text-sm font-medium text-professional-navy">{item.label}</div>
                      <div className="text-xs text-professional-gray">{item.description}</div>
                    </div>
                    <div className="text-professional-gold">→</div>
                  </a>
                ))}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="space-y-3">
                <Button asChild className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-semibold py-3 border-0">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Massage Now - Instant Confirmation
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-green-500/30 text-green-700 hover:bg-green-50">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:${SITE_CONFIG.whatsapp}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call {SITE_CONFIG.whatsapp}
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 p-4 bg-professional-light/30 rounded-lg">
                <div className="text-center text-xs text-professional-gray">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Available Today</span>
                  </div>
                  <div>Licensed • Insured • 500+ Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;