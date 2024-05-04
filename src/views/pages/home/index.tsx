import "./style.scss";
import Hero from "./partials/Hero";
import Selector from "./partials/Selector";
import Formats from "./partials/formats";

export default function index() {
  return (
    <div className="home-page">
      <Hero />
      <Selector />
      <Formats />
    </div>
  )
}
