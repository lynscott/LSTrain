import React from 'react';
import bench from '../img/bench.jpg';
import run from '../img/run.jpg';
import ropes from '../img/ropes.jpg';
export default function() {
  var shred = 'Program designed for maximum weight loss. Includes tailored nutrition and workout guides + cardio recommendations'
  var mass = 'Program designed for maximum lean mass gains. Includes tailored nutrition and workout guides + cardio recommendations'
  var tone = 'Program designed for muscle toning and fat loss. Includes tailored nutrition and workout guides + cardio recommendations'
  var plan1 = <div>
                <h2>Shredded Workout Plan</h2>
                <p>Follow accordingly for maximum results.</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Day 1: Back</th>
                      <th scope="col">Day 2 Chest/Shoulders</th>
                      <th scope="col">Day 3: Arms and Abs</th>
                      <th scope="col">Day 4: Lower Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Day 1</th>
                      <td>Pull-ups</td>
                      <td>DB Rows</td>
                      <td>Lat Pull Downs</td>
                    </tr>
                    <tr>
                      <th scope="row">Day 2</th>
                      <td>Bench Press</td>
                      <td>Incline Press</td>
                      <td>Machine Fly</td>
                    </tr>
                    <tr>
                      <th scope="row">Day 3</th>
                      <td>Bicep Curl</td>
                      <td>Tricep Ext</td>
                      <td>Hammer Curl</td>
                    </tr>
                    <tr>
                      <th scope="row">Day 4</th>
                      <td>Squat</td>
                      <td>RDL</td>
                      <td>Calves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
  return [
    {name : 'Shredded - Fat Loss Plan', info : shred, img : run },
    {name : 'Muscle Up - Mass Gain Plan', info : mass, img : bench},
    {name : 'Redefined - Body Recomposition Plan', info : tone, img : ropes}
  ]
}
