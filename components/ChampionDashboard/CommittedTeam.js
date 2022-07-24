import Image from "next/image";

import placeholder_avatar from "./placeholder_avatar.png";

// const TeamMemberCard = ({ member }) => {
//   return (
//     <article className="flex gap-8 px-8 py-6 border-2 border-[#8dc220a5] rounded-2xl">
//       {/* avatar */}
//       <div className="flex items-center">
//         <div className="w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden">
//           <Image src={placeholder_avatar} alt="placeholder_avatar" />
//         </div>
//       </div>
//       {/* username & endorsments */}
//       <div className="flex items-center grow">
//         <div>
//           <div className="font-bold text-lg">
//             @{member.memberInfo.discordName}
//           </div>
//           <div className="text-sm text-gray-600">20+ endorsements</div>
//         </div>
//       </div>
//       {/* see application button */}
//       <div className="flex items-center">
//         <button className="rounded-full text-white px-3 py-1 bg-[#8dc220a5]">
//           SEE APPLICATION
//         </button>
//       </div>
//       {/* accept button & reject button */}
//       <div className="flex flex-col gap-2">
//         <button className="rounded-full text-white px-3 py-1 bg-[#8dc220a5]">
//           ACCEPT
//         </button>
//         <button className="rounded-full text-white px-3 py-1 bg-[#fc502ad8]">
//           REJECT
//         </button>
//       </div>
//     </article>
//   );
// };

const CommittedTeam = ({ members }) => {
  return (
    <div className="p-8">
      <div className="pt-6 pb-8">Committed Team!</div>
      {/* <div className="px-4 sm:px-0">
        <div className="flex flex-col gap-8">
          {members.map((member, i) => (
            <TeamMemberCard key={`team-member-card_${i}`} member={member} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default CommittedTeam;