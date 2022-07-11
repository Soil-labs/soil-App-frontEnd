import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

const GeneralGreenFrom = (props) => {
  return (
    <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="w-[590px] h-[70px] bg-white mt-20 text-4xl shadow-md rounded-2xl flex items-center justify-center">
          <p className="">General Green Form</p>
        </div>
        {/* The Meat of the page goes here */}
        <button
          onClick={() => {
            props.changePhase(props.phase);
          }}
        >
          <ChevronDoubleDownIcon className="h-10 w-10 text-black mt-10 font-light stroke-1" />
        </button>
      </div>
    </div>
  );
};
function GeneralGreenFromComponent(props) {
  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <GeneralGreenFrom {...props} />
      </div>
    </>
  );
}

export default GeneralGreenFromComponent;
