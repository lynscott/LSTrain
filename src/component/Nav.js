import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/white_logo_edit.png';

class Nav extends Component {
  render() {
    return (
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand mx-auto" style={{width: 200}} id="title" to="/">
              <img src={logo} className="d-inline-block align-top" width="200" height="50" alt="logo" />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <div className="navbar-nav">
               <Link className="nav-item nav-link " id="title" to="/about">About</Link>
               <Link className="nav-item nav-link " id="title" to="/training">Online Training</Link>

             </div>
             <a className="nav-item nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lsphysique/" ><i className="fa fa-instagram" aria-hidden="true"></i></a>
             <a className="nav-item nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lsphysique/" ><i className="fa fa-facebook-square" aria-hidden="true"></i></a>


            </div>
          </nav>
    );
  }
}

export default Nav;
