import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './scenes/Home/index';
import Title from './components/Title/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Title />
          <Switch>
            <Router path="/">
              <Home />
            </Router>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
