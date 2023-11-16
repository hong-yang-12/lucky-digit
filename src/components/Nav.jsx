import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import brand_img from "../assets/imgs/Branding.png";

import { openSidebar } from "../redux/service/stateSlice";
import { useDispatch, useSelector } from "react-redux";

const Nav = ({ handleLogout }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.stateSlice.sidebar);
  // console.log(sidebar);

  // const handle_dark_mode = () => {
  //   dispatch(set_is_dark_mode(!is_dark_mode));
  // };

  return (
    <>
      <Navbar className=" border-b shadow bg-bg dark:bg-darkBg dark:text-white" fluid>
        {/* //=== left_side of page */}
        <div className="flex gap-9 items-center">
          <Navbar.Brand href="#">
            <img
              src={brand_img}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white me-2">
              Lucky Digit
            </span>
          </Navbar.Brand>
          <p onClick={() => dispatch(openSidebar(!sidebar))}>
            {!sidebar ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </p>
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
              {/* <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
            </div>
          </div>
        </div>
        {/* left_side of page ===// */}

        {/* <div className="w-10/12 bg-darkBg flex justify-between gap-2 md:order-2"> */}

        <div className="flex items-center gap-2">
          <DarkThemeToggle />
          <button
            type="button"
            className="text-dark bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base p-3 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineBell />
            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-base font-medium text-center text-dark bg-accent rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineMessage />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-danger border-2 border-white rounded-full -top-1 -right-1 dark:border-gray-900"></div>
          </button>

          <div className="text-right">
            <p className="font-semibold text-sm">admin@gmail.com</p>
            <p className="font-extralight text-xs">Agent</p>
          </div>
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span classNameName="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              {/* <button type="button" onClick={handleLogout}> */}
              Sign out
              {/* </button> */}
            </Dropdown.Item>
          </Dropdown>
          {/* onToggle={handle_dark_mode} */}

          {/* <Navbar.Toggle /> */}
        </div>
        {/* </div> */}
        {/* <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};

export default Nav;
