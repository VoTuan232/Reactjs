import React, { Component, PureComponent } from "react";
import RegComp from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class MemoParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Memo Parent"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Memo Parent changed!" // giá trị này đã khác giá trị ban đầu => render 1 lần đầu
      });
    }, 2000);
  }

  render() {
    console.log("*********Memo Parent Component render!********");
    return (
      <div>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default MemoParentComp;
