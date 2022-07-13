import React from "react";
import {
  ChevronDoubleDownIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
import DropdownHoursComponent from "../DropdownHoursComponent";
import DropdownPerComponent from "../DropdownPerComponent";
import Toggle from "../Toggle";
import ComboBoxSkillsComponent from "../ComboBoxSkillsComponent";

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
                <div className="flex items-center space-x-4 ">
                  <span className="inline-block overflow-hidden bg-gray-100 rounded-full h-14 w-14">
                    <svg
                      className="w-full h-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <div className="rounded-2xl bg-white w-[187px] h-[48px] items-center flex justify-center">
                    <p className="text-xl text-center text-gray-500">
                      ROLETYPE
                    </p>
                  </div>
                </div>
              </div>
              {/* Role desciption input field */}
              <div className="w-[590px] mt-20">
                <div>
                  <div className="mt-1">
                    <textarea
                      rows={10}
                      name="comment"
                      // onChange={(e) =>
                      //   props.handleChange(e, props.phase, "notesAndJustification")
                      //}
                      id="comment"
                      className="block w-full border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl"
                      defaultValue={""}
                      placeholder="Role Description .........................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8 ">
                <div className="w-[297px] h-[171px] bg-white rounded-2xl">
                  <div className="flex flex-col items-end mt-4 mr-8 space-y-8"></div>
                </div>
                <div className="w-[297px] h-[171px] space-y-4 flex flex-col items-center ">
                  {/* Dropdowns for hours per... */}
                  <div className="rounded-2xl bg-white w-[297px] h-[48px] items-center flex justify-center">
                    <p className="text-xl text-center text-gray-500">
                      LIFECYCLE
                    </p>
                  </div>
                  <div className="flex space-x-6">
                    <DropdownHoursComponent />
                    <DropdownPerComponent />
                  </div>

                  <div className="rounded-2xl bg-white w-[297px] h-[48px] items-center flex justify-center">
                    <p className="text-xl text-center text-gray-500"></p>
                  </div>
                </div>
                <div className="w-[297px] h-[171px] bg-white rounded-2xl"></div>
                <div className="w-[297px] h-[171px] bg-white rounded-2xl">
                  <div className="pt-2 pl-6 space-y-1">
                    <p className ="ml-1">SALARY RANGE</p>
                    <div className="flex items-center space-x-3 ">
                      <div className="w-20 mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full h-6 px-4 border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="0,0"
                        />
                      </div>
                      <div>
                        <span>-</span>
                      </div>
                      <div className="w-20 mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full h-6 px-4 border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="9,999"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Meat of the page goes here */}
              {/* <button
                onClick={() => {
                  props.changePhase(props.phase);
                }}
              >
                <ChevronDoubleDownIcon className="w-10 h-10 mt-10 font-light text-black stroke-1" />
              </button> */}
            </div>
          </div>

          <div className="w-[546px] h-[516px] bg-opacity-80 bg-soilGreen-50 rounded-2xl flex flex-col items-center">
            <ComboBoxSkillsComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleComponent;
