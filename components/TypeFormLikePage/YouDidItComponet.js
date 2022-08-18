import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

const GeneralGreenFrom = (props) => {
  return (
    <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
      <div className="flex flex-col items-center">
        {/* YOU DID IT BOX */}
        <div className="w-[590px] h-[437px] bg-white mt-56 text-4xl font-bold shadow-md rounded-2xl flex items-center justify-center">
          <p className=""> YOU DID IT!</p>
        </div>
        {/* The Meat of the page goes here */}
      </div>
    </div>
  );
};
function YouDidItComponet(props) {
  return (
    <>
      <div className="h-full bg-[url('/confetti.png')] bg-contain bg-no-repeat -mt-[30px] -mb-[30px] -mx-4 rounded-2xl flex justify-center items-center">
        {/* <GeneralGreenFrom {...props} /> */}
        <p className="text-[32px] font-medium"> YOU DID IT!</p>
      </div>
    </>
  );
}

export default YouDidItComponet;
