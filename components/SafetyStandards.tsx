import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, CheckCircle, Users, FileCheck, Globe } from "lucide-react";
import safetyStandards from "@/assets/safety-standards.jpg";

const SafetyStandards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
            Our Safety & Professional Standards for Your Kuta Massage
          </h2>
          <p className="text-xl text-professional-gray max-w-4xl mx-auto leading-relaxed">
            When booking a massage (pijat) at home in Kuta, trust is everything. You're inviting a therapist into your private 
            villa or hotel, and you need complete peace of mind. That's why our service is built on strict safety measures 
            and professional standards that protect both clients and terapis at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-professional-navy mb-8">Professional Vetting Process</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-professional-navy mb-2">Certified Professionals Only</h4>
                  <p className="text-professional-gray leading-relaxed">
                    All of our terapis are certified professionals with years of experience in Balinese and therapeutic massage. 
                    We never hire untrained staff or outsource to unknown freelancers. Each therapist is personally vetted for skill, 
                    integrity, and professionalism.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-professional-navy mb-2">Background Verification</h4>
                  <p className="text-professional-gray leading-relaxed">
                    Every therapist undergoes comprehensive background checks, reference verification, and skills assessment. 
                    This ensures that the person arriving at your door is not only highly qualified but also trustworthy and respectful.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-professional-navy mb-2">Ongoing Training & Standards</h4>
                  <p className="text-professional-gray leading-relaxed">
                    Our team participates in regular training sessions, skill updates, and professional development programs to ensure a holistik approach to wellness and customer care. We maintain strict quality standards and monitor performance to ensure consistent excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="relative">
              <img
                src={safetyStandards}
                alt="Professional massage therapist with clean, sanitized equipment ensuring safety standards for an in-villa massage"
                className="w-full rounded-2xl shadow-floating"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <Shield className="w-12 h-12 text-professional-teal mb-4" />
              <CardTitle className="text-xl text-professional-navy">Hygiene Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-professional-gray leading-relaxed">
                Our team arrives with freshly laundered linens, sanitized equipment, and premium oils that meet strict 
                health and wellness standards. Massage tables are cleaned before and after each use, and oils are chosen 
                for both quality and safety.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <Award className="w-12 h-12 text-professional-teal mb-4" />
              <CardTitle className="text-xl text-professional-navy">Professional Boundaries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-professional-gray leading-relaxed">
                We provide therapeutic massage (pijat) only—no sensual or non-professional services of any kind. This protects 
                the reputation of our terapis and guarantees that every client receives treatment in a safe, ethical environment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-0 shadow-floating hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <Globe className="w-12 h-12 text-professional-teal mb-4" />
              <CardTitle className="text-xl text-professional-navy">International Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-professional-gray leading-relaxed">
                Our service meets international spa and wellness standards. We follow protocols recognized globally, 
                ensuring that guests from any country feel comfortable and confident with our professional approach.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-professional rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6">Our Guarantees</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">Punctuality Guarantee</div>
                  <div className="opacity-90 text-sm">On-time arrival or session discount</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">Price Transparency</div>
                  <div className="opacity-90 text-sm">Fixed prices, no hidden fees</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">100% Satisfaction</div>
                  <div className="opacity-90 text-sm">Money-back guarantee</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-professional-gold" />
                <div>
                  <div className="font-semibold">Complete Privacy</div>
                  <div className="opacity-90 text-sm">Absolute discretion and respect</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-professional-navy mb-6">Safety Protocols</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-professional-teal rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-professional-gray">Therapist identification verification upon arrival</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-professional-teal rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-professional-gray">Real-time booking confirmations and tracking</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-professional-teal rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-professional-gray">Emergency contact protocols and support</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-professional-teal rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-professional-gray">Quality assurance monitoring and feedback</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-professional-teal rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-professional-gray">Comprehensive insurance coverage for all services</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-professional-white rounded-2xl p-8 shadow-floating max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-professional-navy mb-4">Total Peace of Mind</h4>
            <p className="text-lg text-professional-gray leading-relaxed">
              With these standards, our Kuta home massage service is more than just convenient — it's safe, professional, 
              and designed for total peace of mind. We understand that trust is earned, and we work every day to maintain 
              the highest standards in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStandards;