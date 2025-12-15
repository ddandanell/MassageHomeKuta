import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Star } from "lucide-react";

const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Customer Reviews - Home Massage Kuta | 4.9★ Rated Service"
        description="Read authentic reviews from 500+ satisfied customers. See why Home Massage Kuta is the #1 rated in-villa massage service in Bali with 4.9 stars."
        keywords="massage reviews Kuta, customer testimonials, 5 star massage Bali, best massage service reviews"
        canonical="/reviews"
      />
      <StructuredData type="service" />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <div className="flex justify-center items-center gap-2 mb-6">
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              What Our Customers Say
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 drop-shadow-md">
              Over <strong>500+ happy customers</strong> from 25+ countries have experienced our 
              premium in-villa massage service. Here's what they have to say.
            </p>
          </div>
        </section>

        <Testimonials />
        <Community />
        
        {/* Additional Review Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Trusted by Travelers Worldwide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Would Recommend</div>
              </div>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default ReviewsPage;
