import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../redux/slices/projectSlice";
import FlowLayout from "../layout/FlowLayout";
import ProgressBar from "../layout/ProgressBar";
import NextButton from "../NextButton";

const DescriptionComponent = (props) => {
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleChangePhase = () => {
    const params = {
      _id: props._id,
      description: description,
      returnDates: true,
      returnBudget: true,
      returnCollaborationLinks: true,
    };
    dispatch(updateProject(params));
    console.log("params from Descpition child", params);
    props.changePhase(props.phase);
  };

  const handleChangePhaseBack = () => {
    props.changePhaseBack(props.phase);
  };

  return (
    <>
      {/* Background */}
      <div className="w-full">
        {/* <FlowLayout
          currentStep={props.phase + 1}
          handleNextButton={() => handleChangePhase()}
          handlePreviousButton={() => handleChangePhaseBack()}
        > */}
        <div className="text-center space-y-[19px] mb-[62px] mt-[80px]">
          <p className="text-[26px]">DESCRIBE YOUR PROJECT</p>
          <p className="text-[16px]">
            few key sentences on what is the goal, mission, vision of this
            project{" "}
          </p>
        </div>

        <div>
          <div className="px-[25px]">
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              name="title"
              id="title"
              className="shadow-sm block w-full h-[140px] sm:text-sm border-gray-300 rounded-md pt-[25px] text-[16px]"
            />
          </div>
        </div>
        {/* <div className="flex justify-between mt-[199px]"> */}
        {/* <PreviousButton handleChangePhaseBack={handleChangePhaseBack} />
            <NextButton handleChangePhase={handleChangePhase} /> */}
        {/* </div> */}
        {/* </FlowLayout> */}
        <NextButton
          className="absolute bottom-7 right-7"
          handleChangePhase={handleChangePhase}
        />
      </div>
    </>
  );
};

export default DescriptionComponent;
