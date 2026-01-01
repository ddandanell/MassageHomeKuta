import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import Sitemap from "./pages/Sitemap";
import AboutPage from "./pages/AboutPage";
import ReviewsPage from "./pages/ReviewsPage";
import Packages from "./pages/Packages";
import TherapistsPage from "./pages/TherapistsPage";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";
import RecommendedServices from "./pages/RecommendedServices";

// Service/Massage Type Pages
import BalineseMassage from "./pages/BalineseMassage";
import DeepTissueMassage from "./pages/DeepTissueMassage";
import AromatherapyMassage from "./pages/AromatherapyMassage";
import HotStoneMassage from "./pages/HotStoneMassage";
import ThaiMassage from "./pages/ThaiMassage";
import FourHandsMassage from "./pages/FourHandsMassage";
import PregnancyMassage from "./pages/PregnancyMassage";
import FootReflexology from "./pages/FootReflexology";
import JetLagRecoveryMassage from "./pages/JetLagRecoveryMassage";
import LymphaticDrainageMassage from "./pages/LymphaticDrainageMassage";

// Service Area/City Pages
import KutaArea from "./pages/KutaArea";
import LegianArea from "./pages/LegianArea";
import SeminyakArea from "./pages/SeminyakArea";
import TubanArea from "./pages/TubanArea";
import KutaBeachfrontArea from "./pages/KutaBeachfrontArea";
import KutaCentralArea from "./pages/KutaCentralArea";
import CangguArea from "./pages/CangguArea";
import SanurArea from "./pages/SanurArea";
import UbudArea from "./pages/UbudArea";
import NusaDuaArea from "./pages/NusaDuaArea";
import JimbaranArea from "./pages/JimbaranArea";
import UluwatuArea from "./pages/UluwatuArea";
import PecatuArea from "./pages/PecatuArea";
import BukitPeninsulaArea from "./pages/BukitPeninsulaArea";
import BenoaArea from "./pages/BenoaArea";
import TanjungBenoaArea from "./pages/TanjungBenoaArea";
import UngasanArea from "./pages/UngasanArea";
import DreamlandArea from "./pages/DreamlandArea";
import PadangPadangArea from "./pages/PadangPadangArea";
import BinginArea from "./pages/BinginArea";
import KerobokanArea from "./pages/KerobokanArea";
import PetitengetArea from "./pages/PetitengetArea";
import PererenanArea from "./pages/PererenanArea";
import BatuBolongArea from "./pages/BatuBolongArea";
import BerawaArea from "./pages/BerawaArea";
import EchoBeachArea from "./pages/EchoBeachArea";
import DenpasarArea from "./pages/DenpasarArea";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<ServiceAreas />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/therapists" element={<TherapistsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/recommended-services" element={<RecommendedServices />} />
            
            {/* Service/Massage Type Pages */}
            <Route path="/services/balinese-massage" element={<BalineseMassage />} />
            <Route path="/services/deep-tissue-massage" element={<DeepTissueMassage />} />
            <Route path="/services/aromatherapy-massage" element={<AromatherapyMassage />} />
            <Route path="/services/hot-stone-massage" element={<HotStoneMassage />} />
            <Route path="/services/thai-massage" element={<ThaiMassage />} />
            <Route path="/services/four-hands-massage" element={<FourHandsMassage />} />
            <Route path="/services/pregnancy-massage" element={<PregnancyMassage />} />
            <Route path="/services/foot-reflexology" element={<FootReflexology />} />
            <Route path="/services/jet-lag-recovery-massage" element={<JetLagRecoveryMassage />} />
            <Route path="/services/lymphatic-drainage-massage" element={<LymphaticDrainageMassage />} />
            
            {/* Service Area/City Pages */}
            <Route path="/areas/kuta" element={<KutaArea />} />
            <Route path="/areas/legian" element={<LegianArea />} />
            <Route path="/areas/seminyak" element={<SeminyakArea />} />
            <Route path="/areas/tuban" element={<TubanArea />} />
            <Route path="/areas/kuta-beachfront" element={<KutaBeachfrontArea />} />
            <Route path="/areas/kuta-central" element={<KutaCentralArea />} />
            <Route path="/areas/canggu" element={<CangguArea />} />
            <Route path="/areas/sanur" element={<SanurArea />} />
            <Route path="/areas/ubud" element={<UbudArea />} />
            <Route path="/areas/nusa-dua" element={<NusaDuaArea />} />
            <Route path="/areas/jimbaran" element={<JimbaranArea />} />
            <Route path="/areas/uluwatu" element={<UluwatuArea />} />
            <Route path="/areas/pecatu" element={<PecatuArea />} />
            <Route path="/areas/bukit-peninsula" element={<BukitPeninsulaArea />} />
            <Route path="/areas/benoa" element={<BenoaArea />} />
            <Route path="/areas/tanjung-benoa" element={<TanjungBenoaArea />} />
            <Route path="/areas/ungasan" element={<UngasanArea />} />
            <Route path="/areas/dreamland" element={<DreamlandArea />} />
            <Route path="/areas/padang-padang" element={<PadangPadangArea />} />
            <Route path="/areas/bingin" element={<BinginArea />} />
            <Route path="/areas/kerobokan" element={<KerobokanArea />} />
            <Route path="/areas/petitenget" element={<PetitengetArea />} />
            <Route path="/areas/pererenan" element={<PererenanArea />} />
            <Route path="/areas/batu-bolong" element={<BatuBolongArea />} />
            <Route path="/areas/berawa" element={<BerawaArea />} />
            <Route path="/areas/echo-beach" element={<EchoBeachArea />} />
            <Route path="/areas/denpasar" element={<DenpasarArea />} />
            
            {/* 404 - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
