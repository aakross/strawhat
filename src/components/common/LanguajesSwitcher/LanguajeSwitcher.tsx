// src/components/common/LanguageSwitcher/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../../contexts/AppContext';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { setLanguage } = useAppContext();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => handleLanguageChange('es')}
        className="language-btn"
      >
        ES
      </button>
      <button 
        onClick={() => handleLanguageChange('en')}
        className="language-btn"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;