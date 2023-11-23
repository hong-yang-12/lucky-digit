import React from "react";

const CustomHeader = ({ group, page }) => {
  return (
    <header className="w-4/5 mx-auto flex items-center justify-between py-5">
      <h1 className="font-heading font-bold text-base">{page}</h1>
      <p className=" font-light text-sm">
        {group} / <span className="text-primary">{page}</span>
      </p>
    </header>
  );
};

export default CustomHeader;
