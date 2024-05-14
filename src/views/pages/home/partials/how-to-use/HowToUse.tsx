import { useEffect, useState } from "react";
import { HowToUseData } from "./helpers";

export default function HowToUse() {

  const [step, setStep] = useState<number>(1);

  /**
   * 
   * Switch steps every 3 seconds
   */
  useEffect(() => {
    setTimeout(() => {
      const nextStep = step === HowToUseData.length ? 1 : step+1;
      setStep(nextStep)
    }, 3000);
  });
  

  return (
    <section id="how-to-use" className="how-to-use-container">
      <div className="headlines section-head">
        <div className="title">
          <h5>
            <span className="material-symbols-outlined">local_activity</span>
            How to use
          </h5>
          <h1>Create Perfect Date Formatting in 3 Simple Steps</h1>
        </div>
      </div>
      <div className="how-to-use-box">
        <div className="steps-box">
          <div className="steps">
            <h3 className={step == 1 ? "active-step" : ""}>1</h3>
            <div className={step == 2 ? "active-bar bar" : "bar"} />
            <h3 className={step == 2 ? "active-step" : ""}>2</h3>
            <div className={step == 3 ? "active-bar bar" : "bar"} />
            <h3 className={step == 3 ? "active-step" : ""}>3</h3>
          </div>
          <div className="current-step">
            {
              HowToUseData.map((item, i) => (
                <div className={step === i+1 ? "step-area step-area-active" : "step-area"} key={i}>
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="preview-box">
          <img src={HowToUseData[step-1].images} alt={HowToUseData[step-1].title} />
        </div>
      </div>
    </section>
  )
}
