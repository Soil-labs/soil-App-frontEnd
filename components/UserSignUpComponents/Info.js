/* eslint-disable @next/next/no-img-element */
import React from "react";

const Info = ({ formData, setFormData }) => {
  return (
    <div className="mt-10 flex flex-col gap-10 w-[50rem]">
      <div className="flex justify-between items-center">
        <div className="bg-white w-max px-10 py-4 rounded-lg shadow-lg">
          <p>What&apos;s your discord username?</p>
          <input
            type="text"
            className="border-b-2 border-l-transparent border-t-transparent border-r-transparent border-[#505050] border-dotted focus:outline-0"
            value={formData.discordName}
          />
        </div>
        <div className="h-20 w-20 bg-gray-600 rounded-full overflow-hidden flex justify-center items-center relative">
          {/* <input
            type="file"
            className="h-full w-full cursor-pointer opacity-0 absolute top-0 left-0"
            onChange={(e) =>
              setFormData({
                ...formData,
                avatar: URL.createObjectURL(e.target.files[0]),
              })
            }
          /> */}
          <img
            src={formData.avatar}
            className={`h-full w-full ${
              formData.avatar != "" ? "block" : "hidden"
            }`}
            alt="avatar"
          />
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 py-4 flex gap-10">
        <div className="">
          <p>
            What would you like a future colloborator to know about you? This is
            your chance to sell yourself!
          </p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="flex flex-col gap-5 text-[#686868] font-semibold">
          <p>Some Inspiration:</p>
          <p>What makes it great to work with you?</p>
          <p>What are you really, really good at?</p>
          <p>How are you on a team, usually</p>
          <p>What are some things you&apos;d rather not do?</p>
          <p>How will you convince people to work with you?</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
