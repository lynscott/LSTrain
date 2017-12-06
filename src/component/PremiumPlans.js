import React, { Component } from 'react';
import slate from '../img/slate.jpg';
import strength from '../img/strength.jpg';
import StoreCheckout from './StoreCheckout';
import PaymentRequestForm from 'react-stripe-elements';


class PremiumPlans extends Component {
      onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
 }


  renderPlans() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-3">
          <figure className="figure">
            <img src={strength} className="figure-img img-fluid rounded" height="50%" alt=" Plan A" />
            <figcaption className="figure-caption">A 30 Day Strength and Mass Program.</figcaption>
            <ul className="list-group">
              <li className="list-group-item">
                Diet Included
              </li>
            </ul>
          </figure>
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@PlanA"
            className="btn btn-primary">Strength</button>
        </div>
        <br />
        <div className="col-md-3">
          <figure className="figure">
            <img src={slate} className="figure-img img-fluid rounded-circle" alt=" Plan A" />
            <figcaption className="figure-caption">A caption for the above image.</figcaption>
          </figure>
          <button
            id="planb"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="PlanB"
            onClick={this.purchaseForm}
            className="btn btn-primary">Plan B</button>
        </div>
        <br/>
        <div className="col-md-3">
          <figure className="figure">
            <img src={slate} className="figure-img img-fluid rounded" alt=" Plan A" />
            <figcaption className="figure-caption">A caption for the above image.</figcaption>
          </figure>
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@PlanC"
            className="btn btn-primary">Plan C</button>
        </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Buy Plan</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <StoreCheckout />

            </div>
            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.renderPlans()}


      </div>
    )
  }
}

export default PremiumPlans;
