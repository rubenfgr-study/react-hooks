import React, { useCallback, useEffect, useState } from "react";
import "./memorize.css";
import { ShowIncrement } from "./ShowIncrement";

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    // ???
  }, [increment]);

  return (
    <div>
      <h1>CallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
}
