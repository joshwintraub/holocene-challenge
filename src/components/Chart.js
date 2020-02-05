import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        datasets: [{
          label: 'Dataset B',
          data: props.ab_Set,
          showLine: true,
          tension: 0,
          fill: false,
          borderColor: '#C17A2C'
        }, {
          label: 'Dataset C',
          data: props.ac_Set,
          showLine: true,
          tension: 0,
          fill: false,
          borderColor: '#008EB3'
        }],
      },
      options: {
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              const label = data.datasets[tooltipItem.datasetIndex].label;
              const point = { x: tooltipItem.xLabel, y: tooltipItem.yLabel };
              return `${label} at point: (x= ${point.x}, y= ${point.y})`;
            }
          }
        },
        title: {
          display: true,
          text: "Chart",
          fontSize: 20,
          fontColor: "#00475D"
        }
      }
    }
  }

  render() {
    return (
      <div className="chartBox">
        <Scatter
          data={this.state.chartData}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default Chart;
