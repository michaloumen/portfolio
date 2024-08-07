import React from 'react';
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(false);

  const toggleLanguage = () => {
    setIsEnglishLanguage(prev => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isEnglishLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
