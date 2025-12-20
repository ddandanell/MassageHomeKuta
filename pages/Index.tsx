import SiteMeta from "@/components/seo/SiteMeta";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        title="Massage Kuta - #1 Professional Home Massage Service in Bali"
        description="Premium massage service in Kuta, Bali. Professional massage therapists deliver spa-quality massage treatments to your villa or hotel. Book same-day massage appointments. Licensed massage therapists trusted by 500+ clients."
        keywords="massage, massage kuta, massage bali, home massage, villa massage, hotel massage, professional massage, therapeutic massage, relaxation massage, spa massage, mobile massage, massage therapist, massage service, massage booking, massage appointment"
        canonical="/"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <Header />
      <Hero />
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
