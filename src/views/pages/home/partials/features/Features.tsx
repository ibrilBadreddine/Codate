import { FeaturesData } from "./helpers";

export default function Features() {
  return (
    <section className="features-container">
      <div className="headlines section-head">
        <div className="title">
          <h5>
            <span className="material-symbols-outlined">local_activity</span>
            Features
          </h5>
          <h1>Making Your Projects Easier and More Precise</h1>
        </div>
      </div>
      <div className="cards">
        {FeaturesData.map((feature, i) => (
          <div className="card" key={i}>
            <img src={feature.image} alt={feature.title} />
            <div className="content">
              <h3>{feature.title}</h3>
              <p>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
