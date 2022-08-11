/* eslint-disable @next/next/no-img-element */
import React from "react";
import timeZone from "../../public/timeZones.json";
import { produce } from "immer";

const Link = ({ icons, value, onChange }) => {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      {icons !== "" && <img src={icons} alt="icons" />}
      <input
        type="text"
        className="rounded-full w-full border-none drop-shadow-button-shadow"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const Contribution = ({ formData, setFormData, links, setLinks, addLinks }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-10">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="font-Inter text-2xl font-semibold">
          WHAT’S YOUR AVAILABILITY?
        </h1>
        <div>
          <select
            name="timezone"
            id="timezone"
            placeholder="TIMEZONE"
            className="rounded-full text-center text-soilGray-300 font-semibold border-none drop-shadow-button-shadow"
            value={formData.timeZone}
            onChange={(e) =>
              setFormData({
                ...formData,
                timeZone: e.target.value,
              })
            }
          >
            <option value="" disabled selected>
              TIMEZONE
            </option>
            {timeZone.map((t, index) => (
              <option key={index} value={t.text}>
                {t.text.slice(0, 11)}
              </option>
            ))}
            <option value="1 WEEK">UTC</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-3">
          <select
            name="hours"
            id="hours"
            className="rounded-full text-soilGray-300 font-semibold border-none drop-shadow-button-shadow"
            value={formData.hours}
            onChange={(e) =>
              setFormData({ ...formData, hours: e.target.value })
            }
          >
            <option value="" disabled selected>
              HOURS
            </option>
            <option value={10}>10 hrs</option>
            <option value={20}>20 hrs</option>
            <option value={30}>30 hrs</option>
            <option value={40}>40 hrs</option>
          </select>
          <select
            name="weeks"
            id="weeks"
            className="rounded-full text-soilGray-300 font-semibold border-none drop-shadow-button-shadow"
            value={formData.weeks}
            onChange={(e) =>
              setFormData({ ...formData, weeks: e.target.value })
            }
          >
            <option value="" disabled selected>
              WEEKS
            </option>
            <option value="week">WEEK</option>
            <option value="monthly">MONTHLY</option>
            <option value="quaterly">QUATERLY</option>
            <option value="yearly">YEARLY</option>
          </select>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-Inter text-2xl font-semibold">DROP YOUR SOCIALS</h1>
        <p>
          Adding links is not required, but it significantly boosts your
          discoverability.
        </p>
        <div className="flex justify-center items-center gap-5 flex-col mt-10">
          {links.map((link, index) => (
            <Link
              key={link.id}
              icons={link.icon}
              value={link.value}
              onChange={(e) =>
                setLinks((currentLinks) =>
                  produce(currentLinks, (v) => {
                    v[index].value = e.target.value;
                  })
                )
              }
            />
          ))}
        </div>
        <button
          className="bg-soilGray-400 rounded-md p-2 h-10 w-fit self-start mt-10"
          onClick={addLinks}
        >
          + ADD NEW
        </button>
      </div>
    </div>
  );
};

export default Contribution;
