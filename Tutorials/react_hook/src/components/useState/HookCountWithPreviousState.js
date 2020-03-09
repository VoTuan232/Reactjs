import React, { useState } from "react";

function HookCountWithPreviousState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(previousCount => previousCount + 1);
    }
  };

  return (
    <>
      <h1>Hook Count With Previous State</h1>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5 times</button>
    </>
  );
}

export default HookCountWithPreviousState;
