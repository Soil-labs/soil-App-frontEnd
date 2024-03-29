import React from "react";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";

const PreviousButton = ({ handleChangePhaseBack, className }) => {
  return (
    <button
      className={`w-[132px], h-[40px] py-[10py] px-[11px] bg-soilGreen-20 rounded-[6px] ${className}`}
      onClick={() => {
        handleChangePhaseBack();
      }}
    >
      <div className="flex space-x-2">
        <ArrowSmLeftIcon className="w-6 " />
        <span>PREVIOUS</span>
      </div>
    </button>
  );
};

export default PreviousButton;
