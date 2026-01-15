import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Clock, Users } from "lucide-react";

const therapists = [
  {
    name: "Kadek Sari",
    specialties: ["Traditional Balinese", "Aromatherapy", "Reflexology"],
    experience: "8+ years",
    certifications: ["VTCT Level 3", "CIBTAC", "BISA Certified"],
    languages: ["Bahasa Indonesia", "English", "Basic Japanese"],
    description: "Master of traditional Balinese healing techniques with extensive training in aromatherapy and pressure point therapy.",
    rating: 4.9,
    clients: 150
  },
  {
    name: "Wayan Putra",
    specialties: ["Deep Tissue", "Sports Massage", "Thai Massage"],
    experience: "10+ years",
    certifications: ["VTCT Level 3", "Sports Massage Certified", "Thai Massage Traditional"],
    languages: ["Bahasa Indonesia", "English", "Basic Dutch"],
    description: "Specialized in therapeutic and sports massage with a focus on injury prevention and muscle recovery.",
    rating: 4.9,
    clients: 200
  },
  {
    name: "Made Dewi",
    specialties: ["Hot Stone", "Prenatal", "Lymphatic Drainage"],
    experience: "7+ years",
    certifications: ["VTCT Level 3", "Prenatal Specialist", "Lymphatic Drainage Certified"],
    languages: ["Bahasa Indonesia", "English", "Basic German"],
    description: "Expert in specialized treatments including prenatal massage and lymphatic drainage with gentle healing approach.",
    rating: 4.8,
    clients: 120
  },
  {
    name: "Ketut Agus",
    specialties: ["Traditional Balinese", "Couples Massage", "Acupressure"],
    experience: "12+ years",
    certifications: ["VTCT Level 3", "CIBTAC", "Traditional Healer Certificate"],
    languages: ["Bahasa Indonesia", "English", "Basic Mandarin"],
    description: "Senior therapist with deep knowledge of traditional Balinese healing and expertise in couples treatments.",
    rating: 4.9,
    clients: 300
  }
];

const TherapistsPage = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta
        title="Certified Massage Therapists Kuta Bali"
        description="Meet our certified professional massage therapists in Kuta. Experienced, licensed practitioners with international certifications delivering expert massage treatments to your villa or hotel."
        keywords="certified massage therapists Kuta, professional massage therapist Bali, licensed massage practitioners, experienced therapists Kuta, VTCT certified"
        canonical="/therapists"
      />

      <StructuredData type="organization" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-4.jpg"
              alt="Certified professional massage therapists team in Kuta Bali with international VTCT and CIBTAC certifications"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90 backdrop-blur-[2px]"></div>
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certified Massage Therapists Kuta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Our team of internationally certified therapists brings years of experience and expertise to provide you with the highest quality treatments in Kuta. Each practitioner holds VTCT and CIBTAC certifications and specializes in multiple massage techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Internationally Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.9+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>770+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>37+ Years Combined Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Therapists Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Our Expert Team
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                Each therapist is carefully selected, thoroughly trained, and committed to providing
                you with a safe, professional, and transformative massage experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {therapists.map((therapist, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-spa-earth text-2xl flex items-center justify-between">
                      {therapist.name}
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-spa-gold fill-current" />
                        <span className="text-lg font-semibold text-spa-gold">{therapist.rating}</span>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-spa-stone text-lg">
                      {therapist.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-spa-earth mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {therapist.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-spa-gold/20 text-spa-earth">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-spa-earth mb-2">Experience:</h4>
                        <p className="text-spa-stone">{therapist.experience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-spa-earth mb-2">Happy Clients:</h4>
                        <p className="text-spa-stone">{therapist.clients}+</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-spa-earth mb-2">Certifications:</h4>
                      <ul className="text-sm text-spa-stone space-y-1">
                        {therapist.certifications.map((cert, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Award className="w-3 h-3 text-spa-gold" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-spa-earth mb-2">Languages:</h4>
                      <p className="text-spa-stone text-sm">
                        {therapist.languages.join(", ")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <a href="/#booking">Book with Our Expert Team</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Qualifications & Training */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-spa-earth mb-6">
                Qualifications & Training Standards
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We maintain the highest professional standards through continuous training and certification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">International Certifications</h3>
                <p className="text-spa-stone">
                  All therapists hold VTCT Level 3 Diploma and CIBTAC certifications, recognized worldwide
                  for massage therapy excellence.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Bali Spa Academy Training</h3>
                <p className="text-spa-stone">
                  Specialized training from Bali International Spa Academy (BISA) ensures authentic
                  traditional techniques combined with modern standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Ongoing Development</h3>
                <p className="text-spa-stone">
                  Regular training updates, safety certifications, and professional development
                  to maintain our high service standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Professionalism */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-spa-earth mb-8">
              Our Commitment to Safety & Professionalism
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Background Checked</h3>
                <p className="text-spa-stone text-sm">
                  All therapists undergo thorough background verification for your peace of mind.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Professional Training</h3>
                <p className="text-spa-stone text-sm">
                  Continuous education in massage techniques, safety protocols, and customer service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Strict Boundaries</h3>
                <p className="text-spa-stone text-sm">
                  All treatments are strictly therapeutic with professional boundaries maintained at all times.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-spa-earth mb-2">Hygiene Standards</h3>
                <p className="text-spa-stone text-sm">
                  Fresh linens, sanitized equipment, and strict hygiene protocols for every appointment.
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

export default TherapistsPage;