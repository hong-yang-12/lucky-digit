import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";

import brand_img from "../assets/imgs/Branding.png";

import { openSidebar } from "../redux/service/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Nav = ({ handleLogout }) => {
  const cookie_user = Cookies.get("user");
  const cookie_email = Cookies.get("user_email");
  let user = ""; //initial not to breakdown project
  let user_email = ""; //initial not to breakdown project

  // check condition not to breakdown project
  if (cookie_user && cookie_email) {
    user = JSON.parse(cookie_user);
    user_email = JSON.parse(cookie_email);
  }

  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.stateSlice.sidebar);

  return (
    <>
      <Navbar
        className="border-b shadow bg-bg dark:bg-darkBg dark:text-white"
        fluid
      >
        {/* //=== left_side of page */}
        <div className="flex gap-9 items-center">
          <Navbar.Brand href="#">
            <img
              src={brand_img}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className=" font-heading self-center whitespace-nowrap text-xl font-semibold dark:text-white me-2">
              Lucky Digit
            </span>
          </Navbar.Brand>
          <p
            className="text-2xl"
            onClick={() => dispatch(openSidebar(!sidebar))}
          >
            {!sidebar ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </p>
        </div>
        {/* left_side of page ===// */}

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
            <p className="font-heading text-sm">{user_email}</p>
            <p className="font-light text-xs">{user}</p>
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
              <span className="block text-sm">
                {user ? user : "demo"}
              </span>
              <span className="block truncate text-sm font-medium">
                {user_email ? user_email : "demo@lucky.com"}
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
        </div>
      </Navbar>
    </>
  );
};

export default Nav;
