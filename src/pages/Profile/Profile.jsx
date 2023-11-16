import { Avatar } from "flowbite-react";
import React from "react";
// import { useGetCurrentuserQuery } from "../../redux/api/usersApi";

const Profile = () => {
  // const data = useGetCurrentuserQuery();
  // console.log(data);
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white">
      <h1>Profile</h1>

      <div className="grid grid-rows-2 justify-center items-center ">
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
      </div>
    </div>
  );
};

export default Profile;
