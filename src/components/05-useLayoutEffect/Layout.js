import React, { useLayoutEffect, useRef } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./layout.css";

export default function Layout() {
  const { state: counter, increment } = useCounter(1);

  const { data, error, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log(pTag.current);
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente Quote
      </button>
    </div>
  );
}
