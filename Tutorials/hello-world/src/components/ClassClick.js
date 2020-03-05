import React, { Component } from "react";

class ClassClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.classHander}>Click</button>
        {/*<button onClick={() => this.classHander()}>Click</button>*/}
      </div>
    );
  }

  classHander = () => {
    console.log("Click class hander");
  };
}

export default ClassClick;
