import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const NextButton = ({ handleChangePhase, className }) => {
  return (
    <div className="w-fit">
      <button
        className={`w-[132px], h-[40px] py-[10py] px-[11px] bg-soilGreen-20 rounded-[6px] ${className}`}
        onClick={() => {
          handleChangePhase();
        }}
      >
        <div className="flex">
          <span>NEXT</span>
          <ArrowSmRightIcon className="w-6" />
        </div>
      </button>
    </div>
  );
};

export default NextButton;
