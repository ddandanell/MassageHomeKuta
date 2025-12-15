import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

const faqs = [
  {
    question: "Do I need to prepare anything for the massage?",
    answer: "No preparation needed! Our therapists arrive with everything required: professional massage table, fresh linens, premium oils, and sanitized equipment. Just ensure you have a suitable space with enough room for the massage table setup (approximately 2m x 3m area)."
  },
  {
    question: "Can I book the same day?",
    answer: "Yes! We offer same-day booking based on availability. Our therapists are available from 7 AM to 10 PM daily. For the best availability, we recommend booking a few hours in advance via WhatsApp. During peak season, advance booking is recommended."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash (Indonesian Rupiah), major credit cards (Visa, Mastercard), and mobile payment methods (GoPay, OVO). Payment is due after your treatment is completed. Prices are fixed with no hidden fees or additional charges."
  },
  {
    question: "Is the massage strictly professional?",
    answer: "Absolutely. We provide only therapeutic massage services performed by certified professionals. All our therapists maintain the highest ethical standards and professional boundaries at all times. Any inappropriate requests will result in immediate termination of service."
  },
  {
    question: "Are your therapists certified and licensed?",
    answer: "Yes, all our therapists hold internationally recognized certifications including VTCT Level 3 Diploma, CIBTAC certification, and specialized training from Bali International Spa Academy (BISA). They are experienced professionals committed to your wellness and safety."
  },
  {
    question: "What areas do you serve in Kuta?",
    answer: "We serve all areas of Kuta and surrounding regions including Seminyak, Legian, Canggu, Jimbaran, and Nusa Dua. There are no additional travel charges within these areas. For locations outside our standard service area, please contact us for availability and pricing."
  },
  {
    question: "How long does each massage session last?",
    answer: "Our standard sessions are 60 or 90 minutes of actual massage time. We also offer 120-minute extended sessions for special packages. Setup and breakdown time is additional and typically takes 10-15 minutes before and after your session."
  },
  {
    question: "Can I request a specific therapist?",
    answer: "Yes, you can request a specific therapist when booking, subject to availability. We'll do our best to accommodate your preference. If your preferred therapist is not available, we'll match you with someone who specializes in your requested massage type."
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "We understand plans can change. Cancellations or rescheduling with at least 2 hours notice are free of charge. Cancellations with less than 2 hours notice may incur a 50% fee. No-shows will be charged the full amount."
  },
  {
    question: "Do you provide massage for pregnant women?",
    answer: "Yes, we offer prenatal massage services with therapists specially trained in pregnancy massage techniques. This service is available for women after their first trimester. Please inform us of your pregnancy when booking so we can assign an appropriate therapist."
  },
  {
    question: "What should I wear during the massage?",
    answer: "You can undress to your comfort level. Most clients prefer to undress completely for the best massage experience, but you may keep underwear on if preferred. You will be properly draped with fresh linens at all times, with only the area being massaged exposed."
  },
  {
    question: "Can I book for a group or multiple people?",
    answer: "Absolutely! We can arrange multiple therapists for group bookings, couples massages, and spa parties. For groups of 3 or more, we recommend booking at least 24 hours in advance to ensure therapist availability. Special group rates may apply."
  },
  {
    question: "What oils and products do you use?",
    answer: "We use only premium, natural massage oils and products, including organic coconut oil, jojoba oil, and essential oils for aromatherapy. All products are hypoallergenic and suitable for sensitive skin. If you have specific allergies or preferences, please inform us when booking."
  },
  {
    question: "Is tipping expected?",
    answer: "Tipping is not required but greatly appreciated if you're satisfied with the service. A tip of 10-15% is customary in Bali for exceptional service. You can tip directly to your therapist in cash."
  },
  {
    question: "What safety measures do you have in place?",
    answer: "We maintain strict safety and hygiene protocols including: fresh linens for each client, sanitized equipment, background-checked therapists, professional boundaries training, and health screening of all staff. We also carry liability insurance for additional peace of mind."
  }
];

// Create structured data for FAQ
const faqStructuredData = faqs.map((faq, index) => ({
  "@type": "Question",
  "name": faq.question,
  "acceptedAnswer": {
    "@type": "Answer",
    "text": faq.answer
  }
}));

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Frequently Asked Questions - Home Massage Kuta"
        description="Find answers to common questions about our professional home massage service in Kuta. Booking, pricing, therapists, and service details explained."
        keywords="massage faq kuta, home massage questions, villa massage booking, massage service questions kuta, spa service faq bali"
        canonical="/faq"
      />
      
      <StructuredData type="faq" data={faqStructuredData} />
      
      <Header />
      
      <main>
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your questions, answered. Find everything you need to know about our professional home and villa massage services.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Common Questions Answered
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We've compiled answers to the most frequently asked questions about our service. 
                This should help you book with confidence and know what to expect.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-gradient-card border-0 shadow-soft rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-spa-earth hover:text-spa-gold transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-spa-stone leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-spa-cream/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-spa-earth mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-spa-stone mb-8 max-w-2xl mx-auto">
              Our friendly team is here to help! Contact us directly for personalized assistance 
              or any questions not covered above.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <a href="https://wa.me/628112656869?text=I have a question about your massage service" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <a href="tel:+628112656869">
                  <Phone className="w-5 h-5" />
                  Call Direct
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-spa-earth mb-8">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <a href="/services">
                  <span className="font-semibold">Our Services</span>
                  <span className="text-sm opacity-75">View all massage types</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <a href="/packages">
                  <span className="font-semibold">Special Packages</span>
                  <span className="text-sm opacity-75">Save with package deals</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <a href="/therapists">
                  <span className="font-semibold">Our Therapists</span>
                  <span className="text-sm opacity-75">Meet our certified team</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col">
                <a href="/#booking">
                  <span className="font-semibold">Book Now</span>
                  <span className="text-sm opacity-75">Schedule your massage</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default FAQPage;