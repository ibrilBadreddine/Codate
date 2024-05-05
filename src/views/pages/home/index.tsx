import "./style.scss";
import Hero from "./partials/Hero";
import Selector from "./partials/Selector";
import Formats from "./partials/formats";
import { useState } from "react";

export default function Index() {
  /**
   * 
   * Programming language (default - "js")
   */
  const DEFAULT_LANG = "js"; 
  const [selectedLang, setLang] = useState<string>(DEFAULT_LANG);

  return (
    <div className="home-page">
      <Hero />
      <Selector 
        selectedLang={selectedLang}
        setLang={setLang}
      />
      <Formats />
    </div>
  )
}
