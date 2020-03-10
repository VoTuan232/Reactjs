import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useFffect called");
    window.addEventListener("mousemove", logMousePosition);

    // clean up here: Unmount Here
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // add [] để add điều kiện chạy 1 lần

  return (
    <div>
      <h1>HookMouse</h1>
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
