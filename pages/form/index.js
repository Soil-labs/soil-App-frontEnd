import FormComponent from "../../components/TypeFormLikePage/FormComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
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
import HeaderNew from "../../components/layout/HeaderNew";
import ProgressBar from "../../components/layout/ProgressBar";
import { useSession } from "next-auth/react";

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
    <div className="w-full h-full grid grid-cols-4">
      <div className="col-span-1"></div>
      {session ? (
        <div className="col-span-2 pt-[60px] pb-[33px] rounded-2xl bg-white shadow-lg px-4">
          {/* <div className="flex flex-col "> */}
          <ProgressBar numberofSteps={3} currentStep={phase + 1} />

          {phase == 0 ? (
            <TitleComponent />
          ) : phase == 1 ? (
            <DescriptionComponent
              fieldTitle="Description of the new project?"
              changePhase={changePhase}
              changePhaseBack={changePhaseBack}
              phase={phase}
              _id={_id}
            />
          ) : phase == 2 ? (
            <ProjectSelectRoles
              changePhase={changePhase}
              phase={phase}
              _id={_id}
            />
          ) : phase == 3 ? (
            <YouDidItComponet />
          ) : (
            phase
          )}
          {
            <div>
              <NextButton
                className="absolute bottom-10 right-10"
                handleChangePhase={() => changePhase(phase)}
              />
              {phase > 1 && (
                <PreviousButton
                  handleChangePhaseBack={() => changePhaseBack(phase)}
                  className="absolute bottom-10 left-10"
                />
              )}
            </div>
          }
          {/* </div> */}
        </div>
      ) : (
        <div className="mt-52 w-full text-[30px] font-black flex justify-center items-center">
          Login to continue...
        </div>
      )}
    </div>
  );
}

Form.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Form;

// bash gitBash/
