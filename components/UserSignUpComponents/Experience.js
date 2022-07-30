import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
        className="bg-blue-700 absolute right-7 top-7 px-2 rounded-lg text-white"
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
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <input
              className="border-b-2 border-x-0 border-y-0 text-center border-gray-200 focus:outline-dashed"
              type="text"
              required
              placeholder="Position*"
              value={position}
              onChange={setPosition}
            />
            <input
              className="border-b-2 border-x-0 text-center border-y-0 border-gray-200"
              type="text"
              required
              placeholder="Company/Project*"
              value={company}
              onChange={setCompany}
            />
            <input
              className="border-b-2 border-x-0 text-center border-y-0 border-gray-200"
              type="text"
              placeholder="Github, Behance"
              value={workLink}
              onChange={setWorkLink}
            />
            <input
              className="border-b-2 border-x-0 text-center border-y-0 border-gray-200"
              type="text"
              placeholder="Linkedin, Upwork"
              value={profileLink}
              onChange={setProfileLink}
            />
            <select
              className="border-none text-center border-black"
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
              rows="8"
              className="resize-none rounded-lg border-gray-200"
              value={roleDiscription}
              onChange={setRoleDiscription}
            ></textarea>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className="flex flex-col">
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={setStartDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={setEndDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </LocalizationProvider>
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
      {experience.map((e, index) => (
        <div key={e.id}>
          <ExperienceTab
            position={e.position}
            setPosition={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].position = e.target.value;
                })
              )
            }
            company={e.company}
            setCompany={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].company = e.target.value;
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
            roleDiscription={e.roleDiscription}
            setRoleDiscription={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].roleDiscription = e.target.value;
                })
              )
            }
            workLink={e.workLink}
            setWorkLink={(e) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].workLink = e.target.value;
                })
              )
            }
            startDate={e.startDate}
            setStartDate={(newValue) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].startDate = Math.floor(new Date(newValue).getTime());
                })
              )
            }
            endDate={e.endDate}
            setEndDate={(newValue) =>
              setExperience((currentExperience) =>
                produce(currentExperience, (x) => {
                  x[index].endDate = Math.floor(new Date(newValue).getTime());
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