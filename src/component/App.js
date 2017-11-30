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
    <div>
      <div className="jumbotron jumbotron-fluid" id="header">
        <div className="container">
         <img src={main} className="img-fluid" alt="header"/>
        </div>
      </div>
      <div className="container">
        <div className="jumbotron" id="mid">
        <ContactForm />
        <ClientRoll />
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid" id="training">
        <div className="container">
         <img src={training} className="img-fluid" alt="training"/>
        </div>
      </div>
      <div className="container">
        <div className="jumbotron">
          <h1>Free 10-Day Plans</h1>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <PlanDetail />
              <PlanList />
              <TypeDetail />
              <TypeList />
              <InfoBar sendEmail={this.sendEmail} />
            </div>
        </div>
           <Alert stack={{limit: 3}} />
        </div>
        <h1>Premium Programs</h1>
      </div>
    </div>
    );
  }
}

export default App;
