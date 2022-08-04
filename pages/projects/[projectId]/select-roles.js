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

  const setRoleCallback = useCallback((item) => {
    console.log(item);
    setInputRole(item);
  }, []);

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
            <div key={index} onClick={() => setCurrentRoleIndex(index)}>
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
          <button onClick={handleAddRole}>Add</button>
        </div>
      </div>
      <div className="col-span-3">
        {currentRoleIndex >= 0 && (
          <RoleDataForm
            role={pendingRoles[currentRoleIndex]}
            key={pendingRoles[currentRoleIndex]._id}
          />
        )}
      </div>
      <div className="col-span-1"></div>
      <p>{JSON.stringify(pendingRoles)}</p>
    </div>
  );
}

ProjectSelectRoles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectSelectRoles;
