import React, { useState } from "react";

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

const SkillDropper = ({ heading, children }) => {
  return (
    <div className="bg-white h-[10rem] w-[24rem] rounded-lg">
      <p className="uppercase font-semibold text-lg text-center">{heading}</p>
      <div className="flex flex-wrap gap-2 p-2">{children}</div>
    </div>
  );
};

const Skill = () => {
  const [learning, setLearning] = useState([
    "Machine learning",
    "Tailwindcss",
    "React",
    "Nodejs",
  ]);

  const [junior, setJunior] = useState(["HTML", "CSS", "JavaScript"]);

  const [midLevel, setMidLevel] = useState(["Python", "C++", "C"]);

  const [senior, setSenior] = useState(["Java", "Go", "Rust"]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <SkillDropper heading="Learning">
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
        <SkillDropper heading="Junior">
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
        <SkillDropper heading="mid level">
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
        <SkillDropper heading="Senior">
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
