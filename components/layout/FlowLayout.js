import ProgressBar from "./ProgressBar";
import {TempBlankNavbar} from "./TempBlankNavbar";

function FlowLayout({ children, currentStep }) {
  return (
    <div className="h-screen w-screen">
      <TempBlankNavbar />
      <div className="w-[757px] min-h-[85vh] rounded-2xl bg-white shadow-lg m-auto mt-[35px]">
      <div className="px-[40px] pt-[60px] pb-[33px] flex flex-col">
        <ProgressBar
          // numberofSteps={6}
          currentStep={currentStep}
          />{children}</div>
    </div>
    </div>
  );
}

export default FlowLayout;
