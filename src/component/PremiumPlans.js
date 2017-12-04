import React, { Component } from 'react';
import slate from '../img/slate.jpg';
import strength from '../img/strength.jpg';


class PremiumPlans extends Component {
  purchaseForm(plan) {
    return (
      console.log("planb")
    );
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
              <h5 className="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="sq-ccbox">
                {/* <!--
                  You should replace the action attribute of the form with the path of
                  the URL you want to POST the nonce to (for example, "/process-card")
                --> */}
                <form id="nonce-form" novalidate action="path/to/payment/processing/page" method="post">
                  Pay with a Credit Card
                  <table>
                  <tbody>
                    <tr>
                      <td>Card Number:</td>
                      <td><div id="sq-card-number"></div></td>
                    </tr>
                    <tr>
                      <td>CVV:</td>
                      <td><div id="sq-cvv"></div></td>
                    </tr>
                    <tr>
                      <td>Expiration Date: </td>
                      <td><div id="sq-expiration-date"></div></td>
                    </tr>
                    <tr>
                      <td>Postal Code:</td>
                      <td><div id="sq-postal-code"></div></td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <button id="sq-creditcard" class="button-credit-card" onclick="requestCardNonce(event)">
                          Pay with card
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  </table>

                  {/* <!--
                    After a nonce is generated it will be assigned to this hidden input field.
                  --> */}
                  <input type="hidden" id="card-nonce" name="nonce" />
                </form>
              </div>


            </div>
            <div className="modal-footer">
              <div id="sq-walletbox">
                Pay with a Digital Wallet
                <div id="sq-apple-pay-label" class="wallet-not-enabled">Apple Pay for Web not enabled</div>
                {/* <!-- Placholder for Apple Pay for Web button --> */}
                <button id="sq-apple-pay" class="button-apple-pay"></button>

                <div id="sq-masterpass-label" class="wallet-not-enabled">Masterpass not enabled</div>
                {/* <!-- Placholder for Masterpass button --> */}
                <button id="sq-masterpass" class="button-masterpass"></button>
              </div>
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
