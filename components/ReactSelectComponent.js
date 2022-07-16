
import Select from "react-select";

const ReactSelectComponent = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (selectedOption) => {
    if(selectedOption[0] !== undefined){
      props.addSkill(String(selectedOption[selectedOption.length - 1].value)) 
    }
   
  };

  return <Select className="w-96" options={options} controlShouldRenderValue = { false } onChange={handleChange} isMulti
   />;
};

export default ReactSelectComponent;
