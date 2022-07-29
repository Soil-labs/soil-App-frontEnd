import { Fragment, useState, useCallback, useEffect } from "react";
import SkillSelector from "./skill/SkillSelector";
import Selector from "./Selector";
import Avatar from "./Avatar";
import Textarea from "./TextArea";

const timezones = [
  "UTC-4",
  "UTC-3",
  "UTC-2",
  "UTC-1",
  "UTC",
  "UTC+1",
  "UTC+2",
  "UTC+3",
  "UTC+4",
];
const hoursAvailable = [
  "5 hrs",
  "10 hrs",
  "15 hrs",
  "20 hrs",
  "25 hrs",
  "30 hrs",
  "35 hrs",
  "40 hrs",
];
const periods = ["week", "month"];

export default function EditUser({ user = {}, setUserCallback }) {
  const [skills, setSkills] = useState([]);

  const setUserInfoCallback = useCallback(
    (item) => {
      if (setUserCallback) setUserCallback({ ...user, ...item });
    },
    [setUserCallback, user]
  );

  useEffect(() => {
    setUserInfoCallback({ skills });
  }, [skills]);

  return (
    <>
      <Avatar src={user?.discordAvatar} />
      <div>{user?.discordName}</div>
      <section className="grid grid-cols-2">
        <div className="col-span-1">
          <SkillSelector setSkillsCallback={setSkills} showSelected={true} />
        </div>
        <div className="col-span-1">
          <div className="w-full text-center">
            <div className="w-1/2 inline-block">
              <Selector
                setDataCallback={setUserInfoCallback}
                name="timezone"
                options={timezones}
                placeholder="timezone"
              />
            </div>
          </div>
          <div className="w-1/2 inline-block pr-1">
            <Selector
              setDataCallback={setUserInfoCallback}
              name="hours"
              options={hoursAvailable}
              placeholder="hrs"
            />
          </div>
          <div className="w-1/2 inline-block pl-1">
            <Selector
              setDataCallback={setUserInfoCallback}
              name="period"
              options={periods}
              placeholder="week/month"
            />
          </div>
          <div className="w-full">
            <Textarea
              name="interests"
              setDataCallback={setUserInfoCallback}
              placeholder="Interests"
              title="Interests:"
            />
          </div>
        </div>
      </section>
      <div className="w-1/2 mx-auto">
        <Textarea
          name="message"
          setDataCallback={setUserInfoCallback}
          placeholder="Message"
          title="Message:"
        />
      </div>
    </>
  );
}
