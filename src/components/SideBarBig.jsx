import React from "react";
import { Button, Sidebar } from "flowbite-react";
import {
  AiOutlineClockCircle,
  AiOutlineLock,
  AiOutlinePicture,
} from "react-icons/ai";
import { MdGridView } from "react-icons/md";
import {
  HiArrowSmRight,
  HiChartPie,
  HiOutlineClipboardList,
  HiBan,
  HiShoppingBag,
  HiOutlineCash,
  HiOutlineTicket,
  HiUser,
  HiOutlineUsers,
  HiUsers,
} from "react-icons/hi";

import { GrUserSettings } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const SideBarBig = ({ handleLogout }) => {
  const nav = useNavigate();
  return (
    <>
      <Sidebar
        className="w-80 h-screen   cursor-pointer border-r-2"
        aria-label="Sidebar with multi-level dropdown example"
      >
        {/* <div className="w-full h-4/5 flex flex-col justify-between"> */}

        <div className="relative w-full  dark:text-white h-3/5">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/" icon={MdGridView} onClick={() => nav("/")}>
                ပင်မစာမျက်နှာ
              </Sidebar.Item>
              {/* //=== အရောင်းစနစ် */}
              <Sidebar.Collapse icon={HiOutlineCash} label="အရောင်းစနစ်">
                <Sidebar.Item onClick={() => nav("/sale_two_d")}>
                  2D တင်ရန်
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/sale_three_d")}>
                  3D တင်ရန်
                </Sidebar.Item>
              </Sidebar.Collapse>
              {/*  အရောင်းစနစ် ===// */}

              <Sidebar.Item
                // href="/"
                icon={AiOutlinePicture}
                onClick={() => nav("/media")}
              >
                ဓာတ်ပုံ
              </Sidebar.Item>

              {/* //=== Ban Number */}
              <Sidebar.Collapse icon={HiBan} label="ပယ်ထားသောဂဏန်း">
                <Sidebar.Item onClick={() => nav("/ban_all_type")}>
                  အားလုံး
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/ban_two_d")}>
                  2D ပယ်စာရင်း
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/ban_three_d")}>
                  3D ပယ်စာရင်း
                </Sidebar.Item>
              </Sidebar.Collapse>
              {/* Ban Number  ===// */}
              {/* //=== မှတ်တမ်း */}
              <Sidebar.Collapse icon={HiOutlineCash} label="မှတ်တမ်း">
                <Sidebar.Item onClick={() => nav("/record_two_d")}>
                  2D မှတ်တမ်း
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/record_three_d")}>
                  3D မှတ်တမ်း
                </Sidebar.Item>
              </Sidebar.Collapse>
              {/* မှတ်တမ်း ===// */}
              <Sidebar.Item
                icon={AiOutlineClockCircle}
                onClick={() => nav("/section")}
              >
                ပွဲချိန်များ
              </Sidebar.Item>
              {/* //=== စာရင်းများ */}
              <Sidebar.Collapse
                icon={HiOutlineClipboardList}
                label="စာရင်းများ"
              >
                <Sidebar.Item onClick={() => nav("/list_two_d")}>
                  2D စာရင်း
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/list_three_d")}>
                  3D စာရင်း
                </Sidebar.Item>
              </Sidebar.Collapse>
              {/* စာရင်းများ  ===// */}
              {/* //=== ကိုယ်စားလှယ် Agent */}
              <Sidebar.Collapse icon={HiOutlineUsers} label="ကိုယ်စားလှယ်">
                <Sidebar.Item onClick={() => nav("/agentsList")}>
                  ကိုယ်စားလှယ်စာရင်း
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/banAgents")}>
                  ပယ်ဖျက်ထားသောစာရင်း
                </Sidebar.Item>
              </Sidebar.Collapse>
              {/* ကိုယ်စားလှယ် Agent ===// */}
              {/* //=== Profile or ဒိုင် */}
              <Sidebar.Collapse icon={GrUserSettings} label="ကိုယ်ရေးအချက်အလက်">
                <Sidebar.Item onClick={() => nav("/profile")}>
                  အသေးစိတ်
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/editProfile")}>
                  ပြင်ဆင်ရန်
                </Sidebar.Item>
                <Sidebar.Item onClick={() => nav("/changePw")}>
                  လျှို့ဝှက်နံပါတ်ပြောင်းရန်
                </Sidebar.Item>
              </Sidebar.Collapse>
              {/* Profile or ဒိုင် ===// */}
            </Sidebar.ItemGroup>
          </Sidebar.Items>

          <div className="absolute -bottom-96 left-0 w-full h-56">
            <Button
              color="blue"
              className=" w-full rounded-none mt-2"
              onClick={handleLogout}
            >
              <AiOutlineLock className="text-xl" />
              <span className="ps-2">အကောင့်ထွက်မည်</span>
            </Button>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBarBig;
