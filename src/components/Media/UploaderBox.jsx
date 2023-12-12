import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const UploaderBox = ({ uploadImg }) => {
  return (
    <label className="customBorder w-full h-72 hover:bg-secondary-lighter flex flex-col gap-2 justify-center items-center mt-4">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={uploadImg}
      />
      <div className="w-16 h-16 border-2 border-secondary-light hover:bg-secondary hover:border-secondary hover:text-white text-xl rounded-full flex justify-center items-center">
        <MdOutlineFileUpload />
      </div>
      <p>ဓာတ်ပုံထည့်ရန်</p>
    </label>
  );
};

export default UploaderBox;
