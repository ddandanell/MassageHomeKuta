import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const featuredAreas = [
  {
    name: "Legian",
    path: "/areas/legian",
    responseTime: "15-25 min",
    description: "Beachfront hotels, nightlife stays, and easy same-day bookings just north of Kuta.",
  },
  {
    name: "Pererenan",
    path: "/areas/pererenan",
    responseTime: "35-50 min",
    description: "Quiet villa stays north of Canggu for guests who want massage without leaving home.",
  },
  {
    name: "Uluwatu",
    path: "/areas/uluwatu",
    responseTime: "50-70 min",
    description: "Clifftop villas, surf trips, and sunset recovery sessions across the Bukit coast.",
  },
  {
    name: "Ungasan",
    path: "/areas/ungasan",
    responseTime: "50-65 min",
    description: "Luxury villas and group stays with mobile spa service delivered to your accommodation.",
  },
];

const CrossLocationPromo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-professional-navy/5 via-white to-professional-gold/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-professional-gold/10 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-professional-gold" />
              <span className="text-sm font-medium text-professional-navy">Popular Booking Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-professional-navy mb-4">
              Also Staying Outside Central Kuta?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guests also book our in-villa massage service in nearby beach, villa, and Bukit areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="bg-white rounded-2xl shadow-floating border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-professional-navy mb-2">
                      <MapPin className="w-5 h-5 text-professional-gold" />
                      <h3 className="text-2xl font-serif font-bold">{area.name}</h3>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-professional-navy/5 px-3 py-1 text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-professional-gold" />
                      <span>{area.responseTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-professional-gold flex-shrink-0" />
                </div>

                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-professional-gold hover:bg-amber-600 text-white font-medium tracking-wide rounded-xl transition-all duration-300 group"
            >
              <Link to="/areas">
                View All Service Areas
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossLocationPromo;
