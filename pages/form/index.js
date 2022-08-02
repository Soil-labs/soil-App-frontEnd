import FormComponent from "../../components/TypeFormLikePage/FormComponent";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findMember } from "../../redux/slices/memberSlice";
import { updateProject, findProject } from "../../redux/slices/projectSlice";
import { findAllProjects } from "../../redux/slices/projectsSlice";
import { findSkill, findAllSkillNames } from "../../redux/slices/skillSlice";
import { findSkills } from "../../redux/slices/skillsSlice";
import { findUser } from "../../redux/slices/userInspectSlice";
import { findAllUsers } from "../../redux/slices/usersInspectSlice";
import GreenBudgetForm from "../../components/TypeFormLikePage/BudgetComponent";
import ScopeRolesComponent from "../../components/TypeFormLikePage/ScopeRolesComponent";
import GeneralGreenFromComponent from "../../components/GenralComponents/GeneralGreenFromComponent";
import RoleComponent from "../../components/TypeFormLikePage/RoleComponent";
import ColabEnvComponent from "../../components/TypeFormLikePage/ColabEnvComponent";
import StepsForOnboardComponent from "../../components/TypeFormLikePage/StepsForOnboardComponent";
import ProjectBoard from "../../components/ProjectComponent";
import YouDidItComponet from "../../components/TypeFormLikePage/YouDidItComponet";
import DescpitionComponent from "../../components/TypeFormLikePage/descpitionComponent";

function Form() {
  const [phase, setPhase] = useState(0);
  // const [phase, setPhase] = useState(4);
  const [questions, setQuestions] = useState([
    {
      title: "What’s the tilte of the new project?",
      description: "description 1",
      reply: "",
    },
    {
      title: "Description of the new project?",
      description:
        "Key info on what will make the filling curcial: for ex - great titles are  short & descriptive bla bla",
      reply: "",
    },
    {
      title: "BUDGET APPLICATION",
      budget: "",
      // kickoffDate: "",
      // wrapUpDate: "",
      // notesAndJustification: "",
    },
    {
      link_1: "",
      link_2: "",
      link_3: "",
      link_4: "",
      link_5: "",
    },
  ]);

  const changePhase = (phaseNow) => {
    // if (questions.length - 1 > phaseNow) {
    if (phaseNow <= 5) {
      setPhase((phaseNow += 1));
      // submitReply();
    }
    // submitReply();
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

  // const dispatch = useDispatch();

  const handleChange = (e, phaseNow, changeField) => {
    let newArr = [...questions];
    newArr[phaseNow][changeField] = e.target.value;
    setQuestions(newArr);
    // console.log("questions", questions);
  };

  

  return (
    <>
      {phase == 0 ? (
        <FormComponent
          fieldTitle="What’s the tilte of the new project?"
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          // submitReply={submitReply}
        />
      ) : phase == 1 ? (
        <DescpitionComponent
          fieldTitle="Description of the new project?"
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          // submitReply={submitReply}
          _id={_id}
        />
      ) : phase == 2 ? (
        <GreenBudgetForm
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
     
          _id={_id}
        />
      ) : phase == 3 ? (
        <ColabEnvComponent
          handleChange={handleChange}
          questions={questions[phase]}
          changePhase={changePhase}
          phase={phase}
          _id={_id}
        />
      ) : phase == 4 ? (
        <StepsForOnboardComponent
          handleChange={handleChange}
          changePhase={changePhase}
          phase={phase}
          _id={_id}
        />
      ) : phase == 5 ? (
        <ProjectBoard
          handleChange={handleChange}
          changePhase={changePhase}
          phase={phase}
          projectTitle={title}
          description={description}
          budget={budget}
          links={links}
          dates={dates}
          stepsJoinProject={stepsJoinProject}
          _id={_id}
        />
      ) : phase == 6 ? (
        <YouDidItComponet />
      ) : (
        phase
      )}

      {/* <ScopeRolesComponent/> */}
      {/* <GeneralGreenFromComponent/> */}
      {/* <RoleComponent
      skills = {skills}
       /> */}
      {/* <ColabEnvComponent/> */}
      {/* <StepsForOnboardComponent/> */}
    </>
  );
}

export default Form;

// bash gitBash/
