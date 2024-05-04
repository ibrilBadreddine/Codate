import { LANGUAGES } from "@/core/data";

export default function Selector() {
  return (
    <section className="selector-container">
      {/* Programming Languages */}
      <div className="langs-selector">
        {LANGUAGES.map((lang) => (
          <button key={lang.id} className="lang-btn" data-name={lang.name}>
            <img src={lang.icon} alt={lang.name} className="icon" />
            <span className="name">{lang.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
