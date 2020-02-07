import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart';
import Table from './components/Table';

//INSERT ORIGNIAL DATA HERE:
const data = [
  { 'a': 1, 'b': 3, 'c': 10 },
  { 'a': 3, 'b': 20, 'c': 12 },
  { 'a': -1, 'b': -5, 'c': -4 }
];

//Converts the original array into 2 new arrays, for each unique dataset:
let ab_Set = [], ac_Set = [];
data.forEach(({ a, b, c }, i) => {
  ab_Set[i] = { x: a, y: b };
  ac_Set[i] = { x: a, y: c };
});

//Sort the 2 datasets so the datapoints are in ascending order:
ab_Set.sort((currObj, nextObj) => currObj.x - nextObj.x);
ac_Set.sort((currObj, nextObj) => currObj.x - nextObj.x);

class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Data Visualizer</h1>
        </div>
        <div className="display">
          <Table ab_Set={ab_Set} ac_Set={ac_Set} />
          <Chart ab_Set={ab_Set} ac_Set={ac_Set} />
        </div>
        <img className="img" src="../public/assets/holocene_logo.jpg" />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
