import { Shield, Leaf, Package, Clock } from "lucide-react";
import professionalSetup from "@/assets/professional-setup.jpg";

const features = [
  {
    icon: Shield,
    title: "Licensed Professional Therapists",
    description: "Every therapist is certified, experienced, and dedicated to the highest standards of professional care."
  },
  {
    icon: Leaf,
    title: "All-Natural Premium Oils & Products", 
    description: "We use only the finest all-natural oils and products, ensuring a pure and skin-friendly experience."
  },
  {
    icon: Package,
    title: "Complete Equipment & Setup Included",
    description: "Your therapist arrives with a professional massage table, fresh linens, and everything needed for a spa experience."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We operate from early morning until late evening to fit your schedule, making relaxation easy to achieve."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-spa-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
            Why Choose Us
          </h2>
          <h3 className="text-2xl text-spa-gold mb-6">
            The Smartest Way to Relax in Kuta
          </h3>
          <p className="text-xl text-spa-stone max-w-4xl mx-auto leading-relaxed">
            Kuta is alive with energy, but that same excitement can mean traffic and noise. We bring the sanctuary to you, 
            transforming your villa or hotel into a private spa. No travel, no stress—just pure, professional Balinese healing 
            where you feel most comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-spa-earth mb-2">{feature.title}</h4>
                  <p className="text-spa-stone leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-first lg:order-last">
            <div className="relative">
              <img
                src={professionalSetup}
                alt="Professional therapist preparing for a home massage in a serene Kuta villa setting"
                className="w-full rounded-2xl shadow-floating"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;