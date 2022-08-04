import Layout from "../../../components/layout/Layout";
import RoleCard from "../../../components/SelectRoles/RoleCard";
import { useState, useCallback } from "react";
import Selector from "../../../components/SelectRoles/Selector";
import RoleDataForm from "../../../components/SelectRoles/RoleDataForm";

const mockData = {
  roles: [
    { name: "FrontEnd Developer", _id: "1" },
    { name: "Blockchain Developer", _id: "2" },
  ],
};

function ProjectSelectRoles() {
  const [roles, setRoles] = useState(mockData.roles);
  const [pendingRoles, setPendingRoles] = useState([]);
  const [inputRole, setInputRole] = useState({});
  const [currentRoleIndex, setCurrentRoleIndex] = useState(null);
  const [savedRoles, setSavedRoles] = useState([]);

  const setRoleCallback = useCallback((item) => {
    setInputRole(item);
  }, []);

  const saveRoleCallback = useCallback(
    async (item) => {
      await setSavedRoles([...savedRoles, item]);
      const newPendingRoles = pendingRoles.filter(
        (role, index) => index !== currentRoleIndex
      );
      await setPendingRoles(newPendingRoles);
      await setCurrentRoleIndex(null);
    },
    [pendingRoles, currentRoleIndex, savedRoles]
  );

  const handleAddRole = (e) => {
    setPendingRoles([...pendingRoles, inputRole]);
    setInputRole({});
  };

  return (
    <div className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5">
      <div className="col-span-1">
        <h3>SCOPE YOUR ROLES</h3>
        <div>
          {pendingRoles.map((role, index) => (
            <div
              key={index}
              onClick={() => setCurrentRoleIndex(index)}
              className="cursor-pointer"
            >
              <RoleCard role={role} />
            </div>
          ))}
          <Selector
            key={inputRole}
            name="name"
            options={roles}
            setDataCallback={setRoleCallback}
            value={inputRole}
          />
          <button disabled={!inputRole._id} onClick={handleAddRole}>
            Add
          </button>
        </div>
      </div>
      <div className="col-span-3">
        {currentRoleIndex >= 0 && pendingRoles[currentRoleIndex] && (
          <RoleDataForm
            role={pendingRoles[currentRoleIndex]}
            key={`${pendingRoles[currentRoleIndex]._id}${currentRoleIndex}`}
            saveRoleCallback={saveRoleCallback}
          />
        )}
      </div>
      <div className="col-span-1">{JSON.stringify(savedRoles)}</div>
      <p>{JSON.stringify(pendingRoles)}</p>
    </div>
  );
}

ProjectSelectRoles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectSelectRoles;
