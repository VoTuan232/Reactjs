import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };
    // this.clickHander = this.clickHander.bind(this);
  }

  // clickHander() {
  //   this.setState({
  //     message: "Change!"
  //   });
  // }

  clickHander = () => {
    this.setState({
      message: "Change!"
    });
  };

  render() {
    return (
      <div>
        {this.state.message}
        {/*<button onClick={this.clickHander.bind(this)}>Click</button>*/}
        <button onClick={this.clickHander}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
