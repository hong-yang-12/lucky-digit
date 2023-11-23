import React, { useEffect, useState } from "react";
import {
  useBanUserMutation,
  useGetAllusersQuery,
} from "../../redux/api/usersApi";
import Cookies from "js-cookie";
import { Button, Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/service/usersSlice";
import UsersTable from "../../templates/UsersTable";
import CustomHeader from "../../components/CustomHeader";
import "../../styles/agentlist.css";
import {
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiPencil, BiTrash } from "react-icons/bi";
import AgentsFooter from "../../components/Agents/AgentsFooter";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useGetAllAgentsQuery } from "../../redux/api/agentsApi";

const AgentsList = () => {
  const token = Cookies.get("token");
  console.log(token);
  // const dispatch = useDispatch();
  const data = useGetAllAgentsQuery(token);
  console.log(data);

  const [addAgentDrawer, setAddAgentDrawer] = useState(false);
  const toggle_add_agent_drawer = () => {
    setAddAgentDrawer((prevState) => !prevState);
  };

  const [banUser] = useBanUserMutation();
  const banHandler = async (id) => {
    const data = await banUser(id, token);
    console.log(data);
  };

  // const usersList = useSelector((state) => state.usersSlice.users);
  // useEffect(() => {
  //   dispatch(getUsers(users?.users[0]));
  // }, [users]);

  // users?.users[0]

  const rows = [];
  // const rows = usersList?.map((user, index) => (
  //   <Table.Row
  //     key={user?.id}
  //     className="bg-white dark:border-gray-700 dark:bg-gray-800"
  //   >
  //     <Table.Cell>{index + 1}</Table.Cell>
  //     <Table.Cell>Photo{user?.id}</Table.Cell>
  //     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
  //       {user?.name}
  //     </Table.Cell>
  //     <Table.Cell>{user?.phone}</Table.Cell>
  //     <Table.Cell>DOB{user?.role}</Table.Cell>
  //     <Table.Cell>NID{user?.email}</Table.Cell>
  //     <Table.Cell>
  //       <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
  //         TorF{user?.status}
  //       </span>
  //     </Table.Cell>
  //     {/* <Table.Cell>{user?.session}</Table.Cell> */}
  //     {/* <Table.Cell>
  //       <button type="button" onClick={()=>banHandler(user?.id)}>
  //         Ban
  //       </button>
  //     </Table.Cell> */}
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
              required
            />
          </div>
        </div>
        <Button
          className=" rounded-none bg-primary mt-2"
          onClick={toggle_add_agent_drawer}
        >
          အသစ်ထည့်ရန်
        </Button>
      </div>
      {/* Header Part2 ===// */}
      <UsersTable rows={rows} />
      <AgentsFooter />

      {/* //=== Drawer component */}
      <Drawer
        open={addAgentDrawer}
        onClose={toggle_add_agent_drawer}
        direction="right"
        size={350}
        className=" "
      >
        <div className="w-full p-4 pt-8">
          <div className="flex justify-between items-center">
            <h3>ကိုယ်ရေးအချက်အလက်များ</h3>
            <button
              type="button"
              className="text-dark bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base p-3 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={toggle_add_agent_drawer}
            >
              <AiOutlineClose />
              <span className="sr-only">Icon description</span>
            </button>
          </div>
          <form>
            <div className="my-5">
              <p className="mb-3 text-sm">ပရိုဖိုင်ပုံထည့်ရန်</p>
              <div className="w-32 h-32 custom-border  rounded flex justify-center items-center">
                <div className=" custom-border-circle w-10 h-10  flex justify-center items-center">
                  <AiOutlineUpload />
                </div>
              </div>
            </div>
            {/* name */}
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
              type="button"
              className=" w-full  rounded-none bg-primary mt-2"
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
