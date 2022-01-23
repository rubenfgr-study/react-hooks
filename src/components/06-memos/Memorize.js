import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import "./memorize.css";
import { Small } from "./Small";

export default function Memorize() {
  const { state, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={state} />
      </h1>
      <hr />
      <button className="btn btn-primary  mx-2" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
}
