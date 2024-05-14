import { useStateContext } from "@/core/context/useStateContext";
import { LANGUAGES } from "@/core/data";

export const Selector = () => {

  const { selectedLanguage, setLang } = useStateContext();

  return (
    <section className="selector-container">
      {/* Programming Languages */}
      <div className="langs-selector">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setLang(lang)}
            className={selectedLanguage.id === lang.id ? "lang-btn active-lang" : "lang-btn"}
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
