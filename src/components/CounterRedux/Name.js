import React from "react";
import { useDispatch } from "react-redux";

export default function Name() {
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    dispatch({
      type: "UPDATE",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <input type="text" placeholder="write here" onChange={handleUpdate} />
    </div>
  );
}
