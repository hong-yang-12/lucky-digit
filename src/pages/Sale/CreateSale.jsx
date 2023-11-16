import React, { useEffect, useState } from "react";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";
import CustomHeader from "../../templates/CustomHeader";

const CreateSale = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const handleNumberClick = (number) => {
    if (firstNum === "" && secondNum !== "") {
      setFirstNum(number);
      console.log(firstNum);
    }
  };
  const handleInputChange = (e) => {
    
  }
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="အရောင်းစာရင်း" page="2D တင်ရန်" />

      <div className="w-full">
        {/* form className="flex max-w-md flex-col gap-4" */}
        <form>
          <div className="grid grid-cols-2 ">
            <div>
              <div className="flex items-center gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="voucher_id" value="စာရင်းအမှတ်" />
                  </div>
                  <TextInput
                    id="voucher_id"
                    type="email"
                    placeholder="Ab9908"
                    required
                  />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="session_time" value="ပွဲချိန်" />
                  </div>
                  <Select id="session_time" required>
                    <option>နံနက်</option>
                    <option>နေ့လည်</option>
                    <option>ည</option>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="number" value={firstNum} onChange={handleInputChange} className="w-10 h-10 bg-light" />
                <input type="number" className="w-10 h-10 bg-light" />
                <span>:</span>
                <input type="number" className="w-40 h-10 bg-light" />
                <div>
                  <HiOutlineTrash />
                </div>
              </div>
            </div>

            <div className="w-full  ">
              <div className="grid grid-cols-4 bg-primary ">
                <button
                  type="button"
                  onClick={() => handleNumberClick("7")}
                  className="p-4"
                >
                  7
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("8")}
                  className="p-4"
                >
                  8
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("9")}
                  className="p-4"
                >
                  9
                </button>
                <button type="button" className="p-4">
                  N
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("4")}
                  className="p-4"
                >
                  4
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("5")}
                  className="p-4"
                >
                  5
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("6")}
                  className="p-4"
                >
                  6
                </button>
                <button type="button" className="p-4">
                  D
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("1")}
                  className="p-4"
                >
                  1
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("2")}
                  className="p-4"
                >
                  2
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("3")}
                  className="p-4"
                >
                  3
                </button>
                <button
                  type="button"
                  onClick={() => handleNumberClick("0")}
                  className="p-4"
                >
                  0
                </button>
              </div>
            </div>
          </div>

          {/* <Button type="submit">Submit</Button> */}
        </form>
      </div>
    </div>
  );
};

export default CreateSale;
