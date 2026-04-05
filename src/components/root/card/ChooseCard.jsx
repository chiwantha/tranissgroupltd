import React from "react";

const ChooseCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-1 bg-gray-50 hover:bg-blue-50 items-center md:items-end hover:shadow-md transition-all duration-300 p-4 rounded-xl shadow">
      <h5 className=" text-theme-light-green text-xl font-bold">
        {title || "Card"}
      </h5>
      <p className="md: max-w-md font-light text-lg leading-5">
        {desc || `Descriptions`}{" "}
      </p>
    </div>
  );
};

export default ChooseCard;
