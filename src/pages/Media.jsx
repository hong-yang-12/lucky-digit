import React from "react";
import CustomHeader from "../components/CustomHeader";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import "../styles/media.css";
import AgentsFooter from "../components/Agents/AgentsFooter";
import MediaFooter from "../components/MediaFooter";

const Media = () => {
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg text-dark dark:text-light">
      <CustomHeader group="ဓာတ်ပုံ" page="ဓာတ်ပုံ" />
      <div className="w-4/5 mx-auto flex justify-between items-center py-4">
        <div className="w-96">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <AiOutlineSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ရှာဖွေမည်"
              required
            />
          </div>
        </div>
        {/* <Button className=" rounded-none bg-primary mt-2">အသစ်ထည့်ရန်</Button> */}
      </div>

      {/* media upload */}
      <div className="w-4/5 mx-auto py-4 cursor-pointer">
        <p>ကိုယ်စားလှယ်ဓာတ်ပုံထည့်ရန်</p>
        <div className="customBorder w-full h-72 hover:bg-secondary-lighter flex flex-col gap-2 justify-center items-center mt-4">
          <div className="w-16 h-16 border-2 border-secondary-light hover:bg-secondary hover:border-secondary hover:text-white text-xl rounded-full flex justify-center items-center">
            <MdOutlineFileUpload />
          </div>
          <p>ဓာတ်ပုံထည့်ရန်</p>
        </div>
      </div>

      {/* gallery */}
      <div className="w-4/5 mx-auto py-4">
        <p>ဓာတ်ပုံများ</p>
        <div className="flex flex-wrap gap-5 mt-4">
          <div className="w-32 h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-32 h-32 object-cover rounded transition hover:scale-110 hover:opacity-90"
            />
          </div>
          <div className="w-32 h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-32 h-32 object-cover rounded transition hover:scale-110 hover:opacity-90"
            />
          </div>
          <div className="w-32 h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/flagged/photo-1574164908900-6275ca361157?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-32 h-32 object-cover rounded transition hover:scale-110 hover:opacity-90"
            />
          </div>
          <div className="w-32 h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1624550290077-750a91f9b2d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-32 h-32 object-cover rounded transition hover:scale-110 hover:opacity-90"
            />
          </div>
        </div>
      </div>

      <MediaFooter />
    </div>
  );
};

export default Media;
