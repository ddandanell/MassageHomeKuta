import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to prepare anything?",
    answer: "No preparation needed! Our therapists arrive with everything required: professional massage table, fresh linens, premium oils, and sanitized equipment. Just ensure you have a suitable space with enough room for the massage table setup."
  },
  {
    question: "Can I book the same day?",
    answer: "Yes! We offer same-day booking based on availability. Our therapists are available from 07:00 to 22:00 daily. For the best availability, we recommend booking a few hours in advance via WhatsApp."
  },
  {
    question: "What payment methods are available?",
    answer: "We accept cash (Indonesian Rupiah), major credit cards, and mobile payment methods. Payment is due after your treatment is completed. Prices are fixed with no hidden fees."
  },
  {
    question: "Is the massage strictly professional?",
    answer: "Absolutely. We provide only therapeutic massage services performed by certified professionals. All our therapists maintain the highest ethical standards and professional boundaries at all times."
  },
  {
    question: "Are your therapists certified?",
    answer: "Yes, all our therapists hold internationally recognized certifications including VTCT Level 3 Diploma, CIBTAC certification, and specialized training from Bali International Spa Academy (BISA). They are experienced professionals committed to your wellness and safety."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-spa-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-spa-stone max-w-3xl mx-auto">
            Everything you need to know about our home massage service in Kuta.
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
  );
};

export default FAQ;