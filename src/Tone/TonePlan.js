import React, { Component } from 'react';
import pic from '../img/tone.jpg';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

const title = "Tone Plan"

class TonePlan extends Component {
  render() {
    const { history, auth } = this.props;
    return (
      <div className="col-md-3">
        <figure className="figure">
          <img src={pic} className="figure-img img-fluid rounded" height="50%" alt=" Plan A" />
          <figcaption className="figure-caption">A 30 Day Tone Program.</figcaption>

        </figure>
        <StripeCheckout
          name={title}
          description="A 30 Day Strength and Mass Program."
          amount={3900}
          token={token => this.props.handleToneToken(token, history, auth._id)}
          stripeKey="pk_test_0MmGCS4ik8k7bj9vK53ziyj9"
          image={pic}
          zipCode = {true}
          bitcoin = {true}
          >
          <button className= "btn btn-success">Buy Premium Plan</button>
        </StripeCheckout>
    </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(TonePlan));
