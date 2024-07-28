/* eslint-disable react/prop-types */

import { IoCloudDownloadOutline } from "react-icons/io5";
import Chart from "../../component/charts_bar/Chart";
import Datetime from "../../component/spicial/Datetime";
import LineChart from "../../component/spicial/LineChart";
import LinesChart from "../../component/spicial/LinesChart";
import PyramidChart from "../../component/spicial/PyramidChart ";
import { mockTransactions } from "../../data/mockData";
import "./Dashboard.scss";

const Dashboard = () => {
  const colors = {
    blueAccent: { 700: "#007bb5" },
    grey: { 100: "#f5f5f5" },
    primary: { 400: "#303f9f", 500: "#1a237e" },
    greenAccent: { 500: "#4caf50", 600: "#388e3c" },
    dark: {
      background: "#232c38", // Dark background color
      surface: "#2b3648", // Dark surface color
      textPrimary: "#ffffff", // Light text color
      textSecondary: "#a6b2c1", // Secondary text color
    },
  };

  return (
    <div
      style={{
        margin: "20px",
        marginBottom: "10px",
        color: colors.dark.textPrimary,
      }}
    >
      <Chart />
      <Datetime />
      <PyramidChart />
      <LinesChart />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            border: "none",
            cursor: "pointer",
          }}
        >
          <IoCloudDownloadOutline
            style={{ marginRight: "10px", fontSize: "20px" }}
          />
          Download Reports
        </button>
      </div>

      {/* GRID & CHARTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))",
          gridAutoRows: "140px",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* ROW 1 - Commented out empty section */}

        {/* ROW 2 */}
        <div
          style={{
            gridColumn: "span 8",
            gridRow: "span 2",
            background: colors.dark.surface,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div style={{ height: "250px", margin: "-20px 0 0 0" }}>
            <LineChart isDashboard={true} />
          </div>
        </div>
        <div
          style={{
            gridColumn: "span 4",
            gridRow: "span 2",
            background: colors.dark.surface,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `1px solid ${colors.primary[500]}`,
              padding: "15px",
            }}
          >
            <h5 style={{ fontWeight: "600", color: colors.grey[100] }}>
              Recent Transactions
            </h5>
          </div>
          {mockTransactions.map((transaction, i) => (
            <div
              key={`${transaction.txId}-${i}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid ${colors.primary[500]}`,
                padding: "15px",
                color: colors.grey[100],
              }}
            >
              <div>
                <h5
                  style={{ color: colors.greenAccent[500], fontWeight: "600" }}
                >
                  {transaction.txId}
                </h5>
                <p>{transaction.user}</p>
              </div>
              <div>{transaction.date}</div>
              <div
                style={{
                  backgroundColor: colors.greenAccent[500],
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                ${transaction.cost}
              </div>
            </div>
          ))}
        </div>

        {/* ROW 3 - Commented out empty section */}
      </div>
    </div>
  );
};

export default Dashboard;
