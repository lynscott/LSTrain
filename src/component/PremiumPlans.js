import React, { Component } from 'react';
import slate from '../img/slate.jpg';


class PremiumPlans extends Component {
  purchaseForm(plan) {
    return (
      console.log("planb")
    );
  }


  renderPlans() {
    return (
      <div className="row">
        <div className="col-md-4">
          <figure className="figure">
            <img src={slate} className="figure-img img-fluid rounded" alt=" Plan A" />
            <figcaption className="figure-caption">A caption for the above image.</figcaption>
          </figure>
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@PlanA"
            className="btn btn-primary">Plan A</button>
        </div>
        <br />
        <div className="col-md-4">
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
        <div className="col-md-4">
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
              <form>
                <div className="form-group">
                  <label  className="col-form-label">Recipient:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="form-group">
                  <label  className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Send message</button>
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
