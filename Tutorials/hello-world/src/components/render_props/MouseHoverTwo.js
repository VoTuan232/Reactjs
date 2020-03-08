import React, { Component } from "react";

export class MouseHoverTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <>
        <button onMouseOver={incrementCount}>
          Render Props Mouse over {count} times
        </button>
      </>
    );
  }
}

export default MouseHoverTwo;
