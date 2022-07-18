import { useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { findAllSkillNames, skillNames } from "../redux/slices/skillSlice";
const ReactSelectComponent = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const dispatch = useDispatch();
  const getSkillNames = useSelector(skillNames);

  useEffect(() => {
    const lookForProject = async () => {
      // dispatch(findAllSkillNames);
    };
    lookForProject();
    console.log("getSkillNames",  getSkillNames);

  }, []);

  const handleChange = (selectedOption) => {
    if (selectedOption[0] !== undefined) {
      props.addSkill(String(selectedOption[selectedOption.length - 1].value));
    }
  };

  return (
    <>
    <Select
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
