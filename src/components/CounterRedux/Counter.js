import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";

function Counter() {
  const { count, name } = useSelector((state) => ({
    ...state.counterReducer,
    ...state.nameReducer,
  }));

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INCR",
    });
  };
  const decrement = () => {
    dispatch({
      type: "DECR",
    });
  };

  return (
    <div>
      <h2>Compteur: {count}</h2>
      <div className="bloc-btn">
        <button onClick={increment}>+</button>
        &nbsp;
        <button onClick={decrement}>-</button>
      </div>
      <h3> {name}</h3>
    </div>
  );
}

export default Counter;
