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
          <div className="flex">
            <div >
              <div className="px-4 py-2 mt-8 ml-10 shadow-xl bg-[#FED1E9] w-fit rounded-2xl">
                <p>JOIN CHANNEL</p>
              </div>
              <div className="px-4 py-2 mt-4 ml-16 shadow-xl bg-[#D7FFE7] w-fit rounded-2xl">
                <p>MINT NFT</p>
              </div>
              <div className="px-4 py-2 mt-6 ml-4 shadow-xl  bg-[#FFD8B5] w-fit rounded-2xl">
                <p>WARM WELCOME</p>
              </div>
              <div className="px-4 py-2 mt-8 ml-10 shadow-xl bg-[#FED1E9] w-fit rounded-2xl">
                <p>CREATE DEWORK </p>
              </div>
              <div className="px-4 py-2 mt-4 ml-4 shadow-xl bg-[#C8FCFF] w-fit rounded-2xl">
                <p>BUILD A SMART CONTRACT</p>
              </div> 
              <div className="px-4 py-2 mt-6 ml-12 shadow-xl w-fit bg-[#DAD7FF] rounded-2xl">
                <p>SIGN TRANSACTION</p>
              </div>
            </div>
            <div className="mt-16">
              <div className="px-16 py-2 mt-6 ml-4 text-gray-400 shadow-lg w-fit rounded-2xl">
                Step 1
              </div>
              <div className="px-16 py-2 mt-6 ml-4 text-gray-400 shadow-lg w-fit rounded-2xl">
                Step 2
              </div>
              <div className="px-16 py-2 mt-6 ml-4 text-gray-400 shadow-lg w-fit rounded-2xl">
                Step 3
              </div>
              <div className="px-16 py-2 mt-6 ml-4 text-gray-400 shadow-lg w-fit rounded-2xl">
                Step 4
              </div>
            </div>
            <div >
              <div className="px-4 py-2 mt-8 ml-10 shadow-xl bg-[#F8FDC1] w-fit rounded-2xl">
                <p>MESSAGE CANDIDATE</p>
              </div>
              <div className="px-4 py-2 mt-4 ml-16 shadow-xl bg-[#E2DDFF] w-fit rounded-2xl text-[10px]">
                <p>  CLOSE APPLICATION</p>
              </div>
              <div className="px-4 py-2 mt-6 ml-4 shadow-xl w-fit bg-[#CAFFBD] rounded-2xl">
                <p>DISPATCH TOKEN</p>
              </div>
              <div className="px-4 py-2 mt-8 ml-10 shadow-xl w-fit bg-[#D2EFFF] rounded-2xl text-[7px]">
                <p>INTRODUCE TO THE TEAM </p>
              </div>
            
              <div className="px-4 py-2 mt-6 ml-12 shadow-xl w-fit bg-[#FFEEC1] rounded-2xl text-[7px]">
                <p>SCHEDULE A KICK OFF MEETING</p>
              </div>
            </div>
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
