import NextButton from "../NextButton";
import PreviousButton from "../previousButton";
import HeaderNew from "./HeaderNew";
import ProgressBar from "./ProgressBar";
import { TempBlankNavbar } from "./TempBlankNavbar";
import {useSession} from 'next-auth/react';

function FlowLayout({ children, currentStep, handleNextButton, handlePreviousButton }) {

  const {data: session} = useSession();

  return (
    <div className="h-full w-full ">
      <HeaderNew />
      {session ? <div className="w-[757px] relative min-h-[85vh] px-[40px] pt-[60px] pb-[33px] rounded-2xl bg-white shadow-lg m-auto mt-[35px]">
        {/* <div className=" flex flex-col"> */}
          <ProgressBar
            // numberofSteps={6}
            currentStep={currentStep}
          />
          {children}
          {<div>
            <NextButton className="absolute bottom-10 right-10" handleChangePhase={handleNextButton} />
            {currentStep > 1 && <PreviousButton handleChangePhaseBack={handlePreviousButton} className="absolute bottom-10 left-10"/>}
          </div>}
        {/* </div> */}
      </div> : <div className="mt-52 w-full text-[30px] font-black flex justify-center items-center">Login to continue...</div>}
    </div>
  );
}

export default FlowLayout;
