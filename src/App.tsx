import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/AboutPage";
import ReviewsPage from "./pages/ReviewsPage";
import Packages from "./pages/Packages";
import TherapistsPage from "./pages/TherapistsPage";
import FAQPage from "./pages/FAQPage";
import KutaArea from "./pages/KutaArea";
import LegianArea from "./pages/LegianArea";
import SeminyakArea from "./pages/SeminyakArea";
import TubanArea from "./pages/TubanArea";
import KutaBeachfrontArea from "./pages/KutaBeachfrontArea";
import KutaCentralArea from "./pages/KutaCentralArea";
import BalineseMassage from "./pages/BalineseMassage";
import DeepTissueMassage from "./pages/DeepTissueMassage";
import AromatherapyMassage from "./pages/AromatherapyMassage";
import LymphaticDrainageMassage from "./pages/LymphaticDrainageMassage";
import ThaiMassage from "./pages/ThaiMassage";
import HotStoneMassage from "./pages/HotStoneMassage";
import FourHandsMassage from "./pages/FourHandsMassage";
import PregnancyMassage from "./pages/PregnancyMassage";
import FootReflexology from "./pages/FootReflexology";
import JetLagRecoveryMassage from "./pages/JetLagRecoveryMassage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/therapists" element={<TherapistsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* Service Area Landing Pages */}
            <Route path="/areas/kuta" element={<KutaArea />} />
            <Route path="/areas/legian" element={<LegianArea />} />
            <Route path="/areas/seminyak" element={<SeminyakArea />} />
            <Route path="/areas/tuban" element={<TubanArea />} />
            <Route path="/areas/kuta-beachfront" element={<KutaBeachfrontArea />} />
            <Route path="/areas/kuta-central" element={<KutaCentralArea />} />
            {/* Massage Type Landing Pages */}
            <Route path="/services/balinese-massage" element={<BalineseMassage />} />
            <Route path="/services/deep-tissue-massage" element={<DeepTissueMassage />} />
            <Route path="/services/aromatherapy-massage" element={<AromatherapyMassage />} />
            <Route path="/services/lymphatic-drainage-massage" element={<LymphaticDrainageMassage />} />
            <Route path="/services/thai-massage" element={<ThaiMassage />} />
            <Route path="/services/hot-stone-massage" element={<HotStoneMassage />} />
            <Route path="/services/four-hands-massage" element={<FourHandsMassage />} />
            <Route path="/services/pregnancy-massage" element={<PregnancyMassage />} />
            <Route path="/services/foot-reflexology" element={<FootReflexology />} />
            <Route path="/services/jet-lag-recovery-massage" element={<JetLagRecoveryMassage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
