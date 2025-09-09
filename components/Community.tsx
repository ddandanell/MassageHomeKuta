import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Globe, Clock } from "lucide-react";
import happyClients from "@/assets/happy-clients.jpg";

const Community = () => {
  return (
    <section className="py-20 bg-professional-light/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
              Our Community
            </h2>
            <h3 className="text-2xl text-professional-teal mb-6">
              Trusted by Tourists & Expats for Home Massage in Kuta
            </h3>
            <div className="space-y-6 text-lg text-professional-gray leading-relaxed">
              <p>
                Kuta is one of the busiest and most diverse parts of Bali. Every day it welcomes surfers chasing 
                the waves, tourists seeking sun and nightlife, families enjoying beach holidays, and expats building 
                a lifestyle in paradise. What unites them all is the need for balance — and that's where our home 
                massage service in Kuta has become the trusted choice.
              </p>
              <p>
                For short-term visitors, convenience is everything. After long flights, nights out, or hours walking 
                the beachside markets, nobody wants to fight through traffic just to reach a spa. That's why our 
                service is so popular among tourists. We bring the treatment to them — in their villa, hotel, or 
                guesthouse — making it easy to enjoy a professional massage without leaving the comfort of their accommodation.
              </p>
              <p>
                For expats, trust and consistency matter most. Many live and work in Kuta year-round, often juggling 
                busy schedules, long hours on laptops, or running local businesses. Our therapists provide regular 
                sessions, building relationships based on reliability and professionalism. Knowing that the same high 
                standards are delivered every time is what makes expats return again and again.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-gradient-subtle border-0 shadow-professional text-center p-6">
                <Users className="w-8 h-8 text-professional-teal mx-auto mb-3" />
                <div className="text-2xl font-bold text-professional-navy">2,500+</div>
                <div className="text-professional-gray">Regular Clients</div>
              </Card>
              <Card className="bg-gradient-subtle border-0 shadow-professional text-center p-6">
                <Globe className="w-8 h-8 text-professional-teal mx-auto mb-3" />
                <div className="text-2xl font-bold text-professional-navy">45+</div>
                <div className="text-professional-gray">Countries Served</div>
              </Card>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="relative">
              <img
                src={happyClients}
                alt="A diverse and happy group of tourists and expats relaxing in Bali, representing our trusted clients in Kuta"
                className="w-full rounded-2xl shadow-floating"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-professional rounded-2xl p-8 shadow-elevated text-primary-foreground text-center">
            <h4 className="text-2xl font-bold mb-4">Our Promise</h4>
            <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
              Whether you're here for one week or one year, our promise is the same: professional, safe, and authentic 
              Balinese massage delivered directly to your home in Kuta. That's why tourists return, and expats rely on us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <Shield className="w-12 h-12 text-professional-teal mx-auto mb-4" />
            <h4 className="font-bold text-professional-navy mb-2">Safety First</h4>
            <p className="text-professional-gray text-sm">Licensed professionals with verified backgrounds</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-professional-teal mx-auto mb-4" />
            <h4 className="font-bold text-professional-navy mb-2">Always On Time</h4>
            <p className="text-professional-gray text-sm">Punctual service with real-time booking confirmation</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-professional-teal mx-auto mb-4" />
            <h4 className="font-bold text-professional-navy mb-2">Community Trusted</h4>
            <p className="text-professional-gray text-sm">Recommended by locals and travel communities</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-professional-teal mx-auto mb-4" />
            <h4 className="font-bold text-professional-navy mb-2">International Standards</h4>
            <p className="text-professional-gray text-sm">Service quality that meets global expectations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;