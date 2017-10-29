import React, {Component} from 'react';
import { connect } from 'react-redux';

class TypeDetail extends Component {
  render() {
    if (!this.props.type) {
      return <div>Slect a Type.</div>
    }

    return (
      <div>
        <h3> Details for:</h3>
        <div>{this.props.type.type}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    type: state.activeType
  };
}

export default connect(mapStateToProps)(TypeDetail);
