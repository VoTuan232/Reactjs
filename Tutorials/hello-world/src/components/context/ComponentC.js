import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { UserProvider } from "./userContext";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserProvider value="From Component C">
          <ComponentE />
        </UserProvider>
      </div>
    );
  }
}

export default ComponentC;
