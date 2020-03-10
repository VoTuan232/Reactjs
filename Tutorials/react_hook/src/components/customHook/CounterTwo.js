import React from "react";
import useCounter from "./hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);
  console.log("*************Counter Two Custom Hook **********");
  console.log(useCounter);
  console.log(typeof useCounter(10, 10));
  console.log(Array.isArray(useCounter(10, 10)));
  console.log(useCounter(10, 10)[0]);
  console.log(useCounter(10, 10).length);
  console.log("*************Counter Two Custom Hook **********");

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
