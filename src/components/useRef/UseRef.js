import React, { useRef } from "react";
import "./UseRef.css";
import "./UseRefApp.css";
import Tab from "../tab/Tab";

function UseRef() {
  let cursorRef = useRef();

  const mousePos = (e) => {
    cursorRef.current.setAttribute(
      "style",
      `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px `
    );
  };

  return (
    <div onMouseMove={mousePos} className="UseRef">
      <div ref={cursorRef} className="custom-cursor"></div>
      <Tab />
    </div>
  );
}

export default UseRef;
