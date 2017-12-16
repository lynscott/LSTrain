import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Nav extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
          </div>
        );
      case false:
        return (
          <a href="/auth/google" className="nav-item nav-link active">Login with Google</a>
        );
      default:
        return [
          <Link key="1" className="nav-item nav-link active" to={`/dashboard/${this.props.auth._id}`} >Dashboard</Link>,
          <a href="/api/logout"  key="2" className="nav-item nav-link">Logout</a>
        ];
    }
  }

  componentDidMount() {
    this.props.fetchUser();

  }

  render() {
    console.log(this.props.auth)
    return (
      <div>
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand mx-auto" style={{width: 200}} id="title" to="/">
              <img src={logo} className="d-inline-block align-top" width="200" height="60" alt="logo" />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <div className="navbar-nav">
               <Link className="nav-item nav-link " id="title" to="/about">About</Link>
               <Link className="nav-item nav-link " id="title" to="/training">Online Training</Link>
               {this.renderContent()}
             </div>
             <a className="nav-item nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lsphysique/" ><i className="fa fa-instagram" aria-hidden="true"></i></a>
             <a className="nav-item nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lsphysique/" ><i className="fa fa-facebook-square" aria-hidden="true"></i></a>


            </div>
          </nav>

        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Nav);
