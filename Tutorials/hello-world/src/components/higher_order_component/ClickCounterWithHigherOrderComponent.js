import React, { Component } from "react";
import withCounter from "./withCounter";

export class ClickCounterWithHigherOrderComponent extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <h1>Use Higher Order Component(Click increment)</h1>
        <button onClick={incrementCount}>
          {this.props.name} CLick {count} times
        </button>
      </>
    );
  }
}

export default withCounter(ClickCounterWithHigherOrderComponent, 5);
