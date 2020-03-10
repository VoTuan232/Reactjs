import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef();
  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    // return () => {
    //   console.log("unmount hook timer");
    //   clearInterval(interValRef.current);
    // };
  }, []);
  return (
    <div>
      <h1>Ref Hook:</h1>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default HookTimer;
