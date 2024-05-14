export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="owner">
        <div className="icon">
          <span className="material-symbols-outlined">calendar_today</span>
        </div>
        <p>
          Developer by{" "}
          <a href="https://bibril.com/" target="_blank">
            @Badreddine Ibril
          </a>
        </p>
      </div>
      <div className="copyright">
        <p>© {year} Codate. All rights reserved.</p>
      </div>
    </footer>
  );
}
