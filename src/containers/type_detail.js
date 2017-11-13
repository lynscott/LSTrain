import React, {Component} from 'react';
import { connect } from 'react-redux';

class TypeDetail extends Component {
  renderType() {
    return (
      <div>
      <figure className="figure">
        <img src="http://www.fitnessandpower.com/wp-content/uploads/2016/08/body-type.jpg" className="figure-img img-fluid rounded" alt="bench"/>
        <figcaption className="figure-caption"><strong>{this.props.type.type}</strong></figcaption>
        <figcaption className="figure-caption"><strong>{this.props.type.info}</strong></figcaption>
      </figure>
    </div>
    )
  }

  render() {
    if (!this.props.type) {
      return <div className="container">
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
