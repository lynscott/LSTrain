import React, {Component} from 'react';
import { connect } from 'react-redux';

class TypeDetail extends Component {
  renderType() {
    return (
      <div>
      <div className="card">
        <img className="card-img-top" src="http://www.fitnessandpower.com/wp-content/uploads/2016/08/body-type.jpg" alt="Card cap" />
        <div className="card-body">
          <h4 className="card-title">{this.props.type.type}</h4>
          <p className="card-text">{this.props.type.info}</p>
          <a href="#" className="btn btn-primary" data-toggle="button">Get FREE Plan!</a>
        </div>
      </div>
    </div>
    )
  }

  render() {
    if (!this.props.type) {
      return <div>
              {/* <img className="img-fluid" src="http://www.fitnessandpower.com/wp-content/uploads/2016/08/body-type.jpg" alt="Card cap" /> */}
              <h2><span className="badge badge-secondary">Select your body type!</span></h2>
            </div>
    }

    return (
    <div>
      {this.renderType()}
    </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    type: state.activeType,
  };
}

export default connect(mapStateToProps)(TypeDetail);
