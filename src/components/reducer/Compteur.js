import React, { useReducer } from "react";

const inintialState = 0;

function reducer(state, action) {
  switch (action) {
    case "INCR":
      return state + 1;

    case "DECR":
      return state - 1;

    case "RESET":
      return inintialState;

    default:
      return state;
  }
}

export default function Compteur() {
  const [count, dispatch] = useReducer(reducer, inintialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("INCR")}>Plus</button>
      &nbsp;
      <button onClick={() => dispatch("DECR")}>Minus</button>
      &nbsp;
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
}
