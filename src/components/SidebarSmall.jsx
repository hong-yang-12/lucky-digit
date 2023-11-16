import { Sidebar } from "flowbite-react";
import { MdGridView } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  HiArrowSmRight,
  HiOutlineClipboardList,
  HiOutlineCash,
  HiOutlineUsers,
} from "react-icons/hi";
import { GrUserSettings } from "react-icons/gr";

import { useNavigate } from "react-router-dom";

const SidebarSmall = ({ handleLogout }) => {
  const nav = useNavigate();

  return (
    <>
      <Sidebar
        className=" w-13 h-screen border-r-4"
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              icon={MdGridView}
              onClick={() => nav("/")}
            ></Sidebar.Item>

            {/* အရောင်းစနစ် */}
            <Sidebar.Item
              icon={HiOutlineCash}
              onClick={() => nav("/sale_two_d")}
            ></Sidebar.Item>

            {/* မှတ်တမ်း */}
            <Sidebar.Item
              icon={HiOutlineCash}
              onClick={() => nav("/record_two_d")}
            ></Sidebar.Item>

            {/* Section */}
            <Sidebar.Item
              // commercehref="/section"
              icon={AiOutlineClockCircle}
              onClick={() => nav("/section")}
            ></Sidebar.Item>

            {/* စာရင်း */}
            <Sidebar.Item
              icon={HiOutlineClipboardList}
              onClick={() => nav("/record_three_d")}
            ></Sidebar.Item>

            {/* ကိုယ်စားလှယ် Agents */}
            <Sidebar.Item
              icon={HiOutlineUsers}
              onClick={() => nav("/agentsList")}
            ></Sidebar.Item>

            {/* Profile or ဒိုင် */}
            <Sidebar.Item
              icon={GrUserSettings}
              onClick={() => nav("/editProfile")}
            ></Sidebar.Item>

            {/* Sign Out */}
            <Sidebar.Item
              onClick={handleLogout}
              icon={HiArrowSmRight}
            ></Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SidebarSmall;
