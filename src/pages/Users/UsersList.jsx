import React, { useEffect } from "react";
import {
  useBanUserMutation,
  useGetAllusersQuery,
} from "../../redux/api/usersApi";
import Cookies from "js-cookie";
import { Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/service/usersSlice";
import UsersTable from "../../templates/UsersTable";

const UsersList = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const { data: users } = useGetAllusersQuery(token);
  // console.log(users?.users[0]);

  const [banUser] = useBanUserMutation();
  const banHandler = async (id) => {
    const data = await banUser(id, token);
    console.log(data);
  };

  const usersList = useSelector((state) => state.usersSlice.users);
  useEffect(() => {
    dispatch(getUsers(users?.users[0]));
  }, [users]);

  // users?.users[0]
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
          <p>Ban</p>
        </a>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <h1>Users List</h1>
      <UsersTable rows={rows} />
      {/* <Table hoverable className=" rounded">
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>NAME</Table.HeadCell>
          <Table.HeadCell>ROLE</Table.HeadCell>
          <Table.HeadCell>EMAIL</Table.HeadCell>
          <Table.HeadCell>PHONE</Table.HeadCell>
          <Table.HeadCell>SESSION</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">{rows}</Table.Body>
      </Table> */}
    </div>
  );
};

export default UsersList;
