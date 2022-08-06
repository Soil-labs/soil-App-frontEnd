import React from "react";

const Final = ({ formData, links, experience }) => {
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
    <div className="flex justify-between">
      <div className="flex flex-col justify-center items-start gap-5">
        <div className="flex justify-start items-center gap-10">
          <div className="w-20 h-20 overflow-hidden rounded-full bg-">
            <img src={formData.avatar} alt="" className="w-full h-full" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl uppercase">
              @{formData.discordName}
            </h1>
            <div className="flex justify-start items-center gap-3">
              {links.map((l) => {
                if (l.value !== "") {
                  return (
                    <a href={l.value} target="_blank" rel="noreferrer">
                      <img src={l.icon} alt="" className="w-5" />
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="bg-white w-80 h-96 overflow-y-scroll rounded-lg p-2">
          <p className="text-lg font-semibold">About myself</p>
          <p className="mt-2">{formData.description}</p>
        </div>
        <div className="bg-white w-max px-10 py-5 rounded-lg">
          <p className="font-semibold text-xl text-center">TOP THREE SKILLS</p>
          <div className="flex flex-col justify-center items-center gap-2 mt-5">
            {formData.skills.map((s, index) => (
              <p
                key={index}
                className="bg-pink-400 rounded-full px-2 w-max font-medium"
              >
                {s.skillInfo.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex justify-center gap-5 items-center flex-wrap">
          <div className="bg-white rounded-full px-3 py-1 w-max text-lg">
            {formData.hours}
          </div>
          <div className="bg-white rounded-full px-3 py-1 w-max text-lg uppercase">
            {formData.weeks}
          </div>
        </div>
        <div className="bg-white rounded-full mx-auto px-3 py-1 w-max text-lg uppercase">
          {formData.timeZone}
        </div>
        <div className="flex flex-col gap-7">
          {experience.map((e) => {
            if (e.isDone) {
              return (
                <div
                  key={e.id}
                  className="bg-white px-10 py-3 flex flex-col justify-center items-center rounded-lg"
                >
                  <h1 className="text-xl font-semibold uppercase">
                    {e.positionName}
                  </h1>
                  <p className="text-gray-400">
                    {e.title}-{e.contract}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {`${new Date(e.startDate).getUTCFullYear()} ${
                      months[new Date(e.startDate).getUTCMonth() + 1]
                    }`}{" "}
                    -{" "}
                    {`${new Date(e.endDate).getUTCFullYear()} ${
                      months[new Date(e.endDate).getUTCMonth() + 1]
                    }`}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Final;
