import React from "react";

const Image = ({index, image}) => {
  return (
    <div key={index} className="w-32 h-32 overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-32 h-32 object-cover rounded transition hover:scale-110 hover:opacity-90"
      />
    </div>
  );
};

export default Image;
