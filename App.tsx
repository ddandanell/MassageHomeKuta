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
import SwedishMassage from "./pages/SwedishMassage";
import SignatureMassage from "./pages/SignatureMassage";
import HealingMassage from "./pages/HealingMassage";
import StressReliefMassage from "./pages/StressReliefMassage";
import BackPainMassage from "./pages/BackPainMassage";
import ShoulderTensionMassage from "./pages/ShoulderTensionMassage";
import HeadAndNeckMassage from "./pages/HeadAndNeckMassage";
import MuscleRecoveryTherapy from "./pages/MuscleRecoveryTherapy";
import TensionReleaseMassage from "./pages/TensionReleaseMassage";
import BodyRelaxationTherapy from "./pages/BodyRelaxationTherapy";
import RejuvenationMassage from "./pages/RejuvenationMassage";
import HarmonyMassage from "./pages/HarmonyMassage";
import TherapeuticTouchMassage from "./pages/TherapeuticTouchMassage";
import EnergyBalancingMassage from "./pages/EnergyBalancingMassage";
import SoothingOilMassage from "./pages/SoothingOilMassage";
import HolisticBodyMassage from "./pages/HolisticBodyMassage";
import RestorativeMassage from "./pages/RestorativeMassage";
import ComfortMassage from "./pages/ComfortMassage";
import GentleTouchMassage from "./pages/GentleTouchMassage";
import PremiumSpaTreatment from "./pages/PremiumSpaTreatment";
import RevitalizingMassage from "./pages/RevitalizingMassage";
import RejuvenatingBodyTreatment from "./pages/RejuvenatingBodyTreatment";
import CalmingBodyTreatment from "./pages/CalmingBodyTreatment";
import SpaBodyTreatment from "./pages/SpaBodyTreatment";

// SEO Landing Pages
import MessageKutaBali from "./pages/MessageKutaBali";
import CouplesMassageKuta from "./pages/CouplesMassageKuta";
import SpaNearMeKuta from "./pages/SpaNearMeKuta";
import MassageTherapistKutaBali from "./pages/MassageTherapistKutaBali";

// Blog Pages
import BlogHub from "./pages/BlogHub";
import BlogPost1Pricing from "./pages/BlogPost1Pricing";
import BlogPost2Booking from "./pages/BlogPost2Booking";
import BlogPost11Areas from "./pages/BlogPost11Areas";

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

// Special Landing Pages
import MessageKutaBali from "./pages/MessageKutaBali";

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
            
            {/* SEO Landing Pages */}
            <Route path="/message-kuta-bali" element={<MessageKutaBali />} />
            <Route path="/couples-massage-kuta" element={<CouplesMassageKuta />} />
            <Route path="/spa-near-me-kuta" element={<SpaNearMeKuta />} />
            <Route path="/massage-therapist-kuta-bali" element={<MassageTherapistKutaBali />} />
            
            {/* Blog Pages */}
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/blog/massage-kuta-bali-price-guide" element={<BlogPost1Pricing />} />
            <Route path="/blog/how-to-book-massage-kuta-whatsapp" element={<BlogPost2Booking />} />
            <Route path="/blog/best-areas-kuta-home-massage-coverage" element={<BlogPost11Areas />} />
            
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
            <Route path="/services/swedish-massage" element={<SwedishMassage />} />
            <Route path="/services/signature-massage" element={<SignatureMassage />} />
            <Route path="/services/healing-massage" element={<HealingMassage />} />
            <Route path="/services/stress-relief-massage" element={<StressReliefMassage />} />
            <Route path="/services/back-pain-massage" element={<BackPainMassage />} />
            <Route path="/services/shoulder-tension-massage" element={<ShoulderTensionMassage />} />
            <Route path="/services/head-and-neck-massage" element={<HeadAndNeckMassage />} />
            <Route path="/services/muscle-recovery-therapy" element={<MuscleRecoveryTherapy />} />
            <Route path="/services/tension-release-massage" element={<TensionReleaseMassage />} />
            <Route path="/services/body-relaxation-therapy" element={<BodyRelaxationTherapy />} />
            <Route path="/services/rejuvenation-massage" element={<RejuvenationMassage />} />
            <Route path="/services/harmony-massage" element={<HarmonyMassage />} />
            <Route path="/services/therapeutic-touch-massage" element={<TherapeuticTouchMassage />} />
            <Route path="/services/energy-balancing-massage" element={<EnergyBalancingMassage />} />
            <Route path="/services/soothing-oil-massage" element={<SoothingOilMassage />} />
            <Route path="/services/holistic-body-massage" element={<HolisticBodyMassage />} />
            <Route path="/services/restorative-massage" element={<RestorativeMassage />} />
            <Route path="/services/comfort-massage" element={<ComfortMassage />} />
            <Route path="/services/gentle-touch-massage" element={<GentleTouchMassage />} />
            <Route path="/services/premium-spa-treatment" element={<PremiumSpaTreatment />} />
            <Route path="/services/revitalizing-massage" element={<RevitalizingMassage />} />
            <Route path="/services/rejuvenating-body-treatment" element={<RejuvenatingBodyTreatment />} />
            <Route path="/services/calming-body-treatment" element={<CalmingBodyTreatment />} />
            <Route path="/services/spa-body-treatment" element={<SpaBodyTreatment />} />
            
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
            
            {/* Special Landing Pages */}
            <Route path="/message-kuta-bali" element={<MessageKutaBali />} />
            
            {/* 404 - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
