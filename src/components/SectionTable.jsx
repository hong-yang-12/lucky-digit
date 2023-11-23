import React from "react";
import { Table } from "flowbite-react";

const SectionTable = ({ rows }) => {
  return (
    <>
      <Table className="w-4/5 mx-auto border shadow-lg" hoverable>
        <Table.Head>
          <Table.HeadCell>စဥ်</Table.HeadCell>
          <Table.HeadCell>ပွဲချိန်အမည်</Table.HeadCell>
          <Table.HeadCell>ဖွင့်ချိန်နာရီ</Table.HeadCell>
          <Table.HeadCell>ပိတ်ချိန်နာရီ</Table.HeadCell>
          <Table.HeadCell>status</Table.HeadCell>
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

export default SectionTable;
