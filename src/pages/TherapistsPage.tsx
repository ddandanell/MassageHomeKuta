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
    languages: ["Bahasa Indonesia", "English", "Basic Japanese"],
    description: "Master of traditional Balinese healing techniques with extensive training in aromatherapy and pressure point therapy.",
    availability: "Kuta, Legian, Seminyak"
  },
  {
    name: "Wayan Putra",
    specialties: ["Deep Tissue", "Sports Massage", "Thai Massage"],
    experience: "10+ years",
    languages: ["Bahasa Indonesia", "English", "Basic Dutch"],
    description: "Specialized in therapeutic and sports massage with a focus on injury prevention and muscle recovery.",
    availability: "Kuta, Canggu, Uluwatu"
  },
  {
    name: "Made Dewi",
    specialties: ["Hot Stone", "Prenatal", "Lymphatic Drainage"],
    experience: "7+ years",
    languages: ["Bahasa Indonesia", "English", "Basic German"],
    description: "Expert in specialized treatments including prenatal massage and lymphatic drainage with gentle healing approach.",
    availability: "Sanur, Jimbaran, Nusa Dua"
  },
  {
    name: "Ketut Agus",
    specialties: ["Traditional Balinese", "Couples Massage", "Acupressure"],
    experience: "12+ years",
    languages: ["Bahasa Indonesia", "English", "Basic Mandarin"],
    description: "Senior therapist with deep knowledge of traditional Balinese healing and expertise in couples treatments.",
    availability: "All south Bali areas"
  }
];

const TherapistsPage = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta
        title="Massage Therapists Kuta Bali - Meet the In-Villa Team"
        description="Meet the massage therapists who travel to villas and hotels in Kuta and south Bali. Specialties, languages and the areas each therapist usually covers."
        keywords="massage therapists Kuta, professional massage therapist Bali, in-villa massage therapists, experienced therapists Kuta"
        canonical="/therapists"
      />

      <StructuredData type="organization" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/generated-images/therapists-hero.jpg"
              alt="Massage therapist arriving for an in-villa treatment in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90 backdrop-blur-[2px]"></div>
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Massage Therapists in Kuta, Bali
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              The therapists who travel to your villa or hotel, what each of them specialises in, and the areas they usually cover. We confirm the therapist assigned to your session, their training background and their arrival window on WhatsApp before you book.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>In-Villa Across South Bali</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Same-Day Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Couples &amp; Group Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Daily 07:00 – 22:00</span>
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
                    <CardTitle className="text-spa-earth text-2xl">
                      {therapist.name}
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
                        <h4 className="font-semibold text-spa-earth mb-2">Usually Books:</h4>
                        <p className="text-spa-stone">{therapist.availability}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-spa-earth mb-2">Training:</h4>
                      <p className="text-sm text-spa-stone">
                        Trained in the modalities listed above. We confirm the assigned therapist's
                        training background on WhatsApp before you book, rather than publishing
                        certificate names we cannot show you.
                      </p>
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
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Training, Confirmed Before You Book</h3>
                <p className="text-spa-stone">
                  We do not publish certificate names we cannot show you. Ask on WhatsApp and we will tell
                  you the training background of the therapist assigned to your session.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spa-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-xl font-semibold text-spa-earth mb-4">Balinese Technique, Lived Not Learned</h3>
                <p className="text-spa-stone">
                  Every therapist on the team works with traditional Balinese pressure and stretching
                  technique, adapted to the treatment you book and the pressure you ask for.
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