import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-annotation";

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //labels: ["Under 18", "Age 18-54", "Age 55+"],
      datasets: [
        {
          data: [4000, 2850],
          backgroundColor: ["red", "green"]
        }
      ]
    };
  }
  render() {
    return (
      <div className="col s2">
        <span style={{ color: "#3895D3" }}>FULL BIBLE</span>
        <Doughnut
          data={{
            //labels: this.state.labels,
            datasets: this.state.datasets
          }}
          centerText={{
            display: true,
            text: "280"
          }}
        />
        <br />
      </div>
    );
  }
}
export default DoughnutChart;
