
import Select from "react-select";

const ReactSelectComponent = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };

  return <Select className="w-96" options={options} onChange={handleChange} isMulti />;
};

export default ReactSelectComponent;
