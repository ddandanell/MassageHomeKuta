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
        <meta name="description" content="Learn about Kuta's premier professional massage service. Licensed therapists, safety standards, and commitment to delivering luxury spa treatments to your villa or hotel in Bali." />
        <meta name="keywords" content="about massage Kuta, professional massage therapists, licensed therapists Bali, certified massage service, spa safety standards" />
      </Helmet>

      <SiteMeta
        title="About Professional Massage Service Kuta"
        description="Learn about Kuta's premier professional massage service. Licensed therapists, safety standards, and commitment to delivering luxury spa treatments to your villa or hotel in Bali."
        canonical="/about"
      />
      <StructuredData type="organization" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-4.jpg"
              alt="Professional certified massage therapists team providing premium treatments in Kuta Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-900/80 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              About Professional Massage Kuta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 drop-shadow-md">
              Professional massage service in Kuta bringing premium spa experiences directly to your villa or hotel. Our licensed therapists deliver certified treatments throughout Kuta, Legian, Seminyak, and beyond with the highest safety standards.
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
