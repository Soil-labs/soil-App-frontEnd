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
      <SkillSelector
        key={role._id}
        setSkillsCallback={setSkillsCallback}
        value={role.skills}
        showSelected={true}
      />
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
