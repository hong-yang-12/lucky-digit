import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import RouteGuard from "./RouteGuard";

import Nav from "../components/Nav";

import Ban from "../pages/Ban";
import Section from "../pages/Session";

import AgentsList from "../pages/Agents/AgentsList";
import CreateAgents from "../pages/Agents/CreateAgents";
import BanAgents from "../pages/Agents/BanAgents";

import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditProfile";
import ChangePassword from "../pages/Profile/ChangePassword";
import Logout from "../pages/Profile/Logout";

import UsersList from "../pages/Users/UsersList";
import BanUsers from "../pages/Users/BanUsers";

import { useLogoutMutation } from "../redux/api/authApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/service/authSlice";
import { openSidebar } from "../redux/service/stateSlice";
import SidebarSmall from "../components/SidebarSmall";
import SideBarBig from "../components/SideBarBig";
import TwoDRecord from "../pages/Records/TwoDRecord";
import ThreeDRecord from "../pages/Records/ThreeDRecord";
import TwoDSale from "../pages/Sale/TwoDSale";
import ThreeDSale from "../pages/Sale/ThreeDSale";
import Home from "../pages/Home";
import TwoDList from "../pages/Lists/TwoDList";
import ThreeDList from "../pages/Lists/ThreeDList";

const Path = () => {
  // const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  const nav = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  // Function to check if the current location matches certain paths
  const shouldShowSidebar = () => {
    const { pathname } = location;
    // console.log(pathname);
    return !["/login", "/register", "/login_copy"].includes(pathname);
  };
  const handleLogout = async () => {
    const { data } = await logout(token);
    dispatch(removeUser());
    if (data?.message) nav("/login");
    console.log(data);
  };

  const sidebar = useSelector((state) => state.stateSlice.sidebar);
  // const toggleSidebar = () => {
  //   dispatch(openSidebar(!sidebar));
  // };

  return (
    <div>
      {shouldShowSidebar() && <Nav handleLogout={handleLogout} />}
      <div className="flex">
        {shouldShowSidebar() &&
          (sidebar ? (
            <SidebarSmall handleLogout={handleLogout} />
          ) : (
            <SideBarBig handleLogout={handleLogout} />
          ))}

        <Routes>
          <Route
            path="/"
            element={
              <RouteGuard>
                <Home />
              </RouteGuard>
            }
          />
          <Route path="/section" element={<Section />} />
          <Route path="/ban" element={<Ban />} />

          {/* //=== အရောင်းစနစ် */}
          <Route path="/sale_two_d" element={<TwoDSale />} />
          <Route path="/sale_three_d" element={<ThreeDSale />} />
          {/* အရောင်းစနစ် ===// */}

          {/* //=== မှတ်တမ်း */}
          <Route path="/record_two_d" element={<TwoDRecord />} />
          <Route path="/record_three_d" element={<ThreeDRecord />} />
          {/* မှတ်တမ်း ===// */}

          {/* //=== စာရင်း */}
          <Route path="/list_two_d" element={<TwoDList />} />
          <Route path="/list_three_d" element={<ThreeDList />} />
          {/* စာရင်း ===// */}

          {/* //=== Accounting */}
          {/* <Route path="/filtering" element={<Filtering />} /> */}
          {/* <Route path="/self" element={<Self />} /> */}
          {/* <Route path="/agent" element={<Agent />} /> */}
          {/* Accounting ===// */}

          {/* //=== Users */}
          {/* <Route path="/usersList" element={<UsersList />} /> */}
          {/* <Route path="/banUsers" element={<BanUsers />} /> */}
          {/* Agents ===// */}

          {/* //=== Agents */}
          {/* <Route path="/createAgents" element={<CreateAgents />} /> */}
          <Route path="/agentsList" element={<AgentsList />} />
          <Route path="/banAgents" element={<BanAgents />} />
          {/* Agents ===// */}

          {/* //=== Profile or ဒိုင် */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/changePw" element={<ChangePassword />} />
          {/* <Route path="/logoutPF" element={<Logout />} /> */}
          {/* Profile or ဒိုင် ===// */}

          {/* <Route path="/demo" element={<SignInUpNotFoundTmp />} /> */}
          {/* <Route path="/login_copy" element={<LoginCopy />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Path;
