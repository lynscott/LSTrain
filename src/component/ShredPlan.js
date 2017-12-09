import React, { Component } from 'react';
import pic from '../img/Shred.jpg';
import StoreCheckout from './StoreCheckout';

class ShredPlan extends Component {
  render() {
    return (
      <div className="col-md-3">
        <figure className="figure">
          <img src={pic} className="figure-img img-fluid rounded" height="50%" alt=" Plan A" />
          <figcaption className="figure-caption">A 30 Day Fat Loss Program.</figcaption>

        </figure>
        <button
          data-toggle="modal"
          data-target="#ShredModal"
          data-whatever="@PlanA"
          className="btn btn-primary">Buy Plan</button>
      <div className="modal fade" id="ShredModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h5 className="modal-title" id="ModalLabel">Premium Plans</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center">
                <div className="col-sm-4">
                    <h4>$29</h4>
                    <hr></hr>
                  <img src={pic} className="figure-img img-fluid rounded" alt=" Plan A" />

              </div>
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <strong><p>10 Week premium plan designed to target those stubborn fat areas and lose wieght.</p></strong>
                </div>
              </div>
            </div>


            </div>
            <div className="modal-footer bg-light justify-content-center">
              <StoreCheckout />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ShredPlan;
