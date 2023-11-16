import React from "react";

const VoucherTable = ({rows, total_money}) => {
    // console.log(two_d_sale)
  
  return (
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
          </tr>
        </thead>
        <tbody>{rows}</tbody>
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
  );
};

export default VoucherTable;
