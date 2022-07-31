/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

import React from "react";
import { useEffect } from "react";

const DevRoles = ({ Role }) => {
  return (
    <div className="flex flex-col justify-center  items-center gap-1">
      <img src="/Avatar.png" className="w-[5rem] xl:w-[7rem]" alt="" />

      <p className="px-3 xl:px-5 rounded-full bg-white text-lg shadow-md w-max uppercase">
        {Role}
      </p>
    </div>
  );
};

const Info = ({ text, icon }) => {
  return (
    <div className="bg-white rounded-full shadow-md overflow-hidden flex">
      <div className="bg-[#C4C4C4] rounded-tl-full flex justify-center items-center px-2 py-2 rounded-bl-full">
        <img className="w-[1rem]" src={icon} alt="" />
      </div>
      <p className="font-medium text-end py-1 md:pr-1 xl:pr-2 pl-2 xl:pl-4 w-max">
        {text}
      </p>
    </div>
  );
};

const ProjectBoard = ({
  projectTitle,
  championName,
  discordName,
  avatar,
  description,
  skills,
  links,
  obPriority,
  devRoles,
  budget,
  kickOffDate,
  endDate,
  changePhase,
  phase,
}) => {
  useEffect(() => {
    console.log(
      "kickoffDate: ",
      new Date(parseInt(kickOffDate) * 1000).toDateString()
    );
  }, []);

  const skillss = [
    "Design",
    "Figma",
    "Solidity",
    "Art",
    "Frontend",
    "3D",
    "Machine Learning",
  ];

  const colors = [
    "#268A0266",
    "#D65C9E66",
    "#F9A82F66",
    "#ECF04766",
    "#657DF866",
    "#D65C9E66",
    "#53D4F066",
  ];

  const onboardingPriority = [
    "mint nft",
    "introduce to the team",
    "dispatch token",
    "create dework",
    "build a smart contract",
  ];

  const requiredPersons = [
    "Scrum Master",
    "Product Owner",
    "Team Lead",
    "Frontend",
    "Backend",
  ];

  return (
    <div className="bg-[#ACCEA0] bg-opacity-60 shadow-md flex flex-col gap-20 justify-start py-20 items-center rounded-2xl w-[90%] h-[90%]">
      <div className="project-title px-16 py-2 shadow-md relative bg-white min-w-[30%] text-center rounded-full text-xl font-medium uppercase">
        <img
          src="/Edit.png"
          className="absolute right-4 top-2/4 -translate-y-2/4 cursor-pointer"
          alt=""
        />
        {projectTitle}
      </div>
      <div className="flex justify-center items-end md:gap-5 xl:gap-10 w-11/12 mx-auto">
        <div className="profile flex flex-col justify-center items-start gap-6 w-5/12 ">
          <div className="flex justify-start items-center gap-4">
            <div className="profile-img h-[5rem] w-[5rem] rounded-full overflow-hidden">
              <img
                src={`${avatar ? avatar : "/soil.png"}`}
                className="h-full w-full"
                alt="avatar"
              />
            </div>
            <div className="md:px-10 xl:px-14 bg-white rounded-full flex justify-center shadow-md h-min items-center flex-col">
              <h1 className="uppercase text-xl font-medium">{championName}</h1>
              <p className="text-[12px] font-medium text-[#828282] -mt-1">
                Project Champion
              </p>
              <p className="text-[10px] text-[#929292] lowercase">
                @{discordName}
              </p>
            </div>
          </div>
          <div className="bg-white relative p-5 w-full shadow-md rounded-xl min-h-[11rem] flex flex-col justify-start items-start gap-5">
            <img
              src="/Edit.png"
              className="absolute right-5 top-6 cursor-pointer"
              alt=""
            />
            <h2 className="font-semibold text-lg">Project Description</h2>
            <p>{description}</p>
          </div>
          <div className="flex justify-between gap-4 w-full">
            <div className="bg-white relative p-5 w-7/12 min-h-[10rem] shadow-md rounded-xl flex flex-col justify-start items-center gap-5">
              <img
                src="/Edit.png"
                className="absolute right-5 top-6 cursor-pointer"
                alt=""
              />
              <p className="font-medium">TOP SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {skills ? (
                  skills.map((skill, index) => (
                    <div
                      style={{
                        backgroundColor: `${
                          colors[Math.floor(Math.random() * colors.length)]
                        }`,
                      }}
                      className="w-max px-2 rounded-full font-medium"
                      key={index}
                    >
                      {skill}
                    </div>
                  ))
                ) : (
                  <p>No skills found</p>
                )}
              </div>
            </div>
            <div className="bg-white relative shadow-md p-5 w-4/12 min-h-[10rem] rounded-xl flex flex-col justify-start items-center gap-5">
              <img
                src="/Edit.png"
                className="absolute right-5 top-6 cursor-pointer"
                alt=""
              />
              Links
            </div>
          </div>
        </div>
        <div className="onboarding-priority relative w-[20%] bg-white shadow-md h-max p-8 rounded-xl text-center">
          <img
            src="/Edit.png"
            className="absolute right-5 top-4 cursor-pointer"
            alt=""
          />
          <h1 className="font-medium">ONBOARDING PRIORITY</h1>
          <p className="text-xs text-[#929292]">From most to least important</p>
          <div className="flex flex-col gap-5 mt-5">
            {onboardingPriority.map((priority, index) => (
              <div
                style={{
                  backgroundColor: `${
                    colors[Math.floor(Math.random() * colors.length)]
                  }`,
                }}
                key={index}
                className="py-2 rounded-full uppercase font-medium text-xs text-center shadow-md"
              >
                {priority}
              </div>
            ))}
          </div>
        </div>
        <div className="other-info grid grid-cols-2 gap-y-4 w-[25rem]">
          <div className="flex flex-col justify-end gap-4">
            <Info icon={"/code.png"} text={`${budget} $CODE`} />

            <Info
              icon={"/kickOffIcon.png"}
              text={new Date(parseInt(kickOffDate) * 1000).toDateString()}
            />

            <Info
              icon={"/wrapUpIcon.png"}
              text={new Date(parseInt(endDate) * 1000).toDateString()}
            />
          </div>
          {devRoles &&
            devRoles.map((person, index) => {
              if (person !== null) {
                return <DevRoles Role={person} key={index} />;
              }
            })}
        </div>
      </div>
      <button
          onClick={() => {
            changePhase(phase);
          }}
        >
          <ChevronDoubleDownIcon className="h-10 w-10 text-black mt-10 font-light stroke-1" />
        </button>
    </div>
  );
};

export default ProjectBoard;
