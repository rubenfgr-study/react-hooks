import React, { useEffect, useState } from "react";

export default function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);
    console.log("Message mount!");

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log("Message unmount!");
    };
  }, []);

  return (
    <div>
      <h2>Message...</h2>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
}
