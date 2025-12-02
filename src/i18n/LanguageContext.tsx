import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  getLocalePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

// Common UI translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.areas': 'Service Areas',
    'nav.packages': 'Packages',
    'nav.therapists': 'Therapists',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.reviews': 'Reviews',
    'nav.book_now': 'Book Now',

    // Hero & CTAs
    'hero.book_via_whatsapp': 'Book via WhatsApp',
    'hero.book_now': 'Book Now - WhatsApp',
    'hero.view_services': 'View All Services',
    'hero.view_areas': 'View All Service Areas',
    'hero.available_hours': 'Available 07:00 – 22:00 Daily',
    'hero.fast_response': 'Fast Response',

    // Common Sections
    'section.popular_services': 'Popular Massage Services',
    'section.why_choose_us': 'Why Choose Us',
    'section.faq': 'Frequently Asked Questions',
    'section.testimonials': 'What Our Clients Say',
    'section.nearby_areas': 'We Also Serve Nearby Areas',
    'section.trust_signals': 'Trusted by Travelers',
    'section.accommodation_types': 'We Serve All Accommodation Types',

    // Buttons
    'btn.learn_more': 'Learn More',
    'btn.view_all': 'View All',
    'btn.book_now': 'Book Now',
    'btn.contact_us': 'Contact Us',

    // Common Labels
    'label.response_time': 'Response Time',
    'label.price': 'Price',
    'label.duration': 'Duration',
    'label.techniques': 'Techniques Used',
    'label.benefits': 'Key Benefits',
    'label.ideal_for': 'Ideal For',
    'label.pressure_levels': 'Pressure Levels',

    // Trust Signals
    'trust.monthly_sessions': '500+ Monthly Sessions',
    'trust.happy_clients': '2,500+ Happy Clients',
    'trust.safe_insured': '100% Safe & Insured',
    'trust.same_day': 'Same-Day Booking',
    'trust.countries': '45+ Countries Served',

    // Footer
    'footer.contact': 'Contact Us',
    'footer.quick_links': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.areas': 'Service Areas',
    'footer.copyright': 'All rights reserved.',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.services': 'Layanan',
    'nav.areas': 'Area Layanan',
    'nav.packages': 'Paket',
    'nav.therapists': 'Terapis',
    'nav.faq': 'FAQ',
    'nav.about': 'Tentang Kami',
    'nav.reviews': 'Ulasan',
    'nav.book_now': 'Pesan Sekarang',

    // Hero & CTAs
    'hero.book_via_whatsapp': 'Pesan via WhatsApp',
    'hero.book_now': 'Pesan Sekarang - WhatsApp',
    'hero.view_services': 'Lihat Semua Layanan',
    'hero.view_areas': 'Lihat Semua Area Layanan',
    'hero.available_hours': 'Tersedia 07.00 – 22.00 Setiap Hari',
    'hero.fast_response': 'Respons Cepat',

    // Common Sections
    'section.popular_services': 'Layanan Pijat Populer',
    'section.why_choose_us': 'Mengapa Memilih Kami',
    'section.faq': 'Pertanyaan yang Sering Diajukan',
    'section.testimonials': 'Apa Kata Klien Kami',
    'section.nearby_areas': 'Kami Juga Melayani Area Sekitar',
    'section.trust_signals': 'Dipercaya oleh Wisatawan',
    'section.accommodation_types': 'Kami Melayani Semua Jenis Akomodasi',

    // Buttons
    'btn.learn_more': 'Selengkapnya',
    'btn.view_all': 'Lihat Semua',
    'btn.book_now': 'Pesan Sekarang',
    'btn.contact_us': 'Hubungi Kami',

    // Common Labels
    'label.response_time': 'Waktu Respons',
    'label.price': 'Harga',
    'label.duration': 'Durasi',
    'label.techniques': 'Teknik yang Digunakan',
    'label.benefits': 'Manfaat Utama',
    'label.ideal_for': 'Ideal Untuk',
    'label.pressure_levels': 'Tingkat Tekanan',

    // Trust Signals
    'trust.monthly_sessions': '500+ Sesi Bulanan',
    'trust.happy_clients': '2.500+ Klien Puas',
    'trust.safe_insured': '100% Aman & Berasuransi',
    'trust.same_day': 'Pemesanan Hari Sama',
    'trust.countries': '45+ Negara Dilayani',

    // Footer
    'footer.contact': 'Hubungi Kami',
    'footer.quick_links': 'Tautan Cepat',
    'footer.services': 'Layanan Kami',
    'footer.areas': 'Area Layanan',
    'footer.copyright': 'Hak cipta dilindungi.',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  initialLanguage = 'en'
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const t = useCallback((key: string, fallback?: string): string => {
    return translations[language][key] || fallback || key;
  }, [language]);

  const getLocalePath = useCallback((path: string): string => {
    // Clean the path
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    // English (default) doesn't need prefix, Indonesian needs /id prefix
    if (language === 'en') {
      return cleanPath;
    }
    return `/${language}${cleanPath}`;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Utility function to detect language from URL path
export const detectLanguageFromPath = (pathname: string): Language => {
  if (pathname.startsWith('/id/') || pathname === '/id') {
    return 'id';
  }
  return 'en';
};

// Utility function to strip language prefix from path
export const stripLanguagePrefix = (pathname: string): string => {
  if (pathname.startsWith('/en/')) {
    return pathname.slice(3);
  }
  if (pathname.startsWith('/id/')) {
    return pathname.slice(3);
  }
  if (pathname === '/en' || pathname === '/id') {
    return '/';
  }
  return pathname;
};

export default LanguageContext;
