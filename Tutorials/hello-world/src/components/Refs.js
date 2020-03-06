import React, { useRef } from "react";

function Refs() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div className="refs">
      <h2>Use refs to control focus</h2>
      <input ref={inputEl} />
      <button onClick={() => onButtonClick()}>Focus the input</button>
    </div>
  );
}

export default Refs;
