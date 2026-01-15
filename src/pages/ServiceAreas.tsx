import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  // Primary Service Areas
  {
    name: "Kuta",
    slug: "kuta",
    responseTime: "20-30 minutes",
    description: "Central Kuta area including Kuta Beach, main tourist attractions, and beachfront hotels.",
    priority: "high",
    popular: true
  },
  {
    name: "Legian",
    slug: "legian",
    responseTime: "15-25 minutes",
    description: "Popular area with many villas, hotels, and Double Six Beach access.",
    priority: "high",
    popular: true
  },
  {
    name: "Seminyak",
    slug: "seminyak",
    responseTime: "20-35 minutes",
    description: "Southern Seminyak near Legian border, upscale villas and boutique hotels.",
    priority: "high",
    popular: true
  },
  {
    name: "Tuban",
    slug: "tuban",
    responseTime: "25-35 minutes",
    description: "Near Ngurah Rai Airport, convenient for travelers and transit stays.",
    priority: "high",
    popular: false
  },
  {
    name: "Kuta Beachfront",
    slug: "kuta-beachfront",
    responseTime: "20-30 minutes",
    description: "Beachfront properties along Kuta Beach with direct ocean access.",
    priority: "medium",
    popular: true
  },
  {
    name: "Kuta Central",
    slug: "kuta-central",
    responseTime: "20-30 minutes",
    description: "Heart of Kuta with shopping centers, restaurants, and nightlife.",
    priority: "medium",
    popular: false
  },

  // Canggu Area
  {
    name: "Canggu",
    slug: "canggu",
    responseTime: "30-45 minutes",
    description: "Trendy beach town with surf spots, cafes, and digital nomad community.",
    priority: "medium",
    popular: true
  },
  {
    name: "Batu Bolong",
    slug: "batu-bolong",
    responseTime: "30-45 minutes",
    description: "Central Canggu near Batu Bolong Beach and main dining area.",
    priority: "medium",
    popular: false
  },
  {
    name: "Berawa",
    slug: "berawa",
    responseTime: "30-45 minutes",
    description: "Peaceful area north of Canggu with rice fields and villas.",
    priority: "low",
    popular: false
  },
  {
    name: "Pererenan",
    slug: "pererenan",
    responseTime: "35-50 minutes",
    description: "Quieter northern Canggu area with traditional Balinese village charm.",
    priority: "low",
    popular: false
  },
  {
    name: "Echo Beach",
    slug: "echo-beach",
    responseTime: "30-45 minutes",
    description: "Popular surf spot with beach clubs and sunset views.",
    priority: "medium",
    popular: false
  },

  // Seminyak Extended
  {
    name: "Kerobokan",
    slug: "kerobokan",
    responseTime: "25-35 minutes",
    description: "Residential area between Seminyak and Canggu with luxury villas.",
    priority: "medium",
    popular: false
  },
  {
    name: "Petitenget",
    slug: "petitenget",
    responseTime: "25-35 minutes",
    description: "Upscale northern Seminyak area with beach access and fine dining.",
    priority: "medium",
    popular: false
  },

  // Other Popular Areas
  {
    name: "Sanur",
    slug: "sanur",
    responseTime: "40-60 minutes",
    description: "Relaxed beachside town on the east coast, family-friendly atmosphere.",
    priority: "medium",
    popular: true
  },
  {
    name: "Ubud",
    slug: "ubud",
    responseTime: "60-90 minutes",
    description: "Cultural heart of Bali with rice terraces, art galleries, and yoga retreats.",
    priority: "medium",
    popular: true
  },
  {
    name: "Nusa Dua",
    slug: "nusa-dua",
    responseTime: "45-60 minutes",
    description: "Luxury resort enclave with pristine beaches and 5-star hotels.",
    priority: "medium",
    popular: true
  },
  {
    name: "Jimbaran",
    slug: "jimbaran",
    responseTime: "35-50 minutes",
    description: "Famous for seafood restaurants on the beach and luxury resorts.",
    priority: "medium",
    popular: true
  },

  // Bukit Peninsula
  {
    name: "Uluwatu",
    slug: "uluwatu",
    responseTime: "50-70 minutes",
    description: "Clifftop location with stunning ocean views and surf beaches.",
    priority: "medium",
    popular: true
  },
  {
    name: "Pecatu",
    slug: "pecatu",
    responseTime: "50-65 minutes",
    description: "Residential area near Uluwatu with villas and gated communities.",
    priority: "low",
    popular: false
  },
  {
    name: "Bukit Peninsula",
    slug: "bukit-peninsula",
    responseTime: "50-70 minutes",
    description: "Southern peninsula with dramatic cliffs and world-class surf spots.",
    priority: "medium",
    popular: false
  },
  {
    name: "Ungasan",
    slug: "ungasan",
    responseTime: "50-65 minutes",
    description: "Elevated area with panoramic ocean views and luxury villas.",
    priority: "low",
    popular: false
  },
  {
    name: "Dreamland",
    slug: "dreamland",
    responseTime: "45-60 minutes",
    description: "Beautiful beach with white sand and surfing opportunities.",
    priority: "low",
    popular: false
  },
  {
    name: "Padang Padang",
    slug: "padang-padang",
    responseTime: "55-70 minutes",
    description: "Famous surf beach featured in Eat Pray Love movie.",
    priority: "low",
    popular: false
  },
  {
    name: "Bingin",
    slug: "bingin",
    responseTime: "55-70 minutes",
    description: "Clifftop area with surf breaks and bohemian beach cafes.",
    priority: "low",
    popular: false
  },

  // Benoa Area
  {
    name: "Benoa",
    slug: "benoa",
    responseTime: "40-55 minutes",
    description: "Quiet fishing village with water sports and marina access.",
    priority: "low",
    popular: false
  },
  {
    name: "Tanjung Benoa",
    slug: "tanjung-benoa",
    responseTime: "45-60 minutes",
    description: "Peninsula known for water sports activities and beach resorts.",
    priority: "low",
    popular: false
  },

  // Other
  {
    name: "Denpasar",
    slug: "denpasar",
    responseTime: "35-50 minutes",
    description: "Capital city of Bali with shopping, cultural sites, and local markets.",
    priority: "low",
    popular: false
  }
];

