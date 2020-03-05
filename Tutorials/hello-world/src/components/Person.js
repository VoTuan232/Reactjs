import React from "react";

function Person({ person }) {
  return (
    <div>
      <h1>
        I'm {person.name}, {person.age}. I know {person.skill}
      </h1>
    </div>
  );
}

export default Person;
