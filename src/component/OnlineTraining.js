import React, { Component } from 'react';
import TrainingForm from './TrainingForm';
import Nav from './Nav';
import Footer from './Footer';
import img from '../img/OT.jpg';

class OnlineTraining extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div id="mid" className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3">

                <h2>Online Training Includes:</h2>
                <ul class="list-group">
                  <li class="list-group-item">Supplement recomendations for maximum results</li>
                  <li class="list-group-item">Weekly check-ins via Skype or phone</li>
                  <li class="list-group-item">Custom training program synced to the LS Fitness Mobile App</li>
                  <li class="list-group-item">Custom nutrition plan with healthy food options and recipes!</li>
                </ul>
                <ol>
                  <li>Option 1 $50</li>
                  <li>Option 2 $100</li>
                  <li>Option 3 $200</li>
                </ol>
              </div>
              <div className="col-md-8">
                <img src={img} className="img-fluid rounded" alt="Online Training" />
                <h2 className="display-5">Ready To Work?</h2>
                <p className="lead">Fill out the form below</p>
                <TrainingForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OnlineTraining;
