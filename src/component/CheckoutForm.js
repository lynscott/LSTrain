import React, { Component } from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';


// import AddressSection from './AddressSection';


class CheckoutForm extends Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.

    this.props.stripe.createToken({
      name: ev.target.name.value,
      receipt_email: ev.target.email.value,
      address_line1: ev.target.address.value,
      address_state: ev.target.state.value,
      address_city: ev.target.city.value,
    }).then(payload => this.chargeToken(payload));



    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  chargeToken(payload, email, amount) {
    console.log(payload)
    fetch('/pay', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({stripeToken:payload.token.id})
    })
    .then(res => res.json())
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Name</span>
          <input type="text" required className="form-control" placeholder="John Doe"
            aria-label="Username" name="name" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Email</span>
          <input type="email" required className="form-control" placeholder="JD@yahoo.com"
            aria-label="Email" name="email" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Address</span>
          <input type="text" required className="form-control" placeholder="123 Address St."
            aria-label="Address" name="address" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">City</span>
          <input type="text" required className="form-control" placeholder="Hawkins"
            aria-label="City" name="city" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">State</span>
          <input type="text" required className="form-control" placeholder="CA"
            aria-label="State" name="state" aria-describedby="basic-addon1" />
        </div>

        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
