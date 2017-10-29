import React, { Component } from 'react';
import TypeList from '../containers/types.js';
import TypeDetail from '../containers/type_detail';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <TypeDetail />
          <TypeList />
        </div>
      </div>
    );
  }
}

export default App;
