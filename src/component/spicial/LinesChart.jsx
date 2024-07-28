import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ series, options }) => {
  // Default options for the chart
  const defaultOptions = {
    chart: {
      height: 350,
      type: "line",
      background: "transparent", // Set chart background to transparent
      // Enable dark theme
      enabled: true,
      // Set the theme to dark
    },

    plotOptions: {
      line: {
        isSlopeChart: true,
        colors: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"], // Line colors for the series
      },
    },
    tooltip: {
      theme: "dark",

      followCursor: true,
      intersect: false,
      shared: true,
      // Customize tooltip appearance
      style: {
        background: "#374151", // Tooltip background color
        color: "#ffffff", // Tooltip text color
      },
    },
    dataLabels: {
      background: {
        enabled: true,
      },
      formatter(val, opts) {
        const seriesName = opts.w.config.series[opts.seriesIndex].name;
        return val !== null ? seriesName : "";
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          colors: "#ffffff", // Y-axis label color
        },
      },
    },
    xaxis: {
      position: "bottom",
      labels: {
        style: {
          colors: "#ffffff", // X-axis label color
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      labels: {
        colors: "#ffffff", // Legend label color
      },
    },
    stroke: {
      width: [2, 3, 4, 2],
      dashArray: [0, 0, 5, 2],
      curve: "smooth",
    },
  };

  // Merge default options with provided options
  const chartOptions = { ...defaultOptions, ...options };

  // Default series data if not provided
  const defaultSeries = [
    {
      name: "Blue",
      data: [
        { x: "Category 1", y: 503 },
        { x: "Category 2", y: 580 },
        { x: "Category 3", y: 135 },
      ],
    },
    {
      name: "Green",
      data: [
        { x: "Category 1", y: 733 },
        { x: "Category 2", y: 385 },
        { x: "Category 3", y: 715 },
      ],
    },
    {
      name: "Orange",
      data: [
        { x: "Category 1", y: 255 },
        { x: "Category 2", y: 211 },
        { x: "Category 3", y: 441 },
      ],
    },
    {
      name: "Red",
      data: [
        { x: "Category 1", y: 428 },
        { x: "Category 2", y: 749 },
        { x: "Category 3", y: 559 },
      ],
    },
  ];

  // Merge default series with provided series
  const chartSeries = series ? series : defaultSeries;

  return (
    <div style={{ width: "100%" }} id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
        width="100%" // Ensure chart width is 100% of parent
      />
    </div>
  );
};

export default LineChart;
