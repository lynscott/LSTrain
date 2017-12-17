import React, { Component } from 'react';
import pic from '../img/Shred.jpg';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

const title = "Shred Plan"


class ShredPlan extends Component {
  renderCaption() {
    if (!this.props.auth) {
      return <p>* Login to purchase plans</p>;
    }
  }

  render() {
    const { history, auth } = this.props;
    return (
      <div className="col-md-4">
        <figure className="figure">
          <img src={pic} className="figure-img img-fluid rounded" height="50%" alt=" Plan A" />
          <figcaption className="figure-caption">A 30 Day Fat Loss Program.</figcaption>
        </figure>
        <StripeCheckout
          name={title}
          description="A 30 Day Fat Loss Program."
          amount={3900}
          token={token => this.props.handleShredToken(token, history, auth._id)}
          stripeKey="pk_test_0MmGCS4ik8k7bj9vK53ziyj9"
          image={pic}
          zipCode = {true}
          bitcoin = {true}
          >
          <button disabled={!auth} className= "btn btn-success">Buy Premium Plan</button>
        </StripeCheckout>
        {this.renderCaption()}
    </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(ShredPlan));
