import DPShimmer from "./DPShimmer";
function InspectUserShimmer() {
    return (
        <div className="py-5 border-gray-200 border-t-2 px-6 items-start flex animate-pulse">
            <div className="basis-1/6">
                <DPShimmer />
            </div>
            <div className="flex-col justify-start basis-4/6 space-y-2">
                <div className="bg-gray-300 w-32 h-4 rounded-md"></div>
                <div className="bg-gray-300 w-16 h-4 rounded-md"></div>
            </div>
            <div className="basis-1/6 flex justify-center">
                <div className="bg-gray-300 rounded-md w-8 h-8"></div>
            </div>
        </div>
    );
}

export default InspectUserShimmer;
