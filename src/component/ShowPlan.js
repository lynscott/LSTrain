import React, { Component } from 'react';
import { connect } from 'react-redux';
import pic from '../img/logo.png';
import PlanHeader from './PlanHeader';

import { fetchPlan, fetchUser } from '../actions';

class ShowPlan extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlan(id);
  }

  findBMR() {
    const { weight, height, age, activity_mod } = this.props.plan;
    const { gender } = this.props.auth;
    const inToCm = height * 2.54;
    const lbsToKg = weight / 2.2;
    if (gender === 'male') {
      const BMR = 9.99 * lbsToKg + 6.25 * inToCm - 4.92 * (age + 5);
      return Math.round(BMR);
    } else if (gender === 'female') {
      const BMR = 9.99 * lbsToKg + 6.25 * inToCm - 4.92 * age - 161;
      return Math.round(BMR);
    }
  }

  async caloricGoal() {
    //This is where we will use the acitivy var
    const maintenanceCal = (await this.findBMR()) * 1.55;
    return maintenanceCal;
  }

  render() {
    const { plan } = this.props;

    if (!plan) {
      return (
        <div className="progress progress-bar-animated">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: 75 }}
          />
        </div>
      );
    }
    return (
      <section>
        <div className="jumbotron jumbotron-fluid bg-dark text-white" id="plan">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <img
                  src={pic}
                  className="img-fluid w-75 mx-auto d-block"
                  style={{ width: 690 }}
                  alt=" LSF"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 text-center pb-2">
                <h1 className="display-4">{plan.planName} Program</h1>
              </div>
              <div className="col-md-4 text-left ml-2">
                <h4>Stats:</h4>
                <ul className="list-unstyled">
                  <li>
                    <strong>Your BMR: {this.findBMR()} Calories</strong>
                  </li>
                  <li>
                    <strong>
                      Your maintenance calories:{' '}
                      {Math.round(
                        this.findBMR() * this.props.plan.activity_mod
                      )}
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Your daily calorie goal for this plan:{' '}
                      {Math.round(
                        this.findBMR() * this.props.plan.activity_mod - 600
                      )}
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <PlanHeader caloricGoal={this.caloricGoal} />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ plans, auth }, ownProps) {
  return { plan: plans[ownProps.match.params.id], auth: auth };
}

export default connect(mapStateToProps, { fetchPlan, fetchUser })(ShowPlan);
