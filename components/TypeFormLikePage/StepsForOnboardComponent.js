import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../redux/slices/projectSlice";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function StepsForOnboardComponent(props) {
  const [title, setTitle] = useState();
  const [colorSwitch, setColorSwitch] = useState(true);
  
  const dispatch = useDispatch();

  const handleChangePhase = () => {
    let arr
    const finalArray = steps.map(function (obj) {
      let arr = obj.title;
    });
    // const stepsArr = Object.values(steps)
    // console.log("Object.values(steps)",Object.keys(steps))
    console.log("arr",arr)
    const params = {
    _id: props._id,
    stepsJoinProject: arr
    }
    dispatch(updateProject(params));
    console.log("params from Steps child", params)
    props.changePhase(props.phase);
    console.log("steps.title",steps)
  };
  

  const [steps, setSteps] = useState([
    { title: "Step 1" },
    { title: "Step 2" },
    { title: "Step 3" },
    { title: " Step 4" },
  ]);

  const [stepTitles, setStepTiles] = useState([
    { title: "JOIN CHANNEL" },
    { title: "MINT NFT" },
    { title: "WARM WELCOME" },
    { title: "CREATE DEWORK" },
    { title: "CREATE DEWORK " },
    { title: "SIGN TRANSACTION" },
    { title: "MESSAGE CANDIDATE" },
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
                handleChangePhase();
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
