import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPlan} from '../actions/plans';

class PlanList extends Component {
  renderPlans() {
    return this.props.plans.map((plan) => {
      return (
        <li key={plan.name}
            onClick={() => this.props.selectPlan(plan)}
            className="list-group-item list-group-item-action">
            {plan.name}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
      <ul className="list-group">
        {this.renderPlans()}
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    plans: state.plans
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectPlan: selectPlan}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PlanList);
