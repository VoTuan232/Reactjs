import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHander("child")}>Greet parent</button>
    </div>
  );
}

export default ChildComponent;
