import React from "react";
import error_img from "../assets/imgs/page_not_found.jpg"

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-bg flex justify-center items-center">
      <img
      className="w-[50rem] bg-no-repeat object-cover bg-center"
        src={error_img}
        alt=""
      />
    </div>
  );
};

export default NotFound;
