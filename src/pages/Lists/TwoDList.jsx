import React from "react";
import { Table } from "flowbite-react";
import CustomHeader from "../../components/CustomHeader";
import {
  AiOutlineBook,
  AiOutlinePrinter,
  AiOutlineSearch,
} from "react-icons/ai";
import TwoDRecordTable from "../../components/Records/TwoDRecordTable";
import ListFooter from "../../components/ListFooter";

const TwoDList = () => {
  const two_d_records = [
    {
      ID: "#9945",
      player: "ကိုကျော်မြင့်",
      numbers: "10/11/12",
      time: "နံနက်",
      date: "3.07.2023",
      issue_num: "ab9989",
      total_money: "၈၀၀",
      status: "win",
    },
    {
      ID: "#9946",
      player: "ကိုကျော်မြင့်",
      numbers: "10/11/12",
      time: "နံနက်",
      date: "3.07.2023",
      issue_num: "ab9989",
      total_money: "၈၀၀",
      status: "win",
    },
    {
      ID: "#9947",
      player: "ကိုကျော်မြင့်",
      numbers: "10/11/12",
      time: "နံနက်",
      date: "3.07.2023",
      issue_num: "ab9989",
      total_money: "၈၀၀",
      status: "win",
    },
  ];
  const rows = two_d_records.map((record, index) => (
    <Table.Row
      key={index + 1}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell>{record?.ID}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {record?.player}
      </Table.Cell>
      <Table.Cell>{record?.numbers}</Table.Cell>
      <Table.Cell>{record?.time}</Table.Cell>
      <Table.Cell>{record?.date}</Table.Cell>
      <Table.Cell>{record?.issue_num}</Table.Cell>
      <Table.Cell>{record?.total_money}</Table.Cell>
      <Table.Cell>{record?.status}</Table.Cell>

      <Table.Cell className="flex">
        <button
          type="button"
          className="text-primary border border-primary hover:bg-primary-active hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-s-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <AiOutlineBook />
          <span className="sr-only">Icon description</span>
        </button>
        <button
          type="button"
          className="text-primary border border-s-0 border-primary hover:bg-primary-active hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-e-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          onClick={() => banHandler(user?.id)}
        >
          <AiOutlinePrinter />
          <span className="sr-only">Icon description</span>
        </button>
      </Table.Cell>
    </Table.Row>
  ));
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="စာရင်းများ" page="2D စာရင်း" />

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
        <div className="flex gap-5">
          <p>
            စုစုပေါင်းထိုးကြေး : <span>900000 MMK</span>
          </p>
          <p>
            လျှော်ကြေး : <span>80000 MMK</span>
          </p>
        </div>
      </div>

      <TwoDRecordTable rows={rows} />
      <ListFooter/>
    </div>
  );
};

export default TwoDList;
