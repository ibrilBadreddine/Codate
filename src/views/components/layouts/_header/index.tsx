import Logo from "@/assets/images/light-logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#features">Features</a>
        <a href="#why-us">Why Us</a>
        <div className="logo">
          <img src={Logo} alt="Codate Logo" />
        </div>
        <a href="#how-to-use">How to use</a>
        <a href="#faq">FAQ</a>
      </div>
    </header>
  );
}
