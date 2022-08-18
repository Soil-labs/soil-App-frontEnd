import React from "react";

const Thoughts = ({ formData, setFormData }) => {
  return (
    <div className="mt-5">
      <h1 className="text-center font-semibold text-2xl">
        SHARE YOUR THOUGHTS
      </h1>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="flex flex-col justify-center items-start bg-white p-5 rounded-lg">
          <p className="text-lg mb-2">What projects are you most proud of?</p>
          <textarea
            placeholder="start typing here"
            name=""
            id=""
            cols="60"
            rows="7"
            className="border-x-soilGray-500 border-[1px] resize-none rounded-lg"
            value={formData.proudProject}
            onChange={(e) =>
              setFormData({ ...formData, proudProject: e.target.value })
            }
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-start bg-white p-5 rounded-lg">
          <p className="text-lg mb-2">
            What piece of work really showcases your abilities?
          </p>
          <textarea
            placeholder="start typing here"
            name=""
            id=""
            cols="60"
            rows="7"
            className="border-x-soilGray-500 border-[1px] resize-none rounded-lg"
            value={formData.pieceOfWork}
            onChange={(e) =>
              setFormData({ ...formData, pieceOfWork: e.target.value })
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
