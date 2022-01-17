import React, { useState } from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";
import "./useref.css";

export default function ReactExampleRef() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>React Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
}
