import { Avatar } from "flowbite-react";
import React from "react";
import Cookies from "js-cookie";
import { useGetUserProfileQuery } from "../../redux/api/profileApi";
import CustomHeader from "../../components/CustomHeader";
import { CiEdit } from "react-icons/ci";

const Profile = () => {
  const token = Cookies.get("token");
  const { data: detail } = useGetUserProfileQuery(token);
  console.log(detail?.data);
  const profile = detail?.data;
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <CustomHeader group="ကိုယ်ရေးအချက်အလက်" page="အသေးစိတ်" />

      <div className="w-4/5 shadow-lg border p-6 mt-5 mx-auto">
        <header className="flex justify-between items-center pb-5 border-b-2">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="absolute bottom-4 right-1 bg-black text-white p-1 rounded-full">
                <CiEdit />
              </div>
            </div>
            <div>
              <h3 className="font-bold uppercase">{profile?.name ? profile?.name : "Name"}</h3>
              <p className=" italic">{profile?.role ? profile?.role : "role"}</p>
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edit Profile
          </button>
        </header>
        <div className="pt-4">
          <p>Date of Birth : {profile?.dob ? profile?.dob : "null"} </p>
          <p>Gender : {profile?.gender ? profile?.gender : "null"} </p>
          <p>Phone: {profile?.phone ? profile?.phone : "098524154"}</p>
          <p>Email : {profile?.email ? profile?.email : "null"} </p>
          <p>Company: {profile?.company ? profile?.company : "null"}</p>
          <p>Address: {profile?.address ? profile?.address : "null"}</p>
        </div>
      </div>

      {/* <div className="grid grid-rows-2 justify-center items-center ">
        <div className="flex justify-center item-center gap-2 ">
          <Avatar
            img="https://marketplace.canva.com/EAFUQc-zTnM/1/0/1600w/canva-beige-minimalist-graphic-facebook-profile-picture-JUlLgNlvb0c.jpg"
            size="lg"
          />
          <div>
            <h3>Mary Jane</h3>
            <p>Admin</p>
          </div>
        </div>

        <div>
          <h4>Personal Information</h4>
          <p>Role : Admin</p>
          <p>Email : jhonjhon@gmail.com</p>
          <p>Password: *** *** ***</p>
          <p>Phone: 098524154</p>
          <p>Status: Single</p>
          <p>Company: 9693</p>
          <p>Address: yangon</p>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
