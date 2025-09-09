import { Clock, Sun, Sunset, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FlexibleScheduling = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
            Flexible Massage Scheduling: Available 7 AM – 10 PM in Kuta
          </h2>
          <p className="text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            One of the biggest advantages of booking a home massage in Kuta is flexibility. Every traveler's schedule 
            is different. Some want to start the day with fresh energy, others need to recover after a long surf session, 
            and many prefer to end their evening with deep relaxation. That's why we're available from 7 AM until 10 PM, 
            seven days a week — to fit into your lifestyle, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300 text-center">
            <CardContent className="p-8">
              <Sun className="w-12 h-12 text-professional-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-professional-navy mb-4">Morning Energy (7 AM - 11 AM)</h3>
              <p className="text-professional-gray leading-relaxed">
                For early risers, a morning massage is the perfect way to start the day. Imagine waking up in your villa, 
                opening the doors to the garden, and enjoying a Balinese massage as the sun rises. You feel lighter, 
                energized, and ready to explore Kuta Beach, shop in Legian, or take a day trip around Bali.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300 text-center">
            <CardContent className="p-8">
              <Sunset className="w-12 h-12 text-professional-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-professional-navy mb-4">Midday Recovery (12 PM - 6 PM)</h3>
              <p className="text-professional-gray leading-relaxed">
                For surfers, our midday sessions are ideal. After hours in the waves, muscles often feel tight and sore. 
                A deep tissue treatment delivered right in your hotel or villa restores strength and flexibility so you 
                can get back in the ocean the next day without pain.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300 text-center">
            <CardContent className="p-8">
              <Moon className="w-12 h-12 text-professional-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-professional-navy mb-4">Evening Relaxation (7 PM - 10 PM)</h3>
              <p className="text-professional-gray leading-relaxed">
                And for night owls, evening is the magic time. Kuta's nightlife is famous, but not everyone wants to 
                end their evening at a bar. Booking a massage at 9 PM lets you relax fully, unwind from the day, and 
                prepare for restful sleep.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-professional rounded-2xl p-8 lg:p-12 shadow-elevated text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Complete Availability</h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Our 7 AM – 10 PM availability in Kuta gives you freedom. Morning, afternoon, or night — wellness is 
              always within reach, right in the comfort of your villa or hotel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">7 AM</div>
                <div className="opacity-80">Early Start</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">365</div>
                <div className="opacity-80">Days a Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="opacity-80">Hours Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10 PM</div>
                <div className="opacity-80">Late Evening</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-professional-white rounded-xl shadow-professional">
            <div className="text-2xl font-bold text-professional-navy mb-2">30-60 min</div>
            <div className="text-professional-gray text-sm">Response time</div>
          </div>
          <div className="text-center p-6 bg-professional-white rounded-xl shadow-professional">
            <div className="text-2xl font-bold text-professional-navy mb-2">Same day</div>
            <div className="text-professional-gray text-sm">Booking available</div>
          </div>
          <div className="text-center p-6 bg-professional-white rounded-xl shadow-professional">
            <div className="text-2xl font-bold text-professional-navy mb-2">No travel</div>
            <div className="text-professional-gray text-sm">We come to you</div>
          </div>
          <div className="text-center p-6 bg-professional-white rounded-xl shadow-professional">
            <div className="text-2xl font-bold text-professional-navy mb-2">Total freedom</div>
            <div className="text-professional-gray text-sm">Your schedule</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibleScheduling;