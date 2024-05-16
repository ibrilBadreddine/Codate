import Logo from "@/assets/images/light-logo.png";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false);

  const navigate = (direction: string) => {
    location.href = direction;
    setMenu(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#features">Features</a>
        <a href="#why-us">Why Us</a>
        <div className="logo-box">
          <a href="/" className="logo">
            <img src={Logo} alt="Codate Logo" />
          </a>
        </div>
        <a href="#how-to-use">How to use</a>
        <a href="#faq">FAQ</a>
        <button onClick={() => setMenu(!menu)} className="header-toggle">
          <span className="material-symbols-outlined">clear_all</span>
        </button>
      </div>
      <div className={menu ? "header-mini active-header-mini" : "header-mini"}>
        <a onClick={() => navigate("#features")}>Features</a>
        <a onClick={() => navigate("#why-us")}>Why Us</a>
        <a onClick={() => navigate("#how-to-use")}>How to use</a>
        <a onClick={() => navigate("#faq")}>FAQ</a>
      </div>
    </header>
  );
}
