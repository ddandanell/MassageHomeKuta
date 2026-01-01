import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

const CrossLocationPromo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-professional-navy/5 via-white to-professional-gold/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-professional-gold/10 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-professional-gold" />
              <span className="text-sm font-medium text-professional-navy">Serving Multiple Locations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-professional-navy mb-4">
              In-Villa Massage Across Bali
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the same luxurious massage service in beautiful Ubud
            </p>
          </div>

          {/* Promo Card */}
          <div className="bg-white rounded-2xl shadow-floating border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto">
                <img
                  src="/images/hero/hero-1.jpg"
                  alt="Luxury in-villa massage in Ubud Bali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-lg">Ubud, Bali</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold text-professional-navy mb-4">
                  Also Available in Ubud
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience the same premium in-villa massage service in beautiful Ubud. 
                  Perfect for a serene wellness retreat in central Bali. Our professional 
                  therapists bring relaxation directly to your villa, hotel, or resort.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-professional-gold"></div>
                    <span>Same certified therapists & premium service</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-professional-gold"></div>
                    <span>Authentic Balinese healing traditions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-professional-gold"></div>
                    <span>Available 7:00 AM - 10:00 PM daily</span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto bg-professional-gold hover:bg-amber-600 text-white font-medium tracking-wide rounded-xl transition-all duration-300 group"
                >
                  <a href="https://homemassageubud.com/" rel="dofollow">
                    Book In-Villa Massage in Ubud
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Both locations offer the same professional service with certified therapists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossLocationPromo;
