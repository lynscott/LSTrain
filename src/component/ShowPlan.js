import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlan, fetchUser } from '../actions';

class ShowPlan extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlan(id);
  }


  findBMR() {
    const { weight, height, age } = this.props.plan;
    const { gender } = this.props.auth;
    const inToCm = height * 2.54;
    const lbsToKg = weight / 2.2;
    if (gender === 'male') {
      const BMR = (9.99 * lbsToKg) + (6.25 * inToCm) - ( 4.92 * (age + 5) );
      return Math.round(BMR);
    } else if (gender ==='female') {
      const BMR = (9.99 * lbsToKg) + (6.25 * inToCm) - ( 4.92 * age ) - 161;
      return Math.round(BMR);
    }
  }


  caloricGoal() {
    //This is where we will use the acitivy var
    const maintenanceCal = this.finBMR() * 1.55
  }


  render() {
    const { plan } = this.props;

    if (!plan) {
      return ( <div className="progress progress-bar-animated">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: 75}}></div>
              </div>);
    }
    return (
      <div className="container">
        <div className="jumbotron" id="training">
          <div className="row justify-content-center">
            <div className="col">
            <h1 className="display-3">{plan.planName} Program</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
            <h4>Stats:</h4>
            <ul className="list-unstyled">
              <li>Your BMR: {this.findBMR()} Calories</li>
              <li>Your maintenance calories: {Math.round(this.findBMR() * 1.55)}</li>
              <li>Your daily calorie goal for this plan: {Math.round((this.findBMR() * 1.55) - 500) }</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Tips for success on your plan:</h4>
            <ul className="list-unstyled">
              <li>Drink at least a gallon of water a day!</li>
              <li>Eat every 2-3 hours to promote metabolism</li>
              <li>Take a day in the week to cook for the remainder of the week. This
                helps prevent eating outside of your plan.</li>
            </ul>
          </div>
        </div>
      </div>

        <div id="accordion" role="tablist">
          <div className="card">
              <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <div className="card-header" role="tab" id="headingOne">
              <h3 className="mb-0">
                <button className="btn btn-outline-dark">Training Plan</button>
              </h3>
            </div>
            </a>

            <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <p>Try to follow this pattern as best you can.</p>
                <table className="table table-hover table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Day</th>
                      <th scope="col">Muscle Group</th>
                      <th scope="col">Cardio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Monday</td>
                      <td>Legs</td>
                      <td>None</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Tuesday</td>
                      <td>Chest</td>
                      <td>20-30 mins<br/>Steady State</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Thurs</td>
                      <td>Back</td>
                      <td>20-30 mins<br/>Steady State</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Friday</td>
                      <td>Shoulders and Abs</td>
                      <td>20-30 mins<br/>Steady State</td>
                    </tr>
                  </tbody>
                  </table>
                <h3>Leg Day</h3>
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Excercise</th>
                      <th scope="col">Sets</th>
                      <th scope="col">Reps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Squat</td>
                      <td>5</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Leg Press x Walking Lunge</td>
                      <td>4</td>
                      <td>10, 10/Leg</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Hack Squat</td>
                      <td>5</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Chest Day</h3>
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Excercise</th>
                      <th scope="col">Sets</th>
                      <th scope="col">Reps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Bench Press</td>
                      <td>4</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Incline</td>
                      <td>4</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>DB Flys</td>
                      <td>4</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
              <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <div className="card-header" role="tab" id="headingTwo">
              <h3 className="mb-0">
                  <button className="btn btn-outline-dark">Nutrition Guide</button>
              </h3>
            </div>
            </a>
            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                <div className="jumbotron">
                  <p>Below is a list of healthy food options.
                  <br/>Mix and match to hit your caloric goal {Math.round((this.findBMR() * 1.55) - 500) } daily! </p>
                  <h4>Protein</h4>
                  <table className="table table-hover table-striped table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Serving (oz)</th>
                        <th scope="col">Meat</th>
                        <th scope="col">Calories</th>
                        <th scope="col">Protein(g)</th>
                        <th scope="col">Carb.(g)</th>
                        <th scope="col">Fat.(g)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">5 oz</th>
                        <td>Chicken (Breast)</td>
                        <td>233.75</td>
                        <td>44</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <th scope="row">3.5 oz</th>
                        <td>Tilapia</td>
                        <td>96</td>
                        <td>20.1</td>
                        <td>0</td>
                        <td>1.7</td>
                      </tr>
                      <tr>
                        <th scope="row">4 oz</th>
                        <td>Tuna, (Albacore)</td>
                        <td>140</td>
                        <td>30</td>
                        <td>0</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <th scope="row">4 oz</th>
                        <td>Turkey (Breast)</td>
                        <td>153</td>
                        <td>34</td>
                        <td>0</td>
                        <td>0.8</td>
                      </tr>
                      <tr>
                        <th scope="row">4 each</th>
                        <td>Egg Whites</td>
                        <td>68</td>
                        <td>14</td>
                        <td>1</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                    </table>
                    <h4>Starches and Grains</h4>
                    <table className="table table-hover table-striped table-bordered">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Serving</th>
                          <th scope="col">Carb</th>
                          <th scope="col">Calories</th>
                          <th scope="col">Protein(g)</th>
                          <th scope="col">Carb.(g)</th>
                          <th scope="col">Fat.(g)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1 cup</th>
                          <td>Brown Rice, cooked</td>
                          <td>220</td>
                          <td>4</td>
                          <td>46</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th scope="row">1/2 cup</th>
                          <td>Oatmeal, uncooked</td>
                          <td>140</td>
                          <td>5</td>
                          <td>26</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <th scope="row">1/2 cup</th>
                          <td>Quinoa</td>
                          <td>313</td>
                          <td>12</td>
                          <td>54.5</td>
                          <td>5</td>
                        </tr>
                        <tr>
                          <th scope="row">5 oz</th>
                          <td>Yam</td>
                          <td>150</td>
                          <td>4</td>
                          <td>35</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th scope="row">1 cup</th>
                          <td>White Rice, cooked</td>
                          <td>166</td>
                          <td>7</td>
                          <td>35</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                      </table>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <div className="card-header" role="tab" id="headingThree">
              <h3 className="mb-0">
                  <button className="btn btn-outline-dark">Supplement Guide</button>
              </h3>
            </div>
            </a>
            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <div className="list-group">
                  <a  className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Glutamine</h5>

                    </div>
                    <p className="mb-1">Glutamine is a non essential amino acid great for recovery.</p>
                    <p className="text-muted">10g before bedtime.</p>
                  </a>
                  <a  className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">EFA, CLA, & GLA</h5>

                    </div>
                    <p className="mb-1">Supports brain and cardiovascular health.</p>
                    <p className="text-muted">1g Omegas with breakfast lunch and dinner.</p>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">L-Carnitine</h5>

                    </div>
                    <p className="mb-1">Antioxidant; enhances weight loss and endurance performance.</p>
                    <p className="text-muted">2g 20 min before cardio</p>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Digestive Enzymes</h5>
                      {/* <small class="text-muted">3 days ago</small> */}
                    </div>
                    <p className="mb-1">Breaks down Fats, Carbs & Protein. Optimizes Nutrient Availability.</p>
                    <p className="text-muted">1 each with breakfast, lunch, and dinner</p>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Multi-Vitamin</h5>

                    </div>
                    <p className="mb-1">Supports energy, immunity and metabolism.</p>
                    <p className="text-muted">Once daily as directed</p>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">ALA</h5>

                    </div>
                    <p className="mb-1">Helps maintain a healthy blood sugar level.</p>
                    <p className="text-muted">300mg with breakfast and lunch</p>
                  </a>
                  <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">BCAAs </h5>

                    </div>
                    <p className="mb-1">Help support muscle recovery & endurance.</p>
                    <p className="text-muted">During cardio/workouts, or throughout the day.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ plans, auth }, ownProps) {
  return { plan: plans[ownProps.match.params.id], auth:auth };
}

export default connect(mapStateToProps, { fetchPlan, fetchUser })(ShowPlan);
