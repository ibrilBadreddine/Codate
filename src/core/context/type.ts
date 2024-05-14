import type { DateFormat, Language } from "../types";

/**
 * 
 * State Context Type
 */
export interface StateContextDefinition {
  selectedLanguage: Language,
  selectedCategory: string,
  selectedFormat: DateFormat | null,
  setLang: (lang: Language) => void,
  setCategory: (categoryId: string) => void,
  setFormat: (date: DateFormat | null) => void;
} 
