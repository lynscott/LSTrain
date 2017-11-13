import React, { Component } from 'react';
import {connect} from 'react-redux';
import alertify from 'react-alertify-js';

class InfoBar extends Component {
  constructor(props) {
    super(props);

    this.state = {name: '', email: '', weight: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onInfoSubmit = this.onInfoSubmit.bind(this);
  }

  onInputChange(event) {
    if (event.target.name ==="name") {
      this.setState({name: event.target.value});
    }
    if (event.target.name ==="email") {
      this.setState({email: event.target.value});
    }
    if (event.target.name ==="weight") {
      this.setState({weight: event.target.value});
    }
  }

  onInfoSubmit(event) {
    event.preventDefault();
    if (!this.props.type.type || !this.props.plan.name) {
      return alertify.alert("please select a plan and body type");
    }
    if (this.props.type.type==='Ectomorph') {
      return alertify.alert( event.target.name.value + " is an Ectomorph")
    }
  }

  render() {
    return (
      <form onSubmit={this.onInfoSubmit}>
        <div className="form-row">
          <div className="col-sm-2">
            <input type="text" className="form-control" onChange={this.onInputChange} name="name" value={this.state.name} placeholder="Full Name"/>
          </div>
          <div className="col-sm-2">
          <input type="email" className="form-control" name="email" onChange={this.onInputChange} value={this.state.email} placeholder="Email"/>
          </div>
          <div className="col-sm-2">
            <input type="integer" className="form-control" name="weight" onChange={this.onInputChange} value={this.state.weight} placeholder="Current Wieght"/>
          </div>
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Get Plan!</button>
          </span>

        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    type: state.activeType,
    plan: state.activePlan
  };
}

export default connect(mapStateToProps)(InfoBar);
