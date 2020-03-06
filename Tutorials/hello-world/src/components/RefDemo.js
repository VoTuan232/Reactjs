import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element;
    };
    console.log("RefDemo constructor");
    console.log(this.inputRef);
  }

  componentDidMount() {
    console.log("Ref Demo componentDidMount");
    console.log(this.inputRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input
          type="text"
          value="11"
          onChange={this.clickHandler}
          ref={this.setCbRef}
        />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
