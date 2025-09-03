import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en';
import zh from '../locales/zh';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('logilink-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setCurrentLanguage(savedLanguage);
      setTranslations(savedLanguage === 'en' ? en : zh);
    }
  }, []);

  const changeLanguage = (language) => {
    if (language === 'en' || language === 'zh') {
      setCurrentLanguage(language);
      setTranslations(language === 'en' ? en : zh);
      localStorage.setItem('logilink-language', language);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isEnglish: currentLanguage === 'en',
    isChinese: currentLanguage === 'zh'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
