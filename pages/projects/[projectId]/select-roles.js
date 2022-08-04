import Layout from "../../../components/layout/Layout";
import RoleCard from "../../../components/SelectRoles/RoleCard";
import { useState, useCallback, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selector from "../../../components/SelectRoles/Selector";
import RoleDataForm from "../../../components/SelectRoles/RoleDataForm";
import { findRoleTemplates } from "../../../redux/slices/roleTemplatesSlice";

function ProjectSelectRoles() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roleTemplates.roleTemplates);
  const [pendingRoles, setPendingRoles] = useState([]);
  const [inputRole, setInputRole] = useState({});
  const [currentRoleIndex, setCurrentRoleIndex] = useState(null);
  const [savedRoles, setSavedRoles] = useState([]);

  const setInputRoleCallback = useCallback((item) => {
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

  const setRoleCallback = useCallback(
    async (item) => {
      const newPendingRoles = [...pendingRoles];
      newPendingRoles[currentRoleIndex] = item;
      setPendingRoles(newPendingRoles);
    },
    [pendingRoles, currentRoleIndex]
  );

  const handleAddRole = (e) => {
    setPendingRoles([...pendingRoles, inputRole]);
    setInputRole({});
  };

  useLayoutEffect(() => {
    const params = {
      fields: {},
    };
    dispatch(findRoleTemplates(params));
  }, [dispatch]);

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
          {roles.length && (
            <Selector
              key={inputRole}
              name="title"
              options={roles}
              setDataCallback={setInputRoleCallback}
              value={inputRole}
            />
          )}
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
            setRoleCallback={setRoleCallback}
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
