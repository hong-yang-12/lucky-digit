import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Label, Select, Button, Modal, Radio } from "flowbite-react";
import { Table } from "flowbite-react";
import CustomHeader from "../../components/CustomHeader";
import SaleTable from "../../components/Sale/SaleTable";
import { BiTrashAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import VoucherTwoD from "../../components/Sale/VoucherTwoD";

const TwoDSale = () => {
  const [two_d_sale, set_two_d_sale] = useState([
    {
      number: "03",
      money: 1000,
      status: "R",
    },
  ]);
  const [TwoDSale, setTwoDSale] = useState({
    number: "",
    money: 0,
    methods: "ဒဲ့",
  });
  const [numberOpen, setNumberOpen] = useState(false);
  const [printOpen, setPrintOpen] = useState(false);

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleOpenNumber = (e) => {
    setTwoDSale({ ...TwoDSale, number: e.target.textContent });
    setNumberOpen(true);
  };
  const handleRadioChange = (event) => {
    setTwoDSale({ ...TwoDSale, methods: event.target.value });
  };
  const handleMoney = (e) => {
    setTwoDSale({ ...TwoDSale, money: e.target.textContent });
  };
  const handleCloseNumber = () => {
    const newData = [...two_d_sale, TwoDSale]; // Add new data item
    set_two_d_sale(newData); // Update state variable
    // console.log(two_d_sale);
    setNumberOpen(false);
  };
  const handleDelete = (num) => {
    // console.log(e);
    const newList = two_d_sale.filter((sale) => sale.number !== num);
    set_two_d_sale(newList);
  };

  let total_money = 0;
  const rows = two_d_sale?.map((sale, index) => {
    total_money += parseInt(sale?.money);
    // return (
    //   <Table.Row
    //     key={index + 1}
    //     className="bg-white dark:border-gray-700 dark:bg-gray-800"
    //   >
    //     <Table.Cell>{sale?.number}</Table.Cell>
    //     <Table.Cell className="text-right">
    //       {sale?.money}
    //     </Table.Cell>
    //     <Table.Cell className="text-left w-20  ">
    //       <button
    //         type="button"
    //         className="text-blue-700 border-0 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-0 text-sm text-center p-2.5 inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
    //         onClick={() => banHandler(user?.id)}
    //       >
    //         <BiTrashAlt />
    //         {/* <span className="sr-only">Icon description</span> */}
    //       </button>
    //     </Table.Cell>
    //   </Table.Row>
    // );
    return (
      <tr key={index + 1} className="bg-white dark:bg-gray-800">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {sale?.number}
        </th>
        <td className=" px-6 py-4 text-right">{sale?.money}</td>
        <td className=" px-6 py-4 ">
          <span
            onClick={() => handleDelete(sale?.number)}
            className="text-xl text-primary cursor-pointer"
          >
            <BiTrashAlt />
          </span>
        </td>
      </tr>
    );
  });

  const numbers = Array.from({ length: 100 }, (value, index) => {
    if (index < 10) {
      return "0" + index;
    } else {
      return index;
    }
  });

  return (
    <div className="w-full  bg-white dark:bg-darkBg dark:text-white">
      <CustomHeader group="အရောင်းစနစ်" page="2D တင်ရန်" />
      <div className="w-4/5 mx-auto mb-5 flex justify-between items-center py-4">
        <div className="w-96">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <AiOutlineSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ရှာဖွေမည်"
              required
            />
          </div>
        </div>
        {/* <Button className=" rounded-none bg-primary mt-2">အသစ်ထည့်ရန်</Button> */}
      </div>

      <div className="w-4/5 h-[50rem] mx-auto grid grid-cols-[1fr_3fr] gap-10">
        <div className=" relative">
          <div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="max-w-md">
                <div className="mb-4 block">
                  <Label htmlFor="id" value="စာရင်းအမှတ်" />
                </div>
                <p className=" bg-white border rounded-lg p-4">Ab9908</p>
              </div>
              <div className="max-w-md">
                <div className="mb-4 block">
                  <Label htmlFor="session" value="ပွဲချိန်" />
                </div>
                <Select sizing="lg" id="session" required>
                  <option defaultValue={true}>ပွဲချိန်ရွေးရန်</option>
                  <option>နံနက်</option>
                  <option>နေ့လည်</option>
                  <option>ည</option>
                </Select>
              </div>
            </div>

            <SaleTable rows={rows} total_money={total_money} />
          </div>

          {/* <div className="flex gap-5 mt-5">
            <p> Value: {TwoDSale?.number}</p>
            <p> Value: {TwoDSale?.money}</p>
            <p> Value: {TwoDSale?.methods}</p>
          </div> */}

          <button
            type="button"
            // onClick={handlePrint}
            onClick={() => setPrintOpen(true)}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Print
          </button>

          <VoucherTwoD
            printOpen={printOpen}
            setPrintOpen={setPrintOpen}
            // rows={rows}
            total_money={total_money}
            printRef={printRef}
            handlePrint={handlePrint}
            two_d_sale={two_d_sale}
          />
        </div>
        <div className="w-[45rem] mx-auto">
          <ul className="grid grid-cols-10 gap-2">
            {numbers.map((number) => (
              <li
                key={number}
                className="w-16 h-16 flex justify-center items-center border border-primary rounded hover:bg-primary hover:text-white cursor-pointer"
                onClick={handleOpenNumber}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal dismissible show={numberOpen} onClose={() => setNumberOpen(false)}>
        <Modal.Body className="w-[32rem] mx-auto">
          <div className="grid grid-cols-2 gap-5 cursor-pointer">
            <div>
              <div className="flex justify-evenly items-center gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="d"
                    name="methods"
                    value="ဒဲ့"
                    onChange={handleRadioChange}
                    defaultChecked
                  />
                  <Label htmlFor="d">ဒဲ့</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="r"
                    name="methods"
                    value="R"
                    onChange={handleRadioChange}
                    // defaultChecked
                  />
                  <Label htmlFor="r">R</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="p"
                    name="methods"
                    value="ပတ်မည်"
                    onChange={handleRadioChange}
                    // defaultChecked
                  />
                  <Label htmlFor="p">ပတ်မည်</Label>
                </div>
              </div>

              {/* <p>Selected Value: {selectedValue}</p> */}
              <ul className="grid grid-cols-3 gap-3 ">
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  100
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  200
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  300
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  500
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  800
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  1000
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  1200
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  1500
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  1800
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  200
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  2200
                </li>
                <li
                  onClick={handleMoney}
                  className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
                >
                  2500
                </li>
              </ul>
            </div>
            <ul className="grid grid-cols-3 gap-3">
              <li className="p-3 border border-primary hover:bg-primary hover:text-white flex justify-center items-center col-span-3">
                Custom
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                1
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                2
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                3
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                4
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                5
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                6
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                7
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                8
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                9
              </li>
              <li className=" border border-primary hover:bg-primary hover:text-white flex justify-center items-center col-span-2">
                0
              </li>
              <li className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center">
                Del
              </li>
            </ul>
          </div>
          <Button
            onClick={handleCloseNumber}
            color="light"
            className="ms-auto mt-5"
          >
            နောက်တစ်ကြိမ်ထိုးမည်
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TwoDSale;
