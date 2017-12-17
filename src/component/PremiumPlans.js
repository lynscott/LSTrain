import React, { Component } from 'react';
import StrengthPlan from '../Strength/StrengthPlan';
import ShredPlan from '../Shred/ShredPlan';
import TonePlan from '../Tone/TonePlan';


class PremiumPlans extends Component {
  render() {
    return (
    <div>
      <div className="row justify-content-center">
        <StrengthPlan />
        <ShredPlan />
        <TonePlan />
      </div>
      <br />
      <hr />
      <h1>Follow Lyn On IG! @Lsphysique</h1><br />
      <div className="row justify-content-center">

        <script src="//lightwidget.com/widgets/lightwidget.js"></script>
        <iframe title="IG Feed" src="//lightwidget.com/widgets/03c4457e13fa5ce4ba5131e79fceb9ad.html" scrolling="no"
        allowTransparency="true" className="lightwidget-widget"></iframe>


      </div>
    </div>
    )
  }

}

export default PremiumPlans;
