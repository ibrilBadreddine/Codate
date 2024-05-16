import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "./_header";
import Footer from "./_footer";
import BetaBlock from "./_beta";
import { useEffect, useState } from "react";

export default function BaseLayout() {
  const [isBeta, setIsBeta] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBeta(window.innerWidth <= 950);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="base-app">
      {!isBeta ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <BetaBlock />
        </>
      )}
    </div>
  );
}
