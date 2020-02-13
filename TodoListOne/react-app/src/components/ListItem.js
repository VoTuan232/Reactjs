import React, { Component, Fragment } from 'react';
import Item from './Item';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:2302/user/get-all')
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        error => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(this.state);
    let listItems;
    if (error) {
      listItems = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      listItems = <div>Loading...</div>;
    } else {
      console.log('here');
      listItems = this.state.data.users.map((x, index) => (
        <tr key={index}>
          <Item data={x} key={++index} />
        </tr>
      ));
    }
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">
                #
              </th>
              <th>Id</th>
              <th style={{ width: '15%' }} className="text-center">
                email
              </th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    );
  }
}
export default ListItem;
