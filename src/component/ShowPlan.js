import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlan } from '../actions';

class ShowPlan extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlan(id);
  }

  render() {
    const { plan } = this.props;

    if (!plan) {
      return <div>...Loading Plan</div>
    }
    return (
      <div>
        Ready to Start?
        {console.log(this.props.plan)}
        <h1>{plan.planName}</h1>

      </div>
    );
  }
}

function mapStateToProps({ plans }, ownProps) {
  return { plan: plans[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPlan })(ShowPlan);
