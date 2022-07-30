/* eslint-disable @next/next/no-img-element */
import React from "react";
import timeZone from "../../public/timeZones.json";
import { produce } from "immer";

const Link = ({ icons, value, onChange }) => {
  return (
    <div className="flex justify-center items-center gap-5">
      {icons !== "" && <img src={icons} alt="icons" />}
      <input
        type="text"
        className="rounded-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const Contribution = ({ formData, setFormData, links, setLinks, addLinks }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <div className="flex justify-center items-center flex-col gap-3">
        <p>How much time can you contribure?</p>
        <div className="flex justify-center items-center gap-3">
          <select
            name="hours"
            id="hours"
            className="rounded-full"
            value={formData.hours}
            onChange={(e) =>
              setFormData({ ...formData, hours: e.target.value })
            }
          >
            <option value="" disabled selected>
              HOURS
            </option>
            <option value="10 hrs">10 hrs</option>
            <option value="20 hrs">20 hrs</option>
            <option value="30 hrs">30 hrs</option>
            <option value="40 hrs">40 hrs</option>
          </select>
          <select
            name="weeks"
            id="weeks"
            className="rounded-full"
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
        <div>
          <select
            name="timezone"
            id="timezone"
            placeholder="TIMEZONE"
            className="rounded-full"
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
      </div>
      <div>
        <p>Add your socials! (optional)</p>
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
          className="bg-white rounded-full h-10 w-10 flex justify-center items-center mx-auto mt-10"
          onClick={addLinks}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Contribution;
