import React, { Component } from "react";
import withCounter from "./withCounter";

export class MouseHoverWithHigherComponent extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <h1>Use Higher Order Component(Mouse hover increment)</h1>
        <button onMouseOver={incrementCount}>
          {this.props.name} Mouse over {count} times
        </button>
      </>
    );
  }
}

export default withCounter(MouseHoverWithHigherComponent, 10);
