import React, { Component } from 'react';
import Nav from './Nav';

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="jumbotron-fluid">
          <div className="container-fluid">
            About Me Page!
          </div>
        </div>
      </div>
    );
  }
}

export default About;
