import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
  increment = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    this.setState(
      (prevState, props) => ({
        count: prevState.count + +props.addValue
      }),
      () => {
        console.log(this.state.count);
      }
    );
    // async here
    // console.log(this.state.count);
  };

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };
}

export default Counter;
