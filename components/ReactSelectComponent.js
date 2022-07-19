import Async, { useAsync } from 'react-select/async';
const ReactSelectComponent = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: props.skills[0], label: props.skills[0]}
  ];

  

  const handleChange = (selectedOption) => {
    if (selectedOption[0] !== undefined) {
      props.addSkill(String(selectedOption[selectedOption.length - 1].value));
      console.log("skills from React Select",props.skills[0].name)
    }
  };

  return (
    <>
    <Async
      className="w-96"
      options={options}
      controlShouldRenderValue={false}
      onChange={handleChange}
      isMulti
    />

    </>
  );
};

export default ReactSelectComponent;
