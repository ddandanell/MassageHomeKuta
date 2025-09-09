import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Therapists from "@/components/Therapists";
import SafetyStandards from "@/components/SafetyStandards";
import Community from "@/components/Community";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Home Massage Kuta - Professional In-Villa Massage Services</title>
        <meta name="description" content="Learn about Home Massage Kuta's professional team, safety standards, and commitment to providing luxury spa treatments in your villa or hotel in Bali." />
        <meta name="keywords" content="about us, professional massage, Kuta massage therapists, licensed therapists Bali, spa services" />
      </Helmet>
      
      <SiteMeta 
        title="About Home Massage Kuta - Professional In-Villa Massage Services"
        description="Learn about Home Massage Kuta's professional team, safety standards, and commitment to providing luxury spa treatments in your villa or hotel in Bali."
      />
      <StructuredData type="organization" />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              About Home Massage Kuta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 drop-shadow-md">
              Bringing premium spa experiences directly to your villa or hotel room throughout Kuta, 
              Legian, and Tuban with professional, licensed therapists.
            </p>
          </div>
        </section>

        <About />
        <WhyChooseUs />
        <Therapists />
        <SafetyStandards />
        <Community />
        <BookingCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
