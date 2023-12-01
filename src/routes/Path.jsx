import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/service/authSlice";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

// Components
import SidebarSmall from "../components/SidebarSmall";
import SideBarBig from "../components/SideBarBig";
import Nav from "../components/Nav";
import Ban from "../pages/Ban";
import RouteGuard from "./RouteGuard";

// Public
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

// Private
import Home from "../pages/Home";

import TwoDSale from "../pages/Sale/TwoDSale";
import ThreeDSale from "../pages/Sale/ThreeDSale";

import BanTwoD from "../pages/BanNumber/BanTwoD";
import BanThreeD from "../pages/BanNumber/BanThreeD";
import BanAllType from "../pages/BanNumber/BanAllType";

import TwoDRecord from "../pages/Records/TwoDRecord";
import ThreeDRecord from "../pages/Records/ThreeDRecord";

import Section from "../pages/Section";

import TwoDList from "../pages/Lists/TwoDList";
import ThreeDList from "../pages/Lists/ThreeDList";

import AgentsList from "../pages/Agents/AgentsList";
import BanAgents from "../pages/Agents/BanAgents";

import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditProfile";
import ChangePassword from "../pages/Profile/ChangePassword";

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
    return !["/login", "/register"].includes(pathname);
  };
  const handleLogout = async () => {
    const { data } = await logout(token);
    dispatch(removeUser());
    if (data?.message) {
      toast.success(data?.message);
      nav("/login");
    }
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
          <Route
            path="/section"
            element={
              <RouteGuard>
                <Section />
              </RouteGuard>
            }
          />
          <Route path="/ban" element={<Ban />} />

          {/* //=== အရောင်းစနစ် */}
          <Route
            path="/sale_two_d"
            element={
              <RouteGuard>
                <TwoDSale />
              </RouteGuard>
            }
          />
          <Route
            path="/sale_three_d"
            element={
              <RouteGuard>
                <ThreeDSale />
              </RouteGuard>
            }
          />
          {/* အရောင်းစနစ် ===// */}

          {/* //=== Ban Numbers */}
          <Route
            path="/ban_all_type"
            element={
              <RouteGuard>
                <BanAllType />
              </RouteGuard>
            }
          />
          <Route
            path="/ban_two_d"
            element={
              <RouteGuard>
                <BanTwoD />
              </RouteGuard>
            }
          />
          <Route
            path="/ban_three_d"
            element={
              <RouteGuard>
                <BanThreeD />
              </RouteGuard>
            }
          />
          {/* Ban Numbers ===// */}

          {/* //=== မှတ်တမ်း */}
          <Route
            path="/record_two_d"
            element={
              <RouteGuard>
                <TwoDRecord />
              </RouteGuard>
            }
          />
          <Route
            path="/record_three_d"
            element={
              <RouteGuard>
                <ThreeDRecord />
              </RouteGuard>
            }
          />
          {/* မှတ်တမ်း ===// */}

          {/* //=== စာရင်း */}
          <Route
            path="/list_two_d"
            element={
              <RouteGuard>
                <TwoDList />
              </RouteGuard>
            }
          />
          <Route
            path="/list_three_d"
            element={
              <RouteGuard>
                <ThreeDList />
              </RouteGuard>
            }
          />
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
          <Route
            path="/agentsList"
            element={
              <RouteGuard>
                <AgentsList />
              </RouteGuard>
            }
          />
          <Route
            path="/banAgents"
            element={
              <RouteGuard>
                <BanAgents />
              </RouteGuard>
            }
          />
          {/* Agents ===// */}

          {/* //=== Profile or ဒိုင် */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/changePw" element={<ChangePassword />} />
          {/* Profile or ဒိုင် ===// */}

          {/* <Route path="/demo" element={<SignInUpNotFoundTmp />} /> */}
          {/* <Route path="/login_copy" element={<LoginCopy />} /> */}

          {/* //==== Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route
            path="/*"
            render={() => {
              if (token) {
                return  <NotFound />;
              } else {
                return nav("/login");
              }
            }}
          /> */}
          <Route path="/*" element={<NotFound />} />
          {/* Public Routes ====// */}
        </Routes>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Path;
