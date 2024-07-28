import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import "./Chart.css";
const Dashboard = () => {
  // Dummy data for charts
  const spark1Data = [25, 66, 41, 59, 25, 44, 12, 36, 9, 21];
  const spark2Data = [12, 14, 2, 47, 32, 44, 14, 55, 41, 69];
  const spark3Data = [47, 45, 74, 32, 56, 31, 44, 33, 45, 19];
  const spark4Data = [15, 75, 47, 65, 14, 32, 19, 54, 44, 61];

  useEffect(() => {
    // Dummy ApexCharts configurations for sparkline charts
    const spark1Options = {
      chart: {
        id: "spark1",
        group: "sparks",
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: spark1Data }],
      stroke: { curve: "smooth" },
      markers: { size: 0 },
      colors: ["#fff"],
      tooltip: {
        enabled: true,
        theme: "dark",
        style: {
          background: "#1f2937",
          color: "#ffffff",
        },
        x: { show: false },
        y: {
          formatter: function (val) {
            return val + " CLICKS";
          },
        },
      },
    };

    const spark2Options = {
      chart: {
        id: "spark2",
        group: "sparks",
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: spark2Data }],
      stroke: { curve: "smooth" },
      markers: { size: 0 },
      colors: ["#fff"],
      tooltip: {
        enabled: true,
        theme: "dark",
        style: {
          background: "#1f2937",
          color: "#ffffff",
        },
        x: { show: false },
        y: {
          formatter: function (val) {
            return val + " VIEWS";
          },
        },
      },
    };

    const spark3Options = {
      chart: {
        id: "spark3",
        group: "sparks",
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: spark3Data }],
      stroke: { curve: "smooth" },
      markers: { size: 0 },
      colors: ["#fff"],
      tooltip: {
        enabled: true,
        theme: "dark",
        style: {
          background: "#1f2937",
          color: "#ffffff",
        },
        x: { show: false },
        y: {
          formatter: function (val) {
            return val + " LEADS";
          },
        },
      },
    };

    const spark4Options = {
      chart: {
        id: "spark4",
        group: "sparks",
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: spark4Data }],
      stroke: { curve: "smooth" },
      markers: { size: 0 },
      colors: ["#fff"],
      tooltip: {
        enabled: true,
        theme: "dark",
        style: {
          background: "#1f2937",
          color: "#ffffff",
        },
        x: { show: false },
        y: {
          formatter: function (val) {
            return val + " SALES";
          },
        },
      },
    };

    // Render ApexCharts for sparkline charts
    const chart1 = new window.ApexCharts(
      document.querySelector("#spark1"),
      spark1Options
    );
    const chart2 = new window.ApexCharts(
      document.querySelector("#spark2"),
      spark2Options
    );
    const chart3 = new window.ApexCharts(
      document.querySelector("#spark3"),
      spark3Options
    );
    const chart4 = new window.ApexCharts(
      document.querySelector("#spark4"),
      spark4Options
    );

    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
  }, []);

  // Options for line chart
  const optionsLine = {
    chart: {
      height: 328,
      type: "line",
      zoom: { enabled: false },
      dropShadow: { enabled: true, top: 3, left: 2, blur: 4, opacity: 1 },
    },
    stroke: { curve: "smooth", width: 2 },
    series: [
      { name: "Music", data: [1, 15, 26, 20, 33, 27] },
      { name: "Photos", data: [3, 33, 21, 42, 19, 32] },
      { name: "Files", data: [0, 39, 52, 11, 29, 43] },
    ],
    title: { text: "Media", align: "left", offsetY: 25, offsetX: 20 },
    subtitle: { text: "Statistics", offsetY: 55, offsetX: 20 },
    markers: { size: 6, strokeWidth: 0, hover: { size: 9 } },
    grid: { show: true, padding: { bottom: 0 } },
    labels: [
      "01/15/2002",
      "01/16/2002",
      "01/17/2002",
      "01/18/2002",
      "01/19/2002",
      "01/20/2002",
    ],
    xaxis: { tooltip: { enabled: false } },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        background: "#1f2937",
        color: "#ffffff",
      },
    },
    legend: { position: "top", horizontalAlign: "right", offsetY: -20 },
  };

  // Options for radial bar chart
  const optionsCircle4 = {
    chart: {
      type: "radialBar",
      height: 350,
      width: 380,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: true,
        hollow: { margin: 5, size: "48%", background: "transparent" },
        track: { show: false },
        startAngle: -180,
        endAngle: 180,
      },
    },
    stroke: { lineCap: "round" },
    series: [71, 63, 77],
    labels: ["June", "May", "April"],
    legend: {
      show: true,
      floating: true,
      position: "right",
      offsetX: 70,
      offsetY: 200,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        background: "#1f2937",
        color: "#ffffff",
      },
    },
  };

  // Options for bar chart
  const optionsBar = {
    chart: { height: 380, type: "bar", stacked: true },
    plotOptions: { bar: { columnWidth: "30%", horizontal: false } },
    series: [
      { name: "PRODUCT A", data: [14, 25, 21, 17, 12, 13, 11, 19] },
      { name: "PRODUCT B", data: [13, 23, 20, 8, 13, 27, 33, 12] },
      { name: "PRODUCT C", data: [11, 17, 15, 15, 21, 14, 15, 13] },
    ],
    xaxis: {
      categories: [
        "2011 Q1",
        "2011 Q2",
        "2011 Q3",
        "2011 Q4",
        "2012 Q1",
        "2012 Q2",
        "2012 Q3",
        "2012 Q4",
      ],
    },
    fill: { opacity: 1 },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        background: "#1f2937",
        color: "#ffffff",
      },
    },
  };

  // Options for area chart
  const optionsArea = {
    chart: { height: 380, type: "area", stacked: false },
    stroke: { curve: "straight" },
    series: [
      { name: "Music", data: [11, 15, 26, 20, 33, 27] },
      { name: "Photos", data: [32, 33, 21, 42, 19, 32] },
      { name: "Files", data: [20, 39, 52, 11, 29, 43] },
    ],
    xaxis: {
      categories: [
        "2011 Q1",
        "2011 Q2",
        "2011 Q3",
        "2011 Q4",
        "2012 Q1",
        "2012 Q2",
      ],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        background: "#1f2937",
        color: "#ffffff",
      },
    },
    fill: { opacity: 1 },
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1     *:br-2 md:col-span-1">
              <div className="box rounded-[10px] p-[16px] box1 bg-blue-500">
                <div className="details">
                  <h3>1213</h3>
                  <h4>CLICKS</h4>
                </div>
                <div id="spark1"></div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="box rounded-[10px] p-[16px] box2 bg-green-500">
                <div className="details">
                  <h3>422</h3>
                  <h4>VIEWS</h4>
                </div>
                <div id="spark2"></div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="box rounded-[10px] p-[16px] box3 bg-yellow-500">
                <div className="details">
                  <h3>311</h3>
                  <h4>LEADS</h4>
                </div>
                <div id="spark3"></div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="box rounded-[10px] p-[16px] box4 bg-red-500">
                <div className="details">
                  <h3>22</h3>
                  <h4>SALES</h4>
                </div>
                <div id="spark4"></div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="box rounded-[10px] p-[16px] shadow mt-4">
              <Chart
                options={optionsCircle4}
                series={optionsCircle4.series}
                type="radialBar"
                height={380}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="col-span-1">
            <div className="box shadow mt-4">
              <Chart
                options={optionsLine}
                series={optionsLine.series}
                type="line"
                height={328}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="box shadow mt-4">
              <Chart
                options={optionsBar}
                series={optionsBar.series}
                type="bar"
                height={380}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="col-span-1">
            <div className="box shadow mt-4">
              <Chart
                options={optionsArea}
                series={optionsArea.series}
                type="area"
                height={380}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
