/* eslint-disable @next/next/no-img-element */
import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

export const ExpandableDiscription = ({ title, tags }) => {
  return (
    <div className="bg-yellow-200 p-5 rounded-xl border-black border-[2px]">
      <h1 className="font-semibold text-xl mb-3">{title}</h1>
      <div className="flex flex-wrap gap-2">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <div key={index} className="py-1 px-3 bg-blue-400 rounded-xl">
              {tag}
            </div>
          ))
        ) : (
          <p>No info available</p>
        )}
      </div>
    </div>
  );
};

const Profile = ({ id, avatar, bio, skills, networks, previousWork }) => {
  const data = [
    {
      data: {
        battery: 0.7,
        design: 0.8,
        useful: 0.9,
        speed: 0.67,
        weight: 0.8,
      },
      meta: { color: "blue" },
    },
    {
      data: {
        battery: 0.6,
        design: 0.85,
        useful: 0.5,
        speed: 0.6,
        weight: 0.7,
      },
      meta: { color: "red" },
    },
  ];

  const captions = {
    // columns
    battery: "Battery Capacity",
    design: "Design",
    useful: "Usefulness",
    speed: "Speed",
    weight: "Weight",
  };
  return (
    <div className="w-6/12 mx-auto flex flex-col gap-10 bg-gray-200 rounded-lg p-10">
      <div className="flex justify-start items-center gap-10">
        <h1 className="font-semibold text-2xl">Total Seeds</h1>
        <div className="px-5 py-2 rounded-xl bg-yellow-200 border-black border-[2px]">
          to feed
        </div>
      </div>
      <div className="flex justify-start items-center gap-10">
        <div className="flex justify-start items-center gap-7">
          <div className="h-20 w-20 bg-yellow-200 rounded-full overflow-hidden">
            <img
              src={avatar ? avatar : "/soil.png"}
              alt="avatar"
              className="w-full h-full bg-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium">{id}</p>
            <p>Relevant endorsement</p>
          </div>
        </div>
        <div className="px-5 py-4 rounded-xl bg-yellow-200 border-black border-[2px]">
          availabilty info
        </div>
      </div>
      <div className="flex h-40 gap-10">
        <div className="h-full w-6/12 p-5 rounded-xl border-black border-[2px] bg-yellow-200">
          <h1 className="font-semibold text-xl mb-3">Bio</h1>
          <p>{bio ? bio : "No info available"}</p>
        </div>
        <ExpandableDiscription title="Top skills" tags={skills} />
      </div>
      <div className="flex gap-10">
        <ExpandableDiscription title="Key Networks" tags={networks} />
        <ExpandableDiscription
          title="Proof of previous work"
          tags={previousWork}
        />
      </div>
      <div className="w-[20rem]">
        <RadarChart captions={captions} data={data} size={450} />
      </div>
    </div>
  );
};

export default Profile;
