import SkillSelector from "../skill/SkillSelector";
import { useCallback } from "react";

export default function RoleDataForm({
  role,
  saveRoleCallback,
  setRoleCallback,
}) {
  const setSkillsCallback = useCallback(async (item) => {
    setRoleCallback({ ...role, skills: item });
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
        </div>

        <div className="col-span-1 pl-2">
          <SkillSelector
            key={role._id}
            setSkillsCallback={setSkillsCallback}
            value={role.skills}
            showSelected={true}
          />
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
