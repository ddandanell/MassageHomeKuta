import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage, Language, stripLanguagePrefix } from './LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

/**
 * Helper function to construct the new path for the given language
 */
const buildLocalizedPath = (currentPath: string, newLang: Language): string => {
  const basePath = stripLanguagePrefix(currentPath);
  
  // English (default) uses no prefix
  if (newLang === 'en') {
    return basePath === '/' ? '/' : basePath;
  }
  
  // Other languages use prefix
  return `/id${basePath}`;
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === language) return;
    
    setLanguage(newLang);
    const newPath = buildLocalizedPath(location.pathname, newLang);
    navigate(newPath);
  };

  return (
    <div className={`flex items-center gap-1 ${className || ''}`}>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className="text-xs px-2 py-1 h-7"
      >
        EN
      </Button>
      <span className="text-muted-foreground text-xs">|</span>
      <Button
        variant={language === 'id' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('id')}
        className="text-xs px-2 py-1 h-7"
      >
        ID
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
