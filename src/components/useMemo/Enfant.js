import React from "react";

const Enfant = function (props) {
  console.log("MAS enfant");

  return (
    <>
      <h2>Enfant</h2>
      <p> {props.chaine} </p>
      <button onClick={props.myFunc}>click me</button>
    </>
  );
};

export default React.memo(Enfant);
