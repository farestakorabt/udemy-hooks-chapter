import React from "react";
import UseCatImg from "./UseCatImg";

function Contenu() {
  const imgURL = UseCatImg();

  return (
    <>
      <img src={imgURL} height="400" width="400" alt="cat" />
    </>
  );
}

export default Contenu;
