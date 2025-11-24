import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StructuredData from "@/components/seo/StructuredData";

export interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Reusable FAQ section component with integrated Schema.org FAQPage markup
 * Each page should use this component with unique, localized FAQ content
 */
const PageFAQSection = ({ 
  faqs, 
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services.",
  className = ""
}: PageFAQSectionProps) => {
  // Generate structured data for Schema.org FAQPage
  const faqStructuredData = faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return (
    <>
      {/* Add FAQPage Schema.org structured data */}
      <StructuredData type="faq" data={faqStructuredData} />
      
      {/* FAQ Section */}
      <section id="faq" className={`py-16 bg-spa-cream/30 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-earth mb-4">
              {title}
            </h2>
            <p className="text-lg text-spa-stone max-w-3xl mx-auto">
              {description}
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
    </>
  );
};

export default PageFAQSection;
