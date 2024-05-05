import { useState } from "react";
import Filter from "./Filter";
import Listing from "./Listing";
import Preview from "./Preview";
import type { DateFormat } from "@/core/types";

interface FormatsProps {
  selectedLang: string;
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
        setFormat={setFormat}
      />
      <Preview 
        selectedLang={selectedLang}
        selectedFormat={selectedFormat}
      />
    </section>
  )
}

export default Formats;
