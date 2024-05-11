import { Enemies, Solutions } from "./helpers";

export default function WhyUs() {
  const numCols = [3, 4, 5];

  return (
    <section className="why-us-container">
      <div className="headlines section-head">
        <div className="title">
          <h5>
            <span className="material-symbols-outlined">local_activity</span>
            Why Us
          </h5>
          <h1>Level Up Your Date Formatting Skills</h1>
        </div>
      </div>
      <div className="why-us-box">
        <div className="solutions-container">
          {numCols.map((numRowsInCol, colIdx) => (
            <div className="sol-column" key={colIdx}>
              {[...Array(numRowsInCol)].map((_, rowIdx) => (
                <div className="solution-box" key={`${colIdx}-${rowIdx}`}>
                  <span className="material-symbols-outlined">
                    {Solutions[colIdx * numCols.length + rowIdx]?.icon}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="weapon-container">
          <div className="weapon-box">
            <div className="icon">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
        <div className="enemies-container">
          {Enemies.map((enemy, i) => (
            <div className="enemy-box" key={i}>
              <span className="material-symbols-outlined">bug_report</span>
              <p>{enemy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
