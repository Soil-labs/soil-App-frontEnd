import { useCallback } from "react";
import SkillSelectorLevel from "../skill/SkillSelectorLevel";
import Selector from "../Selector";
import SalaryRange from "./SalaryRange";
import { CheckIcon } from "@heroicons/react/solid";

const periods = ["week", "month"];

export default function RoleDataForm({
  role,
  saveRoleCallback,
  setRoleCallback,
  submiting
}) {
  const setSkillsCallback = useCallback(async (item) => {
    setRoleCallback({ ...role, skills: item });
  }, []);

  // const setRoleDataCallback = useCallback(async (item) => {
  //   setRoleCallback({ ...role, salaryRange: item });
  // }, []);

  return (
    <div className="bg-white relative rounded-md border-[2px] border-green-500 flex flex-col justify-center items-center gap-10 p-10">
      <input
        type="text"
        name="title"
        Value={role.title != "New Role" ? role.title : ""}
        placeholder={role.title === "New Role" ? role.title : "Role Title"}
        className="py-2 px-4 block w-1/2 mx-auto shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full mb-4 border border-gray-300"
        onChange={(e) => setRoleCallback({ ...role, title: e.target.value })}
      />
      {/* <p className="bg-yellow-200 rounded-full text-xl font-semibold uppercase w-max px-4 py-1">
        {role.title ? role.title : "Your role"}
      </p> */}
      <section className="grid grid-cols-2">
        <div className="col-span-1 pr-2 ">
          <div className="shadow-md rounded-lg p-2 mb-3">
            <p className="font-semibold">Candidate Description</p>
            <textarea
              defaultValue={role.description}
              placeholder="Description"
              rows={4}
              className="py-3 border-none block w-full focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md mb-3"
              onChange={(e) =>
                setRoleCallback({ ...role, description: e.target.value })
              }
            />
          </div>

          <div className="w-full inline-block pr-2">
            <input
              type="number"
              min={0}
              placeholder="Hours"
              onChange={(e) => {
                setRoleCallback({
                  ...role,
                  hoursPerWeek: Number(e.target.value),
                });
              }}
              className="inline-block border-none w-1/3 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-full"
            ></input>
            <span className="ml-2">hours/week</span>
          </div>
          {/* MVP not able to select if week or months */}
          {/* <div className="w-1/2 inline-block pl-1">
            <Selector
              setDataCallback={({ period }) => {
                setRoleCallback({ ...role, period: period });
              }}
              name="period"
              options={periods}
              placeholder="week/month"
            />
          </div> */}
          {/* <SalaryRange setRoleDataCallback={setRoleDataCallback} /> */}
        </div>

        <div className="col-span-1 pl-2">
          <SkillSelectorLevel
            key={role._id}
            setSkillsCallback={setSkillsCallback}
            value={role.skills}
            showSelected={true}
            skillLevelPicker={true}
          />
        </div>
      </section>
      <button
        disabled={submiting}
        onClick={() => {
          saveRoleCallback(role);
        }}
        className="absolute top-5 right-5 rounded-md border-[1px] border-black px-2 py-0.5 disabled:border-gray-400 disabled:text-gray-400"
      >
        <CheckIcon width={20} className="inline -mt-1 disabled:bg-gray-400" /> COMPLETE
      </button>
    </div>
  );
}
