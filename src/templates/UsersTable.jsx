import React from "react";
import { Table } from "flowbite-react";

const UsersTable = ({ rows }) => {
  // const rows = users?.users[0]?.map((user) => (
  //   <Table.Row
  //     key={user?.id}
  //     className="bg-white dark:border-gray-700 dark:bg-gray-800"
  //   >
  //     <Table.Cell>{user?.id}</Table.Cell>
  //     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
  //       {user?.name}
  //     </Table.Cell>
  //     <Table.Cell>{user?.role}</Table.Cell>
  //     <Table.Cell>{user?.email}</Table.Cell>
  //     <Table.Cell>{user?.phone}</Table.Cell>
  //     <Table.Cell>{user?.session}</Table.Cell>
  //     <Table.Cell>{user?.status}</Table.Cell>
  //     {/* <Table.Cell>
  //       <button type="button" onClick={()=>banHandler(user?.id)}>
  //         Ban
  //       </button>
  //     </Table.Cell> */}
  //     <Table.Cell>
  //       <a
  //         className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
  //         //   href="/banUsers"
  //         onClick={() => banHandler(user?.id)}
  //       >
  //         <p>Ban</p>
  //       </a>
  //     </Table.Cell>
  //   </Table.Row>
  // ));
  return (
    <>
      <Table className="w-4/5 mx-auto shadow-lg" hoverable>
        {/* <Table.Head>
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
        </Table.Head> */}
        <Table.Head>
          <Table.HeadCell>စဥ်</Table.HeadCell>
          <Table.HeadCell>ပရိုဖိုင်ပုံ</Table.HeadCell>
          <Table.HeadCell>ကိုယ်စားလှယ်အမည်</Table.HeadCell>
          <Table.HeadCell>ဖုန်းနံပါတ်</Table.HeadCell>
          <Table.HeadCell>မွေးသက္ကရာဇ်</Table.HeadCell>
          <Table.HeadCell>မှတ်ပုံတင်အမှတ်</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>ပြင်ဆင်မည်</Table.HeadCell>
          {/* <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell> */}
        </Table.Head>
        <Table.Body className="divide-y">{rows}</Table.Body>
      </Table>
    </>
  );
};

export default UsersTable;
