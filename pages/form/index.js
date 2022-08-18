import FormComponent from "../../components/TypeFormLikePage/FormComponent";
import { useState, useCallback, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GreenBudgetForm from "../../components/TypeFormLikePage/BudgetComponent";
import ScopeRolesComponent from "../../components/TypeFormLikePage/ScopeRolesComponent";
import GeneralGreenFromComponent from "../../components/GenralComponents/GeneralGreenFromComponent";
import RoleComponent from "../../components/TypeFormLikePage/RoleComponent";
import ColabEnvComponent from "../../components/TypeFormLikePage/ColabEnvComponent";
import StepsForOnboardComponent from "../../components/TypeFormLikePage/StepsForOnboardComponent";
import ProjectBoard from "../../components/ProjectComponent";
import YouDidItComponet from "../../components/TypeFormLikePage/YouDidItComponet";
import DescriptionComponent from "../../components/TypeFormLikePage/DescpitionComponent";
import ProjectSelectRoles from "../projects/[projectId]/select-roles";
import MainWhiteContainerLayout from "../../components/layout/FlowLayout";
import TitleComponent from "../../components/TypeFormLikePage/TitleComponent";
import BudgetComponentNew from "../../components/TypeFormLikePage/BudgetComponentNew";

import Layout from "../../components/layout/Layout";
import NextButton from "../../components/NextButton";
import PreviousButton from "../../components/PreviousButton";
import ProgressBar from "../../components/layout/ProgressBar";
import { useSession } from "next-auth/react";
import RoleDataForm from "../../components/SelectRoles/RoleDataForm";
import RoleCard from "../../components/SelectRoles/RoleCard";
import Selector from "../../components/SelectRoles/Selector";
import { useRouter } from "next/router";
import { findRoleTemplates } from "../../redux/slices/roleTemplatesSlice";
import { findProject, updateProject } from "../../redux/slices/projectSlice";
import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
function Form() {
  const [phase, setPhase] = useState(0);
  const { data: session } = useSession();

  const changePhase = (phaseNow) => {
    console.log("phase", phase);
    if (phaseNow <= 6) {
      setPhase((phaseNow += 1));
    }
  };

  const changePhaseBack = (phaseNow) => {
    console.log("phaseNow", phaseNow);
    if (phaseNow >= 0) {
      setPhase((phaseNow -= 1));
    }
  };

  const skills = useSelector((state) => state.skillsInspect.skillsInfo);
  const _id = useSelector((state) => state.projectInspect._id);
  const title = useSelector((state) => state.projectInspect.title);
  const description = useSelector((state) => state.projectInspect.description);
  const budget = useSelector(
    (state) => state.projectInspect.budget.totalBudget
  );
  const dates = useSelector((state) => state.projectInspect.dates);
  const links = useSelector((state) => state.projectInspect.links);
  const stepsJoinProject = useSelector((state) => state.projectInspect.steps);

  // all the select role properties and methods
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

  console.log("saved roles", savedRoles);
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
    if (changePhase && props.phase) props.changePhase(props.phase);
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
    // <>
    //   {/* <TitleComponent changePhase={changePhase} phase={phase} /> */}
    //   {phase == 0 ? (
    //     // <FormComponent
    //     //   fieldTitle="What’s the tilte of the new project?"
    //     //   changePhase={changePhase}
    //     //   phase={phase}
    //     //   // submitReply={submitReply}
    //     // />
    //     <TitleComponent changePhase={changePhase} phase={phase} />
    //   ) : phase == 1 ? (
    //     <DescriptionComponent
    //       fieldTitle="Description of the new project?"
    //       changePhase={changePhase}
    //       changePhaseBack={changePhaseBack}
    //       phase={phase}
    //       _id={_id}
    //     />
    //   ) : phase == 2 ? (
    //     <BudgetComponentNew changePhase={changePhase} phase={phase} _id={_id} />
    //   ) : phase == 3 ? (
    //     <ProjectSelectRoles changePhase={changePhase} phase={phase} _id={_id} />
    //   ) : phase == 4 ? (
    //     <ColabEnvComponent changePhase={changePhase} phase={phase} _id={_id} />
    //   ) : phase == 5 ? (
    //     <StepsForOnboardComponent
    //       changePhase={changePhase}
    //       phase={phase}
    //       _id={_id}
    //     />
    //   ) : phase == 6 ? (
    //     <ProjectBoard
    //       changePhase={changePhase}
    //       phase={phase}
    //       projectTitle={title}
    //       description={description}
    //       budget={budget}
    //       links={links}
    //       dates={dates}
    //       stepsJoinProject={stepsJoinProject}
    //       _id={_id}
    //     />
    //   ) : phase == 7 ? (
    //     <YouDidItComponet />
    //   ) : (
    //     phase
    //   )}

    //   {/* <ScopeRolesComponent/> */}
    //   {/* <GeneralGreenFromComponent/> */}
    //   {/* <RoleComponent
    //   skills = {skills}
    //    /> */}
    //   {/* <ColabEnvComponent/> */}
    //   {/* <StepsForOnboardComponent/> */}
    // </>

    // I removed the layout from every page because 1. it was not serving all pourposes & 2. It was re-rendering every time a new page was rendered 3. Miral was using it so I could not change anything
    // Added grid to keep the same sizings through all the steps and easy positioning side columns
    <div className="w-full h-screen -mt-[100px]">
      <div className="w-full h-full grid grid-cols-4 gap-3 pt-[100px] pb-[20px]">
        <div className="col-span-1 h-full overflow-auto">
          {phase == 2 ? (
            <div className="pt-12">
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
                    options={[{ title: "New Role" }, ...roles]}
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
          ) : null}
        </div>
        {session ? (
          <div
            className={`relative col-span-2 pt-[30px] pb-[30px] rounded-2xl bg-white shadow-lg px-4 h-full 
          ${
            currentRoleIndex !== null && phase === 2
              ? "border-[2px] border-green-500"
              : ""
          }
          `}
          >
            {/* <div className="flex flex-col "> */}
            {phase < 3 ? (
              <ProgressBar numberofSteps={3} currentStep={phase + 1} />
            ) : null}

            {phase == 0 ? (
              <TitleComponent changePhase={changePhase} phase={phase} />
            ) : phase == 1 ? (
              <DescriptionComponent
                fieldTitle="Description of the new project?"
                changePhase={changePhase}
                changePhaseBack={changePhaseBack}
                phase={phase}
                _id={_id}
              />
            ) : phase == 2 ? (
              <>
                {currentRoleIndex >= 0 && pendingRoles[currentRoleIndex] && (
                  <div className="h-5/6 overflow-y-scroll scrollbar-hide px-[25px]">
                    <RoleDataForm
                      role={pendingRoles[currentRoleIndex]}
                      key={`${pendingRoles[currentRoleIndex]._id}${currentRoleIndex}`}
                      setRoleCallback={setRoleCallback}
                      saveRoleCallback={saveRoleCallback}
                      submiting={submiting}
                      skillSelected={skillSelected}
                      setSkillSelected={setSkillSelected}
                    />
                  </div>
                )}
              </>
            ) : phase == 3 ? (
              <YouDidItComponet />
            ) : (
              phase
            )}
            {phase < 3 ? (
              <div>
                {phase == 2 && (
                  <NextButton
                    className="absolute bottom-7 right-7"
                    handleChangePhase={() => changePhase(phase)}
                  />
                )}
                {phase >= 1 && (
                  <PreviousButton
                    handleChangePhaseBack={() => changePhaseBack(phase)}
                    className="absolute bottom-7 left-7"
                  />
                )}
              </div>
            ) : (
              <div>
                <Link href="/champion-dashboard">
                  <div className="absolute bottom-7 right-7 w-fit">
                    <button
                      className={`w-[132px], h-[40px] py-[10py] px-[11px] bg-soilGreen-20 rounded-[6px]`}
                    >
                      <div className="flex">
                        <span>SEE DASHBOARD</span>
                        <ArrowSmRightIcon className="w-6" />
                      </div>
                    </button>
                  </div>
                </Link>
                {/* <Link href="/">
                  <button
                    className={`w-[132px], h-[40px] py-[10py] px-[11px] bg-soilGreen-20 rounded-[6px] absolute bottom-7 left-7`}
                  >
                    <div className="flex space-x-2">
                      <ArrowSmLeftIcon className="w-6 " />
                      <span>MAIN PAGE</span>
                    </div>
                  </button>
                </Link> */}
              </div>
            )}
            {/* </div> */}
          </div>
        ) : (
          <div className="mt-52 w-full text-[30px] font-black flex justify-center items-center">
            Login to continue...
          </div>
        )}
        <div className="col-span-1 h-full overflow-auto">
          {phase == 2 ? (
            <div className="pt-12">
              <h3 className="mb-3 text-lg font-semibold">COMPLETED PROFILES</h3>
              {savedRoles.map((role, index) => (
                <RoleCard role={role} key={index} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

Form.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Form;

// bash gitBash/
