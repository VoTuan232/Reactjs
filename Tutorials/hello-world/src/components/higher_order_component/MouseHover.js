import React, { Component } from "react";

export class MouseHover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementHandler = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>Not use Higher Order Component(Mouse hover increment)</h1>
        <button onMouseOver={this.incrementHandler}>CLick {count} times</button>
      </>
    );
  }
}

export default MouseHover;
