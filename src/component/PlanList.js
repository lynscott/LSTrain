import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlans } from '../actions/'
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Moment from 'react-moment';

class PlanList extends Component {
  componentDidMount() {
    this.props.fetchPlans();
  }


  renderList() {
    return _.map(this.props.plans, plan => {
      return (
        <li key={plan._id}
            className="list-group-item list-group-item-action">
            <Link  to={`/dashboard/plan/${plan._id}`}>
              <h4>{plan.planName}</h4>
            </Link>
            <p>Day Started: <Moment format="MM/DD/YYYY">{plan.dateStarted}</Moment></p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}


function mapStateToProps({ plans }) {
  return { plans };
}

export default connect(mapStateToProps, { fetchPlans })(PlanList);
