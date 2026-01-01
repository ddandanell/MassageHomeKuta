import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock, Star, Shield, Award, Mail } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "+62 811-2656-869";
  const whatsappMessage = "Hello Home Massage Kuta! I'm interested in booking a massage service. Could you please help me with availability and pricing?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-professional-navy text-white relative overflow-hidden pt-20 pb-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] bg-repeat opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-professional-green/20 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-professional-gold/20 rounded-full flex items-center justify-center border border-professional-gold/30">
                <span className="text-professional-gold font-serif font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold tracking-wide">Home Massage</h3>
                <p className="text-professional-gold text-xs tracking-widest uppercase">Kuta, Bali</p>
              </div>
            </div>
            <p className="text-professional-gray leading-relaxed mb-8 font-light">
              Bringing the sanctuary of a luxury spa directly to your private villa or hotel room.
              Experience professional healing without leaving your comfort zone.
            </p>
            <div className="flex gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-professional-green hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={`tel:${whatsappNumber}`} className="w-10 h-10 rounded-full bg-white/5 hover:bg-professional-gold hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:hello@homemassagekuta.com" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white">Discover</h4>
            <ul className="space-y-3 text-professional-gray">
              <li><a href="/services" className="hover:text-professional-gold transition-colors">Our Treatments</a></li>
              <li><a href="/areas" className="hover:text-professional-gold transition-colors">Service Areas</a></li>
              <li><a href="/therapists" className="hover:text-professional-gold transition-colors">Meet the Team</a></li>
              <li><a href="/about" className="hover:text-professional-gold transition-colors">About Us</a></li>
              <li><a href="/faq" className="hover:text-professional-gold transition-colors">FAQ</a></li>
              <li><a href="/recommended-services" className="hover:text-professional-gold transition-colors">Recommended Services</a></li>
            </ul>
          </div>

          {/* Other Locations */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white">Other Locations</h4>
            <ul className="space-y-3 text-professional-gray">
              <li>
                <a href="https://homemassageubud.com/" rel="dofollow" className="hover:text-professional-gold transition-colors flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-professional-gold flex-shrink-0" />
                  <div>
                    <span className="block text-white font-medium">Massage in Ubud</span>
                    <span className="text-sm">In-villa massage service</span>
                  </div>
                </a>
              </li>
            </ul>
            <p className="text-professional-gray text-xs mt-6 leading-relaxed">
              Experience the same premium service across multiple Bali locations
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white">Concierge</h4>
            <ul className="space-y-4 text-professional-gray">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-professional-gold mt-0.5" />
                <div>
                  <span className="block text-white text-sm font-medium">Daily Hours</span>
                  <span className="text-sm">07:00 – 22:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-professional-gold mt-0.5" />
                <div>
                  <span className="block text-white text-sm font-medium">WhatsApp Booking</span>
                  <a href={whatsappUrl} className="text-sm hover:text-white transition-colors">+62 811-2656-869</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-professional-gold mt-0.5" />
                <div>
                  <span className="block text-white text-sm font-medium">Service Area</span>
                  <span className="text-sm">Kuta, Legian, Seminyak</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust Badge */}
          <div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <h4 className="text-lg font-serif font-semibold mb-4 text-white">Peace of Mind</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-professional-gray">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-professional-gray">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Certified Therapists</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-professional-gray">
                  <Star className="w-4 h-4 text-emerald-400" />
                  <span>4.9/5 Average Rating</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-professional-gold hover:bg-amber-600 text-white border-0">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-professional-gray">
          <p>© 2025 Home Massage Kuta. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;