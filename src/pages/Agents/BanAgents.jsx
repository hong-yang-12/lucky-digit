import React, { useEffect } from "react";

import Cookies from "js-cookie";
import { Button, Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
// import { useGetBanUsersQuery } from "../../redux/api/usersApi";
import { getUsers } from "../../redux/service/usersSlice";
import UsersTable from "../../templates/UsersTable";
import CustomHeader from "../../components/CustomHeader";
import AgentsFooter from "../../components/Agents/AgentsFooter";
import { AiOutlineSearch } from "react-icons/ai";
import BanAgentTable from "../../components/Agents/BanAgentTable";
import { BiPencil, BiTrash, BiRefresh } from "react-icons/bi";
import { useGetBanUsersMutation } from "../../redux/api/usersApi";

const BanAgents = () => {
  const token = Cookies.get("token");
  // const dispatch = useDispatch();
  // const { data: ban_users } = useGetBanUsersQuery(token);
  // console.log(ban_users);

  const [getBanUsers] = useGetBanUsersMutation();
  

  // const usersList = useSelector((state) => state.usersSlice.users);
  // useEffect(() => {
  //   dispatch(getUsers(users?.users[0]));
  // }, [users]);
  const rows = [];
  // const rows = usersList?.map((user) => (
  //   <Table.Row
  //     key={user?.id}
  //     className="bg-white dark:border-gray-700 dark:bg-gray-800"
  //   >
  //     <Table.Cell>{user?.id}</Table.Cell>
  //     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
  //       {/* {user?.name} */}
  //       မောင်ဘ
  //     </Table.Cell>
  //     <Table.Cell>09109110</Table.Cell>
  //     <Table.Cell>
  //       {/* {user?.email} */}
  //       Jan.09.2023
  //     </Table.Cell>
  //     <Table.Cell>
  //       {/* {user?.phone} */}
  //       id109110
  //     </Table.Cell>
  //     {/* <Table.Cell>{user?.session}</Table.Cell> */}
  //     <Table.Cell>
  //       {/* {user?.status} */}
  //       <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
  //         Banned
  //       </span>
  //     </Table.Cell>
  //     {/* <Table.Cell>
  //       <button type="button" onClick={()=>banHandler(user?.id)}>
  //         Ban
  //       </button>
  //     </Table.Cell> */}
  //     {/* <Table.Cell>
  //       <a
  //         className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
  //         onClick={() => banHandler(user?.id)}
  //       >
  //         <p>UnBan</p>
  //       </a>
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
  //         className="text-blue-700 border border-s-0 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
  //       >
  //         <BiRefresh />
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
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="ကိုယ်စားလှယ်" page="ပယ်ဖျက်ထားသောစာရင်း" />
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
      <BanAgentTable rows={rows} />
      <AgentsFooter />
    </div>
  );
};

export default BanAgents;
