import { useState } from "react";
import Filter from "./Filter";
import Listing from "./Listing";
import Preview from "./Preview";
import type { DateFormat, Language } from "@/core/types";

interface FormatsProps {
  selectedLang: Language;
}

export const Formats: React.FC<FormatsProps> = ({selectedLang}) => {
  /**
   * 
   * Handle categories - default ("all")
   */
  const [selectedCategory, setCategory] = useState<string>("all");

  /**
   * 
   * Handle date format
   */
  const [selectedFormat, setFormat] = useState<DateFormat | null>(null);

  return (
    <section className='formats-container'>
      <Filter 
        currentCategory={selectedCategory}
        setCategory={(categoryId: string) => setCategory(categoryId)}
      />
      <Listing 
        currentCategory={selectedCategory}
        selectedFormat={selectedFormat}
        setFormat={setFormat}
      />
      <Preview 
        selectedLang={selectedLang}
        selectedFormat={selectedFormat}
        setFormat={setFormat}
      />
    </section>
  )
}

export default Formats;
