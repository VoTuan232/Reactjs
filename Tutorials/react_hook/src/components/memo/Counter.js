import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("xxx1");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  // const isADD = () => {
  //   console.log("xxx");
  //   return true;
  // };

  // isADD(); //re render => run here

  // const isEven = () => {
  //   console.log("1");
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return counterOne % 2 === 0;
  // };

  return (
    <div>
      <h1>UseMemo Hook:</h1>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
