import NextButton from "../NextButton";
import PreviousButton from "../previousButton";
import HeaderNew from "./HeaderNew";
import ProgressBar from "./ProgressBar";
import { TempBlankNavbar } from "./TempBlankNavbar";
import { useSession } from "next-auth/react";

function FlowLayout({
  children,
  currentStep,
  handleNextButton,
  handlePreviousButton,
  lastPage,
  lastPageButtonText,
  handleLastButton,
}) {
  const { data: session } = useSession();

  return (
    <div className="h-full w-full ">
      <HeaderNew />
      {session ? (
        <div className="w-[757px] relative min-h-[85vh] px-[40px] pt-[60px] pb-[33px] rounded-2xl bg-white shadow-lg m-auto mt-[35px]">
          {/* <div className=" flex flex-col"> */}
          {/* <ProgressBar
            // numberofSteps={6}
            currentStep={currentStep}
          /> */}
          {children}
          {!lastPage && (
            <div>
              <NextButton
                className="absolute bottom-10 right-10"
                handleChangePhase={handleNextButton}
              />
              {currentStep > 1 && (
                <PreviousButton
                  handleChangePhaseBack={handlePreviousButton}
                  className="absolute bottom-10 left-10"
                />
              )}
            </div>
          )}
          {lastPage && (
            <button
              className={`w-[132px], h-[40px] py-[10py] px-[11px] bg-soilGreen-20 rounded-[6px] absolute bottom-5 left-2/4 -translate-x-2/4`}
              onClick={() => {
                handleLastButton();
              }}
            >
              <div className="flex">
                <span>{lastPageButtonText}</span>
              </div>
            </button>
          )}
          {/* </div> */}
        </div>
      ) : (
        <div className="mt-52 w-full text-[30px] font-black flex justify-center items-center">
          Login to continue...
        </div>
      )}
    </div>
  );
}

export default FlowLayout;
