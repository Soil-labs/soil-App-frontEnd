import InspectUserShimmer from "./InspectUserShimmer";

function InspectUsersListShimmer() {
    const members = Array(8).fill(1);
    return (
        <div className="flex-col">
            {members.map((member, index) => {
                return <InspectUserShimmer key={index} />;
            })}
        </div>
    );
}

export default InspectUsersListShimmer;
