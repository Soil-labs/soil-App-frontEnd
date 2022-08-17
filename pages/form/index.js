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

function Form() {
  const [phase, setPhase] = useState(0);

  const changePhase = (phaseNow) => {
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

    <>
      {phase == 0 ? (
        <TitleComponent changePhase={changePhase} phase={phase} />
      ) : phase == 1 ? (
        <ProjectSelectRoles changePhase={changePhase} phase={phase} _id={_id} />
      ) : phase == 2 ? (
        <YouDidItComponet />
      ) : (
        phase
      )}
    </>
  );
}

export default Form;

// bash gitBash/
