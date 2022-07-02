import FormComponent from "../../components/FormComponent";
import { useState } from "react";

function Form() {
  const [phase, setPhase] = useState(0);
  const [replyValue, setReplyValue] = useState("");
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

  const changePhase = () => {
    if (questions.length - 2 >= phase) {
      setPhase((phase += 1));
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    setReplyValue(e.target.value);
  };

  const updateReply = () => {
    let newArr = [...questions];
    console.log(phase);
    newArr[phase].reply = replyValue;
    setQuestions(newArr);
    console.log(questions);
    setReplyValue(" ");
  };

  return (
    <>
      <FormComponent
        handleChange={handleChange}
        updateReply={updateReply}
        setReplyValue={setReplyValue}
        changePhase={changePhase}
        questions={questions[phase]}
      />
      {/* <FormComponent changePhase={changePhase} questions={questions[phase]} /> */}
    </>
  );
}

export default Form;
