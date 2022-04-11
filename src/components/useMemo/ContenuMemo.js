import React, { useState, useMemo, useCallback } from "react";
import Enfant from "./Enfant";

export default function ContenuMemo() {
  const [count, setCount] = useState(0);

  console.log('parent MAJ');

  const arr = useMemo(() => {
    return [21, 2, 1, 56, 6];
  }, []);

  const foo = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <h1>Le parent</h1>
      <p> {count} </p>
      <button onClick={() => setCount(count + 1)}>Click plus</button>

      <Enfant chaine={arr} myFunc={foo} />
    </>
  );
}
