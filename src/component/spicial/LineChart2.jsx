import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    series: [
      {
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      id: "areachart-2",
      toolbar: {
        show: false, // Hide the chart toolbar
      },
      events: {
        dataPointMouseEnter: function (event, chartContext, config) {
          // Handle tooltip customization or popup behavior
          console.log("Data point hovered:", config);
        },
      },
      foreColor: "#ccc", // Set foreground color for dark theme
    },
    tooltip: {
      enabled: true,
      x: {
        format: "dd MMM yyyy", // Format for x-axis tooltip
      },
      theme: "dark", // Use dark theme for tooltip
    },
    annotations: {
      points: [
        {
          x: new Date("01 Dec 2017").getTime(),
          y: 8607.55,
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeColor: "red",
            radius: 2,
            cssClass: "apexcharts-custom-class",
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "12px",
            },
            text: "Point Annotation",
          },
        },
        {
          x: new Date("08 Dec 2017").getTime(),
          y: 9340.85,
          marker: {
            size: 0,
          },
          image: {
            path: "../../assets/images/ico-instagram.png",
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth", // Use 'smooth' curve for a smoother line
      width: 3, // Increase stroke width
    },
    colors: ["#008FFB"], // Change the color of the line
    markers: {
      size: 5, // Increase marker size
      colors: ["#FF4560"], // Change marker color
      strokeWidth: 2, // Increase marker stroke width
      strokeColors: ["#fff"], // Marker stroke color
      hover: {
        size: 7, // Increase marker size on hover
      },
    },
    grid: {
      borderColor: "#333", // Set grid border color for dark theme
      padding: {
        right: 30,
        left: 20,
      },
    },
    title: {
      text: "Sales Trends", // Update chart title
      align: "left",
      style: {
        fontSize: "18px",
        color: "#ccc", // Set title color for dark theme
      },
    },
    legend: {
      show: false, // Hide legend
    },
    labels: [
      "2022-01-01",
      "2022-01-02",
      "2022-01-03",
      "2022-01-04",
      "2022-01-05",
      "2022-01-06",
      "2022-01-07",
      "2022-01-08",
      "2022-01-09",
    ],
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "#ccc", // Set x-axis labels color for dark theme
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ccc", // Set y-axis labels color for dark theme
        },
      },
    },
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
