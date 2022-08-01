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
  // const [phase, setPhase] = useState(0);
  const [phase, setPhase] = useState(3);
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
  // const budget = useSelector(
  //   (state) => state.projectInspect.budget.totalBudget
  // );

  // const dispatch = useDispatch();

  const handleChange = (e, phaseNow, changeField) => {
    let newArr = [...questions];
    newArr[phaseNow][changeField] = e.target.value;
    setQuestions(newArr);
    // console.log("questions", questions);
  };

  const submitReply = () => {
    const params = [
      { _id: _id, title: questions[0].reply },
      { _id: _id, description: questions[1].reply },
      {
        _id: _id,
        budget: {
          totalBudget: questions[2].budget.toString(),
          token: "",
          perHour: "",
          returnBudget: true,
        },
        dates: {
          kickOff: questions[2].kickoffDate,
          complition: questions[2].wrapUpDate,
          returnDates: true,
        },
      },

      // {
      //   _id: _id,
      //   kickoffDate: questions[2].kickoffDate,
      //   wrapUpDate: questions[2].wrapUpDate,
      //   notesAndJustification: questions[2].notesAndJustification,
      // },
      {
        _id: _id,
        collaborationLinks: [
          {
            title: "Twitter",
            link: questions[3].link_1,
          },
          {
            title: "GitHub",
            link: questions[3].link_2,
          },
          {
            title: "Discord",
            link: questions[3].link_3,
          },
          {
            title: "Notion",
            link: questions[3].link_4,
          },
          {
            title: "Telegram",
            link: questions[3].link_5,
          },
        ],
        returnCollaborationLinks: true,
      },
    ];

    // you can remove this :)
    // const sm ={
    //   twitter: questions[3].link_1,
    //   GitHub: questions[3].link_2,
    //   Discord: questions[3].link_3,
    //   Notion: questions[3].link_4,
    //   Telegram: questions[3].link_5,
    // }

    // const _params = {
    //   collaborationLinks:[
    //     {
    //       title: "Twitter",
    //       link:sm.twitter
    //     }
    //   ]
    // }

    console.log("questions", questions);
    console.log("params from index.....", params);
    console.log("params from index.....", params[phase]);
    // console.log("params.budget from index", params.budget);
    // console.log("params.budget from index", params.budget);
    // console.log("collaborationLinks", params.collaborationLinks);
    // console.log(
    //   "params.budget.totalBudget from index",
    //   params.budget.totalBudget
    // );
    // dispatch(updateProject(params[phase]));
  };

  //Testing\\

  // useEffect(() => {
  //   const params = {
  //     returnMembers: false,
  //   }

  //   dispatch(findSkills(params));
  // }, []);

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
          _id = {_id}
        />
      ) : phase == 2 ? (
        <GreenBudgetForm
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          submitReply={submitReply}
          _id = {_id}
        />
      ) : phase == 3 ? (
        <ColabEnvComponent
          handleChange={handleChange}
          questions={questions[phase]}
          changePhase={changePhase}
          phase={phase}
        />
      ) : phase == 4 ? (
        <StepsForOnboardComponent
          handleChange={handleChange}
          changePhase={changePhase}
          phase={phase}
        />
      ) : phase == 5 ? (
        <ProjectBoard
          handleChange={handleChange}
          changePhase={changePhase}
          phase={phase}
          projectTitle={title}
          description={description}
          budget={budget}
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
