import { useState } from "react";

export default function useCounter(initialState) {
  const [counter, setState] = useState(initialState);

  const increment = (factor = 1) => {
    setState(counter + factor);
  };

  const decrement = (factor = 1) => {
    setState(counter - factor);
  };

  const reset = () => setState(initialState);

  return { counter, increment, decrement, reset };
}
