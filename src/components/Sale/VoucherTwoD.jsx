import React from "react";
import SaleTable from "./SaleTable";
import { Button, Modal } from "flowbite-react";
import VoucherTable from "./VoucherTable";

const VoucherTwoD = ({
  printOpen,
  setPrintOpen,
  printRef,
  handlePrint,
  two_d_array,
  total_money,
}) => {
  // console.log(two_d_array);
  const rows = two_d_array?.map((sale, index) => {
    // total_money += parseInt(sale?.money);
    return (
      <tr key={index + 1} className="bg-white dark:bg-gray-800">
        <th
          scope="row"
          key={index + 1}
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {sale?.number}
        </th>
        <td className=" px-6 py-4 text-right">{sale?.money}</td>
      </tr>
    );
  });
  return (
    // <div className=" px-5">
    //   <div className="flex justify-between items-center">
    //     <h1>Lucky Digit</h1>
    //     <p>3.11.2023</p>
    //   </div>

    //   <div className="flex justify-between items-center px-5">
    //     <p>စာရင်းအမှတ် - ab9980</p>
    //     <p>ပွဲချိန် - နံနက်</p>
    //   </div>

    //   <SaleTable rows={rows} total_money={total_money} />

    //   <button
    //     type="button"
    //     onClick={handlePrint}
    //     className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    //   >
    //     Print
    //   </button>
    // </div>
    <>
      <Modal
        size="md"
        dismissible
        show={printOpen}
        onClose={() => setPrintOpen(false)}
      >
        <Modal.Body>
          <div ref={printRef} className="space-y-3 border border-gray-600 p-5">
            <div className="flex justify-between items-center">
              <h1>Lucky Digit</h1>
              <p>3.11.2023</p>
            </div>{" "}
            <div className="flex justify-between items-center border border-gray-600 p-3">
              <p>စာရင်းအမှတ် - ab9980</p>
              <p>ပွဲချိန် - နံနက်</p>{" "}
            </div>
            {/* <SaleTable rows={rows} total_money={total_money} /> */}
            <VoucherTable rows={rows} total_money={total_money} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={handlePrint}
            // onClick={() => setPrintOpen(true)}
            className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Print
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VoucherTwoD;
