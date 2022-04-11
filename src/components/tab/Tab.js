import React, { useState } from "react";
import "./Tab.css";

export default function Tab() {
  const [toggleState, setToggleState] = useState(1);

  const goFR = () => {
    setToggleState(1);
  };

  const goEN = () => {
    setToggleState(2);
  };

  return (
    <>
      <div className="contBtn">
        <button
          onClick={goFR}
          className={`onglets ${toggleState === 1 ? "active" : ""} `}
          readOnly
        >
          Français
        </button>
        <button
          onClick={goEN}
          className={`onglets ${toggleState === 2 ? "active" : ""} `}
          readOnly
        >
          Anglais
        </button>
      </div>

      <div className="container">
        {toggleState === 1 ? (
          <p className="contain fr">
            <strong>Français </strong> : Reconnu pour ses qualités militaires,
            sa nomination intervient à un moment de grandes difficultés pour
            l'Empire. L'extinction de la dynastie macédonienne entraîne une
            grave instabilité au plus haut sommet de l'État, tandis que les
            frontières commencent à être assaillies de toutes parts, en
            particulier par les Normands en Italie et les Seldjoukides en
            Orient. Romain IV a donc pour principale mission de rétablir la
            puissance militaire de l'État byzantin et il tente de s'y consacrer
            au mieux.
          </p>
        ) : (
          <p className="contain en">
            <strong>English </strong> : The Kingdom of Georgia collapsed into
            anarchy by 1466 and fragmented into three independent kingdoms and
            five semi-independent principalities. Neighboring large empires
            subsequently exploited the internal division of the weakened
            country, and beginning in the 16th century up to the late 18th
            century, Safavid Iran (and successive Iranian Afsharid and Qajar
            dynasties) and Ottoman Turkey subjugated the eastern and western
            regions of Georgia, respectively.[57]
          </p>
        )}
      </div>
    </>
  );
}
