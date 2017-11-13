import React, {Component} from 'react';
import { connect } from 'react-redux';

class PlanDetail extends Component {
  renderGoal() {
    return (
    <div>
      <figure className="figure">
        <img src={this.props.plan.img} className="figure-img img-fluid rounded" alt="bench"/>
        <figcaption className="figure-caption"><strong>{this.props.plan.name}</strong></figcaption>
        <figcaption className="figure-caption"><strong>{this.props.plan.info}</strong></figcaption>
      </figure>
      <div>
      {this.props.plan.plan}
    </div>
    </div>
    )
  }

  render() {
    if (!this.props.plan) {
      return <div><h2><span className="badge badge-secondary">Select a plan!</span></h2></div>
    }

    return (
    <div>
      {this.renderGoal()}
    </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    plan: state.activePlan
  };
}


export default connect(mapStateToProps)(PlanDetail);
