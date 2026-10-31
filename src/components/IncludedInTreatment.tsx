import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface IncludedInTreatmentProps {
  /** Treatment name, lower case, e.g. "post-surf recovery massage". */
  treatment: string;
  /** Coverage sentence subject, e.g. "Uluwatu and the Bukit". */
  area?: string;
}

/**
 * Replaces the fabricated guest-testimonial blocks on 2026-10-31 (Chief of Staff
 * ruling C-0005, QA T-0006 item 2). Every line below is an operational fact about
 * what we do, where we travel, what we bring and how booking works.
 *
 * No ratings, no client counts, no invented review quotes. Verified guest reviews
 * return only through a connected Google Business Profile feed, and they will be
 * dated when they do.
 */
const IncludedInTreatment = ({
  treatment,
  area = "Kuta, Legian, Seminyak, Canggu, Sanur, Jimbaran, Nusa Dua and Uluwatu",
}: IncludedInTreatmentProps) => {
  const items = [
    `The therapist travels to your villa, hotel or guesthouse in ${area}, and the session happens where you are staying.`,
    "We bring the massage table, fresh linens and oils, so you do not need to prepare anything beyond a space to set up.",
    `Session length is chosen when you book, and the ${treatment} price is quoted upfront in IDR with travel included.`,
    "Same-day slots are subject to availability, every day between 07:00 and 22:00.",
    "You get a WhatsApp confirmation with the arrival window before the therapist leaves for your address.",
  ];

  return (
    <section className="py-16 bg-spa-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
            What is included in your {treatment}
          </h2>
          <ul className="space-y-3 text-spa-stone text-lg">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-spa-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-spa-stone">
            We publish guest reviews only when they can be verified.{" "}
            <Link to="/reviews" className="underline hover:text-spa-earth">
              Read how our review policy works
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncludedInTreatment;
