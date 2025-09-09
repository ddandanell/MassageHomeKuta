import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import villaPoolside from "@/assets/villa-poolside.jpg";
import { Users, Award, Shield, Clock, Star, Heart, MapPin, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", description: "From 25+ countries" },
    { icon: Star, number: "4.9", label: "Average Rating", description: "Google & Facebook reviews" },
    { icon: Clock, number: "2+", label: "Years Serving", description: "Kuta & surrounding areas" },
    { icon: Award, number: "100%", label: "Licensed", description: "Certified therapists only" }
  ];

  const features = [
    { 
      icon: Shield, 
      title: "100% Professional & Safe", 
      description: "All therapists are licensed, insured, and background-checked. We maintain the highest safety and ethical standards." 
    },
    { 
      icon: Clock, 
      title: "Same-Day Availability", 
      description: "Book today, relax today. Our flexible scheduling means you can get a massage when you need it most." 
    },
    { 
      icon: Heart, 
      title: "Authentic Balinese Techniques", 
      description: "Our therapists trained in traditional Balinese healing arts, combined with modern spa techniques for the perfect treatment." 
    },
    { 
      icon: MapPin, 
      title: "Extensive Service Area", 
      description: "We serve all major areas in and around Kuta, from beachfront hotels to private villas in the hills." 
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <Badge className="mb-4 bg-professional-gold/10 text-professional-gold border-professional-gold/20">
              About Home Massage Kuta
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spa-earth mb-4 md:mb-6">
              Your Private Spa Experience
            </h2>
            <h3 className="text-xl md:text-2xl text-spa-gold mb-4 md:mb-6 font-medium">
              Bringing Bali's Ancient Healing Traditions to Your Doorstep
            </h3>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-spa-stone leading-relaxed">
              <p>
                In the bustling heart of Kuta, where the energy never stops, we believe that true paradise 
                is found in moments of complete tranquility. That's why we created <strong>Home Massage Kuta</strong> – 
                to bring the sacred healing traditions of Balinese massage directly to your private space.
              </p>
              <p>
                Since 2022, we've served over <strong>500 clients from 25+ countries</strong>, transforming 
                their villas, hotels, and private spaces into serene sanctuaries. Our mission is simple: 
                provide world-class spa treatments with the convenience and privacy you deserve.
              </p>
              <p>
                Every session begins with a consultation to understand your needs. Whether you're recovering 
                from surfing, need relief from travel fatigue, or simply want to indulge in Bali's renowned 
                wellness culture, we craft each treatment to your specific needs.
              </p>
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-professional-light/50 border-professional-gold/20 text-center p-3 md:p-4">
                  <CardContent className="p-0">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 text-professional-gold" />
                    <div className="text-xl md:text-2xl font-bold text-professional-navy mb-1">{stat.number}</div>
                    <div className="text-sm font-medium text-professional-navy">{stat.label}</div>
                    <div className="text-xs text-professional-gray mt-1">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src={villaPoolside}
                alt="Serene poolside villa in Kuta - perfect setting for in-villa massage therapy"
                className="w-full rounded-2xl shadow-floating"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
              
              {/* Floating testimonial */}
              <Card className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 max-w-xs bg-white shadow-xl border-professional-gold/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-professional-gold text-professional-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-professional-navy font-medium">
                    "Best decision of our Bali trip! Professional, relaxing, and so convenient."
                  </p>
                  <p className="text-xs text-professional-gray mt-1">- Sarah, Australia</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-professional-navy mb-8">
            Why Choose Home Massage Kuta?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-subtle border-professional-gold/20 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-professional-gold/10 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-professional-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-professional-navy mb-2">{feature.title}</h4>
                      <p className="text-professional-gray leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Promise */}
        <Card className="bg-gradient-to-r from-professional-navy to-professional-gold text-white p-6 md:p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <CheckCircle className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-professional-gold" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Promise to You</h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              Every Home Massage Kuta experience is backed by our commitment to excellence. 
              If you're not completely satisfied with your treatment, we'll make it right. 
              Your relaxation and wellbeing are our top priorities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-sm md:text-base">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                <span>On-Time Promise</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;