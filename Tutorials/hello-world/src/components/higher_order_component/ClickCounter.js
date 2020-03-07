import React, { Component } from "react";

export class ClickCounter extends Component {
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
        <h1>Not use Higher Order Component(Click increment)</h1>
        <button onClick={this.incrementHandler}>CLick {count} times</button>
      </>
    );
  }
}

export default ClickCounter;
