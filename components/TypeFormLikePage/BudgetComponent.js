import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../redux/slices/projectSlice";
import {
  CurrencyDollarIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";

const GreenBudgetForm = (props) => {
  const [budget, setBudget] = useState("");
  const [kickOff, setKickOff] = useState("");
  const [complition, setCompletion] = useState("");

  const dispatch = useDispatch();

  const handleChangePhase = () => {
    const params = {
      _id: props._id,
      budget: {
        totalBudget: budget.toString(),
        token: "",
        perHour: "",
      },
      returnBudget: true,
      dates: {
        kickOff: kickOff,
        complition: complition,
      },
      returnDates: true,
      returnBudget: true,
      returnCollaborationLinks: true,
    };
    console.log("params from budget child", params);
    dispatch(updateProject(params));
    props.changePhase(props.phase);
  };

  return (
    <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="w-[590px] h-[70px] bg-white mt-20 text-4xl shadow-md rounded-2xl flex items-center justify-center">
          <p className="">BUDGET APPLICATION</p>
        </div>
        {/* Budget input fields + TokenInfo */}
        <div className="flex items-end space-x-52 mt-24">
          {/* Input fields */}
          <div className="space-y-3">
            {/* Budget Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Budget
              </label>

              <div className="mt-1 relative rounded-2xl shadow-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CurrencyDollarIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  onChange={(e) => {
                    setBudget(e.target.value);
                  }}
                  type="number"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
        pl-10 sm:text-sm border-gray-300 rounded-2xl"
                  // placeholder=""
                />
              </div>
            </div>
            {/* Kickoff Date Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kickoff Date
              </label>

              <div className="mt-1 relative rounded-2xl shadow-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TrendingUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  onChange={(e) => {
                    setKickOff(e.target.value);
                  }}
                  type="date"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
                       pl-10 sm:text-sm border-gray-300 rounded-2xl"
                  placeholder="KICK OFF DATE"
                />
              </div>
            </div>
            {/* Whap up date Date Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Whrap up date
              </label>

              <div className="mt-1 relative rounded-2xl shadow-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TrendingDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  onChange={(e) => {
                    setCompletion(e.target.value);
                  }}
                  type="date"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
     pl-10 sm:text-sm border-gray-300 rounded-2xl"
                  placeholder="WRAP UP DATE"
                />
              </div>
            </div>
          </div>
          {/* Token info */}
          <div className="w-[190px] h-[186px] rounded-2xl bg-white shadow-md text-center ">
            <p className="mt-2">TOKEN INFO </p>
          </div>
        </div>
        {/* Notes Text Input field */}
        <div className="w-[590px] mt-20">
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Notes & business justification
            </label>
            <div className="mt-1">
              <textarea
                rows={10}
                name="comment"
                onChange={(e) =>
                  props.handleChange(e, props.phase, "notesAndJustification")
                }
                id="comment"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl"
                defaultValue={""}
                placeholder="Write text here .........................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            handleChangePhase();
          }}
        >
          <ChevronDoubleDownIcon className="h-10 w-10 text-black mt-10 font-light stroke-1" />
        </button>
      </div>
    </div>
  );
};
function BudgetComponent(props) {
  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <GreenBudgetForm {...props} />
      </div>
    </>
  );
}

export default BudgetComponent;
