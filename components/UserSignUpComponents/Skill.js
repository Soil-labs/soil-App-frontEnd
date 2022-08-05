import React, { useEffect, useState } from "react";
import SkillsInjector from "../SkillsInjector";
import { SkillPasserContext } from "../../Contexts/SkillPasserContext";

const SkillTab = ({ tag, onClick, backgroundColor }) => {
  return (
    <div
      className="px-2 w-max rounded-full flex gap-2 justify-center items-center"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {tag}
      <div className="cursor-pointer font-bold" onClick={onClick}>
        X
      </div>
    </div>
  );
};

const SkillDropper = ({ heading, children, onAdd, selected }) => {
  return (
    <div className="bg-white h-[10rem] w-[24rem] rounded-lg">
      <p
        className={`uppercase font-semibold text-lg text-center ${
          selected && "border-blue-600 border-[2px] rounded-md cursor-pointer"
        }`}
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
  const skillEnum = {
    learning: "learning",
    junior: "junior",
    mid: "mid",
    senior: "senior",
  };

  const [choosenSkills, setChoosenSkills] = useState([]);
  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const [selected, setSelected] = useState(false);
  const [skillbeenAdded, setSkillbeenAdded] = useState(false);

  const colors = ["#268A02", "#53D4F0", "#FF72BE", "#ECF047", "#8296FF"];

  useEffect(() => {
    console.log("skills", choosenSkills);
  }, [choosenSkills]);

  return (
    <div className="flex flex-col gap-4">
      <SkillPasserContext.Provider
        value={{
          choosenSkills,
          setChoosenSkills,
          highlightedSkill,
          setHighlightedSkill,
          selected,
          setSelected,
        }}
      >
        <SkillsInjector
          // setSkillsCallback={setChoosenSkills}
          // allSkills={choosenSkills}
          showSelected={true}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="flex justify-between">
          <SkillDropper
            heading="Learning"
            selected={highlightedSkill !== null}
            onAdd={() => {
              if (highlightedSkill !== null) {
                setLearning([
                  ...learning,
                  { skillInfo: highlightedSkill, level: skillEnum.learning },
                ]);
                setChoosenSkills(
                  choosenSkills.filter(
                    (selected) => selected._id !== highlightedSkill._id
                  )
                );
                setSelected(false);
              }
            }}
          >
            {learning.map((l, index) => (
              <SkillTab
                key={index}
                tag={l.skillInfo.name}
                backgroundColor={
                  colors[Math.floor(Math.random() * colors.length)]
                }
                onClick={() => {
                  setLearning(learning.filter((_, i) => i !== index));
                  setChoosenSkills([...choosenSkills, l.skillInfo]);
                }}
              />
            ))}
          </SkillDropper>
          <SkillDropper
            heading="Junior"
            selected={highlightedSkill !== null}
            onAdd={() => {
              if (highlightedSkill !== null) {
                setJunior([
                  ...junior,
                  { skillInfo: highlightedSkill, level: skillEnum.junior },
                ]);
                setChoosenSkills(
                  choosenSkills.filter(
                    (selected) => selected._id !== highlightedSkill._id
                  )
                );
                setSelected(false);
              }
            }}
          >
            {junior.map((l, index) => (
              <SkillTab
                key={index}
                tag={l.skillInfo.name}
                backgroundColor={
                  colors[Math.floor(Math.random() * colors.length)]
                }
                onClick={() => {
                  setJunior(junior.filter((_, i) => i !== index));
                  setChoosenSkills([...choosenSkills, l.skillInfo]);
                }}
              />
            ))}
          </SkillDropper>
        </div>
        <div className="flex justify-between">
          <SkillDropper
            heading="mid level"
            selected={highlightedSkill !== null}
            onAdd={() => {
              if (highlightedSkill !== null) {
                setMidLevel([
                  ...midLevel,
                  { skillInfo: highlightedSkill, level: skillEnum.mid },
                ]);
                setChoosenSkills(
                  choosenSkills.filter(
                    (selected) => selected._id !== highlightedSkill._id
                  )
                );
                setSelected(false);
              }
            }}
          >
            {midLevel.map((l, index) => (
              <SkillTab
                key={index}
                backgroundColor={
                  colors[Math.floor(Math.random() * colors.length)]
                }
                tag={l.skillInfo.name}
                onClick={() => {
                  setMidLevel(midLevel.filter((_, i) => i !== index));
                  setChoosenSkills([...choosenSkills, l.skillInfo]);
                }}
              />
            ))}
          </SkillDropper>
          <SkillDropper
            heading="Senior"
            selected={highlightedSkill !== null}
            onAdd={() => {
              if (highlightedSkill !== null) {
                setSenior([
                  ...senior,
                  { skillInfo: highlightedSkill, level: skillEnum.senior },
                ]);
                setChoosenSkills(
                  choosenSkills.filter(
                    (selected) => selected._id !== highlightedSkill._id
                  )
                );
                setSelected(false);
              }
            }}
          >
            {senior.map((l, index) => (
              <SkillTab
                key={index}
                backgroundColor={
                  colors[Math.floor(Math.random() * colors.length)]
                }
                tag={l.skillInfo.name}
                onClick={() => {
                  setSenior(senior.filter((_, i) => i !== index));
                  setChoosenSkills([...choosenSkills, l.skillInfo]);
                }}
              />
            ))}
          </SkillDropper>
        </div>
      </SkillPasserContext.Provider>
    </div>
  );
};

export default Skill;
