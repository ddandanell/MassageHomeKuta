import { Card, CardContent, CardHeader } from "@/components/ui/card";

const therapists = [
  {
    name: "Ayu Lestari",
    title: "Traditional Temple Healer",
    description: "Ayu brings the spiritual heart of Ubud to every session. Trained in the ancient traditions of Balinese temple healing, she channels generations of wisdom to restore not just the body, but the soul. Her touch is both grounding and transcendent, creating a sanctuary of peace wherever she goes.",
    specialties: ["Bali Massage", "Energy Balancing"]
  },
  {
    name: "Putri Anggraini", 
    title: "Movement & Flow Specialist",
    description: "As a former dancer, Putri understands the body as a story in motion. She combines the art of dance with the science of massage, creating treatments that are fluid, rhythmic, and deeply restorative. Her Thai massages are a beautiful choreography of stretches that leave you feeling graceful and free.",
    specialties: ["Thai Massage", "Body Stretching"]
  },
  {
    name: "Dewi Kartika",
    title: "Herbalist Specialist", 
    description: "Growing up in a family of herbalists, Dewi has an innate understanding of nature's healing power. She masterfully blends custom aromatherapy oils tailored to your needs, turning your villa into a fragrant haven of tranquility. Her massages are a multisensory journey that calms the mind and nourishes the skin.",
    specialties: ["Aroma Therapy", "Custom Oil Blends"]
  },
  {
    name: "Made Sulastri",
    title: "Luxury Resort Therapist",
    description: "Having honed her skills at 5-star resorts in Nusa Dua, Made brings a level of five-star luxury and technical precision to every home massage. She specializes in deep tissue work that is both powerful and precise, melting away chronic tension with the practiced hands of a world-class spa professional.",
    specialties: ["Deep Tissue", "Luxury Spa Techniques"]
  },
  {
    name: "Ketut Ratna",
    title: "Healer Lineage",
    description: "Hailing from a respected healer lineage in Karangasem, Ketut offers treatments that are steeped in authenticity and mindfulness. Her expertise in lymphatic drainage is complemented by a gentle, intuitive approach that promotes detoxification and deep peace, making her sessions a true reset for the body.",
    specialties: ["Lymphatic Drainage", "Mindful Therapy"]
  },
  {
    name: "Nyoman Saraswati",
    title: "Yoga Instructor Therapist",
    description: "As a yoga instructor turned therapist, Nyoman bridges the gap between movement and stillness. Her Thai massages incorporate guided breathing and yogic principles to enhance flexibility and calm the nervous system. A session with her feels like a private yoga class and a massage all in one.",
    specialties: ["Thai Massage", "Guided Breathing"]
  }
];

const Therapists = () => {
  return (
    <section id="therapists" className="py-20 bg-spa-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
            Meet Our Professional Kuta Therapists
          </h2>
          <p className="text-xl text-spa-stone max-w-4xl mx-auto leading-relaxed">
            Our team is the heart of our service. Each therapist is a certified professional with a unique story 
            and a shared passion for healing. We invite you to meet the artists who will bring the sanctuary to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-floating hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl font-bold text-primary-foreground">
                    {therapist.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-spa-earth">{therapist.name}</h3>
                <p className="text-spa-gold font-semibold">{therapist.title}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-spa-stone leading-relaxed mb-4">{therapist.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {therapist.specialties.map((specialty, specIndex) => (
                    <span 
                      key={specIndex} 
                      className="px-3 py-1 bg-spa-green text-primary-foreground rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-spa-stone">
            All therapists shown represent our team's skill level and experience. 
            Specific therapist assignment is based on availability and treatment type.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Therapists;