import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subcribe</button>
      </div>
    );
  }

  changeMessage() {
    this.setState({
      message: "VIsitor changed!"
    });
  }
}

export default Message;
