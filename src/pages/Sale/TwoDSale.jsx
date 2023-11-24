import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Label, Select, Button, Modal, Radio, Alert } from "flowbite-react";
import { Table } from "flowbite-react";
import CustomHeader from "../../components/CustomHeader";
import SaleTable from "../../components/Sale/SaleTable";
import { BiTrashAlt } from "react-icons/bi";
import VoucherTwoD from "../../components/Sale/VoucherTwoD";
// import { useGetBanNumberQuery } from "../../redux/api/saleApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCustomMoney,
  incrementCustomMoney,
} from "../../redux/service/saleSlice";

const TwoDSale = () => {
  const [two_d_array, set_two_d_array] = useState([
    // {
    //   number: "03",
    //   money: 1000,
    //   status: "R",
    // },
  ]);
  const [two_d, set_two_d] = useState({
    number: "",
    money: 0,
    methods: "ဒဲ့",
  });
  // const [customMoney, setCustomMoney] = useState("");
  const [numberOpen, setNumberOpen] = useState(false);
  const [printOpen, setPrintOpen] = useState(false);

  const token = Cookies.get("token");
  // const data = useGetBanNumberQuery(token);
  // console.log(data);
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleOpenNumber = (e) => {
    set_two_d({ ...two_d, number: e.target.textContent });
    setNumberOpen(true);
  };
  const handleRadioChange = (event) => {
    set_two_d({ ...two_d, methods: event.target.value });
  };
  const handleMoney = (e) => {
    set_two_d({ ...two_d, money: e.target.textContent });
  };
  const handleCloseNumber = () => {
    //condition what if money is zero
    if (two_d?.money !== 0) {
      //condition what is the method of sale (R, ဒဲ့, etc)
      if (two_d?.methods === "ဒဲ့") {
        const newData = [...two_d_array, two_d]; // Add new data item
        set_two_d_array(newData); // Update state variable
      }
      if (two_d?.methods === "R") {
        const reversed_num = reverse_num(two_d.number);
        if (reversed_num == two_d.number) {
          const new_two_d_array = [...two_d_array, two_d]; // Add new data item
          set_two_d_array(new_two_d_array); // Update state variable
        } else {
          const new_two_d = {
            number: reversed_num,
            money: two_d?.money,
            methods: "ဒဲ့",
          };
          const new_two_d_array = [...two_d_array, two_d, new_two_d]; // Add new data item
          set_two_d_array(new_two_d_array); // Update state variable
        }
      }
    }

    //condition what is the method of sale (R, ဒဲ့, etc)
    // if (two_d?.methods === "ဒဲ့") {
    //   const newData = [...two_d_array, two_d]; // Add new data item
    //   set_two_d_array(newData); // Update state variable
    // }
    // if (two_d?.methods === "R") {
    //   const reversed_num = reverse_num(two_d.number);
    //   if (reversed_num == two_d.number) {
    //     const new_two_d_array = [...two_d_array, two_d]; // Add new data item
    //     set_two_d_array(new_two_d_array); // Update state variable
    //   } else {
    //     const new_two_d = {
    //       number: reversed_num,
    //       money: two_d?.money,
    //       methods: "ဒဲ့",
    //     };
    //     const new_two_d_array = [...two_d_array, two_d, new_two_d]; // Add new data item
    //     set_two_d_array(new_two_d_array); // Update state variable
    //   }
    // }

    //below //codes are the major code flow of 2D
    // const newData = [...two_d_array, two_d]; // Add new data item
    // set_two_d_array(newData); // Update state variable

    setNumberOpen(false);
    set_two_d({ number: "", money: 0, methods: "ဒဲ့" }); //reclear values
  };
  const handleDelete = (num) => {
    const newList = two_d_array.filter((sale) => sale.number !== num);
    set_two_d_array(newList);
  };

  let custom_money = useSelector((state) => state?.saleSlice?.custom_money);
  const dispatch = useDispatch();
  const handleCustomMoney = (e) => {
    dispatch(incrementCustomMoney(e.target.value));
  };
  // console.log(typeof(custom_money),custom_money);
  const handleDeleteMoney = () => {
    custom_money = custom_money.slice(0, -1); // Remove the last character
      console.log(custom_money);
  };

  // let customMoney = "";
  // const handleCustomMoney = (e) => {
  //   customMoney += e.target.value;
  //   console.log(customMoney);
  // };
  // const handleDeleteMoney = () => {
  //   // customMoney
  //   customMoney = customMoney.slice(0, -1); // Remove the last character
  //   console.log(customMoney);
  // };

  const sale_num = [];
  two_d_array.map((sale) => {
    sale_num.push(sale.num);
  });

  //output rows
  let total_money = 0;
  const rows = two_d_array?.map((sale, index) => {
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
        <td className=" px-6 py-4 text-right">{sale?.methods}</td>
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

  const reverse_num = (num) => {
    return parseInt(num.toString().split("").reverse().join(""));
  };

  return (
    <div className="w-full  bg-white dark:bg-darkBg dark:text-white">
      <CustomHeader group="အရောင်းစနစ်" page="2D တင်ရန်" />

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
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
          </div>

          {/* <div className="flex gap-5 mt-5">
            <p> Value: {two_d?.number}</p>
            <p> Value: {two_d?.money}</p>
            <p> Value: {two_d?.methods}</p>
          </div> */}

          <button
            type="button"
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
            two_d_array={two_d_array}
          />
        </div>
        {/* all number list  */}
        <div className="w-[45rem] mx-auto">
          <div className="grid grid-cols-10 gap-2">
            {numbers.map((number) => {
              return (
                <button
                  key={number}
                  className={`w-16 h-16 flex justify-center items-center border border-primary rounded hover:bg-primary hover:text-white cursor-pointer `}
                  onClick={handleOpenNumber}
                  type="button"
                  // disabled={
                  //   two_d_array.map((sale) => {
                  //     number === sale.number;
                  //     console.log(sale.number);
                  //   })
                  //     ? true
                  //     : false
                  // }
                >
                  {number}
                </button>
              );
            })}
          </div>
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
                {custom_money ? custom_money : "Custom"}
              </li>
              <li
                onClick={handleCustomMoney}
                value="1"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                1
              </li>
              <li
                onClick={handleCustomMoney}
                value="2"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                2
              </li>
              <li
                onClick={handleCustomMoney}
                value="3"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                3
              </li>
              <li
                onClick={handleCustomMoney}
                value="4"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                4
              </li>
              <li
                onClick={handleCustomMoney}
                value="5"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                5
              </li>
              <li
                onClick={handleCustomMoney}
                value="6"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                6
              </li>
              <li
                onClick={handleCustomMoney}
                value="7"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                7
              </li>
              <li
                onClick={handleCustomMoney}
                value="8"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                8
              </li>
              <li
                onClick={handleCustomMoney}
                value="9"
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
                9
              </li>
              <li
                onClick={handleCustomMoney}
                value="0"
                className=" border border-primary hover:bg-primary hover:text-white flex justify-center items-center col-span-2"
              >
                0
              </li>
              <li
                onClick={handleDeleteMoney}
                className="w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center"
              >
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
