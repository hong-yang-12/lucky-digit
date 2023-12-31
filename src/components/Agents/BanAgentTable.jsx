import React from "react";
import { Table } from "flowbite-react";

const BanAgentTable = ({ rows }) => {
  return (
    <Table className="w-4/5 mx-auto shadow-lg" hoverable>
      <Table.Head>
        <Table.HeadCell>စဥ်</Table.HeadCell>
        <Table.HeadCell>ကိုယ်စားလှယ်အမည်</Table.HeadCell>
        <Table.HeadCell>ဖုန်းနံပါတ်</Table.HeadCell>
        <Table.HeadCell>ရက်စွဲ</Table.HeadCell>
        <Table.HeadCell>အသုံးပြုသူအိုင်ဒီ</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>ပြင်ဆင်မည်</Table.HeadCell>
        {/* <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell> */}
      </Table.Head>
      <Table.Body className="divide-y">
        {rows ? (
          rows
        ) : (
          <Table.Row>
            <Table.Cell colSpan={7}>
              <p className="text-center">There is no data yet.</p>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export default BanAgentTable;
