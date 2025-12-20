import SiteMeta from "@/components/seo/SiteMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Link } from "react-router-dom";
import { MapPin, Waves, Users, Package, HelpCircle, Star, MessageCircle } from "lucide-react";

const Sitemap = () => {
  const mainPages = [
    { name: "Home", path: "/", description: "Welcome to Home Massage Kuta" },
    { name: "Services", path: "/services", description: "View all massage services" },
    { name: "Service Areas", path: "/areas", description: "Coverage locations in Bali" },
    { name: "Packages", path: "/packages", description: "Special package deals" },
    { name: "Therapists", path: "/therapists", description: "Meet our certified therapists" },
    { name: "Reviews", path: "/reviews", description: "Client testimonials" },
    { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
    { name: "About", path: "/about", description: "Our story and credentials" }
  ];

  const massageServices = [
    { name: "Balinese Massage", path: "/services/balinese-massage" },
    { name: "Deep Tissue Massage", path: "/services/deep-tissue-massage" },
    { name: "Aromatherapy Massage", path: "/services/aromatherapy-massage" },
    { name: "Hot Stone Massage", path: "/services/hot-stone-massage" },
    { name: "Thai Massage", path: "/services/thai-massage" },
    { name: "Four Hands Massage", path: "/services/four-hands-massage" },
    { name: "Pregnancy Massage", path: "/services/pregnancy-massage" },
    { name: "Foot Reflexology", path: "/services/foot-reflexology" },
    { name: "Lymphatic Drainage Massage", path: "/services/lymphatic-drainage-massage" },
    { name: "Jet Lag Recovery Massage", path: "/services/jet-lag-recovery-massage" }
  ];

  const specialtyMassageServices = [
    { name: "Swedish Massage", path: "/services/swedish-massage" },
    { name: "Signature Massage", path: "/services/signature-massage" },
    { name: "Healing Massage", path: "/services/healing-massage" },
    { name: "Stress Relief Massage", path: "/services/stress-relief-massage" },
    { name: "Back Pain Massage", path: "/services/back-pain-massage" },
    { name: "Shoulder Tension Massage", path: "/services/shoulder-tension-massage" },
    { name: "Head and Neck Massage", path: "/services/head-and-neck-massage" },
    { name: "Muscle Recovery Therapy", path: "/services/muscle-recovery-therapy" },
    { name: "Tension Release Massage", path: "/services/tension-release-massage" },
    { name: "Body Relaxation Therapy", path: "/services/body-relaxation-therapy" },
    { name: "Rejuvenation Massage", path: "/services/rejuvenation-massage" },
    { name: "Harmony Massage", path: "/services/harmony-massage" },
    { name: "Therapeutic Touch Massage", path: "/services/therapeutic-touch-massage" },
    { name: "Energy Balancing Massage", path: "/services/energy-balancing-massage" },
    { name: "Soothing Oil Massage", path: "/services/soothing-oil-massage" },
    { name: "Holistic Body Massage", path: "/services/holistic-body-massage" },
    { name: "Restorative Massage", path: "/services/restorative-massage" },
    { name: "Comfort Massage", path: "/services/comfort-massage" },
    { name: "Gentle Touch Massage", path: "/services/gentle-touch-massage" },
    { name: "Revitalizing Massage", path: "/services/revitalizing-massage" },
    { name: "Calming Body Treatment", path: "/services/calming-body-treatment" },
    { name: "Rejuvenating Body Treatment", path: "/services/rejuvenating-body-treatment" },
    { name: "Spa Body Treatment", path: "/services/spa-body-treatment" },
    { name: "Premium Spa Treatment", path: "/services/premium-spa-treatment" }
  ];

  const primaryAreas = [
    { name: "Kuta", path: "/areas/kuta" },
    { name: "Legian", path: "/areas/legian" },
    { name: "Seminyak", path: "/areas/seminyak" },
    { name: "Tuban", path: "/areas/tuban" },
    { name: "Kuta Beachfront", path: "/areas/kuta-beachfront" },
    { name: "Kuta Central", path: "/areas/kuta-central" }
  ];

  const secondaryAreas = [
    { name: "Canggu", path: "/areas/canggu" },
    { name: "Sanur", path: "/areas/sanur" },
    { name: "Ubud", path: "/areas/ubud" },
    { name: "Nusa Dua", path: "/areas/nusa-dua" },
    { name: "Jimbaran", path: "/areas/jimbaran" },
    { name: "Uluwatu", path: "/areas/uluwatu" },
    { name: "Pecatu", path: "/areas/pecatu" },
    { name: "Bukit Peninsula", path: "/areas/bukit-peninsula" },
    { name: "Benoa", path: "/areas/benoa" },
    { name: "Tanjung Benoa", path: "/areas/tanjung-benoa" },
    { name: "Ungasan", path: "/areas/ungasan" },
    { name: "Dreamland", path: "/areas/dreamland" },
    { name: "Padang Padang", path: "/areas/padang-padang" },
    { name: "Bingin", path: "/areas/bingin" },
    { name: "Kerobokan", path: "/areas/kerobokan" },
    { name: "Petitenget", path: "/areas/petitenget" },
    { name: "Pererenan", path: "/areas/pererenan" },
    { name: "Batu Bolong", path: "/areas/batu-bolong" },
    { name: "Berawa", path: "/areas/berawa" },
    { name: "Echo Beach", path: "/areas/echo-beach" },
    { name: "Denpasar", path: "/areas/denpasar" }
  ];

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Sitemap - Complete Massage Service Pages Directory"
        description="Complete sitemap of all massage service pages on Home Massage Kuta. Browse our professional massage services, massage service areas, massage therapists, massage packages, and massage information pages. Find the perfect massage treatment for you."
        keywords="sitemap, massage pages, massage services directory, massage service areas, massage therapists pages, massage packages pages, massage treatment pages, massage appointment pages, massage service sitemap"
        canonical="/sitemap"
      />
      
      <Header />
      
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-spa-earth mb-6">
              Site Map
            </h1>
            <p className="text-xl text-spa-stone max-w-3xl mx-auto">
              Complete directory of all pages on Home Massage Kuta. Find massage services, service areas, 
              and helpful information quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Main Pages */}
            <div className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-spa-gold/20 rounded-lg flex items-center justify-center">
                  <Waves className="w-6 h-6 text-spa-gold" />
                </div>
                <h2 className="text-2xl font-bold text-spa-earth">Main Pages</h2>
              </div>
              <ul className="space-y-3">
                {mainPages.map((page, index) => (
                  <li key={index}>
                    <Link 
                      to={page.path}
                      className="flex flex-col p-3 rounded-lg hover:bg-spa-gold/10 transition-all duration-300"
                    >
                      <span className="text-spa-earth font-semibold">{page.name}</span>
                      <span className="text-sm text-spa-stone">{page.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Massage Services */}
            <div className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Waves className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-spa-earth">Massage Services</h2>
              </div>
              <ul className="space-y-2">
                {massageServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                    >
                      <span className="text-spa-earth font-medium">{service.name}</span>
                      <span className="text-emerald-600">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialty Massage Services */}
            <div className="bg-white rounded-lg shadow-soft p-8 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-spa-earth">Specialty Massage Services</h2>
              </div>
              <p className="text-sm text-spa-stone mb-4">24 specialized treatments for specific needs</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {specialtyMassageServices.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.path}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 text-sm"
                  >
                    <span className="text-spa-earth font-medium">{service.name}</span>
                    <span className="text-purple-600 text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Primary Service Areas */}
            <div className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-spa-earth">Primary Service Areas</h2>
              </div>
              <p className="text-sm text-spa-stone mb-4">Fastest response times (15-35 minutes)</p>
              <ul className="space-y-2">
                {primaryAreas.map((area, index) => (
                  <li key={index}>
                    <Link 
                      to={area.path}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
                    >
                      <span className="text-spa-earth font-medium">{area.name}</span>
                      <span className="text-blue-600">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extended Service Areas */}
            <div className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-spa-earth">Extended Coverage Areas</h2>
              </div>
              <p className="text-sm text-spa-stone mb-4">27 locations throughout Bali</p>
              <div className="grid grid-cols-2 gap-2">
                {secondaryAreas.map((area, index) => (
                  <Link 
                    key={index}
                    to={area.path}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-indigo-50 transition-all duration-300 text-sm"
                  >
                    <span className="text-spa-earth font-medium">{area.name}</span>
                    <span className="text-indigo-600 text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 py-12 bg-spa-cream/30 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-spa-earth mb-2">Website at a Glance</h3>
              <p className="text-spa-stone">Comprehensive coverage across Bali</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-spa-gold mb-2">70+</div>
                <div className="text-sm text-spa-stone">Total Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">34</div>
                <div className="text-sm text-spa-stone">Massage Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">27</div>
                <div className="text-sm text-spa-stone">Service Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-sm text-spa-stone">Coverage</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-spa-earth mb-4">
              Ready to Book Your Massage?
            </h3>
            <p className="text-lg text-spa-stone mb-8 max-w-2xl mx-auto">
              Choose your preferred massage service and location. We'll be there in 15-90 minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Browse Services
              </Link>
              <Link 
                to="/areas"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Sitemap;
