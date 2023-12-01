import React from "react";
import { Label, Button, Modal, Radio } from "flowbite-react";
{
  /* <TwoDSaleModal numberOpen={numberOpen} setNumberOpen={setNumberOpen} handleRadioChange={handleRadioChange} handleMoney={handleMoney} handleCustomMoney={handleCustomMoney} custom_money={custom_money}/> */
}
const TwoDSaleModal = ({
  numberOpen,
  setNumberOpen,
  handleRadioChange,
  handleMoney,
  handleCustomMoney,
  custom_money,
  two_d,
  handleDeleteMoney,
  handleCloseNumber,
}) => {
  return (
    <>
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

              {/* ready made amount money */}
              <div className="grid grid-cols-3 gap-3  transition">
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "100" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  100
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "200" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  200
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "300" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  300
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "500" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  500
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "800" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  800
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "1000" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  1000
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "1200" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  1200
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "1500" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  1500
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "1800" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  1800
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "2000" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  2000
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "2200" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  2200
                </button>
                <button
                  onClick={handleMoney}
                  className={`${
                    two_d?.money === "2500" && "bg-primary text-white"
                  } w-16 h-16 border border-primary hover:bg-primary hover:text-white flex justify-center items-center`}
                >
                  2500
                </button>
              </div>
            </div>
            {/* custom money */}
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
    </>
  );
};

export default TwoDSaleModal;
