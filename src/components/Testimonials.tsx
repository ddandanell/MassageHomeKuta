import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

/**
 * Replaces the fabricated guest testimonials on 2026-10-31 (Chief of Staff ruling
 * C-0005, QA T-0006 item 2). The four quotes, names, locations and five-star rows
 * that used to render here had no approved source.
 *
 * What renders now is the booking flow, which is true by construction: it describes
 * what we actually do when someone messages us, not how many people liked it.
 */
const steps = [
  "Message us on WhatsApp with your area, the date and the treatment you want — Kuta, Legian, Seminyak, Canggu, Sanur, Jimbaran, Nusa Dua or Uluwatu.",
  "We reply with the therapist assigned to you, the arrival window and the upfront IDR price, travel included. Nothing is charged before you agree.",
  "The therapist arrives with a professional table, fresh linens and oils, and sets up in your villa, hotel room or guesthouse. You choose the pressure.",
  "You pay the agreed IDR amount after the session. Ask for the same therapist next time and we will check their availability for your area.",
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
            How Booking Works
          </h2>
          <p className="text-xl text-spa-stone max-w-4xl mx-auto">
            Four steps, start to finish. We confirmed this flow on 31 October 2026 and it is the
            same for every treatment on the menu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-floating">
              <CardContent className="p-8">
                <div className="flex gap-4">
                  <span className="text-3xl font-serif font-bold text-spa-gold leading-none">
                    {index + 1}
                  </span>
                  <p className="text-spa-stone text-lg leading-relaxed">{step}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE_CONFIG.socialMedia.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-professional-green font-medium text-lg hover:underline"
          >
            <MessageCircle className="w-5 h-5" />
            Start on WhatsApp: {SITE_CONFIG.phone}
          </a>
          <p className="mt-6 text-spa-stone flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-spa-gold" />
            We publish guest reviews only when they can be verified —
            <Link to="/reviews" className="underline hover:text-spa-earth">
              read the policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
