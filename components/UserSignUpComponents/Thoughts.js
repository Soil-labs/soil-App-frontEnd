import React from "react";

const Thoughts = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl">
        SHARE YOUR THOUGHTS
      </h1>
      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <div className="flex flex-col justify-center items-start bg-white p-5 rounded-lg">
          <p>What projects are you most proud of?</p>
          <textarea
            name=""
            id=""
            cols="60"
            rows="7"
            className="border-none resize-none"
            value={formData.proudProject}
            onChange={(e) =>
              setFormData({ ...formData, proudProject: e.target.value })
            }
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-start bg-white p-5 rounded-lg">
          <p>What piece of work really showcases your abilities?</p>
          <textarea
            name=""
            id=""
            cols="60"
            rows="7"
            className="border-none resize-none"
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
