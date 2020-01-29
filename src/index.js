import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart';

//INSERT ORIGNIAL DATA HERE:
const data = [
  { 'a': 1, 'b': 3, 'c': 10 },
  { 'a': 3, 'b': 20, 'c': 12 },
  { 'a': -1, 'b': -5, 'c': -4 }
];

//Converts the original array into 3 new arrays, for each respective key value:
let aVals = [], bVals = [], cVals = [];
data.forEach(({ a, b, c }, i) => {
  aVals[i] = a;
  bVals[i] = b;
  cVals[i] = c;
});

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Table will go here.</h1>
        <Chart a={aVals} b={bVals} c={cVals} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
