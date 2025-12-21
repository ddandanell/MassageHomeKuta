import { MessageCircle, MapPin, Sparkles } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Easy Booking",
    description: "Book instantly via WhatsApp or our online form. Choose your massage (pijat), duration, and tell us your location in Kuta.",
    icon: MessageCircle,
    color: "text-spa-gold"
  },
  {
    number: "2", 
    title: "We Come to You",
    description: "Our terapis arrive at your chosen time, fully equipped with a massage table, clean linens, and premium oils. You don't need to prepare anything—just sit back and let the pijat transform your space.",
    icon: MapPin,
    color: "text-spa-green"
  },
  {
    number: "3",
    title: "Relax and Enjoy", 
    description: "Lie down and let your terapis work their magic. We clear everything away afterwards, leaving you calm, refreshed, and with improved kualitas tidur.",
    icon: Sparkles,
    color: "text-spa-earth"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
            How It Works
          </h2>
          <p className="text-xl text-spa-stone max-w-3xl mx-auto">
            Booking a massage (pijat) at home in Kuta is simple. Just three clear steps from booking to relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-card rounded-full flex items-center justify-center mx-auto shadow-floating group-hover:shadow-glow transition-all duration-300">
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-spa-gold text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-spa-earth mb-4">{step.title}</h3>
              <p className="text-spa-stone leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-floating max-w-4xl mx-auto">
            <p className="text-lg text-spa-stone leading-relaxed">
              The process is smooth, respectful, and designed for your convenience. With our service, 
              you never waste time in traffic or wait in crowded spas. It's wellness, made effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;