/* eslint-disable @next/next/no-img-element */
import React from "react";

const Info = ({ formData, setFormData }) => {
  return (
    <div className="mt-10 flex justify-center items-center flex-col gap-5 ">
      <h1 className="uppercase text-[26px] text-center font-Inter font-medium text-bold">
        Fill out your onboarding profile
      </h1>
      <div className="w-[6.8rem] overflow-hidden rounded-full">
        <img className="w-full h-full" src={formData.avatar} alt="" />
      </div>
      <p className="font-Inter uppercase">@{formData.discordName}</p>
      <p className="self-start text-[20px] font-Inter">
        What would you like people to know about you? <br /> This is your chance
        to sell yourself!
      </p>
      <textarea
        className="w-full h-52 rounded-lg p-5 resize-none"
        placeholder="Start typing here"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
    </div>
  );
};

export default Info;
