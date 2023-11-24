import React from "react";
import { Table } from "flowbite-react";

const SaleTable = ({ rows, total_money }) => {
  return (
    <>
      {/* <Table className="w-full " hoverable>
        <Table.Head>
          <Table.HeadCell>ဂဏန်း</Table.HeadCell>
          <Table.HeadCell className="text-right">ထိုးကြေး</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {rows}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>Total</Table.Cell>
            <Table.Cell className="text-right">{total_money}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table> */}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                ဂဏန်း
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg text-right">
                ထိုးကြေး
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg text-right">
                method
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                <span className="sr-only">edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
          <tfoot className="border-t border-t-primary">
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3 text-right">{total_money}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default SaleTable;
