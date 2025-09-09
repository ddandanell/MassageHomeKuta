import { MapPin, Plane, Car, Waves, Mountain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceAreas = [
  {
    area: "Legian",
    description: "Just north of Kuta, Legian blends nightlife with a slightly calmer atmosphere. We regularly serve guests in Legian who want a professional massage without having to step outside into busy streets.",
    icon: Waves,
    highlights: ["Nightlife district", "Beach access", "Tourist-friendly"]
  },
  {
    area: "Tuban",
    description: "Located just south of Kuta and close to the airport, Tuban is popular with families and short-term visitors. Our therapists often serve guests here who book sessions immediately after arrival to recover from long-haul flights.",
    icon: Plane,
    highlights: ["Close to airport", "Family-friendly", "Post-flight recovery"]
  },
  {
    area: "Seminyak Border",
    description: "On the northern edge of Kuta lies Seminyak, known for upscale restaurants and luxury villas. Many of our repeat clients here prefer privacy in their villas rather than visiting crowded spas.",
    icon: Mountain,
    highlights: ["Luxury villas", "Upscale dining", "Privacy focused"]
  },
  {
    area: "Jimbaran & Uluwatu (South Kuta)",
    description: "Couples and honeymooners in these areas often choose our service for private, romantic villa massages with ocean views.",
    icon: Car,
    highlights: ["Ocean views", "Romantic settings", "Honeymooner favorite"]
  }
];

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-professional-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
            Massage Service Areas Around Kuta, Bali
          </h2>
          <p className="text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            Kuta may be the center of Bali's tourism, but it is surrounded by several key neighborhoods that each attract 
            different types of travelers. Our home massage service is designed to cover not only central Kuta but also all 
            the surrounding areas, ensuring that no matter where you stay, relaxation is always just one call away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-professional-navy">{area.area}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {area.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="px-2 py-1 bg-professional-teal text-white rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-professional-gray leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-professional rounded-2xl p-8 lg:p-12 shadow-elevated text-white mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Complete Regional Coverage</h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              By covering Kuta, Legian, Tuban, Seminyak's border, and South Kuta, we ensure complete access across 
              Bali's most popular tourist hub. Wherever you are staying, our team arrives fully equipped with massage 
              tables, linens, and oils, transforming your space into a professional spa environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">15 KM</div>
                <div className="opacity-80">Service Radius</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">5+ Areas</div>
                <div className="opacity-80">Covered Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="opacity-80">Coverage Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 shadow-floating max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-professional-navy mb-4">Your Location, Our Service</h4>
            <p className="text-lg text-professional-gray leading-relaxed">
              Your location shouldn't limit your wellness. With our villa massage services around Kuta, the spa always 
              comes to you. From beachfront villas in Legian to luxury resorts in Jimbaran, we bring the same 
              professional standards and five-star experience directly to your door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;