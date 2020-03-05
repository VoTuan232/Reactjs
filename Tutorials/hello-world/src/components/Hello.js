import React from "react";

const Hello = props => {
  console.log(props);
  // return (
  //   <div>
  //     <h1>Hello Vo Tuan</h1>
  //   </div>
  // );
  return React.createElement(
    "div",
    { id: "hello", className: "dummy" },
    React.createElement(
      "h1",
      null,
      `Hello ${props.name}
    ${props.children}
    `
    )
  );
};

export default Hello;
