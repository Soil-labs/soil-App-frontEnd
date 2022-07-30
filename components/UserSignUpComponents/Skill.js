import React, { useState } from "react";
import SkillsInjector from "../SkillsInjector";

const SkillTab = ({ tag, onClick }) => {
  const colors = ["#268A02", "#53D4F0", "#FF72BE", "#ECF047", "#8296FF"];
  return (
    <div
      className="px-2 w-max rounded-full flex gap-2 justify-center items-center"
      style={{
        backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`,
      }}
    >
      {tag}
      <div className="cursor-pointer font-bold" onClick={onClick}>
        X
      </div>
    </div>
  );
};

const SkillDropper = ({ heading, children, onAdd }) => {
  return (
    <div className="bg-white h-[10rem] w-[24rem] rounded-lg">
      <p
        className="uppercase font-semibold text-lg text-center"
        onClick={onAdd}
      >
        {heading}
      </p>
      <div className="flex flex-wrap gap-2 p-2">{children}</div>
    </div>
  );
};

const Skill = ({
  learning,
  setLearning,
  junior,
  setJunior,
  midLevel,
  setMidLevel,
  senior,
  setSenior,
}) => {
  const [skills, setSkills] = useState([]);

  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const [selected, setSelected] = useState(false);
  const [skillbeenAdded, setSkillbeenAdded] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <SkillsInjector
        setSkillsCallback={setSkills}
        setHighLightedSkill={setHighlightedSkill}
        showSelected={true}
        selected={selected}
        setSelected={setSelected}
        skillbeenAdded={skillbeenAdded}
      />
      <div className="flex justify-between">
        <SkillDropper
          heading="Learning"
          onAdd={() => {
            if (highlightedSkill !== null) {
              setLearning([...learning, highlightedSkill]);
              setSkillbeenAdded(true);
              setSelected(false);
            }
          }}
        >
          {learning.map((l, index) => (
            <SkillTab
              key={index}
              tag={l}
              onClick={() => {
                setLearning(learning.filter((_, i) => i !== index));
              }}
            />
          ))}
        </SkillDropper>
        <SkillDropper
          heading="Junior"
          onAdd={() => {
            if (highlightedSkill !== null) {
              setJunior([...junior, highlightedSkill]);
              setSelected(false);
            }
          }}
        >
          {junior.map((l, index) => (
            <SkillTab
              key={index}
              tag={l}
              onClick={() => {
                setJunior(junior.filter((_, i) => i !== index));
              }}
            />
          ))}
        </SkillDropper>
      </div>
      <div className="flex justify-between">
        <SkillDropper
          heading="mid level"
          onAdd={() => {
            if (highlightedSkill !== null) {
              setMidLevel([...midLevel, highlightedSkill]);
              setSelected(false);
            }
          }}
        >
          {midLevel.map((l, index) => (
            <SkillTab
              key={index}
              tag={l}
              onClick={() => {
                setMidLevel(midLevel.filter((_, i) => i !== index));
              }}
            />
          ))}
        </SkillDropper>
        <SkillDropper
          heading="Senior"
          onAdd={() => {
            if (highlightedSkill !== null) {
              setSenior([...senior, highlightedSkill]);
              setSelected(false);
            }
          }}
        >
          {senior.map((l, index) => (
            <SkillTab
              key={index}
              tag={l}
              onClick={() => {
                setSenior(senior.filter((_, i) => i !== index));
              }}
            />
          ))}
        </SkillDropper>
      </div>
    </div>
  );
};

export default Skill;
