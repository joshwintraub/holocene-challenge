import React, { Component } from 'react';
import { Line, Scatter } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        datasets: [{
          label: 'Scatter Dataset #1',
          showLine: true,
          tension: 0,
          fill: false,
          data: [
            { x: -1, y: 0 },
            { x: 0, y: 10 },
            { x: 10, y: 5 }
          ]
        }, {
          label: 'Scatter Dataset #2',
          showLine: true,
          tension: 0,
          fill: false,
          data: [
            { x: -2, y: 2 },
            { x: -1, y: 1 },
            { x: 8, y: 6.5 }
          ]
        }],
      },
      chartOptions: {
        showLine: true
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Scatter
          data={this.state.chartData}
          options={this.state.options}
        // options={{
        //   maintainAspectRatio: false
        // }}
        />
      </div>
    );
  }
}

export default Chart;
