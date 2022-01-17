import React from "react";
import useCounter from "../../hooks/useCounter";
import "./counter.css";

export default function CounterWithCustomHook() {
  const { state, increment, decrement, reset } = useCounter(10);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <br />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-secondary" onClick={() => decrement(2)}>
        -1
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={() => reset()}>
        RESET
      </button>
    </>
  );
}
