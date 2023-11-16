import { Flowbite, Sidebar } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import { AiOutlineHourglass } from "react-icons/ai";
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiArrowSmRight,
  HiChartPie,
  HiBan,
  HiShoppingBag,
  HiOutlineTicket,
  HiUser,
  HiUsers,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SidebarComponent = ({ handleLogout }) => {
  const nav = useNavigate();

  return (
    <>
      {/* <Flowbite theme={{ theme }}> */}
      <Sidebar
        // theme={theme}
        className="h-screen flowbite-sidebar-blue cursor-pointer"
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiChartPie} onClick={() => nav("/")}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              // commercehref="/section"
              icon={AiOutlineHourglass}
              onClick={() => nav("/section")}
            >
              Section
            </Sidebar.Item>
            <Sidebar.Item
              commercehref="/ban"
              icon={HiBan}
              onClick={() => nav("/ban")}
            >
              Ban
            </Sidebar.Item>

            {/* //=== Sale */}
            <Sidebar.Collapse
              icon={HiOutlineTicket}
              label="Sale"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return (
                  <IconComponent
                    aria-hidden
                    className={twMerge(
                      theme.label.icon.open[open ? "on" : "off"]
                    )}
                  />
                );
              }}
            >
              <Sidebar.Item onClick={() => nav("/create_sale")}>
                Create
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/record_sale")}>
                Record
              </Sidebar.Item>
            </Sidebar.Collapse>
            {/* Sale ===// */}

            {/* //=== Accounting */}
            <Sidebar.Collapse
              icon={HiShoppingBag}
              label="Accounting"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return (
                  <IconComponent
                    aria-hidden
                    className={twMerge(
                      theme.label.icon.open[open ? "on" : "off"]
                    )}
                  />
                );
              }}
            >
              <Sidebar.Item onClick={() => nav("/filtering")}>
                Filtering
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/self")}>Self</Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/agent")}>Agent</Sidebar.Item>
            </Sidebar.Collapse>
            {/* Accounting ===// */}

            {/* //=== Users */}
            <Sidebar.Collapse
              icon={HiUsers}
              label="Users"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return (
                  <IconComponent
                    aria-hidden
                    className={twMerge(
                      theme.label.icon.open[open ? "on" : "off"]
                    )}
                  />
                );
              }}
            >
              <Sidebar.Item onClick={() => nav("/usersList")}>
                Users List
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/banUsers")}>Ban</Sidebar.Item>
            </Sidebar.Collapse>
            {/* Agents ===// */}

            {/* //=== Agents */}
            <Sidebar.Collapse
              icon={HiUsers}
              label="Agents"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return (
                  <IconComponent
                    aria-hidden
                    className={twMerge(
                      theme.label.icon.open[open ? "on" : "off"]
                    )}
                  />
                );
              }}
            >
              <Sidebar.Item onClick={() => nav("/createAgents")}>
                Create
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/agentsList")}>
                List
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/banAgents")}>Ban</Sidebar.Item>
            </Sidebar.Collapse>
            {/* Agents ===// */}

            {/* //=== Profile or ဒိုင် */}
            <Sidebar.Collapse
              icon={HiUser}
              label="Profile"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return (
                  <IconComponent
                    aria-hidden
                    className={twMerge(
                      theme.label.icon.open[open ? "on" : "off"]
                    )}
                  />
                );
              }}
            >
              <Sidebar.Item onClick={() => nav("/profile")}>
                Profile
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/editProfile")}>
                Edit
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/changePw")}>
                Change Password
              </Sidebar.Item>
              <Sidebar.Item onClick={() => nav("/logoutPF")}>
                Logout
              </Sidebar.Item>
            </Sidebar.Collapse>
            {/* Profile or ဒိုင် ===// */}

            <Sidebar.Item href="#" onClick={handleLogout} icon={HiArrowSmRight}>
              Sign Out
              {/* <button type="button" onClick={handleLogout}>
                logout
              </button> */}
            </Sidebar.Item>

            {/* <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item> */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      {/* </Flowbite> */}
    </>

    // <>
    //   <button
    //     data-drawer-target="default-sidebar"
    //     data-drawer-toggle="default-sidebar"
    //     aria-controls="default-sidebar"
    //     type="button"
    //     className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //   >
    //     <span className="sr-only">Open sidebar</span>
    //   </button>

    //   <aside
    //     id="default-sidebar"
    //     className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    //     aria-label="Sidebar"
    //   >
    //     <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    //       <ul className="space-y-2 font-medium">
    //         {/* //=== Dashboard */}
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="ml-3">Dashboard</span>
    //           </a>
    //         </li>
    //         {/* Dashboard ===// */}

    //         {/* //=== Section */}
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="ml-3">Section</span>
    //           </a>
    //         </li>
    //         {/* Section ===// */}

    //         {/* //=== Ban */}
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="ml-3">Ban</span>
    //           </a>
    //         </li>
    //         {/* Ban ===// */}

    //         {/* //=== Accounting */}
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="ml-3">Accounting</span>
    //           </a>
    //         </li>
    //         {/* Accounting ===// */}

    //         {/* //=== agents */}
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="flex-1 ml-3 whitespace-nowrap">Agents</span>
    //           </a>
    //         </li>
    //         {/* agents ===// */}

    //         <li>
    //           <button
    //             type="button"
    //             class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //             aria-controls="dropdown-example"
    //             data-collapse-toggle="dropdown-example"
    //           >
    //             <span class="flex-1 ml-3 text-left whitespace-nowrap">
    //               Agent
    //             </span>
    //           </button>
    //           <ul id="dropdown-example" class="hidden py-2 space-y-2">
    //             <li>
    //               <a
    //                 href="#"
    //                 class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Products
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Billing
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //               >
    //                 Invoice
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         {/* //=== ဒိုင် */}
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
    //           </a>
    //         </li>
    //         {/* ဒိုင် ===// */}

    //         {/* //=== logout */}
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
    //           </a>
    //         </li>
    //         {/* logout ===// */}

    //         {/* //=== extras */}
    //         {/* <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
    //             <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
    //               Pro
    //             </span>
    //           </a>
    //         </li> */}
    //         {/* <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
    //             <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
    //               3
    //             </span>
    //           </a>
    //         </li> */}
    //         {/* extras ===// */}
    //       </ul>
    //     </div>
    //   </aside>

    //   {/* <div className="p-4 sm:ml-64">
    //     <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    //       <div className="grid grid-cols-3 gap-4 mb-4">
    //         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               class="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
    //         <p className="text-2xl text-gray-400 dark:text-gray-500">
    //           <svg
    //             className="w-3.5 h-3.5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 18 18"
    //           >
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M9 1v16M1 9h16"
    //             />
    //           </svg>
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4 mb-4">
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
    //         <p className="text-2xl text-gray-400 dark:text-gray-500">
    //           <svg
    //             className="w-3.5 h-3.5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 18 18"
    //           >
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M9 1v16M1 9h16"
    //             />
    //           </svg>
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
    //           <p className="text-2xl text-gray-400 dark:text-gray-500">
    //             <svg
    //               className="w-3.5 h-3.5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 18 18"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M9 1v16M1 9h16"
    //               />
    //             </svg>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    // </>
  );
};

export default SidebarComponent;
