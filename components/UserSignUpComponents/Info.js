/* eslint-disable @next/next/no-img-element */
import React from "react";

const Info = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-10 font-Inter">
      <h1 className="font-Inter text-2xl font-semibold">
        FILL OUT YOUR ONBOARDING PROFILE
      </h1>
      <div>
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img className="h-full w-full" src={formData.avatar} alt="" />
        </div>
        <p className="text-center uppercase mt-4">@{formData.discordName}</p>
      </div>
      <div>
        <p className="text-[20px] w-8/12 leading-6 mb-4">
          What would you like people to know about you? This is your chance to
          sell yourself!
        </p>
        <textarea
          className="w-full h-full resize-none rounded-lg border-[#AAAAAA]"
          name=""
          id=""
          rows="10"
          value={formData.description}
          placeholder="Start typing here"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
      </div>
    </div>
  );
};

{
  /*  */
}

export default Info;
