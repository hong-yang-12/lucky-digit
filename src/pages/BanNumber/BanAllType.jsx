import React, { useEffect, useState } from "react";

import CustomHeader from "../../components/CustomHeader";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { Modal, Button, Select, TextInput } from "flowbite-react";
import {
  useGetBanNumberQuery,
  useStoreBanNumberMutation,
} from "../../redux/api/saleApi";
import Cookies from "js-cookie";

const BanAllType = () => {
  const [banNums, setBanNums] = useState([]); //ban number array in modal
  const [value, setValue] = useState(""); //adding indivitual ban number in modal
  const [bannedNums, setBannedNums] = useState([20, 10, 30]); //for render banned numbers
  const [openModal, setOpenModal] = useState(false);

  const token = Cookies.get("token");
  const { data } = useGetBanNumberQuery(token);
  console.log(data?.data);
  const [storeBanNumber] = useStoreBanNumberMutation();

  useEffect(() => {
    const uniqueNumbers = new Set(banNums);
    setBanNums(Array.from(uniqueNumbers));
  }, [value]);

  //functions
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const addBanNum = (e) => {
    e.preventDefault();
    const banNum = parseInt(value); //change input value into int
    setBanNums([...banNums, banNum]);
    setValue("");
  };
  const handleRegister = async () => {
    // const data = await storeBanNumber({ banNums, token });
    // console.log(data);
    setBannedNums(banNums); //add to show
    setOpenModal(false);
  };
  console.log(banNums);
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader page="အားလုံး" group="ပယ်ထားသောဂဏန်း" />
      {/* //=== Header Part2 */}
      <div className="w-4/5 mx-auto flex justify-between items-center py-4">
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
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Select sizing="md" id="session">
            <option defaultValue={true}>ပွဲချိန်ရွေးရန်</option>
            <option>နံနက်</option>
            <option>နေ့လည်</option>
            <option>ည</option>
          </Select>

          <Button
            color="blue"
            className=" rounded-none mt-2"
            onClick={() => setOpenModal(true)}
          >
            အသစ်ထည့်ရန်
          </Button>
        </div>
      </div>
      {/* Header Part2 ===// */}

      {/* Show Ban Numbers */}
      <div className="w-4/5 mx-auto flex flex-wrap items-center gap-2 py-4">
        {bannedNums?.map((num, index) => {
          return (
            <button
              key={index}
              className={`w-16 h-16 flex justify-center items-center border border-primary rounded hover:bg-primary hover:text-white cursor-pointer `}
              type="button"
            >
              {num}
            </button>
          );
        })}
        {/* {data?.data?.map((num, index) => {
          return (
            <button
              key={index}
              className={`w-16 h-16 flex justify-center items-center border border-primary rounded hover:bg-primary hover:text-white cursor-pointer `}
              type="button"
            >
              {num}
            </button>
          );
        })} */}
      </div>

      <Modal
        dismissible
        size="sm"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button onClick={() => setOpenModal(false)}>2D ပယ်ဖျက်ရန်</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                3D ပယ်ဖျက်ရန်
              </Button>
            </div>

            {/* add ban number */}
            <form onSubmit={addBanNum} className="flex w-full ">
              <input
                type="number"
                id="ban_num"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg shadow-none outline-none focus:shadow-none focus:outline-none focus:border-none block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ပယ်ဖျက်လိုသောဂဏန်းရေးရန်"
                value={value}
                onChange={handleInput}
                required
              />
              <button
                type="submit"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-e-lg text-xs w-[100%] sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ထည့်ရန်
              </button>
            </form>

            <div className="flex flex-wrap gap-2 ">
              {banNums?.map((num, index) => {
                return (
                  <button
                    key={index}
                    className={`w-16 h-16 flex justify-center items-center border border-primary rounded hover:bg-primary hover:text-white cursor-pointer `}
                    type="button"
                  >
                    {num}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
                onClick={handleRegister}
              >
                စာရင်းသွင်းသည်
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BanAllType;
