import React, { Component } from 'react';

class Guide extends Component {
  render() {
    return (
      <div className="jumbotron bg-dark">
        <p>
          To get the best results for your training eat at least 6 small to
          medium sized meals a day, every 2-3 hours.<br />
          <strong>For Weight Loss:</strong> Eat at least 1g of protein per lb of
          body weight per day. Eat 100g-200g of carbs per day focusing your
          highest carb intake on your most taxing training days (Legs/Back).
          Keep fats minimal, within 50g-70g.<br />
          <br />
          <strong>For Lean Weight Gain:</strong> Eat at least 1-1.3g per lb body
          weight for women and 1-1.5g per lb body weight for men of protein per
          day. Eat 150g-300g+ of carbs per day focusing your highest carb intake
          on your on your most taxing training days (Legs/Back) and lower on
          rest days. Keep fats minimal, within 50g-70g.
        </p>
        <p>
          Below is a list of healthy food options.
          <br />Mix and match to hit your caloric goal: {this.props.caloricGoal}
        </p>
        <h4>Protein</h4>
        <table className="table table-hover table-responsive-sm table-striped table-bordered">
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
        <table className="table table-hover table-responsive-sm table-striped table-bordered">
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
        <h4>Example Nutrition Plan Layout</h4>
        <p />
        <table className="table table-hover table-responsive-sm table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Meal #</th>
              <th scope="col">Item</th>
              <th scope="col">Serving</th>
              <th scope="col">Calories</th>
              <th scope="col">Protein(g)</th>
              <th scope="col">Carb.(g)</th>
              <th scope="col">Fat.(g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                1 <br /> 7:00 AM
              </th>
              <td>Egg Whites</td>
              <td>" "</td>
              <td>" "</td>
              <td>" "</td>
              <td>" "</td>
              <td>" "</td>
            </tr>
            <tr>
              <th scope="row" />
              <td>Oatmeal</td>
              <td>" "</td>
              <td>" "</td>
              <td>" "</td>
              <td>" "</td>
              <td>" "</td>
            </tr>
            <tr>
              <th scope="row">
                2 <br /> 9:00 AM
              </th>
              <td>Chicken Breast</td>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row" />
              <td>Brown Rice</td>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row" />
              <td>Broccolli</td>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Guide;
