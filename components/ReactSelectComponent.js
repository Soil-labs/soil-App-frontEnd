import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";

const ReactSelectComponent = (props) => {
  const newSkillsArr = [];
  props.skills.forEach((skill, index) => {
    const obj = {};
    obj.value = skill.name;
    obj.label = skill.name;
    newSkillsArr.push(obj);
  });

  console.log("props.skills_all er2= ", props.skills_all);

  // const handleChange = (selectedOption) => {

  //   console.log("selectedOption = " , selectedOption)
  //   console.log("newSkillsArr = " , newSkillsArr)

  // if (selectedOption[0] !== undefined) {
  //   props.addSkill(String(selectedOption[selectedOption.length - 1].value));
  // }
  // };

  // const options = [
  //   { value: 'blues', label: 'Blues' },
  //   { value: 'rock', label: 'Rock' },
  //   { value: 'jazz', label: 'Jazz' },
  //   { value: 'orchestra', label: 'Orchestra' }
  // ];

  const [options, setOptions] = useState([
    { value: "0", label: "Blues" },
    { value: "1", label: "Rock" },
    { value: "2", label: "Jazz" },
    { value: "3", label: "Orchestra" },
  ]);

  // const [selectedOption, setSelectedOption] = useState(null);
  // state = {
  //   selectedOption: null,
  // }
  const handleChange = (selectedOption) => {
    // console.log("selectedOption = " , selectedOption)
    // setSelectedOption(selectedOption );
    // console.log(`Option selected:`, selectedOption);

    let optionsN = [...options];
    optionsN.splice(parseInt(selectedOption.value), 1);

    // console.log("parseInt(selectedOption.value) = " ,optionsN)
    // console.log("optionsN = " , optionsN)
    setOptions(optionsN);

    props.addSkill(selectedOption.label);
    // if (selectedOption[0] !== undefined) {
    //   props.addSkill(String(selectedOption[selectedOption.length - 1].value));
    // }

    console.log("options = ", options);
  };
  // render(){
  //   const { selectedOption } = this.state;
  // }

  return (
    <>
      {/* <AsyncSelect
      className="w-96"
      loadOptions={props.skills}
      controlShouldRenderValue={false}
      onChange={handleChange}
      isMulti
    /> */}

      {/* <Select
        className="w-96"
        options={newSkillsArr}
        controlShouldRenderValue={false}
        onChange={handleChange}
        isMulti
        isClearable = {false}
        placeholder={"Start Typing Your Skill"}
      /> */}

      <Select
        className="w-96"
        onChange={props.handleChange_addSkillFromSearch}
        options={props.skills_all}
        placeholder={"Start Typing Your Skill"}

        // autoFocus={true}
      />

      {/* <p>{options_temp[0].value}</p> */}

      {/* <p>hey</p> */}
    </>
  );
};

export default ReactSelectComponent;
