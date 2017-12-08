import React, { Component } from 'react';
import PaymentRequestForm from 'react-stripe-elements';
import StrengthPlan from './StrengthPlan';
import ShredPlan from './ShredPlan';
import TonePlan from './TonePlan';


class PremiumPlans extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <StrengthPlan />
        <ShredPlan />
        <TonePlan />
      </div>
    )
  }

}

export default PremiumPlans;
