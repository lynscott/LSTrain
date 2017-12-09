import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="jumbotron-fluid bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h5>Email me @</h5>
              <hr />
                <p> Copyright 2017 LS Fitness. Web Design: <a target="_blank" rel="noopener noreferrer"
                   href="http://www.lynscottdev.com/">lynscottdev</a>
                 </p>
             </div>
           </div>
        </div>
      </div>
    );
  }
}

export default Footer;
