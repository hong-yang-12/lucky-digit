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

{
  /* <Modal dismissible show={numberOpen} onClose={() => setNumberOpen(false)}>
  <Modal.Body className="w-[32rem] mx-auto">
    <div className="grid grid-cols-2 gap-5 cursor-pointer">
      <div>
        <div className="flex justify-evenly items-center gap-3 mb-5">
          <div className="flex items-center gap-2">
            <Radio
              id="d"
              name="methods"
              value="ဒဲ့"
              onChange={handleRadioChange}
              defaultChecked
            />
            <Label htmlFor="d">ဒဲ့</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="r"
              name="methods"
              value="R"
              onChange={handleRadioChange}
            />
            <Label htmlFor="r">R</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="p"
              name="methods"
              value="ပတ်မည်"
              onChange={handleRadioChange}
            />
            <Label htmlFor="p">ပတ်မည်</Label>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3  transition">
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "100" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            100
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "200" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            200
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "300" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            300
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "500" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            500
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "800" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            800
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "1000" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            1000
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "1200" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            1200
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "1500" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            1500
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "1800" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            1800
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "2000" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            2000
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "2200" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            2200
          </button>
          <button
            onClick={handleMoney}
            className={`${
              two_d?.money === "2500" && "bg-primary text-white"
            } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
          >
            2500
          </button>
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-3">
        <li className="p-3 border border-primary hover:bg-primary hover:text-white flex justify-center items-center col-span-3">
          {custom_money ? custom_money : "Custom"}
        </li>
        <li
          onClick={handleCustomMoney}
          value="1"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          1
        </li>
        <li
          onClick={handleCustomMoney}
          value="2"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          2
        </li>
        <li
          onClick={handleCustomMoney}
          value="3"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          3
        </li>
        <li
          onClick={handleCustomMoney}
          value="4"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          4
        </li>
        <li
          onClick={handleCustomMoney}
          value="5"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          5
        </li>
        <li
          onClick={handleCustomMoney}
          value="6"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          6
        </li>
        <li
          onClick={handleCustomMoney}
          value="7"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          7
        </li>
        <li
          onClick={handleCustomMoney}
          value="8"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          8
        </li>
        <li
          onClick={handleCustomMoney}
          value="9"
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          9
        </li>
        <li
          onClick={handleCustomMoney}
          value="0"
          className=" border border-primary hover:bg-primary hover:text-white flex justify-center items-center col-span-2"
        >
          0
        </li>
        <li
          onClick={handleDeleteMoney}
          className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
        >
          Del
        </li>
      </ul>
    </div>
    <Button onClick={handleCloseNumber} color="light" className="ms-auto mt-5">
      နောက်တစ်ကြိမ်ထိုးမည်
    </Button>
  </Modal.Body>
</Modal>; */
}

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
