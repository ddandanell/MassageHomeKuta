import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

const faqs = [
  {
    question: "Do I need to prepare anything for the massage?",
    answer: "No preparation needed! Our therapists arrive with everything required: fresh linens, premium oils, and sanitized equipment. Just ensure you have a comfortable, clean space to relax in."
  },
  {
    question: "Can I book the same day?",
    answer: "Yes! We offer same-day booking based on availability. Our terapis are available from 07:00 to 22:00 daily. For the best availability, we recommend booking a few hours in advance via WhatsApp. During peak season, advance booking is recommended."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash (Indonesian Rupiah), major credit cards (Visa, Mastercard), and mobile payment methods (GoPay, OVO). Payment is due after your treatment is completed. Prices are fixed with no hidden fees or additional charges."
  },
  {
    question: "Is the massage strictly professional?",
    answer: "Absolutely. We provide only therapeutic massage (pijat) services performed by trained professionals. All our terapis maintain the highest ethical standards and professional boundaries at all times. Any inappropriate requests will result in immediate termination of service."
  },
  {
    question: "Are your therapists certified and licensed?",
    answer: "Every therapist on our team is trained in Balinese and therapeutic massage, and we brief each session before the therapist leaves for your address. We do not publish certificate names we cannot show you. Ask us on WhatsApp before booking and we will confirm the training background of the therapist assigned to your session, along with their name and arrival window."
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
  },
  {
    question: "How can massage help reduce stress?",
    answer: "Massage therapy (pijat) is a powerful tool for managing stress, both physically and mentally. During a massage, gentle pressure and rhythmic movements help release muscle tension and improve blood circulation, which can ease physical discomfort caused by stress. Additionally, massage has been shown to lower the body's levels of cortisol, the primary stress hormone, while increasing the production of endorphins and serotonin—chemicals that promote relaxation and a positive mood. Regular massage sessions can help you better cope with daily pressures, improve sleep quality, and support overall health, making it an effective addition to any stress management routine."
  },
  {
    question: "What are the most common massage techniques?",
    answer: "There are several popular massage techniques, each designed to address specific needs and preferences. Swedish massage is known for its long, flowing strokes that promote relaxation and improve circulation, making it ideal for those new to massage. Deep tissue massage targets deeper layers of muscle and connective tissue to relieve chronic pain and muscle tension, often used by athletes or those with persistent discomfort. Hot stone massage uses heated stones to soothe muscles and enhance relaxation, while aromatherapy massage (pijat aromaterapi) incorporates essential oils to stimulate the senses and provide additional therapeutic benefits. Other techniques, such as Thai massage or reflexology, offer unique approaches to healing and relaxation, ensuring there is a suitable option for everyone."
  },
  {
    question: "Where can I find a professional massage therapist?",
    answer: "Finding a qualified massage therapist is essential for a safe and effective experience. Start by researching reputable spas, wellness centers, and clinics in your area that offer professional massage services. Look for therapists who are licensed or certified, as this ensures they have received proper training and adhere to industry standards. Reading online reviews and seeking recommendations from friends or healthcare providers can also help you find trustworthy practitioners. Many therapists specialize in different techniques, so consider your specific needs—such as relaxation, pain relief, or prenatal care—when making your choice. Booking a consultation or asking questions about their experience and approach can further ensure you receive the best possible care."
  },
  {
    question: "Is massage safe during pregnancy?",
    answer: "Massage can be highly beneficial during pregnancy, helping to relieve common discomforts such as back pain, swelling, and fatigue. However, it is crucial that the massage is performed by a therapist trained in prenatal techniques, as they understand the unique needs and precautions required for expectant mothers. Prenatal massage typically avoids certain pressure points and positions to ensure the safety of both mother and baby. Before scheduling a massage, it's always best to consult with your healthcare provider to confirm that massage is appropriate for your stage of pregnancy and to discuss any specific concerns or medical conditions. With proper care, massage can be a safe and soothing way to support your well-being throughout pregnancy."
  },
  {
    question: "Should I drink water after a massage?",
    answer: "Drinking water after a massage (pijat) is highly recommended to support your body's natural detoxification processes. Massage stimulates circulation and helps release metabolic waste products from your muscles into the bloodstream. Staying hydrated assists your kidneys in flushing out these toxins more efficiently, reducing the risk of soreness or fatigue after your session. Additionally, proper hydration helps maintain muscle elasticity and overall health, enhancing the benefits of your massage. Make it a habit to drink plenty of water both before and after your massage to maximize recovery, promote healing, and keep your body functioning at its best."
  },
  {
    question: "How much does a home massage cost in Kuta?",
    answer: "Home massage in Kuta costs IDR 250,000-1,100,000 depending on the massage type and duration. A 90-minute Balinese massage is IDR 450,000, including therapist travel, equipment, oils, and linens with no hidden fees."
  },
  {
    question: "What is the best massage for first-timers in Kuta?",
    answer: "Balinese massage is ideal for first-timers in Kuta. It uses medium pressure, aromatherapy oils, and gentle stretching for full-body relaxation while introducing you to authentic Balinese healing traditions."
  },
  {
    question: "Can I book a same-day massage in Kuta?",
    answer: "Yes. Home Massage Kuta offers same-day booking via WhatsApp from 07:00-22:00, subject to therapist availability. We recommend booking a few hours in advance, especially during peak tourist season."
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
        title="Massage FAQ Kuta - Common Questions Answered"
        description="Answers to the questions guests ask before booking an in-villa massage in Kuta: what to prepare, same-day availability, payment methods, session length and service areas."
        keywords="massage FAQ Kuta, home massage questions, villa massage booking, massage service questions, spa FAQ Bali, massage therapy questions"
        canonical="/faq"
      />

      <StructuredData type="faq" data={faqStructuredData} />

      <Header />

      <main>
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-1.jpg"
              alt="In-villa massage setup in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-purple-900/80 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Massage FAQ Kuta - Common Questions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Get answers to frequently asked questions about professional massage in Kuta. Learn about our therapists, booking process, pricing, safety standards, and available treatments delivered to your villa or hotel.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
                Everything You Need to Know About Massage
              </h2>
              <p className="text-xl text-spa-stone max-w-3xl mx-auto">
                We've compiled answers to the most frequently asked questions about massage therapy (pijat) and our service.
                This should help you book with confidence and understand how massage can benefit your health and overall well-being.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Native details/summary rather than a Radix accordion: Radix keeps a closed
                  panel out of the DOM, so the answers never reached the HTML a crawler reads
                  while the FAQPage schema still claimed them (QA T-0006, 2026-10-31). */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-gradient-card border-0 shadow-soft rounded-xl px-6 py-4 group"
                    open={index === 0}
                  >
                    <summary className="cursor-pointer list-none text-left text-lg font-semibold text-spa-earth hover:text-spa-gold transition-colors">
                      <h3 className="inline text-lg font-semibold">{faq.question}</h3>
                    </summary>
                    <p className="text-spa-stone leading-relaxed pt-3">{faq.answer}</p>
                  </details>
                ))}
              </div>
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
                  <span className="text-sm opacity-75">Meet our therapists</span>
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