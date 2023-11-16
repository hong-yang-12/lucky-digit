import React, { useState } from "react";
// import { Label, Select } from 'flowbite-react';
import { Button, Label, TextInput, Select } from "flowbite-react";
import SessionTable from "../components/SessionTable";
// import { useDispatch, useSelector } from "react-redux";
// import { addSession } from "../redux/service/stateSlice";
import { Table } from "flowbite-react";
import CustomHeader from "../components/CustomHeader";
import Drawer from "react-modern-drawer";

import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiPencil, BiTrash } from "react-icons/bi";

const Section = () => {
  // const [session, setSession] = useState({
  //   start: "",
  //   end: "",
  //   Sname: "",
  // });
  const [sessionArr, setSessionArr] = useState([
    { time: "morning", open: 9, close: 10, status: "open" },
    { time: "afternoon", open: 9, close: 10, status: "open" },
    { time: "night", open: 9, close: 10, status: "open" },
  ]);
  // let sessionArray = [session];
  // const dispatch = useDispatch();
  // const sessionArray = useSelector((state) => state.stateSlice.sessionArray);
  const [addSession, setAddSession] = useState(false);
  const toggle_add_session = () => {
    setAddSession((prevState) => !prevState);
  };

  const rows = sessionArr?.map((arr, index) => (
    <Table.Row
      key={index + 1}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {arr?.time}
      </Table.Cell>
      <Table.Cell>{arr?.open}</Table.Cell>
      <Table.Cell>{arr?.close}</Table.Cell>
      <Table.Cell>open</Table.Cell>
      <Table.Cell className="flex">
        <button
          type="button"
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-s-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <BiPencil />
          <span className="sr-only">Icon description</span>
        </button>
        <button
          type="button"
          className="text-blue-700 border border-s-0 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-e-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          onClick={() => banHandler(user?.id)}
        >
          <BiTrash />
          <span className="sr-only">Icon description</span>
        </button>
      </Table.Cell>
    </Table.Row>
  ));

  const hours = Array.from({ length: 24 }, (value, index) => index + 1);
  const mins = Array.from({ length: 60 }, (value, index) => index + 1);

  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="ပွဲချိန်များ" page="ပွဲချိန်များ" />

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
        <Button
          type="button"
          className=" rounded-none bg-primary mt-2"
          onClick={toggle_add_session}
        >
          အသစ်ထည့်ရန်
        </Button>
      </div>

      {/* <div className="grid grid-cols-2 items-start"> */}
      {/* <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="start" value="Start Time" />
          </div>
          <TextInput
            id="start"
            placeholder="10:00AM"
            onChange={(e) => setSession({ ...session, start: e.target.value })}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="end" value="End Time" />
          </div>
          <TextInput
            id="end"
            placeholder="10:00AM"
            onChange={(e) => setSession({ ...session, end: e.target.value })}
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="sessionName" value="Session Name" />
          </div>
          <TextInput
            id="sessionName"
            placeholder="e.g: Morning Session"
            onChange={(e) => setSession({ ...session, Sname: e.target.value })}
            required
          />
        </div>

        <Button type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </form> */}
      {/* {sessionArray.length !== 0 && <SessionTable rows={rows} />} */}
      {/* <SessionTable rows={rows} /> */}
      {/* </div> */}

      <SessionTable rows={rows} />

      {/* //=== Drawer component */}
      <Drawer
        open={addSession}
        onClose={toggle_add_session}
        direction="right"
        size={350}
        className=" "
      >
        <div className="w-full p-4 pt-8">
          <div className="flex justify-between items-center mb-4">
            <h3>ပွဲချိန်များ</h3>
            <button
              type="button"
              className="text-dark bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base p-3 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={toggle_add_session}
            >
              <AiOutlineClose />
              <span className="sr-only">Icon description</span>
            </button>
          </div>
          <form>
            {/* ပွဲချိန်အမည် */}
            <div className="mb-5">
              <label
                htmlFor="session_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ပွဲချိန်အမည်
              </label>
              <input
                type="text"
                id="session_name"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {/* ဖွင့်ချိန် */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                {/* <div className="mb-2 block">
                  <Label htmlFor="open_hour" value="ဖွင့်ချိန်နာရီ" />
                </div> */}
                {/* <TextInput id="open_hour" type="text" placeholder="" required /> */}
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="open_hour" value="ဖွင့်ချိန်နာရီ" />
                  </div>
                  <Select id="open_hour" required>
                    {hours.map((hour) => (
                      <option key={hour}>{hour}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                {/* <div className="mb-2 block">
                  <Label htmlFor="open_mins" value="ဖွင့်ချိန်မိနစ်" />
                </div> */}
                {/* <TextInput id="open_mins" type="text" placeholder="" required /> */}
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="open_mins" value="ဖွင့်ချိန်မိနစ်" />
                  </div>
                  <Select id="open_mins" required>
                    {mins.map((min) => (
                      <option key={min}>{min}</option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            {/* ပိတ်ချိန် */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                {/* <div className="mb-2 block">
                  <Label htmlFor="open_hour" value="ပိတ်ချိန်နာရီ" />
                </div>
                <TextInput id="open_hour" type="text" placeholder="" required /> */}
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="open_hour" value="ပိတ်ချိန်နာရီ" />
                  </div>
                  <Select id="open_hour" required>
                    {hours.map((hour) => (
                      <option key={hour}>{hour}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                {/* <div className="mb-2 block">
                  <Label htmlFor="open_mins" value="ပိတ်ချိန်မိနစ်" />
                </div>
                <TextInput id="open_mins" type="text" placeholder="" required /> */}
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="close_mins" value="ပိတ်ချိန်မိနစ်" />
                  </div>
                  <Select id="close_mins" required>
                    {mins.map((min) => (
                      <option key={min}>{min}</option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            <Button
              type="button"
              className=" w-full rounded-none bg-primary mt-[30rem]"
            >
              အသစ်ထည့်ရန်
            </Button>
          </form>
        </div>
      </Drawer>
      {/* Drawer component ===// */}
    </div>
  );
};

export default Section;
