import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteMeta from "@/components/seo/SiteMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <SiteMeta 
        title="Page Not Found - Massage Service Kuta"
        description="The page you're looking for doesn't exist. Return to our home massage service page in Kuta, Bali to book your professional massage appointment."
        keywords="massage kuta, home massage bali, massage service"
        canonical="/404"
        noindex={true}
      />
      <Header />
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! The massage service page you're looking for doesn't exist.</p>
          <p className="mb-6 text-gray-500">Return to our home page to book your professional massage in Kuta, Bali.</p>
          <a href="/" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Return to Home Massage Service
          </a>
        </div>
      </div>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default NotFound;
