import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Clock, Users, Zap, Gift, Calculator } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const PricingDetails = () => {
  const whatsappMessage = "Hi! I'd like to know more about your massage packages and pricing. Can you help me choose the right one?";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const packages = [
    {
      title: "Quick Relief",
      subtitle: "Perfect for busy schedules",
      duration: "60 Minutes",
      price: "IDR 350K - 450K",
      popular: false,
      massageTypes: ["Balinese Massage", "Aromatherapy", "Deep Tissue"],
      features: [
        "Professional massage table setup",
        "Premium organic oils",
        "Fresh towels and linens",
        "Relaxing background music",
        "Post-massage consultation"
      ],
      bestFor: "First-time clients, lunch break relaxation (pijat) for immediate relaksasi and relief from everyday nyeri."
    },
    {
      title: "Complete Wellness",
      subtitle: "Our most popular choice",
      duration: "90 Minutes",
      price: "IDR 500K - 650K",
      popular: true,
      massageTypes: ["All massage types available", "Combination treatments"],
      features: [
        "Everything in Quick Relief, plus:",
        "Extended consultation",
        "Hot towel treatment",
        "Aromatherapy enhancement",
        "Scalp and face massage add-on",
        "Flexibility for custom requests"
      ],
      bestFor: "Full relaxation, couples treatment with synchronized pijat, and chronic tension relief ensuring lasting manfaat kesehatan."
    },
    {
      title: "Ultimate Indulgence",
      subtitle: "The full spa experience",
      duration: "120+ Minutes",
      price: "IDR 650K - 1,100K",
      popular: false,
      massageTypes: ["Premium treatments", "Four-hands massage", "Specialized therapy"],
      features: [
        "Everything in Complete Wellness, plus:",
        "Pre-treatment body scrub option",
        "Hot stone therapy available",
        "Extended stretching session",
        "Post-treatment refreshments",
        "Customized oil blends"
      ],
      bestFor: "Special occasions, ultimate relaxation, and luxury experience with expertly administered pijat by certified terapis."
    }
  ];

  const addOns = [
    { service: "Additional Person", price: "Full service price", icon: Users },
    { service: "Hot Stone Add-on", price: "+IDR 100K", icon: Zap },
    { service: "Aromatherapy Upgrade", price: "+IDR 50K", icon: Star },
    { service: "Extended Session (+30 min)", price: "+IDR 150K", icon: Clock },
  ];

  return (
    <section className="py-12 md:py-20 bg-professional-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-professional-gold/10 text-professional-gold border-professional-gold/20">
            <Calculator className="h-3 w-3 mr-1" />
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-professional-navy mb-4 md:mb-6">
            Choose Your Perfect Massage Package
          </h2>
          <p className="text-lg md:text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            No hidden fees, no surprises. All prices include transportation, setup, and professional service. Same transparent pricing whether you're in a 5-star resort or a cozy villa. Our flexible packages are designed to fit your schedule and preferences, ensuring a seamless and stress-free experience from start to finish. Enjoy the convenience of premium home massage with clear, upfront pricing and exceptional service every time.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-elevated ${
              pkg.popular 
                ? 'border-2 border-professional-gold shadow-floating transform lg:scale-105' 
                : 'border border-professional-gold/20 hover:border-professional-gold/40'
            }`}>
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-professional-gold text-professional-navy px-4 py-1">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`text-center pb-4 ${pkg.popular ? 'pt-8' : 'pt-6'}`}>
                <CardTitle className="text-xl md:text-2xl text-professional-navy mb-2">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-professional-gray mb-3">
                  {pkg.subtitle}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-professional-gold">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-professional-gray">
                    {pkg.duration} • All inclusive
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Massage Types */}
                <div>
                  <h4 className="font-semibold text-professional-navy mb-2 text-sm">Available Treatments:</h4>
                  <div className="space-y-1">
                    {pkg.massageTypes.map((type, idx) => (
                      <div key={idx} className="text-sm text-professional-gray flex items-center">
                        <Check className="h-3 w-3 mr-2 text-professional-gold flex-shrink-0" />
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-professional-navy mb-2 text-sm">Included:</h4>
                  <div className="space-y-1">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-professional-gray flex items-start">
                        <Check className="h-3 w-3 mr-2 text-professional-gold flex-shrink-0 mt-0.5" />
                        <span className={feature.includes("Everything in") ? "font-medium" : ""}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div className="bg-professional-light/50 rounded-lg p-3">
                  <h4 className="font-semibold text-professional-navy mb-1 text-sm">Perfect For:</h4>
                  <p className="text-sm text-professional-gray">{pkg.bestFor}</p>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-professional-navy to-professional-gold hover:from-professional-gold hover:to-professional-navy' 
                      : 'bg-professional-navy hover:bg-professional-gold'
                  } text-white font-semibold py-3 transition-all duration-300`}
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Gift className="h-4 w-4 mr-2" />
                    Book {pkg.title}
                  </a>
                </Button>
                  triggerClassName="w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons and Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add-ons */}
          <Card className="border-professional-gold/20">
            <CardHeader>
              <CardTitle className="text-xl text-professional-navy flex items-center gap-2">
                <Zap className="h-5 w-5 text-professional-gold" />
                Enhance Your Experience
              </CardTitle>
              <CardDescription>
                Additional services to make your massage (pijat) even more special.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-professional-light/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <addon.icon className="h-5 w-5 text-professional-gold" />
                      <span className="font-medium text-professional-navy">{addon.service}</span>
                    </div>
                    <span className="text-professional-gold font-semibold">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pricing Notes */}
          <Card className="border-professional-gold/20">
            <CardHeader>
              <CardTitle className="text-xl text-professional-navy flex items-center gap-2">
                <Calculator className="h-5 w-5 text-professional-gold" />
                Good to Know
              </CardTitle>
              <CardDescription>
                Important pricing and service information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-professional-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>All-Inclusive Pricing:</strong> No extra fees for transportation, setup, or equipment
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-professional-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Flexible Payment:</strong> Cash, bank transfer, or digital payment accepted
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-professional-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Group Discounts:</strong> Special rates for parties of 3+ people
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-professional-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Cancellation:</strong> Free cancellation up to 2 hours before appointment
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-professional-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Service Area:</strong> We cover all major areas within 15km of Kuta center
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-professional-navy to-professional-gold text-white p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6 opacity-90">
              Get personalized pricing and recommendations based on your specific needs. Our team is standing by to help you choose the perfect massage experience for optimal kesehatan and relaxation.
            </p>
            <Button asChild variant="outline" className="bg-white text-professional-navy hover:bg-professional-light font-semibold px-8 py-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Custom Quote & Book
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingDetails;
