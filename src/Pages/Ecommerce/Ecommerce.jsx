import { useState } from "react";
import { GoDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import Button from "../../component/Button";
import GeographyChart from "../../component/spicial/GeographyChart";
import LineChart2 from "../../component/spicial/LineChart2";
import StatBox from "../../component/spicial/Spline";
import {
  dropdownData,
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
} from "../../data/dummy";
import product9 from "../../data/product9.jpg";

const Ecommerce = () => {
  const customStyles = {
    backgroundColor: "#1a202c",
    textColor: "#ffffff",
    accentColor: "#3182ce",
    borderColor: "#2d3748",
    shadowColor: "rgba(0, 0, 0, 0.2)",
  };
  const [GeoData, setGeoData] = useState(() => {
    return {
      grey: "#D1D5DB",
      blue: "blue",
      green: "green",
      red: "red",
      yellow: "#ffff00",
    };
  });
  function OnGeoChange(e) {
    if (e.textContent == "March 2024")
      setGeoData({
        grey: "#D1D5DB",
        blue: "green",
        green: "red",
        red: "blue",
        yellow: "#00dead",
      });
    if (e.textContent == "April 2024")
      setGeoData({
        grey: "#7400ff",
        blue: "#e53800",
        green: "#58d40f",
        red: "#4c96d9",
        yellow: "#a941a6",
      });
    if (e.textContent == "May 2024")
      setGeoData({
        grey: "#ff00da",
        blue: "#bb5559",
        green: "#32496a",
        red: "#078158",
        yellow: "#686726",
      });
  }
  return (
    <div className="mt-12">
      <LineChart2 />

      <div
        className="bg-white dark:text-gray-200 m-auto min-w-[98%] dark:bg-secondary-dark-bg p-6 rounded-2xl md:w-760"
        style={{
          backgroundColor: customStyles.backgroundColor,
          color: customStyles.textColor,
        }}
      >
        <div className="flex justify-between flex-col  items-center gap-2 mb-14">
          <p className="text-xl font-semibold">Sales Overview</p>
          <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
            <select
              id="time"
              style={{ border: "none", color: customStyles.textColor }}
              defaultValue="1"
              className="outline-none cursor-pointer "
              onChange={OnGeoChange}
            >
              {dropdownData.map((item) => (
                <option
                  className="cursor-pointer"
                  key={item.Id}
                  value={item.Id}
                >
                  {item.Time}
                </option>
              ))}
            </select>
          </div>
          <GeographyChart colors={GeoData} />
        </div>
        <div className="md:w-full overflow-auto"></div>
      </div>

      <div className="flex flex-wrap  child-max-w  lg:flex-nowrap justify-center">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              style={{
                backgroundColor: customStyles.backgroundColor,
                color: customStyles.textColor,
              }}
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        {/* Revenue Updates section */}
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
          style={{
            backgroundColor: customStyles.backgroundColor,
            color: customStyles.textColor,
          }}
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" flex flex-col border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <StatBox />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={customStyles.accentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Earnings */}
        <div
          className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-8 m-3 flex justify-center items-center gap-10"
          style={{
            backgroundColor: customStyles.backgroundColor,
            color: customStyles.textColor,
          }}
        >
          <div>
            <p className="text-2xl font-semibold">$63,448.78</p>
            <p className="text-gray-200">Monthly revenue</p>
          </div>
        </div>

        {/* Yearly sales */}
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10"
          style={{
            backgroundColor: customStyles.backgroundColor,
            color: customStyles.textColor,
          }}
        >
          <div>
            <p className="text-2xl font-semibold">$43,246</p>
            <p className="text-gray-400">Yearly sales</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="flex justify-center flex-wrap items-center">
        <div className="flex gap-10 m-4 flex-wrap justify-center">
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl"
            style={{
              backgroundColor: customStyles.backgroundColor,
              color: customStyles.textColor,
            }}
          >
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Recent Transactions</p>
              <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
                <select
                  id="time"
                  style={{ border: "none", color: customStyles.textColor }}
                  defaultValue="1"
                  className="outline-none bg-transparent"
                >
                  {dropdownData.map((item) => (
                    <option key={item.Id} value={item.Id}>
                      {item.Time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-10 w-72 md:w-400">
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={customStyles.accentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>
              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
        </div>

        {/* Weekly Stats */}
        <div
          className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3"
          style={{
            backgroundColor: customStyles.backgroundColor,
            color: customStyles.textColor,
          }}
        >
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <div className="border-b-1 border-color mb-10">
              {weeklyStats.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between items-center gap-2"
                >
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MedicalPro Branding */}
        <div
          className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3"
          style={{
            backgroundColor: customStyles.backgroundColor,
            color: customStyles.textColor,
          }}
        >
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 APR, 2021
          </p>
          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div
                key={item.title}
                className="border-r-1 border-color pr-4 pb-2"
              >
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>
            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img
                  key={index}
                  className="rounded-full w-8 h-8"
                  src={item.image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={customStyles.accentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>
            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>

        {/* Daily Activities */}
        <div
          className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3"
          style={{
            backgroundColor: customStyles.backgroundColor,
            color: customStyles.textColor,
          }}
        >
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-500"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">Free Palestine</p>
              <p className="text-gray-400 ">By Amr Samir</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={customStyles.accentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
