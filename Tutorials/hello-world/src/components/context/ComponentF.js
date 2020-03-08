import React, { Component } from "react";
import { UserConsume } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsume>
        {text => {
          return <div>{text}</div>;
        }}
      </UserConsume>
    );
  }
}

export default ComponentF;
