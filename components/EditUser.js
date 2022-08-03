import { Fragment, useState, useCallback, useEffect, useRef } from "react";
import SkillSelector from "./skill/SkillSelector";
import Selector from "./Selector";
import Avatar from "./Avatar";
import Textarea from "./TextArea";

const timezones = [
  "UTC-12",
  "UTC-11",
  "UTC-10",
  "UTC-9",
  "UTC-8",
  "UTC-7",
  "UTC-6",
  "UTC-5",
  "UTC-4",
  "UTC-3",
  "UTC-2",
  "UTC-1",
  "UTC",
  "UTC+1",
  "UTC+2",
  "UTC+3",
  "UTC+4",
  "UTC+5",
  "UTC+6",
  "UTC+7",
  "UTC+8",
  "UTC+9",
  "UTC+10",
  "UTC+11",
  "UTC+12",
];

export default function EditUser({ user = { skills: [] }, setUserCallback }) {
  const [skills, setSkills] = useState(user.skills);

  const setUserInfoCallback = useCallback(
    (item) => {
      if (setUserCallback) setUserCallback({ ...user, ...item });
    },
    [setUserCallback, user]
  );

  useEffect(() => {
    setUserInfoCallback({ skills });
  }, [skills]);

  const hoursRef = useRef(null);
  useEffect(() => {
    if (hoursRef.current) hoursRef.current.value = user.hoursPerWeek;
  }, [hoursRef, user.hoursPerWeek]);

  return (
    <>
      <div className="flex items-center p-1 mb-2">
        <Avatar src={user?.discordAvatar} />
        <div>{user?.discordName}</div>
      </div>
      <section className="grid grid-cols-2">
        <div className="col-span-1 pr-2">
          <SkillSelector
            key={user._id}
            setSkillsCallback={setSkills}
            value={user.skills}
            showSelected={true}
          />
        </div>
        <div className="col-span-1 pl-2">
          <div className="w-full">
            <div className="w-1/2 inline-block">
              <Selector
                setDataCallback={setUserInfoCallback}
                name="timeZone"
                options={timezones}
                value={user.timeZone}
                placeholder="timezone"
              />
            </div>
          </div>
          {/* <div className="w-1/2 inline-block pl-1">
            <Selector
            setDataCallback={setUserInfoCallback}
            name="period"
            options={periods}
            placeholder="week/month"
            />
          </div> */}
          <div className="w-full inline-block">
            <span>Hours per week:</span>
            <input
              type="number"
              min="0"
              ref={hoursRef}
              onChange={(e) => {
                setUserInfoCallback({
                  hoursPerWeek: Number(e.target.value),
                });
              }}
              className="block w-1/2 mr-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-full"
            ></input>
          </div>
          <div className="w-full">
            <Textarea
              name="interest"
              value={user.interest}
              setDataCallback={setUserInfoCallback}
              placeholder="Interests"
              title="Interests:"
            />
          </div>
        </div>
      </section>
      <div className="w-1/2 mx-auto mb-4">
        {/* <Textarea
          name="message"
          setDataCallback={setUserInfoCallback}
          placeholder="Message"
          title="Message:"
        /> */}
      </div>
      {JSON.stringify(user)}
    </>
  );
}
