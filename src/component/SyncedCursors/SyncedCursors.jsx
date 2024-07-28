import React, { useMemo, useState } from "react";
import { Chart } from "react-charts";
import ResizableBox from "./ResizableBox"; // Adjust the path as per your project structure
import useDemoConfig from "./useDemoConfig"; // Adjust the path as per your project structure

export default function SyncedCursors() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const [primaryCursorValue, setPrimaryCursorValue] = useState();
  const [secondaryCursorValue, setSecondaryCursorValue] = useState();

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    [data]
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    [data]
  );

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <pre>
        {JSON.stringify(
          {
            primaryCursorValue: primaryCursorValue ?? "undefined",
            secondaryCursorValue: secondaryCursorValue ?? "undefined",
          },
          null,
          2
        )}
      </pre>

      <div style={{ height: "1rem" }} />
      <ResizableBox width={500}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            primaryCursor: {
              value: primaryCursorValue,
              onChange: (value) => {
                setPrimaryCursorValue(value);
              },
            },
            secondaryCursor: {
              value: secondaryCursorValue,
              onChange: (value) => {
                setSecondaryCursorValue(value);
              },
            },
          }}
        />
      </ResizableBox>
      <div style={{ height: "1rem" }} />
    </>
  );
}
