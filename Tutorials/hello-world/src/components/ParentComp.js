import React, { Component, PureComponent } from "react";
import RegComp from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "VoTuan"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "VoTuan changed!" // giá trị này đã khác giá trị ban đầu => render 1 lần đầu
      });
    }, 2000);
  }

  render() {
    console.log("*********Parent Component render!********");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
