import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./i18n";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import Sitemap from "./pages/Sitemap";
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
import CangguArea from "./pages/CangguArea";
import UbudArea from "./pages/UbudArea";
import SanurArea from "./pages/SanurArea";
import DenpasarArea from "./pages/DenpasarArea";
import JimbaranArea from "./pages/JimbaranArea";
import NusaDuaArea from "./pages/NusaDuaArea";
import UluwatuArea from "./pages/UluwatuArea";
import PecatuArea from "./pages/PecatuArea";
import BukitPeninsulaArea from "./pages/BukitPeninsulaArea";
import UngasanArea from "./pages/UngasanArea";
import PererenanArea from "./pages/PererenanArea";
import BerawaArea from "./pages/BerawaArea";
import EchoBeachArea from "./pages/EchoBeachArea";
import BatuBolongArea from "./pages/BatuBolongArea";
import PetitengetArea from "./pages/PetitengetArea";
import KerobokanArea from "./pages/KerobokanArea";
import TanjungBenoaArea from "./pages/TanjungBenoaArea";
import BenoaArea from "./pages/BenoaArea";
import PadangPadangArea from "./pages/PadangPadangArea";
import BinginArea from "./pages/BinginArea";
import DreamlandArea from "./pages/DreamlandArea";
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

import CouplesMassageKuta from "./pages/CouplesMassageKuta";
import SpaNearMeKuta from "./pages/SpaNearMeKuta";
import MassageTherapistKutaBali from "./pages/MassageTherapistKutaBali";
// New Specialty Massage Pages - Batch 1
import HealingMassage from "./pages/HealingMassage";
import TensionReleaseMassage from "./pages/TensionReleaseMassage";
import MuscleRecoveryTherapy from "./pages/MuscleRecoveryTherapy";
import BodyRelaxationTherapy from "./pages/BodyRelaxationTherapy";
import StressReliefMassage from "./pages/StressReliefMassage";
import SwedishMassage from "./pages/SwedishMassage";
import SignatureMassage from "./pages/SignatureMassage";
import RejuvenationMassage from "./pages/RejuvenationMassage";
import HarmonyMassage from "./pages/HarmonyMassage";
import TherapeuticTouchMassage from "./pages/TherapeuticTouchMassage";
// New Specialty Massage Pages - Batch 2
import RejuvenatingBodyTreatment from "./pages/RejuvenatingBodyTreatment";
import EnergyBalancingMassage from "./pages/EnergyBalancingMassage";
import SoothingOilMassage from "./pages/SoothingOilMassage";
import HeadAndNeckMassage from "./pages/HeadAndNeckMassage";
import BackPainMassage from "./pages/BackPainMassage";
import ShoulderTensionMassage from "./pages/ShoulderTensionMassage";
import CalmingBodyTreatment from "./pages/CalmingBodyTreatment";
import HolisticBodyMassage from "./pages/HolisticBodyMassage";
import SpaBodyTreatment from "./pages/SpaBodyTreatment";
import RestorativeMassage from "./pages/RestorativeMassage";
// New Specialty Massage Pages - Batch 3
import ComfortMassage from "./pages/ComfortMassage";
import GentleTouchMassage from "./pages/GentleTouchMassage";
import PremiumSpaTreatment from "./pages/PremiumSpaTreatment";
import RevitalizingMassage from "./pages/RevitalizingMassage";
import NotFound from "./pages/NotFound";
import RecommendedServices from "./pages/RecommendedServices";

const queryClient = new QueryClient();

