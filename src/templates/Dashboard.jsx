import React from "react";
import { Label, Select } from "flowbite-react";
import { AiOutlineUser } from "react-icons/ai";
import ChartOne from "../components/Dashboard/ChartOne";
import ChartSmallOne from "../components/Dashboard/ChartSmallOne";
import ChartSmallDougnut from "../components/Dashboard/ChartSmallDougnut";
import ChartPie from "../components/Dashboard/ChartPie";
import CustomHeader from "./CustomHeader";
// import "../styles/dashboard.css";
// import { useSelector } from "react-redux";

const Dashboard = () => {
  // const is_dark_mode = useSelector((state) => state.stateSlice.is_dark_mode);

  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg text-dark dark:text-light">
      {/* <h1 className="font-heading">Dashboard</h1> */}
      <CustomHeader group="ပင်မစာမျက်နှာ" page="အိမ်" />

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 bg-light dark:bg-dark p-6">
        <div>
          <div className="p-2">
            <h1 className="font-heading text-3xl">Dashboard</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* features */}
          <div className="grid sm:flex gap-5 border-b px-2 py-6">
            <div className="flex gap-2">
              <div className="w-10 h-10 flex justify-center items-center border rounded-full p-2 ">
                <AiOutlineUser />
              </div>
              <div>
                <p>57 new orders</p>
                <p>Awaiting</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 flex justify-center items-center border rounded-full p-2 ">
                <AiOutlineUser />
              </div>
              <div>
                <p>57 new orders</p>
                <p>Awaiting</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 flex justify-center items-center border rounded-full p-2 ">
                <AiOutlineUser />
              </div>
              <div>
                <p>57 new orders</p>
                <p>Awaiting</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="grid sm:flex justify-between items-center gap-2">
              <div className="py-4">
                <h4 className="text-lg font-heading">Total Sells</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="max-w-md">
                {/* <div className="mb-2 block">
              <Label htmlFor="countries" value="Select your country" />
            </div> */}
                <Select id="duration" sizing="sm">
                  <option>Mar 1 - 31, 2023</option>
                  <option>Apr 1 - 31, 2023</option>
                  <option>May 1 - 31, 2023</option>
                </Select>
              </div>
            </div>
            <div className="w-full">
              <ChartOne />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
          <div className="border border-primary rounded px-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading">
                Total Orders{" "}
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  -6.8%
                </span>
              </h4>
              <p className="font-heading">16,825</p>
            </div>
            <p>Last 7 days</p>
            <div>
              <ChartSmallOne />
            </div>
          </div>

          <div className="border border-primary rounded px-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading">
                Total Orders{" "}
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  -6.8%
                </span>
              </h4>
              <p className="font-heading">16,825</p>
            </div>
            <p>Last 7 days</p>
            <div>
              <ChartOne />
            </div>
          </div>

          <div className="border border-primary rounded px-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading">
                Total Orders{" "}
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  -6.8%
                </span>
              </h4>
              <p className="font-heading">16,825</p>
            </div>
            <p>Last 7 days</p>
            <div className="w-2/3 mx-auto">
              {/* <ChartSmallOne /> */}
              <ChartSmallDougnut />
            </div>
          </div>

          <div className="border border-primary rounded px-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading">
                Total Orders{" "}
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  -6.8%
                </span>
              </h4>
              <p className="font-heading">16,825</p>
            </div>
            <p>Last 7 days</p>
            <div className="w-2/3 mx-auto">
              <ChartPie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
