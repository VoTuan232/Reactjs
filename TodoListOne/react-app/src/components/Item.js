import React, { Component, Fragment } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    return (
      <Fragment>
        <td className="text-center">{data.id}</td>
        <td>{data.email}</td>
        <td className="text-center">
          <span className="label label-danger">High</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning btn-sm">
            Edit
          </button>
          <button type="button" className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </Fragment>
    );
  }
}

export default Item;
