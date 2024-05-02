import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="#">Features</Link>
        <Link to="#">Why Us</Link>
        <div className="logo">
          <div className="logo-container">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
        </div>
        <Link to="#">How to use</Link>
        <Link to="#">FAQ</Link>
      </div>
    </header>
  );
}
