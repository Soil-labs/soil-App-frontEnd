import React from "react";
import {
  CurrencyDollarIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";

const GreenBudgetForm = () => {
  return (
    <div className="w-[679px] h-[896px] bg-soilGreen-50 rounded-2xl">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="w-[590px] h-[70px] bg-white mt-20 text-4xl rounded-2xl flex items-center justify-center">
          <p className="">BUDGET APPLICATION</p>
        </div>
        {/* Budget input fields + TokenInfo */}
        <div className="flex items-end space-x-52 mt-24">
          {/* Input fields */}
          <div className="space-y-3">
            {/* Budget Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Budget
              </label>

              <div className="mt-1 relative rounded-2xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CurrencyDollarIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="number"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
        pl-10 sm:text-sm border-gray-300 rounded-2xl"
                  // placeholder="BUDGET"
                />
              </div>
            </div>
            {/* Kickoff Date Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kickoff Date
              </label>

              <div className="mt-1 relative rounded-2xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TrendingUpIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
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

              <div className="mt-1 relative rounded-2xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TrendingDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="date"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
     pl-10 sm:text-sm border-gray-300 rounded-2xl"
                  placeholder="WRAP UP DATE"
                />
              </div>
            </div>
          </div>
          {/* Token info */}
          <div className="w-[190px] h-[186px] rounded-2xl bg-white text-center ">
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
                id="comment"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-2xl"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <button>
          <ChevronDoubleDownIcon className="h-10 w-10 text-black mt-10 font-light stroke-1" />
        </button>
      </div>
    </div>
  );
};
function BudgetComponent() {
  return (
    <>
      <div class="grid h-screen place-items-center">
        <GreenBudgetForm  />
      </div>
    </>
  );
}

export default BudgetComponent;
