import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../../data/mockData";

const LineChart = ({ isDashboard = false }) => {
  const darkModeTheme = {
    axis: {
      domain: {
        line: {
          stroke: "#555",
        },
      },
      legend: {
        text: {
          fill: "#aaa",
        },
      },
      ticks: {
        line: {
          stroke: "#555",
          strokeWidth: 1,
        },
        text: {
          fill: "#aaa",
        },
      },
    },
    tooltip: {
      container: {
        background: "#333",
        color: "#fff",
      },
    },
  };

  const colors = { scheme: "dark2" };

  return (
    <div className="w-full h-full shadow flex justify-center items-center">
      <ResponsiveLine
        data={data}
        theme={darkModeTheme}
        colors={colors}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5,
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,

            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "#333",
            itemTextColor: "white",

            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "blue",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
