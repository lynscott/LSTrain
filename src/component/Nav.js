import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="jumbotron-fluid">
        <div className="container-fluid">
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
             <div className="container-fluid">
            <Link className="navbar-brand" id="title" to="/">LSPhysique</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <div className="navbar-nav">
               <Link className="nav-item nav-link" id="title" to="/about">About</Link>
               <Link className="nav-item nav-link" id="title" to="/training">Online Training</Link>
               {/* <a className="nav-item nav-link" href="">About <span class="sr-only">(current)</span></a>
               <a className="nav-item nav-link float-right" href="">Online Training</a> */}
             </div>
             <a className="nav-item nav-link active" target="_blank" rel="noopener noreferrer" href="http://www.lynscottdev.com/">lynscottdev</a>
            </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
