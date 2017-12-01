import React, { Component } from 'react';
import TypeList from '../containers/types.js';
import TypeDetail from '../containers/type_detail';
import PlanDetail from '../containers/plan_detail';
import PlanList from '../containers/plans.js';
import main from '../img/main2.png';
import training from '../img/training2.png';
import InfoBar from '../containers/user_info.js';
import ClientRoll from './Clients.js';
import ContactForm from './ContactForm.js';
import PremiumPlans from './PremiumPlans.js';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {users:[], text: ''};
    this.sendEmail = this.sendEmail.bind(this);
  }


  componentWillMount() {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }

  sendEmail(name, email, text) {
    fetch('/email', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({name:name, email:email, text:text})
    })
    .then(res => res.json())
  }

  render() {
    return (
    <div className="bg-secondary text-primary">
      <div className="jumbotron jumbotron-fluid bg-secondary" id="header">
        <div className="container-fluid">
         <img src={main} className="img-fluid" alt="header"/>
        </div>
      </div>
      <div className="container-fluid">
        <div className="jumbotron" id="mid">
          <h2>
            Question? Comment? Shoot me a message!
          </h2>
        <br />
        <ContactForm />
        <br />
        <ClientRoll />
        <br />
          <h3>
            Check out some of these client transformations!<br />
             Will you be next?
          </h3>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid bg-secondary" id="training">
        <div className="container-fluid">
         <img src={training} className="img-fluid" alt="training"/>
        </div>
      </div>
      <div className="container-fluid">
        <div className="jumbotron" id="mid">
          <h1 className="display-3">Free Plans!<br />
          </h1>
          <h2>
            <small className="text-muted">
              Beginner level workout guides for those new to fitness.
            </small>
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <PlanDetail />
              <PlanList />
              <TypeDetail />
              <TypeList />
              <InfoBar sendEmail={this.sendEmail} />
            </div>
               <Alert stack={{limit: 3}} />
            </div>
            </div>
        <div className="jumbotron" id="mid">
          <h1 className="display-3">Premium Programs<br />
          </h1>
          <h2>
            <small className="text-muted">
              Designed to take you to the next level.
            </small>
          </h2>
          <PremiumPlans />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
