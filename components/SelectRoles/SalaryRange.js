import { useEffect, useState } from "react";
import DropdownTokenComponent from "../DropdownTokenComponent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const buttons = ["Hourly", "Milestone", "On Delivery"];

export default function SalaryRange({ setRoleDataCallback }) {
  const [salaryRange, setSalaryRange] = useState({});
  const [buttonIsSelected, setButtonIsSelected] = useState();

  useEffect(() => {
    setRoleDataCallback(salaryRange);
  }, [salaryRange]);

  useEffect(() => {
    setRoleDataCallback({ ...salaryRange, payment: buttonIsSelected });
  }, [buttonIsSelected]);

  return (
    <>
      {/* Salary Range */}
      <div className="w-full h-[171px] bg-white rounded-2xl">
        <div className="pt-2 pl-4 mt-1 space-y-2">
          <p className="ml-1">SALARY RANGE</p>
          <div className="flex items-center space-x-2 ">
            <div className="w-20 mt-1">
              <input
                type="number"
                min="0"
                name="name"
                id="name"
                className="block w-full h-6 border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                // placeholder="0,0"
                onChange={(e) =>
                  setSalaryRange({ ...salaryRange, min: e.target.value })
                }
              />
            </div>
            <div>
              <span>-</span>
            </div>
            <div className="w-20 mt-1">
              <input
                type="number"
                name="name"
                id="name"
                className="block w-full h-6 text-sm border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                // placeholder="999,999"
                onChange={(e) =>
                  setSalaryRange({ ...salaryRange, max: e.target.value })
                }
              />
            </div>
            <DropdownTokenComponent
              setValueCallback={(e) => {
                return setSalaryRange({
                  ...salaryRange,
                  token: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="mt-6 ml-4 space-x-5">
          {buttons.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setButtonIsSelected(item.toLowerCase())}
              className={classNames(
                buttonIsSelected === item.toLowerCase()
                  ? "bg-soilGreen-70 text-white"
                  : "bg-indigo-100 hover:bg-indigo-200 text-indigo-700",
                "inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded"
              )}
            >
              {item}
            </button>
          ))}
          {/* <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Milestone
          </button>
          <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            On Delivery
          </button> */}
        </div>
      </div>
    </>
  );
}
