import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Waves, Plane } from "lucide-react";

const packages = [
  {
    title: "Couples Massage",
    description: "Share the experience of relaxation with someone you love. Two therapists arrive together and perform side-by-side treatments in the privacy of your villa. Perfect for honeymoons, anniversaries, or simply creating a memory together while staying in Kuta.",
    icon: Heart,
    features: [
      "Two therapists working simultaneously",
      "Side-by-side massage tables",
      "Romantic atmosphere setup",
      "Choice of synchronized treatments",
      "Complimentary aromatherapy candles"
    ],
    duration: "90 minutes",
    price: "IDR 1,200K for couple"
  },
  {
    title: "Surf Recovery Package",
    description: "This package combines deep tissue techniques with stretching to restore mobility, release knots, and help you recover faster for the next wave.",
    icon: Waves,
    features: [
      "Deep tissue massage focusing on shoulders and back",
      "Targeted stretching session",
      "Anti-inflammatory aromatherapy oils",
      "Hot stone application for muscle recovery",
      "Personalized recovery advice"
    ],
    duration: "75 minutes",
    price: "IDR 650K"
  },
  {
    title: "Family Wellness Package",
    description: "Designed for families staying in villas, this package allows multiple back-to-back sessions so everyone can enjoy the benefits of professional massage without leaving home. Flexible scheduling makes it easy to fit around family plans.",
    icon: Users,
    features: [
      "Up to 4 family members",
      "Flexible scheduling throughout the day",
      "Age-appropriate massage techniques",
      "Special rates for children (12+)",
      "Family wellness consultation"
    ],
    duration: "Multiple sessions",
    price: "From IDR 1,800K"
  },
  {
    title: "Detox & Reset Package",
    description: "For travelers arriving after long-haul flights, this package blends lymphatic drainage with aromatherapy massage to reduce swelling, support circulation, and restore balance. It's the ideal way to fight jet lag and start your holiday refreshed.",
    icon: Plane,
    features: [
      "Lymphatic drainage massage",
      "Detoxifying aromatherapy oils",
      "Circulation-boosting techniques",
      "Hydrating body treatment",
      "Energy rebalancing session"
    ],
    duration: "90 minutes",
    price: "IDR 750K"
  }
];

const SpecialPackages = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
            Special Packages in Kuta
          </h2>
          <p className="text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            Sometimes a single massage isn't enough. That's why we've designed a series of special massage packages
            in Kuta that take your experience to the next level. Whether you're traveling with a partner, staying with family,
            or simply want to indulge in extended sessions, these packages are created to give you more value, more care,
            and more balance — right at your villa or hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300 overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <pkg.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-professional-navy mb-2">{pkg.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <span className="text-professional-teal font-semibold">{pkg.duration}</span>
                      <span className="text-professional-gold font-bold text-lg">{pkg.price}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-professional-gray text-base leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-professional-navy">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-professional-gray">
                        <div className="w-1.5 h-1.5 bg-professional-teal rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="booking" className="w-full">
                  <a href="#booking">Book {pkg.title}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-accent rounded-2xl p-8 shadow-floating max-w-4xl mx-auto text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Complete Coverage Across Kuta</h3>
            <p className="text-lg leading-relaxed opacity-90">
              All packages are available for booking from 07:00 to 22:00 daily across Kuta, Legian, Tuban,
              and Seminyak's borders. Our therapists bring everything — tables, oils, linens, and premium
              equipment — so you don't need to move an inch.
            </p>
            <p className="text-lg font-semibold mt-4">
              With our special massage packages in Kuta, wellness becomes more than a treatment.
              It becomes an experience, designed to fit your lifestyle and create lasting results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPackages;