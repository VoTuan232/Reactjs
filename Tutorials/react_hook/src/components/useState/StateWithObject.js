import React, { useState } from "react";

function StateWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h1>UseState with Object</h1>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
        <br />
        Your firstName is: {name.firstName}
        <br />
        Your lastName is: {name.lastName}
      </form>
    </div>
  );
}

export default StateWithObject;
