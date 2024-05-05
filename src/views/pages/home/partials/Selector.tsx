import { LANGUAGES } from "@/core/data";
import type { Language } from "@/core/types";

interface SelectorProps {
  selectedLang: Language;
  setLang: (newLang: Language) => void;
}

export const Selector: React.FC<SelectorProps> = ({selectedLang, setLang}) => {
  return (
    <section className="selector-container">
      {/* Programming Languages */}
      <div className="langs-selector">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setLang(lang)}
            className={selectedLang.id === lang.id ? "lang-btn active-lang" : "lang-btn"}
            data-name={lang.name}
          >
            <img src={lang.icon} alt={lang.name} className="icon" />
            <span className="name">{lang.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Selector;
