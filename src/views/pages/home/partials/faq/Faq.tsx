import { useState } from "react";
import { FAQ } from "./helper";

export default function Faq() {
  const [activeTab, setTab] = useState<number | null>(null);

  const handleTab = (id: number) => {
    const newTab = id === activeTab ? null : id;

    setTab(newTab);
  };

  return (
    <section className="faq-container">
      <div className="faq-box">
        <div className="headline">
          <h1>You ask - we answer.</h1>
          <p>All you want to know about the solution.</p>
        </div>
        <div className="q-a">
          {FAQ.map((item, i) => (
            <div className="tab" key={i}>
              <button onClick={() => handleTab(i)} className="question-tab">
                <p>{item.question}</p>
                <span className="material-symbols-outlined">expand_more</span>
              </button>
              <div
                className={
                  activeTab === i
                    ? "active-answer-tab answer-tab"
                    : "answer-tab"
                }
              >
                <article>
                  <p>{item.answer}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
