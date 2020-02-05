import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart';
import Table from './components/Table';

//INSERT ORIGNIAL DATA HERE:
// const data = [
//   { 'a': 1, 'b': 3, 'c': 10 },
//   { 'a': 3, 'b': 20, 'c': 12 },
//   { 'a': -1, 'b': -5, 'c': -4 }
// ];

const data = [
  { 'a': 1, 'b': 3, 'c': 10 },
  { 'a': 3, 'b': 20, 'c': 12 },
  { 'a': -1, 'b': -5, 'c': -4 },
  { 'a': 2, 'b': 5, 'c': 20 },
  { 'a': 7, 'b': 30, 'c': 22 },
  { 'a': -4, 'b': -3, 'c': -40 },
  { 'a': -1, 'b': -15, 'c': -43 },
  { 'a': 20, 'b': 55, 'c': 40 },
  { 'a': 7, 'b': 0.5, 'c': 23 },
  { 'a': 10, 'b': 10, 'c': 40 }
];

//Converts the original array into 2 new arrays, for each unique dataset:
let ab_Set = [], ac_Set = [];
data.forEach(({ a, b, c }, i) => {
  ab_Set[i] = { x: a, y: b };
  ac_Set[i] = { x: a, y: c };
});

//Sort the 2 datasets so the datapoints are in asceding order:
ab_Set.sort((currObj, nextObj) => currObj.x - nextObj.x);
ac_Set.sort((currObj, nextObj) => currObj.x - nextObj.x);

class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 align="center">Data Visualizer</h1>
        </div>
        <div className="display">
          <Chart ab_Set={ab_Set} ac_Set={ac_Set} />
          <Table ab_Set={ab_Set} ac_Set={ac_Set} />
        </div>
        <img src="../public/assets/holocene_logo.jpg" width="150px" height="auto" style={{ position: "absolute", bottom: 0, right: 0 }} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
