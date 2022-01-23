import React, { memo } from "react";
import "./memorize.css";

export const Small = memo(({ value }) => {
  console.log("Me volví a llamar :(");
  return <small>{value}</small>;
});
