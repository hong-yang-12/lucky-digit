import React from "react";
import { Table } from "flowbite-react";

const TwoDRecordTable = ({ rows }) => {
  return (
    <>
      <Table className="w-4/5 mx-auto border shadow-lg" hoverable>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>ပိုင်ရှင်</Table.HeadCell>
          <Table.HeadCell>ထိုးကွက်</Table.HeadCell>
          <Table.HeadCell>ပွဲချိန်</Table.HeadCell>
          <Table.HeadCell>ရက်စွဲ</Table.HeadCell>
          <Table.HeadCell>စာရင်းအမှတ်</Table.HeadCell>
          <Table.HeadCell>ထိုးကြေးစုစုပေါင်း</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            {/* <span className="sr-only">ပြင်ဆင်မည်</span> */}
            ပြင်ဆင်မည်
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">{rows}</Table.Body>
      </Table>
    </>
  );
};

export default TwoDRecordTable;
