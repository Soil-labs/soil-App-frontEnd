import Layout from "../../../components/layout/Layout";
import RoleCard from "../../../components/SelectRoles/RoleCard";
import { useState, useCallback, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selector from "../../../components/SelectRoles/Selector";
import RoleDataForm from "../../../components/SelectRoles/RoleDataForm";
import { findRoleTemplates } from "../../../redux/slices/roleTemplatesSlice";
import { updateProject } from "../../../redux/slices/projectSlice";
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

  useEffect(() => {
    if (!savedRoles.length) return;
    const params = {
      role: savedRoles.map((role) => {
        return {
          ...role,
          skills: role.skills.map((skill) => {
            return skill.level
              ? { _id: skill._id, level: skill.level }
              : { _id: skill._id };
          }),
        };
      }),
      returnRole: true,
    };
    dispatch(updateProject(params));
  }, [savedRoles]);

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
              options={[...roles, { title: "New Role" }]}
              setDataCallback={setInputRoleCallback}
              value={inputRole}
            />
          )}
          <button disabled={!inputRole.title} onClick={handleAddRole}>
            Add Role
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
      <div className="col-span-1">
        {savedRoles.map((role, index) => (
          <RoleCard role={role} key={index} />
        ))}
      </div>
      {/* <p>{JSON.stringify(pendingRoles)}</p> */}
    </div>
  );
}

ProjectSelectRoles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectSelectRoles;
