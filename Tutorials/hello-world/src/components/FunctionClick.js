import React from "react";

function FunctionClick() {
  return (
    <div>
      <button onClick={clickHander}>Click</button>
    </div>
  );

  function clickHander() {
    console.log("clicked");
  }
}

export default FunctionClick;
