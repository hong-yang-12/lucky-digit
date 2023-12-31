import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button, Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import AgentsTable from "../../components/Agents/AgentsTable";
import CustomHeader from "../../components/CustomHeader";
import AgentsFooter from "../../components/Agents/AgentsFooter";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Loader from "../../components/Loader";
import toast, { Toaster } from "react-hot-toast";
import {
  useGetAllAgentsQuery,
  useStoreBanAgentMutation,
} from "../../redux/api/agentsApi";
import { addAgent, setSearchTerms } from "../../redux/service/agentsSlice";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiPencil, BiTrash } from "react-icons/bi";
import "../../styles/agentlist.css";

const AgentsList = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const [storeBanAgent] = useStoreBanAgentMutation();

  //getAgentList
  const { data: agent, isLoading } = useGetAllAgentsQuery(token);
  const agents = useSelector((state) => state?.agentsSlice.agents);
  // console.log(agent?.data);
  const searchTerms = useSelector((state) => state?.agentsSlice?.searchTerms);

  //add to slice
  useEffect(() => {
    dispatch(addAgent(agent?.data));
  }, [agent]);
  console.log(agents);

  const banHandler = async (id) => {
    try {
      const { data } = await storeBanAgent({ id, token });
      console.log(data);
      toast?.success(data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  //Loading State
  if (isLoading) {
    return <Loader />;
  }
  // const rows = []; //for breakdown
  const rows = agents
    ?.filter((item) => {
      if (searchTerms === "") {
        return item;
      } else if (
        item?.name.toLowerCase().includes(searchTerms?.toLocaleLowerCase())
      )
        return item;
    })
    .map((agent, index) => (
      <Table.Row
        key={agent?.id}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>Photo {agent?.id - 1}</Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {agent?.name}
        </Table.Cell>
        <Table.Cell>{agent?.phone}</Table.Cell>
        <Table.Cell>data_of_birth</Table.Cell>
        <Table.Cell>nation_id</Table.Cell>
        <Table.Cell>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {agent?.status}
          </span>
        </Table.Cell>
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
            onClick={() => banHandler(agent?.id)}
          >
            <BiTrash />
            <span className="sr-only">Icon description</span>
          </button>
        </Table.Cell>
      </Table.Row>
    ));

  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white ">
      <CustomHeader group="ကိုယ်စားလှယ်" page="ကိုယ်စားလှယ်စာရင်း" />
      {/* //=== Header Part2 */}
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
              value={searchTerms}
              onChange={(e) => dispatch(setSearchTerms(e.target.value))}
            />
          </div>
        </div>
        <Button
          color="blue"
          className=" rounded-none  mt-2"
          onClick={toggleDrawer}
        >
          အသစ်ထည့်ရန်
        </Button>
      </div>
      {/* Header Part2 ===// */}
      <AgentsTable rows={rows} />
      <AgentsFooter />

      {/* //=== Drawer component */}
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer}
        direction="right"
        size={350}
        className=""
      >
        <div className="w-full p-4">
          <div className="flex justify-between items-center">
            <h3>ကိုယ်ရေးအချက်အလက်များ</h3>
            <button
              type="button"
              className="text-dark bg-accent hover:bg-accent-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base p-3 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={toggleDrawer}
            >
              <AiOutlineClose />
              <span className="sr-only">Icon description</span>
            </button>
          </div>
          <form>
            <div className="my-2">
              <p className="mb-3 text-sm">ပရိုဖိုင်ပုံထည့်ရန်</p>
              <div className="w-32 h-32 custom-border  rounded flex justify-center items-center">
                <div className=" custom-border-circle w-10 h-10  flex justify-center items-center">
                  <AiOutlineUpload />
                </div>
              </div>
            </div>
            {/* name */}
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                အမည်အပြည့်အစုံ
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {/* email */}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                အီးမေးလ်လိပ်စာ
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {/* phone */}
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ဖုန်းနံပါတ်
              </label>
              <input
                type="number"
                id="phone"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {/* မွေးသက္ကရာဇ် */}
            <div className="mb-2">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                မွေးသက္ကရာဇ်
              </label>
              <input
                type="text"
                id="dob"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {/* မှတ်ပုံတင်အမှတ် */}
            <div className="mb-2">
              <label
                htmlFor="nation_id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                မှတ်ပုံတင်အမှတ်
              </label>
              <input
                type="text"
                id="nation_id"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {/* လျှိူ့ဝှက်နံပါတ် */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                လျှိူ့ဝှက်နံပါတ်
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <Button
              color="blue"
              type="button"
              className=" w-full rounded-none  "
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

export default AgentsList;
