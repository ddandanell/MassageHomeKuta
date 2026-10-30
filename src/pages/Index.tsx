import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CrossLocationPromo from "@/components/CrossLocationPromo";
import Services from "@/components/Services";
import SignatureMassages from "@/components/SignatureMassages";
import PricingDetails from "@/components/PricingDetails";
import SpecialPackages from "@/components/SpecialPackages";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import VillaHotelService from "@/components/VillaHotelService";
import FlexibleScheduling from "@/components/FlexibleScheduling";
import ServiceAreas from "@/components/ServiceAreas";
import HealthBenefits from "@/components/HealthBenefits";
import SafetyStandards from "@/components/SafetyStandards";
import Therapists from "@/components/Therapists";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="In-Villa & Hotel Massage in Kuta, Bali"
        description="Book a certified home massage in Kuta, Bali. Balinese, deep tissue and couples treatments delivered to your villa or hotel. WhatsApp for same-day booking."
        keywords="home massage kuta, in-villa massage kuta, hotel massage bali, couples massage kuta, balinese massage kuta, deep tissue massage kuta, mobile spa bali"
        canonical="/"
      />
      <StructuredData type="organization" includeReviews={true} />
      <StructuredData type="website" />
      <Header />
      <Hero />
      <CrossLocationPromo />
      <Services />
      <PricingDetails />
      <SignatureMassages />
      <SpecialPackages />
      <HowItWorks />
      <WhyChooseUs />
      <VillaHotelService />
      <FlexibleScheduling />
      <ServiceAreas />
      <HealthBenefits />
      <SafetyStandards />
      <Therapists />
      <Community />
      <Testimonials />
      <About />
      <FAQ />
      <BookingForm />
      <BookingCTA />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
