import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Community from "@/components/Community";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import { CheckCircle, MessageCircle, Search } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

/**
 * Rewritten 2026-10-31 (Chief of Staff ruling C-0005, QA T-0006 item 2).
 *
 * This page previously displayed a 4.9 star rating, 500+ clients, 25+ countries,
 * a 98% recommendation rate and four named testimonials, none of which had a
 * source. It now explains the review policy, states the operational facts we can
 * stand behind, and tells guests how to leave feedback and how to read any Bali
 * massage review — their own included.
 */
const reviewPolicy = [
  "Only reviews we can match to a completed booking on our WhatsApp line, or that appear on our Google Business Profile, are shown on this site.",
  "We do not write testimonials, invent star ratings or carry review counts we cannot point to. The previous figures were removed on 31 October 2026 for exactly that reason.",
  "When the Google Business Profile feed is connected, the rating and review count will be shown here with the date they were read.",
  "If you find a claim on this site without a source, message us and we will correct or remove it.",
];

const facts = [
  "In-villa treatments across Kuta, Legian, Seminyak, Canggu, Sanur, Jimbaran, Nusa Dua and Uluwatu.",
  "Daily booking window of 07:00 to 22:00, with same-day slots subject to therapist availability.",
  "The therapist brings a professional table, fresh linens and oils. You supply the space, we supply the rest.",
  "The price is quoted upfront in IDR with travel included, before you agree to the booking.",
  "You receive the assigned therapist's name and the arrival window on WhatsApp before they leave for your address.",
];

const checkList = [
  "Is the review dated, and is the date recent enough to describe how the service runs now?",
  "Does it name the treatment and where it happened — a villa, a hotel room or a shop? In-villa service works differently from a spa visit.",
  "Does the price quoted in the review match the published menu? A mismatch usually means the review is old or describes a different operator.",
  "Is the review hosted somewhere you can verify, such as Google, rather than copied text on the operator's own site?",
  "Does the operator reply to critical reviews, and does the reply address the problem rather than the reviewer?",
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta
        title="Massage Reviews Kuta - How We Publish Guest Feedback"
        description="How our in-villa massage team in Kuta handles guest reviews: what we publish, what we do not, how to leave feedback, and how to read any Bali massage review before you book."
        keywords="massage reviews Kuta, home massage Kuta reviews, in-villa massage Bali feedback, verified massage reviews Bali"
        canonical="/reviews"
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />

      <Header />

      <main>
        <section className="relative py-28 text-white overflow-hidden bg-professional-navy">
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Massage Reviews Kuta — How We Publish Guest Feedback
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 drop-shadow-md">
              We would rather show you nothing than show you a rating we cannot stand behind.
              This page explains what we publish, what we removed, how to leave feedback after a
              session, and how to judge any massage review in Bali before you book.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
              Our review policy
            </h2>
            <p className="text-lg text-spa-stone mb-6 leading-relaxed">
              A review is only useful to you if someone can show where it came from. That is the
              whole policy, and it is why this page looks thinner than most review pages on a
              massage site: we had ratings and client counts on it that could not be traced to any
              source, so they are gone until a real feed replaces them.
            </p>
            <ul className="space-y-4">
              {reviewPolicy.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-spa-stone">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-spa-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
              What we can tell you today
            </h2>
            <p className="text-lg text-spa-stone mb-6 leading-relaxed">
              These are operational facts, confirmed on 31 October 2026. They describe how a
              booking with us works rather than how popular we are, and you can test every one of
              them by messaging us before you commit to anything.
            </p>
            <ul className="space-y-3">
              {facts.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-spa-stone">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-spa-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
              How to leave feedback after your session
            </h2>
            <p className="text-lg text-spa-stone mb-4 leading-relaxed">
              Reply to the WhatsApp thread you booked on. We read every message, and if something
              went wrong we will tell you what we are changing rather than ask you to take it down.
              With your permission we publish the review with your first name, the treatment and the
              area you stayed in — never your phone number, room number or full name.
            </p>
            <p className="text-lg text-spa-stone mb-6 leading-relaxed">
              A Google review link is sent with your booking confirmation once our Google Business
              Profile is connected. Google reviews are the ones other guests can verify without
              taking our word for it, so we would rather you left feedback there than here.
            </p>
            <a
              href={SITE_CONFIG.socialMedia.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-professional-green font-medium text-lg hover:underline"
            >
              <MessageCircle className="w-5 h-5" />
              Send feedback on WhatsApp: {SITE_CONFIG.phone}
            </a>
          </div>
        </section>

        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-6">
              How to read any massage review in Bali
            </h2>
            <p className="text-lg text-spa-stone mb-6 leading-relaxed">
              The same five questions work on our reviews and on a competitor's. They take a minute
              and they filter out most of what you should ignore.
            </p>
            <ul className="space-y-4">
              {checkList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-spa-stone">
                  <Search className="w-5 h-5 mt-1 flex-shrink-0 text-spa-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Community />
        <BookingCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ReviewsPage;
