/* eslint-disable react/prop-types */
import React from "react";
import { ResizableBox as ReactResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export default function ResizableBox({
  children,
  width = "100%",
  height = "100%",
  resizable = true,
  style = {},
  className = "",
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 w-full max-w-full">
      {resizable ? (
        <ReactResizableBox
          width={width}
          height={height}
          minConstraints={[100, 100]}
          maxConstraints={[1000, 1000]}
        >
          <div className={`w-full h-full ${className}`} style={{ ...style }}>
            {children}
          </div>
        </ReactResizableBox>
      ) : (
        <div
          className={`w-full h-full ${className}`}
          style={{ width: `${width}`, height: `${height}`, ...style }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
