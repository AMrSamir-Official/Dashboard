import { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [series] = useState([14, 23, 21, 17, 15, 10, 12, 17, 21]);

  const [options] = useState({
    chart: {
      type: "polarArea",
      toolbar: {
        show: true, // Hide the chart toolbar
      },
      events: {
        dataPointMouseEnter: function (event, chartContext, config) {
          // Handle tooltip customization or popup behavior
          console.log("Data point hovered:", config);
        },
      },
      foreColor: "#ccc", // Set foreground color for dark theme
    },
    fill: {
      opacity: 0.8,
    },
    stroke: {
      colors: ["#fff"],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: [
      "Label 1",
      "Label 2",
      "Label 3",
      "Label 4",
      "Label 5",
      "Label 6",
      "Label 7",
      "Label 8",
      "Label 9",
    ],
  });

  return (
    <div>
      <div id="chart">
        <Chart
          options={options}
          series={series}
          type="polarArea"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
