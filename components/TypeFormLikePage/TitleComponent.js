import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../redux/slices/projectSlice";
import Layout from "../layout/Layout";
import FlowLayout from "../layout/FlowLayout";
import ProgressBar from "../layout/ProgressBar";

const DescriptionComponent = (props) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleChangePhase = () => {
    const params = {
      title: title,
      returnDates: true,
      returnBudget: true,
      returnCollaborationLinks: true,
    };

    console.log("params from Form child", params);
    dispatch(updateProject(params));
    props.changePhase(props.phase);
  };

  return (
    <>
      {/* Background */}
      <div className="bg-soilGray-200 h-screen w-full">
        <FlowLayout
          currentStep={props.phase + 1}
          handleNextButton={() => handleChangePhase()}
        >
          <div className="text-center space-y-[19px] mb-[96px] mt-[129px]">
            <p className="text-[26px]">NAME YOUR PROJECT</p>
            <p className="text-[16px]">
              Great titles are short & descriptive, you can use emojis too!
            </p>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Title of your project
            </label>
            <div className="mt-1 ">
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                name="title"
                id="title"
                className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* <div className="mt-[34rem] ml-[40px] flex justify-end">
            <NextButton handleChangePhase={handleChangePhase} />
          </div> */}
        </FlowLayout>
      </div>
    </>
  );
};

export default DescriptionComponent;
