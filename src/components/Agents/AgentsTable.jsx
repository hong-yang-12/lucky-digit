import React from "react";
import { Table } from "flowbite-react";

const AgentsTable = ({ rows }) => {
  return (
    <>
      <Table className="w-4/5 mx-auto shadow-lg" hoverable>
        <Table.Head>
          <Table.HeadCell>စဥ်</Table.HeadCell>
          <Table.HeadCell>ပရိုဖိုင်ပုံ</Table.HeadCell>
          <Table.HeadCell>ကိုယ်စားလှယ်အမည်</Table.HeadCell>
          <Table.HeadCell>ဖုန်းနံပါတ်</Table.HeadCell>
          <Table.HeadCell>မွေးသက္ကရာဇ်</Table.HeadCell>
          <Table.HeadCell>မှတ်ပုံတင်အမှတ်</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>ပြင်ဆင်မည်</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {rows ? (
            rows
          ) : (
            <Table.Row>
              <Table.Cell colSpan={8}>
                <p className="text-center">There is no data yet.</p>
              </Table.Cell>
            </Table.Row>
          )}
          {/* {rows} for breakdown */} 
        </Table.Body>
      </Table>
    </>
  );
};

export default AgentsTable;
