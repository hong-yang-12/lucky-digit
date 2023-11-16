import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllusersQuery } from "../../redux/api/usersApi";
import { getUsers } from "../../redux/service/usersSlice";
import UsersTable from "../../templates/UsersTable";

const BanUsers = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const { data: users } = useGetAllusersQuery(token);
  console.log(users?.users[0]);

  const usersList = useSelector((state) => state.usersSlice.users);
  useEffect(() => {
    dispatch(getUsers(users?.users[0]));
  }, [users]);

  const rows = usersList?.map((user) => (
    <Table.Row
      key={user?.id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell>{user?.id}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {user?.name}
      </Table.Cell>
      <Table.Cell>{user?.role}</Table.Cell>
      <Table.Cell>{user?.email}</Table.Cell>
      <Table.Cell>{user?.phone}</Table.Cell>
      <Table.Cell>{user?.session}</Table.Cell>
      <Table.Cell>{user?.status}</Table.Cell>
      {/* <Table.Cell>
        <button type="button" onClick={()=>banHandler(user?.id)}>
          Ban
        </button>
      </Table.Cell> */}
      <Table.Cell>
        <a
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          //   href="/banUsers"
          onClick={() => banHandler(user?.id)}
        >
          <p>UnBan</p>
        </a>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <h1>Banned Users List</h1>
      <UsersTable rows={rows} />
    </div>
  );
};

export default BanUsers;
