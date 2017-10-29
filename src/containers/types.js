import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectType} from '../actions/index';
import {bindActionCreators} from 'redux';

class TypeList extends Component {
  renderList() {
    return this.props.types.map((type) => {
      return (
        <li key={type.type}
            onClick={() => this.props.selectType(type)}
            className="list-group-item">
            {type.type}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    types: state.types
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectType: selectType}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TypeList);
