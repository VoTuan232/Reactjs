import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent"
    };
  }

  greetParent = childName => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetHander={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
