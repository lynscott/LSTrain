import React, { Component } from 'react';
import strength from '../img/strength.jpg';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

class StrengthPlan extends Component {
  render() {
    return (
      <div className="col-md-3">
        <figure className="figure">
          <img src={strength} className="figure-img img-fluid rounded" height="50%" alt=" Plan A" />
          <figcaption className="figure-caption">A 30 Day Strength and Mass Program.</figcaption>

        </figure>

          <StripeCheckout
            name="Strenth Plan"
            description="10 Week premium plan designed to take to to your strongest, meanest physique to date.
            Includes diet and Cardio structure."
            amount={3900}
            token={token => this.props.handleToken(token, this.props.history)}
            stripeKey="pk_test_0MmGCS4ik8k7bj9vK53ziyj9"
            image={strength}
            zipCode = {true}
            bitcoin = {true}
            >
            <button className= "btn btn-success">Buy Premium Plan</button>
          </StripeCheckout>
      </div>
        )
    }
  }

export default connect(null, actions)(withRouter(StrengthPlan));
