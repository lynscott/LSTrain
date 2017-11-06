import React, { Component } from 'react';
import TypeList from '../containers/types.js';
import TypeDetail from '../containers/type_detail';
import PlanDetail from '../containers/plan_detail';
import PlanList from '../containers/plans.js';

class App extends Component {
  render() {
    return (
    <div>
      <div className="jumbotron jumbotron-fluid" id="header">
        <div className="container">
        <h1 className="display-3">Free Plans!</h1>
        </div>
      </div>
      <div className="container">
        <div className="jumbotron">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <TypeDetail />
              <TypeList />
            </div>
            <div className="col-lg-6">
              <PlanDetail />
              <PlanList />
            </div>
        </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