// Define all routes in one place - they will be rendered for both English (/) and Indonesian (/id/) paths
const routeConfig = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/areas", element: <ServiceAreas /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/reviews", element: <ReviewsPage /> },
  { path: "/packages", element: <Packages /> },
  { path: "/therapists", element: <TherapistsPage /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/recommended-services", element: <RecommendedServices /> },
  // Service Area Landing Pages
  { path: "/areas/kuta", element: <KutaArea /> },
  { path: "/areas/legian", element: <LegianArea /> },
  { path: "/areas/seminyak", element: <SeminyakArea /> },
  { path: "/areas/tuban", element: <TubanArea /> },
  { path: "/areas/kuta-beachfront", element: <KutaBeachfrontArea /> },
  { path: "/areas/kuta-central", element: <KutaCentralArea /> },
  { path: "/areas/canggu", element: <CangguArea /> },
  { path: "/areas/ubud", element: <UbudArea /> },
  { path: "/areas/sanur", element: <SanurArea /> },
  { path: "/areas/denpasar", element: <DenpasarArea /> },
  { path: "/areas/jimbaran", element: <JimbaranArea /> },
  { path: "/areas/nusa-dua", element: <NusaDuaArea /> },
  { path: "/areas/uluwatu", element: <UluwatuArea /> },
  { path: "/areas/pecatu", element: <PecatuArea /> },
  { path: "/areas/bukit-peninsula", element: <BukitPeninsulaArea /> },
  { path: "/areas/ungasan", element: <UngasanArea /> },
  { path: "/areas/pererenan", element: <PererenanArea /> },
  { path: "/areas/berawa", element: <BerawaArea /> },
  { path: "/areas/echo-beach", element: <EchoBeachArea /> },
  { path: "/areas/batu-bolong", element: <BatuBolongArea /> },
  { path: "/areas/petitenget", element: <PetitengetArea /> },
  { path: "/areas/kerobokan", element: <KerobokanArea /> },
  { path: "/areas/tanjung-benoa", element: <TanjungBenoaArea /> },
  { path: "/areas/benoa", element: <BenoaArea /> },
  { path: "/areas/padang-padang", element: <PadangPadangArea /> },
  { path: "/areas/bingin", element: <BinginArea /> },
  { path: "/areas/dreamland", element: <DreamlandArea /> },
  // Massage Type Landing Pages
  { path: "/services/balinese-massage", element: <BalineseMassage /> },
  { path: "/services/deep-tissue-massage", element: <DeepTissueMassage /> },
  { path: "/services/aromatherapy-massage", element: <AromatherapyMassage /> },
  { path: "/services/lymphatic-drainage-massage", element: <LymphaticDrainageMassage /> },
  { path: "/services/thai-massage", element: <ThaiMassage /> },
  { path: "/services/hot-stone-massage", element: <HotStoneMassage /> },
  { path: "/services/four-hands-massage", element: <FourHandsMassage /> },
  { path: "/services/pregnancy-massage", element: <PregnancyMassage /> },
  { path: "/services/foot-reflexology", element: <FootReflexology /> },
  { path: "/services/jet-lag-recovery-massage", element: <JetLagRecoveryMassage /> },
  // New Specialty Massage Type Landing Pages - Batch 1
  { path: "/services/healing-massage", element: <HealingMassage /> },
  { path: "/services/tension-release-massage", element: <TensionReleaseMassage /> },
  { path: "/services/muscle-recovery-therapy", element: <MuscleRecoveryTherapy /> },
  { path: "/services/body-relaxation-therapy", element: <BodyRelaxationTherapy /> },
  { path: "/services/stress-relief-massage", element: <StressReliefMassage /> },
  { path: "/services/swedish-massage", element: <SwedishMassage /> },
  { path: "/services/signature-massage", element: <SignatureMassage /> },
  { path: "/services/rejuvenation-massage", element: <RejuvenationMassage /> },
  { path: "/services/harmony-massage", element: <HarmonyMassage /> },
  { path: "/services/therapeutic-touch-massage", element: <TherapeuticTouchMassage /> },
  // New Specialty Massage Type Landing Pages - Batch 2
  { path: "/services/rejuvenating-body-treatment", element: <RejuvenatingBodyTreatment /> },
  { path: "/services/energy-balancing-massage", element: <EnergyBalancingMassage /> },
  { path: "/services/soothing-oil-massage", element: <SoothingOilMassage /> },
  { path: "/services/head-and-neck-massage", element: <HeadAndNeckMassage /> },
  { path: "/services/back-pain-massage", element: <BackPainMassage /> },
  { path: "/services/shoulder-tension-massage", element: <ShoulderTensionMassage /> },
  { path: "/services/calming-body-treatment", element: <CalmingBodyTreatment /> },
  { path: "/services/holistic-body-massage", element: <HolisticBodyMassage /> },
  { path: "/services/spa-body-treatment", element: <SpaBodyTreatment /> },
  { path: "/services/restorative-massage", element: <RestorativeMassage /> },
  // New Specialty Massage Type Landing Pages - Batch 3
  { path: "/services/comfort-massage", element: <ComfortMassage /> },
  { path: "/services/gentle-touch-massage", element: <GentleTouchMassage /> },
  { path: "/services/premium-spa-treatment", element: <PremiumSpaTreatment /> },
  { path: "/services/revitalizing-massage", element: <RevitalizingMassage /> },
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
          <Routes>
            {/* English routes (default, no prefix) */}
            {routeConfig.map((route, index) => (
              <Route key={`en-${index}`} path={route.path} element={route.element} />
            ))}
            
            {/* Indonesian routes (/id prefix) */}
            {routeConfig.map((route, index) => (
              <Route 
                key={`id-${index}`} 
                path={`/id${route.path === '/' ? '' : route.path}`} 
                element={route.element} 
              />
            ))}
            {/* Handle /id as Indonesian home page */}
            <Route path="/id" element={<Index />} />
            
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/areas" element={<ServiceAreas />} />
            <Route path="/sitemap" element={<Sitemap />} />
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
            <Route path="/areas/canggu" element={<CangguArea />} />
            <Route path="/areas/ubud" element={<UbudArea />} />
            <Route path="/areas/sanur" element={<SanurArea />} />
            <Route path="/areas/denpasar" element={<DenpasarArea />} />
            <Route path="/areas/jimbaran" element={<JimbaranArea />} />
            <Route path="/areas/nusa-dua" element={<NusaDuaArea />} />
            <Route path="/areas/uluwatu" element={<UluwatuArea />} />
            <Route path="/areas/pecatu" element={<PecatuArea />} />
            <Route path="/areas/bukit-peninsula" element={<BukitPeninsulaArea />} />
            <Route path="/areas/ungasan" element={<UngasanArea />} />
            <Route path="/areas/pererenan" element={<PererenanArea />} />
            <Route path="/areas/berawa" element={<BerawaArea />} />
            <Route path="/areas/echo-beach" element={<EchoBeachArea />} />
            <Route path="/areas/batu-bolong" element={<BatuBolongArea />} />
            <Route path="/areas/petitenget" element={<PetitengetArea />} />
            <Route path="/areas/kerobokan" element={<KerobokanArea />} />
            <Route path="/areas/tanjung-benoa" element={<TanjungBenoaArea />} />
            <Route path="/areas/benoa" element={<BenoaArea />} />
            <Route path="/areas/padang-padang" element={<PadangPadangArea />} />
            <Route path="/areas/bingin" element={<BinginArea />} />
            <Route path="/areas/dreamland" element={<DreamlandArea />} />
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
            {/* New Specialty Massage Type Landing Pages - Batch 1 */}
            <Route path="/services/healing-massage" element={<HealingMassage />} />
            <Route path="/services/tension-release-massage" element={<TensionReleaseMassage />} />
            <Route path="/services/muscle-recovery-therapy" element={<MuscleRecoveryTherapy />} />
            <Route path="/services/body-relaxation-therapy" element={<BodyRelaxationTherapy />} />
            <Route path="/services/stress-relief-massage" element={<StressReliefMassage />} />
            <Route path="/services/swedish-massage" element={<SwedishMassage />} />
            <Route path="/services/signature-massage" element={<SignatureMassage />} />
            <Route path="/services/rejuvenation-massage" element={<RejuvenationMassage />} />
            <Route path="/services/harmony-massage" element={<HarmonyMassage />} />
            <Route path="/services/therapeutic-touch-massage" element={<TherapeuticTouchMassage />} />
            {/* New Specialty Massage Type Landing Pages - Batch 2 */}
            <Route path="/services/rejuvenating-body-treatment" element={<RejuvenatingBodyTreatment />} />
            <Route path="/services/energy-balancing-massage" element={<EnergyBalancingMassage />} />
            <Route path="/services/soothing-oil-massage" element={<SoothingOilMassage />} />
            <Route path="/services/head-and-neck-massage" element={<HeadAndNeckMassage />} />
            <Route path="/services/back-pain-massage" element={<BackPainMassage />} />
            <Route path="/services/shoulder-tension-massage" element={<ShoulderTensionMassage />} />
            <Route path="/services/calming-body-treatment" element={<CalmingBodyTreatment />} />
            <Route path="/services/holistic-body-massage" element={<HolisticBodyMassage />} />
            <Route path="/services/spa-body-treatment" element={<SpaBodyTreatment />} />
            <Route path="/services/restorative-massage" element={<RestorativeMassage />} />
            {/* New Specialty Massage Type Landing Pages - Batch 3 */}
            <Route path="/services/comfort-massage" element={<ComfortMassage />} />
            <Route path="/services/gentle-touch-massage" element={<GentleTouchMassage />} />
            <Route path="/services/premium-spa-treatment" element={<PremiumSpaTreatment />} />
            <Route path="/services/revitalizing-massage" element={<RevitalizingMassage />} />
            {/* Special Landing Pages */}
            <Route path="/couples-massage-kuta" element={<CouplesMassageKuta />} />
            <Route path="/spa-near-me-kuta" element={<SpaNearMeKuta />} />
            <Route path="/massage-therapist-kuta-bali" element={<MassageTherapistKutaBali />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
