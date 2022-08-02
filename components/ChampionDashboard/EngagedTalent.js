import Image from "next/image";

import placeholder_avatar from "./placeholder_avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { changeTeamMember_Phase_Project } from "../../redux/slices/projectSlice";
import { useRouter } from "next/router";
import { classNames } from "../../util";

const TeamMemberCard = ({ member }) => {
  const router = useRouter();
  const { _id } = router.query;

  const dispatch = useDispatch();

  const handleAcceptClick = () => {
    let params = {
      projectID: _id,
      memberID: member.memberInfo._id,
      phase: "shortlisted",
    };
    dispatch(changeTeamMember_Phase_Project(params));
  };

  const {
    projectInspect: { loading },
  } = useSelector((state) => state);

  return (
    <article className="flex gap-8 px-8 py-6 border-2 border-[#8dc220a5] rounded-2xl">
      {/* avatar */}
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden">
          <Image
            src={
              member.memberInfo.discordAvatar
                ? member.memberInfo.discordAvatar
                : placeholder_avatar
            }
            width="64px"
            height="64px"
            alt="discord avatar"
          />
        </div>
      </div>
      {/* username & endorsments */}
      <div className="flex items-center grow">
        <div>
          <div className="font-bold text-lg">
            @{member.memberInfo.discordName}
          </div>
          <div className="text-sm text-gray-600">20+ endorsements</div>
        </div>
      </div>
      {/* see application button */}
      <div className="flex items-center">
        <button className="rounded-full text-white px-3 py-1 bg-[#8dc220a5]">
          SEE APPLICATION
        </button>
      </div>
      {/* accept button & reject button */}
      <div className="flex flex-col gap-2">
        <button
          onClick={handleAcceptClick}
          className={classNames(
            "rounded-full text-white px-3 py-1 ",
            loading ? "bg-gray-700" : "bg-[#8dc220a5]",
          )}
          disabled={loading}
        >
          {loading ? "submitting..." : "ACCEPT"}
        </button>
        <button className="rounded-full text-white px-3 py-1 bg-[#fc502ad8]">
          REJECT
        </button>
      </div>
    </article>
  );
};

const EngagedTalent = ({ members }) => {
  return (
    <div className="p-8">
      <div className="pt-6 pb-8">
        Talent that engaged with your shortlist invitation shows up here.
      </div>
      <div className="px-4 sm:px-0">
        <div className="flex flex-col gap-8">
          {members.map((member, i) => (
            <TeamMemberCard key={`team-member-card_${i}`} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngagedTalent;
