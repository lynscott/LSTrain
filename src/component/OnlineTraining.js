import React, { Component } from 'react';
import Nav from './Nav';

class OnlineTraining extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="jumbotron-fluid">
          <div className="container-fluid">
            Online Training Page!
          </div>

        </div>
      </div>
    );
  }
}

export default OnlineTraining;
