import React from "react";

function HeroError({ name }) {
  if (name === "joker") {
    throw new Error("Error");
  }
  return <div>{name}</div>;
}

export default HeroError;
