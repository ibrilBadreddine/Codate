import "./style.scss";
import { useState } from "react";
import type { Language } from "@/core/types";
import Hero from "./partials/Hero";
import Selector from "./partials/Selector";
import Formats from "./partials/formats";
import { LANGUAGES } from "@/core/data";
import Faq from "./partials/faq/Faq";
import WhyUs from "./partials/why-us/WhyUs";

export default function Index() {
  /**
   * 
   * Handle programming language (default - "js")
   */
  const DEFAULT_LANG = LANGUAGES[0]; 
  const [selectedLang, setLang] = useState<Language>(DEFAULT_LANG);

  return (
    <div className="home-page">
      <Hero />
      <Selector 
        selectedLang={selectedLang}
        setLang={setLang}
      />
      <Formats 
        selectedLang={selectedLang}
      />
      <WhyUs />
      <Faq />
    </div>
  )
}
