import Layout from "../../../components/layout/Layout";
import RoleCard from "../../../components/SelectRoles/RoleCard";
import { useState, useCallback, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

import Selector from "../../../components/SelectRoles/Selector";
import RoleDataForm from "../../../components/SelectRoles/RoleDataForm";
import { findRoleTemplates } from "../../../redux/slices/roleTemplatesSlice";
import { findProject, updateProject } from "../../../redux/slices/projectSlice";
import { useRouter } from "next/router";
import NextButton from "../../../components/NextButton";
import PreviousButton from "../../../components/previousButton";
function ProjectSelectRoles(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const roles = useSelector((state) => state.roleTemplates.roleTemplates);
  const project = useSelector((state) => state.projectInspect);
  const [pendingRoles, setPendingRoles] = useState([]);
  const [inputRole, setInputRole] = useState({});
  const [currentRoleIndex, setCurrentRoleIndex] = useState(null);
  const [savedRoles, setSavedRoles] = useState([]);
  const [submiting, setSubmiting] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [skillSelected, setSkillSelected] = useState(false);

  const setInputRoleCallback = useCallback((item) => {
    setInputRole(item);
  }, []);

  console.log("saved roles", savedRoles)
  const saveRoleCallback = useCallback(

    async (item) => {
      if (submiting) return;
      item._id = null;
      const params = {
        _id: project._id,
        role: [...savedRoles, item].map((role) => {
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
        returnDates: true,
        returnBudget: true,
        returnCollaborationLinks: true,
      };

      setSubmiting(true);
      const { type } = await dispatch(updateProject(params));
      setSubmiting(false);

      console.log("saved roles", savedRoles);
      if (type.includes("rejected")) {
        setSaveError(true);
        return;
      }

      // await setSavedRoles([...savedRoles, item]);
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
  const handleChangePhase = () => {
    props.changePhase(props.phase);
  };

  const handleAddRole = (e) => {
    setPendingRoles([...pendingRoles, inputRole]);
    setInputRole({});
  };

  useLayoutEffect(() => {
    let params = {
      fields: {},
    };
    dispatch(findRoleTemplates(params));
    if (router.query.projectId) {
      params = {
        _id: router.query.projectId,
        returnRole: true,
      };
      dispatch(findProject(params));
    }
  }, [dispatch, router.query.projectId]);

  useEffect(() => {
    if (!project?.role?.length) return;
    setSavedRoles(project.role);
  }, [project]);

  useEffect(() => {
    if (saveError) setTimeout(() => setSaveError(false), 5000);
  }, [saveError]);

  return (
    <>
      {/* <div className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5"> */}
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-1 pt-12">
          {saveError && (
            <h4 className="p-2 mb-2 text-white bg-red-500 rounded-lg">
              User could not be saved
            </h4>
          )}
          <h3 className="mb-3 text-lg font-semibold">SCOPE YOUR ROLES</h3>
          <div className="">
            {pendingRoles.map((role, index) => (
              <div
                key={index}
                onClick={() => setCurrentRoleIndex(index)}
                className="cursor-pointer"
              >
                <RoleCard
                  setRoleCallback={setRoleCallback}
                  currentRoleIndex={currentRoleIndex}
                  index={index}
                  highlighter={true}
                  role={role}
                />
              </div>
            ))}
            {/* this was added because I was not able to add a role without it. Will refactor it later */}
            {!!roles.length && (
              <Selector
                key={inputRole}
                name="title"
                options={[...roles, { title: "New Role" }]}
                setDataCallback={setInputRoleCallback}
                value={inputRole}
              />
            )}
            <button
              className="px-2 py-1 font-bold bg-green-400 rounded-sm"
              disabled={!inputRole.title}
              onClick={handleAddRole}
            >
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
              submiting={submiting}
              skillSelected={skillSelected}
              setSkillSelected={setSkillSelected}
            />
          )}
        </div>
        <div className="col-span-1 pt-12">
          <h3 className="mb-3 text-lg font-semibold">COMPLETED PROFILES</h3>
          {savedRoles.map((role, index) => (
            <RoleCard role={role} key={index} />
          ))}
        </div>
        {/* <p>{JSON.stringify(pendingRoles)}</p> */}
        {/* <button
      className=" mt-10 ml-[650px]"
        onClick={() => {
          handleChangePhase();
        }}
      >
        <ChevronDoubleDownIcon className="w-10 h-10 font-light text-black stroke-1 " />
      </button> */}
      <PreviousButton/>
      <NextButton
      handleChangePhase={handleChangePhase}
      />
      </div>

      
    </>
  );
}

ProjectSelectRoles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectSelectRoles;
