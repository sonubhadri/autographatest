import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-annotation";

import { Pie } from "react-chartjs-2";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //labels: ["Under 18", "Age 18-54", "Age 55+"],
      datasets: [
        {
          data: [2000, 4000, 2850],
          backgroundColor: ["red", "blue", "green"]
        }
      ]
    };
  }
  render() {
    return (
      <div className="col s2 offset-s2">
        <span style={{ color: "#3895D3" }}>RUTH</span>
        <Pie
          data={{
            //labels: this.state.labels,
            datasets: this.state.datasets
          }}
        />
        <br />
      </div>
    );
  }
}
export default PieChart;
