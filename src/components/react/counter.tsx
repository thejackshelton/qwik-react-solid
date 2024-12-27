import React, { useState } from "react";

/* @jsxImportSource react */
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      React Count: {count}
    </button>
  );
};
