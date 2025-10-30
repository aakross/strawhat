// src/types/index.ts
export interface AppContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

export interface TranslationKeys {
  welcome: string;
  about: string;
  contact: string;
  // Agrega más keys según necesites
}

export interface Translations {
  [key: string]: TranslationKeys;
}