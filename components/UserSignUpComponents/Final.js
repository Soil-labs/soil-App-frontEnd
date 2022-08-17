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
      <div>
        <div className="profile">
          <img src={formData.avatar} alt="avatar" />
        </div>
        <h1>@{formData.discordName}</h1>
        <p>review & edit</p>
      </div>
      <div className="links">
        <div>
          {formData.links.map((l, index) => {
            l.value !== "" && <img key={index} src={l.icon} alt="" />;
          })}
        </div>
      </div>
      <div>
        <div>
          <p>Short BIO</p>
          <p>{formData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Final;
