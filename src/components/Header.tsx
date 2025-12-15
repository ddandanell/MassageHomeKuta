import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Menu, X, Star, Clock, MapPin, Waves, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";
import { LanguageSwitcher } from "@/i18n";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappMessage = "Hello Home Massage Kuta! I'd like to book a massage service. Can you help me with availability?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const navigationItems = [
    { href: "/", label: "Home", description: "Back to homepage" },
    { href: "/services", label: "Services", description: "View all massage types" },
    { href: "/areas", label: "Service Areas", description: "Coverage locations" },
    { href: "/about", label: "About", description: "Our story & credentials" },
    { href: "/reviews", label: "Reviews", description: "What clients say" },
    { href: "/faq", label: "FAQ", description: "Common questions" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-professional-gold/20 shadow-sm">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-professional-green/10 rounded-full flex items-center justify-center border border-professional-green/20 group-hover:bg-professional-green/20 transition-colors">
              <Waves className="text-professional-green w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <div className="text-xl md:text-2xl font-serif font-bold text-professional-navy leading-none tracking-tight">
                Home Massage
              </div>
              <div className="text-xs text-professional-gold font-medium tracking-widest uppercase mt-1">
                Kuta, Bali
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-professional-navy/80 hover:text-professional-green transition-colors font-sans tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center">
              <LanguageSwitcher />
            </div>

            {/* WhatsApp Icon Only for Desktop to save space/reduce noise */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Book Now Button - Elegant */}
            <Button asChild size="sm" className="hidden md:flex text-sm px-6 py-5 bg-professional-navy hover:bg-professional-navy/90 text-white font-medium rounded-full shadow-soft transition-all hover:shadow-lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden ml-1 p-2 text-professional-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

              {/* Mobile Language Switcher */}
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center gap-2 text-sm text-professional-gray">
                  <Globe className="w-4 h-4" />
                  <span>Language:</span>
                </div>
                <div className="ml-2">
                  <LanguageSwitcher />
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