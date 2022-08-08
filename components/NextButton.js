import React from 'react'

const NextButton = ({handleChangePhase}) => {
  return (
<div className="float-right mr-[220px] -mt-[81px]">
    <button className="w-[132px], h-[40px] py-[10py] px-[11px] bg-soilGreen rounded-[6px]"
     onClick={() => {
        handleChangePhase();
      }}
    >
     NEXT
    </button>
</div>
  )
}

export default NextButton


