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

function Form() {
  // const [phase, setPhase] = useState(0);
  const [phase, setPhase] = useState(0);
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
  ]);

  const changePhase = (phaseNow) => {
    if (questions.length - 1 > phaseNow) {
      setPhase((phaseNow += 1));
      submitReply();
    } 
    submitReply();
  
  };

  const skills = useSelector((state) => state.skillsInspect.skillsInfo);
  const _id = useSelector((state) => state.projectInspect._id);


  const dispatch = useDispatch();

  const handleChange = (e, phaseNow, changeField) => {
    let newArr = [...questions];
    newArr[phaseNow][changeField] = e.target.value;
    setQuestions(newArr);
  };

  const submitReply = () => {

    
    const params = {
      _id: _id,
      title: questions[0].reply,
      description: questions[1].reply,
      budget:  {
        totalBudget: questions[2].budget.toString(),
        token: "",
        perHour: "",
      },
      dates: {
        kickOff: questions[2].kickoffDate,
        complition: questions[2].wrapUpDate,
      },
      returnBudget: true, 
      // kickoffDate: questions[2].kickoffDate,
      // wrapUpDate: questions[2].wrapUpDate,
      // notesAndJustification: questions[2].notesAndJustification,
    };

    console.log("questions", questions)
    console.log("params from index.....",params)
    console.log("params.budget from index",params.budget)
    console.log("budget form index questions", questions[2].budget)
    console.log("params.budget.totalBudget from index", params.budget.totalBudget)
    dispatch(updateProject(params));
  };

  //Testing\\

  useEffect(() => {
    const params = {
      returnMembers: false,
    }
    
    dispatch(findSkills(params));
  }, []);

  // useEffect(() => {
  //   const lookForProject = () => {
  //     const field = {
  //       _id: "62c0dac5a38139000437e607"
  //     };

  //     dispatch(findProject(field))
  //   }
  //   lookForProject()
  // }, [phase])

  // useEffect(() => {
  //   let field;

  //   field = {
  //     _id: "908392557258604544",
  //   };

  //   // dispatch(findMember(field))
  //   console.log("we are in the useEffect");

  //   // field = {
  //   //   tagName: "coding"
  //   // };

  //   // console.log("findSkill = ",field )

  //   // dispatch(findSkill(field))

  //   field = {
  //     _id: "908392557258604544",
  //   };

  //   console.log("field = ", field);

  //   // dispatch(findUser(field));

  //   // dispatch(findAllUsers(field))
  // }, []);

  return (
    <>
      {phase <= 1 ? (
        <FormComponent
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          submitReply={submitReply}
        />
      ) : (
        <GreenBudgetForm
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          submitReply={submitReply}
        />
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
