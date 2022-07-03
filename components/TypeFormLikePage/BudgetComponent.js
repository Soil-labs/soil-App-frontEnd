import React from "react";
import {
  CurrencyDollarIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "@heroicons/react/solid";

function BudgetComponent() {
  return (
    <div className="space-y-4">
      {/* Budget Input Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Budget
        </label>

        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CurrencyDollarIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="number"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
            pl-10 sm:text-sm border-gray-300 rounded-md"
            // placeholder="BUDGET"
          />
        </div>
      </div>
      {/* Kickoff Date Input Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kickoff Date
        </label>

        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <TrendingUpIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="date"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
         pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="KICK OFF DATE"
          />
        </div>
      </div>
      {/* Whap up date Date Input Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Whrap up date
        </label>

        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <TrendingDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="date"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-48
         pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="WRAP UP DATE"
          />
        </div>
      </div>
    </div>
  );
}

export default BudgetComponent;
