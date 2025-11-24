import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock, Star, Shield, Award, Mail } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "+62 811-2656-869";
  const whatsappMessage = "Hello Home Massage Kuta! I'm interested in booking a massage service. Could you please help me with availability and pricing?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gradient-professional text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-accent"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-professional-gold rounded-xl flex items-center justify-center">
                <span className="text-professional-navy font-bold text-lg">HM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Home Massage Kuta</h3>
                <p className="text-professional-gold text-sm">Professional In-Villa Spa Service</p>
              </div>
            </div>
            <p className="text-lg opacity-90 leading-relaxed mb-6 max-w-md">
              Kuta's premier home massage service, bringing professional Balinese healing directly to your villa or hotel. 
              Safe, certified, and trusted by 2,500+ clients from 45+ countries.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Star className="w-6 h-6 text-professional-gold mx-auto mb-1" />
                <div className="text-xl font-bold">4.9</div>
                <div className="text-xs opacity-80">Rating</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Shield className="w-6 h-6 text-professional-gold mx-auto mb-1" />
                <div className="text-xl font-bold">100%</div>
                <div className="text-xs opacity-80">Safe</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Award className="w-6 h-6 text-professional-gold mx-auto mb-1" />
                <div className="text-xl font-bold">500+</div>
                <div className="text-xs opacity-80">Monthly</div>
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild
                variant="booking" 
                size="lg" 
                className="flex-1 text-base font-semibold"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="flex-1 border-2 border-white text-black hover:bg-white hover:text-professional-navy"
              >
                <a href={`tel:${whatsappNumber}`}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact & Hours</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-professional-gold hover:text-white transition-colors">
                    {whatsappNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href={`tel:${whatsappNumber}`} className="text-professional-gold hover:text-white transition-colors">
                    {whatsappNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">Daily Hours</div>
                  <div className="opacity-90">7:00 AM – 10:00 PM</div>
                  <div className="text-xs opacity-70">7 Days a Week</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">Service Areas</div>
                  <div className="opacity-90 text-sm">Kuta • Legian • Tuban</div>
                  <div className="opacity-90 text-sm">Seminyak • Jimbaran</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
            <div className="space-y-3">
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-left p-0 h-auto hover:bg-white/10 hover:text-professional-gold text-white"
              >
                <a href="/services">View All Services</a>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-left p-0 h-auto hover:bg-white/10 hover:text-professional-gold text-white"
              >
                <a href="/areas">Service Areas</a>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-left p-0 h-auto hover:bg-white/10 hover:text-professional-gold text-white"
              >
                <a href="/packages">Special Packages</a>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-left p-0 h-auto hover:bg-white/10 hover:text-professional-gold text-white"
              >
                <a href="/#booking">Book Now</a>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-left p-0 h-auto hover:bg-white/10 hover:text-professional-gold text-white"
              >
                <a href="/therapists">Our Therapists</a>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-left p-0 h-auto hover:bg-white/10 hover:text-professional-gold text-white"
              >
                <a href="/faq">FAQ</a>
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-sm font-semibold mb-2">Need Help Now?</div>
              <Button 
                asChild
                variant="booking" 
                size="sm" 
                className="w-full"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Instant Response
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Clock className="w-8 h-8 text-professional-gold mx-auto mb-2" />
              <div className="font-semibold">30-60 Min Response</div>
              <div className="text-sm opacity-80">We reply fast</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-professional-gold mx-auto mb-2" />
              <div className="font-semibold">Licensed & Insured</div>
              <div className="text-sm opacity-80">100% safe service</div>
            </div>
            <div>
              <Award className="w-8 h-8 text-professional-gold mx-auto mb-2" />
              <div className="font-semibold">Certified Therapists</div>
              <div className="text-sm opacity-80">International standards</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-professional-gold mx-auto mb-2" />
              <div className="font-semibold">Money Back Guarantee</div>
              <div className="text-sm opacity-80">100% satisfaction</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="mb-6">
            <h5 className="text-lg font-semibold mb-3">Ready to Relax?</h5>
            <p className="opacity-90 mb-4">We can be at your villa in 30-60 minutes!</p>
            <Button 
              asChild
              variant="booking" 
              size="lg" 
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Message Us on WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="text-sm opacity-75 space-y-2">
            <p>© 2025 Home Massage Kuta. All rights reserved.</p>
            <p>Professional massage service • Licensed therapists • Serving Kuta, Bali since 2020</p>
            <p className="text-xs">
              Main Office: Jl. Raya Kuta No. 123, Kuta, Bali 80361 (No walk-in service - Home service only)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;