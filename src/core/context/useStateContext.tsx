import { ReactNode, createContext, useContext, useState } from "react";
import { LANGUAGES, CATEGORIES } from "../data";
import type { StateContextDefinition } from "./type";
import type { DateFormat, Language } from "../types";

/**
 * 
 * Default values
 */
const DEFAULT_LANG = LANGUAGES[0]; 
const DEFAULT_CATEGORY = CATEGORIES[0].id;

/**
 * 
 * Create the context with initial default values
 */
export const StateContext = createContext<StateContextDefinition>({
  selectedLanguage: DEFAULT_LANG,
  selectedCategory: DEFAULT_CATEGORY,
  selectedFormat: null,
  setLang: () => {},
  setCategory: () => {},
  setFormat: () => {}
});

/**
 * 
 * Provider component to wrap around the application
 */
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  // Define state variables and setter functions
  const [selectedLanguage, setLang] = useState<Language>(DEFAULT_LANG);
  const [selectedCategory, setCategory] = useState<string>(DEFAULT_CATEGORY);
  const [selectedFormat, setFormat] = useState<DateFormat | null>(null);

  return (
    // Provide the context values to the children components
    <StateContext.Provider
      value={{
        selectedLanguage,
        selectedCategory,
        selectedFormat,
        setLang: setLang,
        setCategory: setCategory,
        setFormat: setFormat,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
