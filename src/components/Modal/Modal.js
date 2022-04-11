import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div onClick={props.closeFunc} className="overlay">
      <div onClick={props.stopPropagation} className="contenu">
        Contenu modal
        <button onClick={props.closeFunc} className="btnClose">
          Close
        </button>
      </div>
    </div>
  );
}
