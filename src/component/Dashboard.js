import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import PlanList from './PlanList';

class Dashboard extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return this.props.history.push('/')
      default:
        return (
          <div class="media">
            <img class="mr-3" src={this.props.auth.img} alt="placeholder image" />
            <div class="media-body">
              <h5 class="mt-0">{this.props.auth.name}</h5>
              Welcome back!
            </div>
          </div>
        );
    }
  }

  componentDidMount() {
    this.props.fetchUser();

  }


  render() {
    return (

        <div className="container">
          <div className="jumbotron justify-content-center">
            <h1>Dashboard</h1>
            {this.renderContent()}<br/>

            <PlanList />
          </div>
        </div>

    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(Dashboard));
