import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: props.a,
        datasets: [{
          data: props.b,
          label: "b",
          borderColor: "blue",
          backgroundColor: '#739CE7',
          lineTension: 0,
        }, {
          data: props.c,
          label: "c",
          borderColor: "red",
          backgroundColor: '#F26864',
          lineTension: 0
        }]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={
            { maintainAspectRatio: false }
          }
        />
      </div>
    );
  }
}

export default Chart;
