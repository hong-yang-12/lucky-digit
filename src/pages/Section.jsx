import React, { useState } from "react";
import SectionTable from "../components/SectionTable";
import CustomHeader from "../components/CustomHeader";
import Drawer from "react-modern-drawer";
import Cookies from "js-cookie";

import { useCreateSectionMutation, useGetAllSectionQuery } from "../redux/api/sectionApi";
import { Button, Label, Select, Radio, Table } from "flowbite-react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiPencil, BiTrash } from "react-icons/bi";

const Section = () => {
  // const [sections, setSections] = useState([
  //   {
  //     name: "morning",
  //     open_hour: 9,
  //     open_minute: 0,
  //     close_hour: 10,
  //     close_minute: 0,
  //     type: "2D",
  //   },
  //   {
  //     name: "afternoon",
  //     open_hour: 9,
  //     open_minute: 0,
  //     close_hour: 10,
  //     close_minute: 0,
  //     type: "2D",
  //   },
  //   {
  //     name: "night",
  //     open_hour: 9,
  //     open_minute: 0,
  //     close_hour: 10,
  //     close_minute: 0,
  //     type: "2D",
  //   },
  // ]);
  const [section, setSection] = useState({
    name: "",
    open_hour: 0,
    open_minute: 0,
    close_hour: 0,
    close_minute: 0,
    type: "2D",
  });
  const [createSection] = useCreateSectionMutation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const token = Cookies.get("token");
  // console.log(token);

  const data = useGetAllSectionQuery(token);
  console.log(data)

  //handle Drawer
  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  //handle most inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setSection({ ...section, [id]: value });
  };
  //handle number inputs
  const handleTimeChange = (e) => {
    const { id, value } = e.target;
    setSection({ ...section, [id]: parseInt(value) });
  };
  //handle add section
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(section);
    const data = await createSection({ section, token });
    console.log(data);
    setSection({
      name: "",
      open_hour: 0,
      open_minute: 0,
      close_hour: 0,
      close_minute: 0,
      type: "2D",
    });
  };

  //iterate demo sections
  const rows=[];
  // const rows = sections?.map((section, index) => (
  //   <Table.Row
  //     key={index + 1}
  //     className="bg-white dark:border-gray-700 dark:bg-gray-800"
  //   >
  //     <Table.Cell>{index + 1}</Table.Cell>
  //     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
  //       {section?.name}
  //     </Table.Cell>
  //     <Table.Cell>
  //       {section?.open_hour}:{section?.open_minute}
  //     </Table.Cell>
  //     <Table.Cell>
  //       {section?.close_hour}:{section?.close_minute}
  //     </Table.Cell>
  //     <Table.Cell>{section?.type}</Table.Cell>
  //     <Table.Cell className="flex">
  //       <button
  //         type="button"
  //         className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-s-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
  //       >
  //         <BiPencil />
  //         <span className="sr-only">Icon description</span>
  //       </button>
  //       <button
  //         type="button"
  //         className="text-blue-700 border border-s-0 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-e-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
  //         onClick={() => banHandler(user?.id)}
  //       >
  //         <BiTrash />
  //         <span className="sr-only">Icon description</span>
  //       </button>
  //     </Table.Cell>
  //   </Table.Row>
  // ));

  //initial hours and mins 
  const hours = Array.from({ length: 24 }, (value, index) => index);
  const mins = Array.from({ length: 60 }, (value, index) => index);
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="ပွဲချိန်များ" page="ပွဲချိန်များ" />

      {/* Search Section */}
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
          onClick={toggleDrawer}
        >
          အသစ်ထည့်ရန်
        </Button>
      </div>

      <SectionTable rows={rows} />

      {/* //=== Drawer component */}
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer}
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
              onClick={toggleDrawer}
            >
              <AiOutlineClose />
              <span className="sr-only">Icon description</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {/* ပွဲချိန်အမည် */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ပွဲချိန်အမည်
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                value={section.name}
                onChange={handleChange}
                required
              />
            </div>
            {/* ဖွင့်ချိန် */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="open_hour" value="ဖွင့်ချိန်နာရီ" />
                  </div>
                  <Select
                    id="open_hour"
                    value={section.open_hour}
                    onChange={handleTimeChange}
                    required
                  >
                    {hours.map((hour) => (
                      <option key={hour}>{hour}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="open_minute" value="ဖွင့်ချိန်မိနစ်" />
                  </div>
                  <Select
                    id="open_minute"
                    value={section.open_minute}
                    onChange={handleTimeChange}
                    required
                  >
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
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="close_hour" value="ပိတ်ချိန်နာရီ" />
                  </div>
                  <Select
                    id="close_hour"
                    value={section.close_hour}
                    onChange={handleTimeChange}
                    required
                  >
                    {hours.map((hour) => (
                      <option key={hour}>{hour}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="close_minute" value="ပိတ်ချိန်မိနစ်" />
                  </div>
                  <Select
                    id="close_minute"
                    value={section.close_minute}
                    onChange={handleTimeChange}
                    required
                  >
                    {mins.map((min) => (
                      <option key={min}>{min}</option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            {/* types of session */}
            <div className="flex justify-start items-center gap-3 mb-5">
              {/* 2D radio */}
              <div className="flex items-center gap-2">
                <Radio
                  id="types"
                  name="types"
                  value="2D"
                  onChange={handleChange}
                  defaultChecked
                />
                <Label htmlFor="types">2D</Label>
              </div>
              {/* 3D radio */}
              <div className="flex items-center gap-2">
                <Radio
                  id="types"
                  name="types"
                  value="3D"
                  onChange={handleChange}
                />
                <Label htmlFor="types">3D</Label>
              </div>
            </div>

            <Button type="submit" className=" w-full rounded-none bg-primary  ">
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
