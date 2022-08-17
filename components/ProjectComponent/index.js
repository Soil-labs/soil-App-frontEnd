/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ChevronDoubleDownIcon, LinkIcon } from "@heroicons/react/solid";
import { BsTwitter, BsTelegram, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

import React from "react";
import { useEffect } from "react";
import PreviousButton from "../PreviousButton";
import NextButton from "../NextButton";

const DevRoles = ({ Role }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <img src="/Avatar.png" className="w-[5rem] xl:w-[7rem]" alt="" />

      <p className="px-3 text-lg uppercase bg-white rounded-full shadow-md xl:px-5 w-max">
        {Role}
      </p>
    </div>
  );
};

const Info = ({ text, icon }) => {
  return (
    <div className="flex overflow-hidden bg-white rounded-full shadow-md">
      <div className="bg-[#C4C4C4] rounded-tl-full flex justify-center items-center px-2 py-2 rounded-bl-full">
        <img className="w-[1rem]" src={icon} alt="" />
      </div>
      <p className="py-1 pl-2 font-medium text-end md:pr-1 xl:pr-2 xl:pl-4 w-max">
        {text}
      </p>
    </div>
  );
};

const SocialLink = ({ link, children }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
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
  dates,
  stepsJoinProject,
  changePhase,
  phase,
}) => {
  useEffect(() => {
    console.log("links in ProjectComponent", links);
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

  const handleChangePhase = () => {
    changePhase(phase);
  };

  return (
    <div className="bg-[#ACCEA0] bg-opacity-60 shadow-md flex flex-col gap-20 justify-start py-20 items-center rounded-2xl w-[90%] h-[90%]">
      <div className="project-title px-16 py-2 shadow-md relative bg-white min-w-[30%] text-center rounded-full text-xl font-medium uppercase">
        <img
          src="/Edit.png"
          className="absolute cursor-pointer right-4 top-2/4 -translate-y-2/4"
          alt=""
        />
        {projectTitle}
      </div>
      <div className="flex items-end justify-center w-11/12 mx-auto md:gap-5 xl:gap-10">
        <div className="flex flex-col items-start justify-center w-5/12 gap-6 profile ">
          <div className="flex items-center justify-start gap-4">
            <div className="profile-img h-[5rem] w-[5rem] rounded-full overflow-hidden">
              <img
                src={`${avatar ? avatar : "/soil.png"}`}
                className="w-full h-full"
                alt="avatar"
              />
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-full shadow-md md:px-10 xl:px-14 h-min">
              <h1 className="text-xl font-medium uppercase">{championName}</h1>
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
              className="absolute cursor-pointer right-5 top-6"
              alt=""
            />
            <h2 className="text-lg font-semibold">Project Description</h2>
            <p>{description}</p>
          </div>
          <div className="flex justify-between w-full gap-4">
            <div className="bg-white relative p-5 w-7/12 min-h-[10rem] shadow-md rounded-xl flex flex-col justify-start items-center gap-5">
              <img
                src="/Edit.png"
                className="absolute cursor-pointer right-5 top-6"
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
                      className="px-2 font-medium rounded-full w-max"
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
                className="absolute cursor-pointer right-5 top-6"
                alt=""
              />
              {links[0].link !== "" && (
                <SocialLink link={links[0].link}>
                  <BsTwitter />
                </SocialLink>
              )}
              {links[1].link !== "" && (
                <SocialLink link={links[1].link}>
                  <BsGithub />
                </SocialLink>
              )}
              {links[2].link !== "" && (
                <SocialLink link={links[2].link}>
                  <FaDiscord />
                </SocialLink>
              )}
              {links[3].link !== "" && (
                <SocialLink link={links[3].link}>
                  <SiNotion />
                </SocialLink>
              )}
              {links[4].link !== "" && (
                <SocialLink link={links[4].link}>
                  <BsTelegram />
                </SocialLink>
              )}
            </div>
          </div>
        </div>
        <div className="onboarding-priority relative w-[20%] bg-white shadow-md h-max p-8 rounded-xl text-center">
          <img
            src="/Edit.png"
            className="absolute cursor-pointer right-5 top-4"
            alt=""
          />
          <h1 className="font-medium">ONBOARDING PRIORITY</h1>
          <p className="text-xs text-[#929292]">From most to least important</p>
          <div className="flex flex-col gap-5 mt-5">
            {stepsJoinProject.map((priority, index) => (
              <div
                style={{
                  backgroundColor: `${
                    colors[Math.floor(Math.random() * colors.length)]
                  }`,
                }}
                key={index}
                className="py-2 text-xs font-medium text-center uppercase rounded-full shadow-md"
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
              text={new Date(parseInt(dates.kickOff)).toDateString()}
            />

            <Info
              icon={"/wrapUpIcon.png"}
              text={new Date(parseInt(dates.complition)).toDateString()}
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
      {/* <button
        onClick={() => {
          changePhase(phase);
        }}
      >
        <ChevronDoubleDownIcon className="w-10 h-10 mt-10 font-light text-black stroke-1" />
      </button> */}
      <PreviousButton />
      <NextButton handleChangePhase={handleChangePhase} />
    </div>
  );
};

export default ProjectBoard;
