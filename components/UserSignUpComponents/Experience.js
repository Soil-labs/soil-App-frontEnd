import React, { useState } from "react";

import { produce } from "immer";

export const ExperienceTab = ({
  position,
  setPosition,
  company,
  setCompany,
  workLink,
  setWorkLink,
  profileLink,
  setProfileLink,
  contract,
  setContract,
  roleDiscription,
  setRoleDiscription,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setCompleted,
  isDone,
}) => {
  // const [isDone, setIsDone] = useState(false);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="relative bg-white rounded-lg p-5">
      <button
        className="absolute border-soilGray-500 border-[1px] right-7 top-7 px-2 rounded-lg text-soilGray-500"
        onClick={() => {
          if (
            position !== "" &&
            company !== "" &&
            contract !== "" &&
            startDate !== null &&
            endDate !== null &&
            roleDiscription !== ""
          ) {
            // setIsDone((current) => (current = !current));
            setCompleted();
          }
        }}
      >
        {isDone ? "EDIT" : "DONE"}
      </button>
      {!isDone ? (
        <div className="flex justify-between gap-2 items-end shadow-soilShadow rounded-xl box-border">
          <div className="flex flex-col gap-1">
            <input
              className="border-b-2 text-soilGray-500 border-x-0 pb-0 border-y-0 text-center border-gray-200"
              type="text"
              required
              placeholder="Position*"
              value={position}
              onChange={setPosition}
            />
            <input
              className="border-b-2 text-soilGray-500 border-x-0 pb-0 text-center border-y-0 border-gray-200"
              type="text"
              required
              placeholder="Company/Project*"
              value={company}
              onChange={setCompany}
            />
            <input
              className="border-b-2 text-soilGray-500 border-x-0 pb-0 text-center border-y-0 border-gray-200"
              type="text"
              placeholder="Github, Behance"
              value={workLink}
              onChange={setWorkLink}
            />
            <input
              className="border-b-2 text-soilGray-500 border-x-0 pb-0 text-center border-y-0 border-gray-200"
              type="text"
              placeholder="Linkedin, Upwork"
              value={profileLink}
              onChange={setProfileLink}
            />
            <select
              className="border-none text-soilGray-500 text-center border-black"
              name=""
              id=""
              required
              value={contract}
              onChange={setContract}
            >
              <option value="" disabled selected>
                Type of contract*
              </option>
              <option value="Parttime">Parttime</option>
              <option value="Fulltime">Fulltime</option>
            </select>
          </div>
          <div>
            <textarea
              placeholder="Type role discription*"
              name=""
              id=""
              cols="30"
              rows="7"
              className="resize-none rounded-2xl border-gray-200"
              value={roleDiscription}
              onChange={setRoleDiscription}
            ></textarea>
          </div>
          <div>
            <div className="flex flex-col">
              <input
                className="border-none w-36 cursor-pointer"
                type="date"
                onChange={setStartDate}
              />
              <input
                className="border-none w-36 cursor-pointer"
                type="date"
                onChange={setEndDate}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div className="flex flex-col justify-center items-start gap-5">
            <div>
              <p className="uppercase font-semibold text-lg">{position}</p>
              <p className="text-gray-400 text-base">
                {company}-{contract}
              </p>
              <p className="text-sm mt-2">
                {`${new Date(startDate).getUTCFullYear()} ${
                  months[new Date(startDate).getUTCMonth() + 1]
                }`}{" "}
                -{" "}
                {`${new Date(endDate).getUTCFullYear()} ${
                  months[new Date(endDate).getUTCMonth() + 1]
                }`}
              </p>
            </div>
            <div className="flex flex-col">
              <a href={workLink} target="_blank" rel="noreferrer">
                {workLink}
              </a>
              <a href={profileLink} target="_blank" rel="noreferrer">
                {profileLink}
              </a>
            </div>
          </div>
          <div>
            <p className="w-96 mr-16 h-full">{roleDiscription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Experience = ({ experience, setExperience, addExperience }) => {
  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className="uppercase text-xl font-bold font-Inter text-center mt-10">
        SHARE YOUR RELEVANT EXPERIENCES
      </h1>
      {experience.map((e, index) => (
        <div key={e.id}>
          <ExperienceTab
            position={e.positionName}
            setPosition={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].positionName = e.target.value;
                })
              )
            }
            company={e.title}
            setCompany={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].title = e.target.value;
                })
              )
            }
            contract={e.contract}
            setContract={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].contract = e.target.value;
                })
              )
            }
            profileLink={e.profileLink}
            setProfileLink={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].profileLink = e.target.value;
                })
              )
            }
            roleDiscription={e.discription}
            setRoleDiscription={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].discription = e.target.value;
                })
              )
            }
            workLink={e.link}
            setWorkLink={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].link = e.target.value;
                })
              )
            }
            startDate={e.startDate}
            setStartDate={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].startDate = Math.floor(
                    new Date(e.target.value).getTime()
                  ).toString();
                })
              )
            }
            endDate={e.endDate}
            setEndDate={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].endDate = Math.floor(
                    new Date(e.target.value).getTime()
                  ).toString();
                })
              )
            }
            setCompleted={() =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].isDone = !x[index].isDone;
                })
              )
            }
            isDone={e.isDone}
          />
        </div>
      ))}
      {experience.length <= 3 && (
        <button
          className="px-2 py-1 bg-green-600 rounded-full flex justify-center items-center mx-auto mt-10"
          onClick={addExperience}
        >
          ADD NEW
        </button>
      )}
    </div>
  );
};

export default Experience;
