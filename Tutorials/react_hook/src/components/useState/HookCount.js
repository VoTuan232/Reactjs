import React, { useState } from "react";

function HookCount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hook Count</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCount;