const ServiceAreas = () => {
  const primaryAreas = serviceAreas.filter(area => area.priority === "high");
  const secondaryAreas = serviceAreas.filter(area => area.priority === "medium");
  const otherAreas = serviceAreas.filter(area => area.priority === "low");

  return (
    <div className="min-h-screen">
      <SiteMeta
        title="Service Areas Bali - Massage Coverage"
        description="Professional massage service covering Kuta, Legian, Seminyak, Canggu, Sanur, Ubud, Nusa Dua, and more areas in Bali. Certified therapists deliver premium massage treatments to your villa or hotel location."
        keywords="massage service areas Bali, massage Kuta coverage, massage Seminyak, massage Canggu, massage Ubud, massage Nusa Dua, mobile massage Bali"
        canonical="/areas"
      />

      <StructuredData type="organization" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-3.jpg"
              alt="Map showing professional massage service coverage areas throughout Bali including Kuta, Seminyak, Canggu, and Ubud"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-900/80 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-professional-gold text-professional-navy px-4 py-2 text-sm">
              Island-Wide Coverage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Service Areas Bali - Massage Coverage
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md">
              Professional massage service delivered throughout Bali covering {serviceAreas.length} areas including Kuta, Seminyak, Canggu, Ubud, and more. Book certified therapists for premium massage treatments at your villa or hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span>Response times: 15-90 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>{serviceAreas.length} areas covered</span>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Primary Service Areas
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Our fastest response times and most frequent service locations. Perfect coverage for tourists and residents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {primaryAreas.map((area, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-spa-earth text-xl flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-spa-gold" />
                        {area.name}
                      </CardTitle>
                      {area.popular && (
                        <Badge variant="secondary" className="bg-spa-gold/20 text-spa-gold border-0">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="flex items-center gap-2 text-spa-stone">
                      <Clock className="w-4 h-4" />
                      <span>{area.responseTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone text-sm mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <Link to={`/areas/${area.slug}`}>
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary Service Areas */}
        <section className="py-20 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Extended Coverage Areas
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We also serve these popular destinations with slightly longer response times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryAreas.map((area, index) => (
                <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-spa-earth text-lg flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-spa-gold" />
                        {area.name}
                      </CardTitle>
                      {area.popular && (
                        <Star className="w-4 h-4 text-spa-gold fill-current" />
                      )}
                    </div>
                    <CardDescription className="flex items-center gap-2 text-spa-stone text-sm">
                      <Clock className="w-3 h-3" />
                      <span>{area.responseTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-spa-stone text-sm mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <Link to={`/areas/${area.slug}`}>
                        Learn More <ArrowRight className="w-3 h-3 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Areas */}
        {otherAreas.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-spa-earth mb-4">
                  Additional Service Locations
                </h3>
                <p className="text-lg text-spa-stone max-w-2xl mx-auto">
                  We also provide service to these areas. Response times may vary based on exact location.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {otherAreas.map((area, index) => (
                  <Link
                    key={index}
                    to={`/areas/${area.slug}`}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-spa-stone/20 hover:border-spa-gold hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-spa-earth font-medium text-sm">{area.name}</span>
                    <ArrowRight className="w-4 h-4 text-spa-gold" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Coverage Info */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-spa-earth mb-6">
                Don't See Your Area?
              </h3>
              <p className="text-lg text-spa-stone mb-8 leading-relaxed">
                We're constantly expanding our service coverage. If your location isn't listed, please contact us via WhatsApp.
                We may still be able to accommodate your booking, especially for longer sessions or multiple treatments.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-xl">
                <a href="https://wa.me/628112656869?text=Hello%20Home%20Massage%20Kuta!%20I'd%20like%20to%20check%20if%20you%20serve%20my%20area." target="_blank" rel="noopener noreferrer">
                  Check Your Location
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-spa-earth mb-8 text-center">
                How Our Mobile Service Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-spa-gold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-spa-earth mb-3">Book via WhatsApp</h4>
                  <p className="text-spa-stone">
                    Message us with your location, preferred service, and time. We'll confirm availability instantly.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-spa-gold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-spa-earth mb-3">Therapist Travels to You</h4>
                  <p className="text-spa-stone">
                    Our certified therapist brings all equipment and arrives at your location within the stated time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-spa-gold">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-spa-earth mb-3">Relax & Enjoy</h4>
                  <p className="text-spa-stone">
                    Enjoy your professional massage in the comfort and privacy of your villa or hotel room.
                  </p>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto text-left bg-white p-8 rounded-lg shadow-soft">
                <p className="text-lg text-spa-stone leading-relaxed mb-4">
                  Our service covers Bali's most popular destinations with fast response times and certified therapists. From the beaches of Kuta and Seminyak to the rice terraces of Ubud and the clifftops of Uluwatu, we bring premium treatments directly to your accommodation.
                </p>
                <p className="text-lg text-spa-stone leading-relaxed">
                  Each location benefits from our commitment to quality, featuring the same professional equipment and exceptional customer service. Explore our <Link to="/services" className="text-spa-gold hover:underline">complete treatment menu</Link> or check out <Link to="/packages" className="text-spa-gold hover:underline">special packages</Link> for the best value. Book today and experience relaxation delivered to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default ServiceAreas;
