import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, GraduationCap, ChefHat, Code, Droplets, Waves } from "lucide-react";
import { Helmet } from "react-helmet-async";

const recommendedServices = [
  {
    name: "Home Massage Ubud",
    url: "https://homemassageubud.com/",
    icon: Home,
    description: "Experience the same premium in-villa massage services in the cultural heart of Bali. Perfect for guests staying in Ubud's serene villas and resorts who want to combine wellness with the tranquil atmosphere of rice terraces and art galleries.",
    cta: "In-Villa Massage in Ubud",
    benefits: ["Traditional Balinese techniques", "Certified therapists", "7am-10pm availability"]
  },
  {
    name: "Private Tutoring Bali",
    url: "https://privatetutoringbali.com/",
    icon: GraduationCap,
    description: "Keep your children's education on track with personalized, accredited tutoring and homeschooling services. Ideal for expat families and villa owners who want professional educational support delivered to your home.",
    cta: "Private Tutoring & Homeschooling in Bali",
    benefits: ["Accredited curriculum", "One-on-one attention", "All subjects & ages"]
  },
  {
    name: "MyChef Private Chef Services",
    url: "https://mychef.id/",
    icon: ChefHat,
    description: "After your relaxing massage, enjoy gourmet meals prepared by professional private chefs in your villa. From daily meal prep to special dinner parties, MyChef brings restaurant-quality dining to your Bali home.",
    cta: "Private Chef Services in Bali",
    benefits: ["Professional chefs", "Custom menus", "All cuisines available"]
  },
  {
    name: "Bali Tech Education",
    url: "https://bali-tech-education.com/",
    icon: Code,
    description: "Complement your family's lifestyle with coding and technology education for children and adults. Perfect for digital nomad families or anyone wanting to develop modern tech skills in a villa-based learning environment.",
    cta: "Tech Education & Coding Classes in Bali",
    benefits: ["Programming courses", "Age-appropriate curriculum", "In-person or online"]
  },
  {
    name: "Bali Pool Service",
    url: "https://balipoolservice.com/",
    icon: Waves,
    description: "Keep your villa pool pristine and safe with professional maintenance, cleaning, and repair services. Essential for villa owners who want sparkling clean pools without the hassle, complementing your wellness-focused lifestyle.",
    cta: "Professional Pool Maintenance in Bali",
    benefits: ["Weekly cleaning", "Chemical balancing", "Equipment repair"]
  },
  {
    name: "Aquapure Bali",
    url: "https://aquapurebali.com/",
    icon: Droplets,
    description: "Ensure your villa has clean, safe drinking water with advanced filtration and purification systems. A crucial service for health-conscious villa owners and families prioritizing wellness through pure water quality.",
    cta: "Water Purification & Filtration Services in Bali",
    benefits: ["Advanced filtration", "Installation & maintenance", "Health-focused solutions"]
  }
];

const RecommendedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Recommended Services for Your Bali Villa Lifestyle - Home Massage Kuta</title>
        <meta name="description" content="Discover trusted complementary services for villa owners and expat families in Bali: massage, tutoring, private chefs, tech education, pool maintenance, and water purification." />
        <meta name="keywords" content="bali villa services, expat services bali, villa lifestyle bali, home services bali, wellness bali, private services bali" />
      </Helmet>

      <SiteMeta
        title="Recommended Services for Your Bali Villa Lifestyle"
        description="Discover trusted complementary services for villa owners and expat families in Bali: massage, tutoring, private chefs, tech education, pool maintenance, and water purification."
        canonical="/recommended-services"
      />

      <StructuredData type="organization" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-3.jpg"
              alt="Bali villa lifestyle services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-professional-navy/90 via-professional-green/80 to-professional-navy/90 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg tracking-tight">
              Recommended Services for Your Bali Villa Lifestyle
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95 drop-shadow-md font-light tracking-wide">
              To help you create the perfect Bali living experience, we recommend these trusted complementary services for wellness, education, dining, and villa maintenance.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-professional-navy mb-6">
                Complete Your Villa Experience
              </h2>
              <p className="text-xl text-professional-gray max-w-3xl mx-auto font-light leading-relaxed">
                All services share our commitment to excellence and cater to villa owners, expat families, and residents seeking premium home-based services throughout Bali.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {recommendedServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-500 flex flex-col overflow-hidden rounded-2xl bg-white">
                    <div className="h-48 bg-gradient-to-br from-professional-navy/10 via-professional-green/10 to-professional-navy/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-professional-navy/5 via-professional-green/5 to-professional-gold/5"></div>
                      <IconComponent className="w-20 h-20 text-professional-navy/80 relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-professional-navy text-2xl font-serif">
                        {service.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow flex flex-col pt-2">
                      <CardDescription className="text-professional-gray mb-6 leading-relaxed flex-grow text-base">
                        {service.description}
                      </CardDescription>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-professional-navy text-sm uppercase tracking-wider">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-professional-light text-professional-navy px-3 py-1 rounded-full">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full mt-auto bg-professional-gold hover:bg-amber-600 text-white border-0">
                        <a href={service.url}>
                          {service.cta}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-professional-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-professional-navy mb-6">
              A Complete Ecosystem of Trusted Services
            </h2>
            <p className="text-lg text-professional-gray max-w-3xl mx-auto leading-relaxed">
              These carefully selected partners share our commitment to professionalism, reliability, and exceptional service quality. Together, we provide everything you need for comfortable, convenient villa living in Bali.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default RecommendedServices;
