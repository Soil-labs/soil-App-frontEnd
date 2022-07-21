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

  const handleChange = (selectedOption) => {
    if (selectedOption[0] !== undefined) {
      props.addSkill(String(selectedOption[selectedOption.length - 1].value));
    }
  };


  return (
    <>
      {/* <AsyncSelect
      className="w-96"
      loadOptions={props.skills}
      controlShouldRenderValue={false}
      onChange={handleChange}
      isMulti
    /> */}

      <Select
        className="w-96"
        options={newSkillsArr}
        controlShouldRenderValue={false}
        onChange={handleChange}
        isMulti
        placeholder={"Start Typing Your Skill"}
      />
      {/* <p>{options_temp[0].value}</p> */}

      {/* <p>hey</p> */}
    </>
  );
};

export default ReactSelectComponent;
