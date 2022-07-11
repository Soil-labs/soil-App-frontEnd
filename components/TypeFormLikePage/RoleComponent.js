import React from "react";
import {
  ChevronDoubleDownIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
import DropdownHoursComponent from "../DropdownHoursComponent";
import DropdownPerComponent from "../DropdownPerComponent";

function RoleComponent(props) {
  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <div className="flex items-center space-x-20">
          <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
            <div className="flex flex-col items-center">
              {/* Arrows */}
              <div className="flex justify-between items-center w-[578px] ">
                <button>
                  <ArrowNarrowLeftIcon className="h-[44px]" />
                </button>
                <div>
                  <p>1/6</p>
                </div>
                <button>
                  <ArrowNarrowRightIcon className="h-[44px]" />
                </button>
              </div>

              <div className="flex items-end space-x-14">
                {/* Avatar + Roletype(dynamic) */}
                <div className=" flex items-center space-x-4">
                  <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <div className="rounded-2xl bg-white w-[187px] h-[48px] items-center flex justify-center">
                    <p className="text-center text-gray-500 text-xl">
                      ROLETYPE
                    </p>
                  </div>
                </div>
                {/* Dropdowns for hours per... */}
                <div className="flex space-x-6">
                  <DropdownHoursComponent />
                  <DropdownPerComponent />
                </div>
              </div>

              {/* The Meat of the page goes here */}
              {/* <button
                onClick={() => {
                  props.changePhase(props.phase);
                }}
              >
                <ChevronDoubleDownIcon className="h-10 w-10 text-black mt-10 font-light stroke-1" />
              </button> */}
            </div>
          </div>

          <div className="w-[546px] h-[516px] bg-opacity-80 bg-soilGreen-50 rounded-2xl"></div>
        </div>
      </div>
    </>
  );
}

export default RoleComponent;
