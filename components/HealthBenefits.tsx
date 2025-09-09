import { Brain, Heart, Shield, Zap, Moon, Activity } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Relieves Muscle Tension",
    description: "Whether you've spent the day surfing, walking along Kuta Beach, or sitting at your laptop in a villa, massage helps release built-up tension in muscles and joints.",
    color: "text-professional-teal"
  },
  {
    icon: Moon,
    title: "Reduces Stress & Improves Sleep",
    description: "A home massage calms the nervous system, lowers stress hormones, and promotes relaxation. Many of our clients say they sleep deeper and wake up refreshed.",
    color: "text-professional-navy"
  },
  {
    icon: Heart,
    title: "Boosts Circulation & Immunity",
    description: "Techniques like lymphatic drainage support the body's detox process, reduce swelling, and strengthen immunity. Especially valuable for travelers.",
    color: "text-professional-green"
  },
  {
    icon: Brain,
    title: "Improves Mental Clarity",
    description: "Massage doesn't just work on the body — it clears the mind. Expats, digital nomads, and business travelers all benefit from improved concentration.",
    color: "text-professional-teal"
  },
  {
    icon: Activity,
    title: "Supports Recovery & Wellness",
    description: "From sports injuries to general fatigue, massage is a natural way to speed up recovery and support long-term wellness without extra travel.",
    color: "text-professional-navy"
  },
  {
    icon: Zap,
    title: "Increases Energy & Vitality",
    description: "Regular massage therapy improves energy levels, enhances mood, and helps maintain optimal physical and mental performance during your stay.",
    color: "text-professional-green"
  }
];

const HealthBenefits = () => {
  return (
    <section className="py-20 bg-professional-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
            Health Benefits of Massage at Home in Kuta
          </h2>
          <p className="text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            A trip to Kuta is often filled with excitement, but all that activity can leave you sore and tired. 
            A massage at home is more than a luxury—it's self-care with powerful health benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-subtle rounded-2xl p-8 shadow-floating hover:shadow-elevated transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-professional-white rounded-xl flex items-center justify-center shadow-professional group-hover:shadow-floating transition-all duration-300">
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-professional-navy mb-3">{benefit.title}</h3>
                  <p className="text-professional-gray leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12 shadow-elevated text-primary-foreground">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">The Science of Wellness</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold mb-4 opacity-90">Physical Benefits</h4>
                  <ul className="space-y-2 opacity-80">
                    <li>• Increased blood flow and oxygenation</li>
                    <li>• Reduced inflammation and swelling</li>
                    <li>• Enhanced flexibility and range of motion</li>
                    <li>• Faster muscle recovery and healing</li>
                    <li>• Pain relief from chronic conditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 opacity-90">Mental Benefits</h4>
                  <ul className="space-y-2 opacity-80">
                    <li>• Reduced cortisol (stress hormone) levels</li>
                    <li>• Increased serotonin and dopamine</li>
                    <li>• Enhanced mood and emotional balance</li>
                    <li>• Improved focus and productivity</li>
                    <li>• Better sleep quality and patterns</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg font-semibold mt-8 text-center">
                In Kuta, where life moves fast, taking time for a massage at home is the smartest way 
                to recharge your body and mind. Wellness isn't found in a crowded spa — it's created 
                in your own private space.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-professional-white rounded-xl shadow-professional">
            <div className="text-3xl font-bold text-professional-navy mb-2">15-30%</div>
            <div className="text-professional-gray">Stress reduction after single session</div>
          </div>
          <div className="text-center p-6 bg-professional-white rounded-xl shadow-professional">
            <div className="text-3xl font-bold text-professional-navy mb-2">40-60%</div>
            <div className="text-professional-gray">Improved sleep quality</div>
          </div>
          <div className="text-center p-6 bg-professional-white rounded-xl shadow-professional">
            <div className="text-3xl font-bold text-professional-navy mb-2">25-45%</div>
            <div className="text-professional-gray">Reduced muscle tension</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;