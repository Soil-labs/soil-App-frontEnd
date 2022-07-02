import FormComponent from "../../components/FormComponent";
import { useState } from "react";

function Form() {
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
  ]);

  const changePhase = (phaseNow) => {
    if (questions.length - 2 >= phaseNow) {
      setPhase((phaseNow += 1));
    } else {
      return;
    }
  };

  const handleChange = (e, phaseNow) => {
    let newArr = [...questions];

    newArr[phaseNow].reply = e.target.value;

    setQuestions(newArr);
  };

  return (
    <>
      <FormComponent
        handleChange={handleChange}
        changePhase={changePhase}
        questions={questions[phase]}
        phase={phase}
      />
      {/* <FormComponent changePhase={changePhase} questions={questions[phase]} /> */}
    </>
  );
}

export default Form;
