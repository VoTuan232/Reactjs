import React, { Component } from "react";
import axios from "axios";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vo Tuan"
    };

    console.log("LifecycleB construct");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCyleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount!");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({
          posts: [res.data[0]]
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMsg: "Error retreiving data"
        });
      });
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
