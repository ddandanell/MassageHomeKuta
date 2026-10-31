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
        <title>About Professional Massage Service Kuta Bali</title>
        <meta name="description" content="About our in-villa massage team in Kuta, Bali. How sessions work, what therapists bring, coverage across south Bali and our booking standards." />
        <meta name="keywords" content="about massage Kuta, professional massage therapists, in-villa massage Bali, home massage service Kuta, mobile massage Bali" />
      </Helmet>

      <SiteMeta
        title="About Professional Massage Service Kuta"
        description="About our in-villa massage team in Kuta, Bali. How sessions work, what therapists bring, coverage across south Bali and our booking standards."
        canonical="/about"
      />
      <StructuredData type="organization" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/generated-images/about-hero.jpg"
              alt="Massage therapist setting up an in-villa treatment in Kuta, Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-900/80 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              About Professional Massage Kuta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 drop-shadow-md">
              Professional massage service in Kuta bringing spa treatments directly to your villa or hotel. Our team works across Kuta, Legian, Seminyak, Canggu, Sanur, Jimbaran, Nusa Dua and Uluwatu, with fresh linens, professional tables and oils included in every session.
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
