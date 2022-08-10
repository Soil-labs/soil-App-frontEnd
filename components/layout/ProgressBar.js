import React from "react";

const Steps = ({ i, isActive }) => {
  return (
    <div
      style={{
        clipPath:
          "polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
      }}
      className={`h-10 w-36  flex justify-center font-Inter font-normal items-center -ml-3 ${
        isActive ? "bg-[#FFF268]" : "bg-[#FFF268] opacity-40"
      }`}
    >
      <p>{isActive && `STEP ${i}`}</p>
    </div>
  );
};

const ProgressBar = ({ numberofSteps, currentStep }) => {
  return (
    <div className="flex">
      <div
        style={{
          clipPath: "polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0 50%, 0% 0%)",
        }}
        className={`h-10 w-36 rounded-l-full flex justify-center font-Inter font-normal items-center ${
          currentStep >= 1 ? "bg-[#FFF268]" : "bg-[#FFF268] opacity-40"
        } `}
      >
        <p>STEP 1</p>
      </div>
      {Array.from(Array(numberofSteps - 2)).map((_, i) => (
        <Steps key={i} i={i + 2} isActive={currentStep >= i + 2} />
      ))}
      <div
        style={{
          clipPath:
            "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 15% 50%, 0% 0%)",
        }}
        className={`h-10 w-32 rounded-r-full font-Inter font-normal flex justify-center -ml-3 items-center ${
          currentStep === numberofSteps
            ? "bg-[#FFF268]"
            : "bg-[#FFF268] opacity-40"
        } `}
      >
        <p>{currentStep === numberofSteps && `STEP ${numberofSteps}`}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
