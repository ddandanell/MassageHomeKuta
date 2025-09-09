import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, MapPin, Users, Sparkles } from "lucide-react";
import professionalSetup from "@/assets/professional-setup.jpg";

const VillaHotelService = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-last lg:order-first">
            <div className="relative">
              <img
                src={professionalSetup}
                alt="A luxurious hotel room in Kuta set up for a professional in-villa massage service"
                className="w-full rounded-2xl shadow-floating"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
              Professional Villa & Hotel Massage Service in Kuta
            </h2>
            <div className="space-y-6 text-lg text-professional-gray leading-relaxed">
              <p>
                Kuta is one of Bali's most popular destinations, filled with private villas, boutique hotels, and luxury resorts. 
                But whether you're staying in a beachfront property, a hidden guesthouse, or a serviced apartment, one thing is 
                always true: nothing beats the comfort of a professional massage delivered directly to your villa or hotel in Kuta.
              </p>
              <p>
                Our service is built to fit your lifestyle. Instead of booking spa appointments, traveling through traffic, and 
                waiting in crowded lobbies, you can enjoy treatments on your terms. Our therapists arrive fully prepared with 
                fresh linens, professional massage oils, and all the equipment needed to turn your space into a private spa. 
                Within minutes, your living room, bedroom, or even poolside terrace becomes a sanctuary of relaxation.
              </p>
              <p>
                We serve every type of traveler in Kuta. Couples on honeymoon can book side-by-side sessions in their villa for 
                the ultimate romantic experience. Families with children appreciate the convenience of staying home while still 
                enjoying five-star quality treatments. Digital nomads working in hotels or co-living spaces love that they can 
                schedule a massage between meetings or after a long day on the laptop.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-professional-navy text-center mb-12">
            We Serve All Accommodation Types
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-subtle border-0 shadow-professional hover:shadow-floating transition-all duration-300 text-center">
              <CardHeader>
                <Building className="w-12 h-12 text-professional-teal mx-auto mb-4" />
                <CardTitle className="text-xl text-professional-navy">Luxury Villas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-professional-gray">Private pool villas, beachfront properties, and exclusive hideaways</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-subtle border-0 shadow-professional hover:shadow-floating transition-all duration-300 text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-professional-teal mx-auto mb-4" />
                <CardTitle className="text-xl text-professional-navy">Boutique Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-professional-gray">Intimate hotels, design properties, and themed accommodations</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-subtle border-0 shadow-professional hover:shadow-floating transition-all duration-300 text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-professional-teal mx-auto mb-4" />
                <CardTitle className="text-xl text-professional-navy">Family Resorts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-professional-gray">Large resorts, family-friendly hotels, and serviced apartments</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-subtle border-0 shadow-professional hover:shadow-floating transition-all duration-300 text-center">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-professional-teal mx-auto mb-4" />
                <CardTitle className="text-xl text-professional-navy">Guesthouses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-professional-gray">Cozy guesthouses, hostels, and budget-friendly accommodations</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-professional rounded-2xl p-8 lg:p-12 shadow-elevated text-primary-foreground">
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-3xl font-bold mb-6">Freedom & Convenience</h4>
              <p className="text-xl leading-relaxed opacity-90 mb-6">
                With our villa and hotel massage service in Kuta, you don't just save time, you gain freedom. 
                No taxis, no stress, no wasted hours. Just pure Balinese healing, delivered wherever you are.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">30-60</div>
                  <div className="opacity-80">Minutes to arrive</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">7AM-10PM</div>
                  <div className="opacity-80">Daily availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">15KM</div>
                  <div className="opacity-80">Service radius</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaHotelService;