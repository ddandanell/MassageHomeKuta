import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage, Language, stripLanguagePrefix } from './LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === language) return;
    
    setLanguage(newLang);
    
    // Update URL to reflect new language
    const currentPath = stripLanguagePrefix(location.pathname);
    const newPath = newLang === 'en' 
      ? currentPath === '/' ? '/' : currentPath
      : `/id${currentPath}`;
    
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
