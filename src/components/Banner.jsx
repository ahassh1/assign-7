import React from "react";
import leftVector from "../assets/vector1.png";

const Banner = () => {
  return (
    <div className=" w-11/12 mx-auto flex gap-6  md:gap-10 p-8 md:p-10 justify-center ">
      <div className="relative overflow-hidden w-100 h-30 md:w-200 md:h-42 flex-row md:flex-col rounded-md bg-gradient-to-r from-[#7F4CF1] to-[#A66BFF] flex items-center justify-center text-white ">
        <img
          className="absolute left-0 top-0  h-full"
          src={leftVector}
          alt=""
        />
        <img
          className="absolute right-0 top-0  h-full transform scale-x-[-1]"
          src={leftVector}
          alt=""
        />
        <p className="text-xl md:text-lg font-semibold">In- Progress</p>
        <h1 className="font-semibold text-xl  md:text-3xl">0</h1>
      </div>
      <div className="relative overflow-hidden w-100 h-30 md:w-200 md:h-42 flex-row md:flex-col rounded-md bg-gradient-to-r from-[#3CCB6B] to-[#0F7B72] flex items-center justify-center text-white ">
        <img
          className="absolute left-0 top-0  h-full"
          src={leftVector}
          alt=""
        />
        <img
          className=" transform absolute right-0 top-0  h-full scale-x-[-1]"
          src={leftVector}
          alt=""
        />
        <p className="text-xl md:text-lg font-semibold">Resolve</p>
        <h1 className="font-semibold text-xl md:text-3xl">0</h1>
      </div>
    </div>
  );
};

export default Banner;
