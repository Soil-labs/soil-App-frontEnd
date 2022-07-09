import FormComponent from "../../components/TypeFormLikePage/FormComponent";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createNewProject, findProject } from "../../redux/slices/projectSlice";
import GreenBudgetForm from "../../components/TypeFormLikePage/BudgetComponent";
import ScopeRolesComponent from "../../components/TypeFormLikePage/ScopeRolesComponent";
import GeneralGreenFromComponent from "../../components/GenralComponents/GeneralGreenFromComponent";

function Form() {
  const [phase, setPhase] = useState(0);
  // const [phase, setPhase] = useState(2);
  const [questions, setQuestions] = useState([
    {
      title: "What’s the tilte of the new project?",
      description: "description 1",
      reply: "",
      render: "",
    },
    {
      title: "Description of the new project?",
      description:
        "Key info on what will make the filling curcial: for ex - great titles are  short & descriptive bla bla",
      reply: "",
    },
    {
      title: "BUDGET APPLICATION",
      totalBudget: "",
      kickoffDate: "",
      wrapUpDate: "",
      notesAndJustification: "",
    },
  ]);

  const changePhase = (phaseNow) => {
    if (questions.length - 1 > phaseNow) {
      setPhase((phaseNow += 1));
    } else {
      submitReply();
    }
  };

  const dispatch = useDispatch();

  const handleChange = (e, phaseNow, changeField) => {
    let newArr = [...questions];
    newArr[phaseNow][changeField] = e.target.value;
    setQuestions(newArr);
  };

  const submitReply = () => {
    const field = {
      title: questions[0].reply,
      description: questions[1].reply,
      totalBudget: questions[2].totalBudget,
      kickoffDate: questions[2].kickoffDate,
      wrapUpDate: questions[2].wrapUpDate,
      // notesAndJustification: questions[2].notesAndJustification,
    };
    dispatch(createNewProject(field));
  };

  // useEffect(() => {
  //   const lookForProject = () => {
  //     const field = {
  //       _id: "62c0dac5a38139000437e607"
  //     };

  //     console.log("this is the _id in the form ============>>>>>>>>",field._id)
  //     dispatch(findProject(field))
  //   }
  //   lookForProject()
  // }, [phase])

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
    </>
  );
}

export default Form;
