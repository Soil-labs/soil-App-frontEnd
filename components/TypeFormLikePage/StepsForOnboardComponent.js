import { useState } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function StepsForOnboardComponent(props) {
  const [title, setTitle] = useState();
  const [colorSwitch, setColorSwitch] = useState(true);

  const [steps, setSteps] = useState([
    { title: "Step 1" },
    { title: "Step 2" },
    { title: "Step 3" },
    { title: " Step 4" },
  ]);

  const [stepTitles, setStepTiles] = useState([
    { title: "JOIN CHANNEL", id: "", color: "234123" },
    { title: "MINT NFT", id: "", color: "111111" },
    { title: "WARM WELCOME", id: "", color: "333333" },
    { title: "CREATE DEWORK", id: "", color: "ab2321" },
    { title: "CREATE DEWORK ", id: "", color: "ab2321" },
    { title: "SIGN TRANSACTION", id: "", color: "" },
    { title: "MESSAGE CANDIDATE", id: "", color: "234123" },
    
  ]);

  const handleClickStepTitles = (event, key) => {
    let selectedTitle = stepTitles[key].title;
    setTitle(selectedTitle);
    console.log("Title", title);
    setColorSwitch(false);
  };

  const handleClickStep = (e, key) => {
    const newArr = [...steps];
    newArr[key].title = title;
    setSteps(newArr);
    console.log("steps", steps);
    setColorSwitch(true);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
          <div className="flex flex-col items-center">
            {/* Title */}
            <div className="w-[590px] h-[70px] bg-white mt-20 text-4xl shadow-md rounded-2xl flex items-center justify-center">
              <p className="">STEPS DURING THE ONBOARDING</p>
            </div>
            <div className=" w-[590px] h-[437px] bg-white rounded-2xl mt-10 text-xs">
              {/* <div className="flex"> */}
              <div className="flex ">
                <div>
                  {/* Step Titles */}
                  {stepTitles.map((step, key) => {
                    return (
                      <div key={key}>
                        <div>
                          <div
                            onClick={(event) =>
                              handleClickStepTitles(event, key)
                            }
                            className="px-4 py-2 mt-4 ml-16 shadow-xl w-fit bg-blue-200 rounded-2xl text-[10px]"
                          >
                            <p>{stepTitles[key].title}</p>
                          </div>
                        </div> 
                      </div>
                    );
                  })}
                </div>
                <div className="mt-16">
                  {/* Steps */}
                  {steps.map((step, key) => {
                    return (
                      <div
                        key={key}
                        onClick={(event) => handleClickStep(event, key)}
                      >
                        <div
                          className={classNames(
                            colorSwitch ? "bg-white" : "bg-blue-700",
                            "px-16 py-2 mt-6 ml-4 text-gray-400 shadow-lg w-fit rounded-2xl"
                          )}
                        >
                          {steps[key].title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                props.changePhase(props.phase);
              }}
            >
              <ChevronDoubleDownIcon className="w-10 h-10 mt-40 font-light text-black stroke-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepsForOnboardComponent;
