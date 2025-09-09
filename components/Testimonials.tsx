import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We booked a couples massage in our villa, and it was the best decision of our trip. The therapists were on time, professional, and created such a calming environment. It felt like having a luxury spa in our living room!",
    name: "Anna & James",
    location: "UK – Villa in Legian"
  },
  {
    quote: "After five days of surfing, my back and shoulders were destroyed. I booked a deep tissue massage at my guesthouse, and it was incredible. The therapist knew exactly how to target the sore spots. Highly recommend for surfers.",
    name: "Mark",
    location: "Australia – Surf Trip in Kuta"
  },
  {
    quote: "I work online and spend 8+ hours at my laptop. The aromatherapy massage helped release all the tension in my neck and lower back. The therapist was so kind, and I loved that I didn't have to leave my apartment.",
    name: "Sofia", 
    location: "Spain – Digital Nomad in Seminyak"
  },
  {
    quote: "We booked the four-hands massage in our villa for our honeymoon. Two therapists worked in perfect sync, and it was pure bliss. Better than any spa we've ever been to.",
    name: "Michael & Laura",
    location: "USA – Honeymoon in Jimbaran"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-spa-stone max-w-4xl mx-auto">
            Real stories from travelers, surfers, and expats who trust us to deliver professional 
            massage services in the comfort of their own space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-floating hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-spa-gold text-spa-gold" />
                  ))}
                </div>
                <blockquote className="text-spa-stone text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-spa-earth text-lg">{testimonial.name}</div>
                  <div className="text-spa-stone">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;