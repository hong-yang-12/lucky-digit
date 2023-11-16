import React from "react";

const Ban = () => {
  // let i=0;
  const numbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2,"0"));
  // console.log(numbers);
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkBg dark:text-white px-10">
      <h1>Ban</h1>

      <div className=" w-[32rem] grid grid-cols-10 gap-1">
        {numbers.map((number,index) => (
          <p key={index} className="w-12 h-12 bg-primary rounded flex justify-center items-center">{number}</p>
        ))}
      </div>
    </div>
  );
};

export default Ban;
