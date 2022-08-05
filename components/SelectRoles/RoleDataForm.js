import { useCallback } from "react";
import SkillSelector from "../skill/SkillSelector";
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

  const setRoleDataCallback = useCallback(async (item) => {
    setRoleCallback({ ...role, salaryRange: item });
  }, []);

  return (
    <div>
      <h3>here goes the form</h3>
      <p>{role.title}</p>
      <section className="grid grid-cols-2">
        <div className="col-span-1 pr-2">
          <textarea
            defaultValue={role.description}
            rows={4}
            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
            onChange={(e) =>
              setRoleCallback({ ...role, description: e.target.value })
            }
          />
          <SalaryRange setRoleDataCallback={setRoleDataCallback} />
        </div>

        <div className="col-span-1 pl-2">
          <SkillSelector
            key={role._id}
            setSkillsCallback={setSkillsCallback}
            value={role.skills}
            showSelected={true}
          />
          <div className="w-1/2 inline-block">
            <input
              type="number"
              min="0"
              onChange={(e) => {
                setRoleCallback({
                  ...role,
                  hours: Number(e.target.value),
                });
              }}
              className="block w-1/2 mr-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-full"
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
        </div>
      </section>
      <button
        onClick={() => {
          saveRoleCallback(role);
        }}
      >
        Save Role
      </button>
    </div>
  );
}
