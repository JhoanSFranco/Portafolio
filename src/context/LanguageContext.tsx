import { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  nextLanguage: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Cycle order for the language toggle: EN → FR → ES → EN
const NEXT_LANGUAGE: Record<Language, Language> = {
  en: 'fr',
  fr: 'es',
  es: 'en',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

// LanguageProvider component to wrap the app and provide language context
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const nextLanguage = NEXT_LANGUAGE[language];

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => NEXT_LANGUAGE[prev]);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] || key;
    },
    [language]
  );

// Memoize the context value to optimize performance
  const value = useMemo(
    () => ({
      language,
      nextLanguage,
      toggleLanguage,
      t,
    }),
    [language, nextLanguage, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

