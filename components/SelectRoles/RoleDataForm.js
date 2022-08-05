import { useCallback } from "react";
import SkillSelectorLevel from "../skill/SkillSelectorLevel";
import Selector from "../Selector";
import SalaryRange from "./SalaryRange";

const periods = ["week", "month"];

export default function RoleDataForm({
  role,
  saveRoleCallback,
  setRoleCallback,
}) {
  const setSkillsCallback = useCallback(async (item) => {
    setRoleCallback({ ...role, skills: item });
  }, []);

  // const setRoleDataCallback = useCallback(async (item) => {
  //   setRoleCallback({ ...role, salaryRange: item });
  // }, []);

  return (
    <div>
      <h3>here goes the form</h3>
      <input
        type="text"
        name="title"
        defaultValue={role.title != "New Role" ? role.title : ""}
        placeholder={role.title === "New Role" ? role.title : "Role Title"}
        className="py-2 px-4 block w-1/2 mx-auto shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-full mb-4 border border-gray-300"
        onChange={(e) => {
          setRoleCallback({
            ...role,
            title: e.target.value,
          });
        }}
      />
      <section className="grid grid-cols-2">
        <div className="col-span-1 pr-2">
          <textarea
            defaultValue={role.description}
            placeholder="Description"
            rows={4}
            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md mb-3"
            onChange={(e) =>
              setRoleCallback({ ...role, description: e.target.value })
            }
          />
          <div className="w-1/2 inline-block pr-2">
            <input
              type="number"
              min="0"
              placeholder="Hours"
              onChange={(e) => {
                setRoleCallback({
                  ...role,
                  hours: Number(e.target.value),
                });
              }}
              className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-full"
            ></input>
          </div>
          <div className="w-1/2 inline-block pl-1">
            <Selector
              setDataCallback={({ period }) => {
                setRoleCallback({ ...role, period: period });
              }}
              name="period"
              options={periods}
              placeholder="week/month"
            />
          </div>
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
        disabled={false}
        onClick={() => {
          saveRoleCallback(role);
        }}
      >
        Save Role
      </button>
    </div>
  );
}
