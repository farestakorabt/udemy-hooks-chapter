import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLarger] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  const changeWidth = () => {
    setLarger(window.innerWidth);

    if (window.innerWidth > 500) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    // not necessary
    // return () => {
    //   window.removeEventListener("resize", changeWidth);
    // };


  }, []);

  return (
    <div>
      <nav>
        {(toggleMenu || largeur > 500) && (
          <div className="list">
            <div className="items">Accueil</div>
            <div className="items">Services</div>
            <div className="items">Contact</div>
          </div>
        )}
      </nav>

      <button onClick={toggleNavSmallScreen} className="btn">
        BTN
      </button>
    </div>
  );
}

export default Navbar;
