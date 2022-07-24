import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

const GeneralGreenFrom = (props) => {
  return (
    <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="w-[590px] h-[70px] bg-white mt-20 text-4xl shadow-md rounded-2xl flex items-center justify-center">
          <p className="">STEPS DURING THE ONBOARDING</p>
        </div>
        <div className=" w-[590px] h-[437px] bg-white rounded-2xl mt-10 text-xs">

            <div className="px-4 py-2 mt-8 ml-10 shadow-xl w-fit rounded-2xl">
                <p>JOIN CHANNEL</p>
            </div>
            <div className="px-4 py-2 mt-4 ml-16 shadow-xl w-fit rounded-2xl">
                <p>MINT NFT</p>
            </div>
            <div className="px-4 py-2 mt-6 ml-4 shadow-xl w-fit rounded-2xl">
                <p>WARM WELCOME</p>
            </div>
            <div className="px-4 py-2 mt-8 ml-10 shadow-xl w-fit rounded-2xl">
                <p>CREATE DEWORK </p>
            </div>
            <div className="px-4 py-2 mt-4 ml-4 shadow-xl w-fit rounded-2xl">
                <p>BUILD A SMART CONTRACT</p>
            </div>
            <div className="px-4 py-2 mt-6 ml-12 shadow-xl w-fit rounded-2xl">
                <p>SIGN TRANSACTION</p>
            </div>
         
            
        </div>
        <button
          onClick={() => {
            props.changePhase(props.phase);
          }}
        >
          <ChevronDoubleDownIcon className="w-10 h-10 mt-10 font-light text-black stroke-1" />
        </button>
      </div>
    </div>
  );
};
function StepsForOnboardComponent(props) {
  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <GeneralGreenFrom {...props} />
      </div>
    </>
  );
}

export default StepsForOnboardComponent;
