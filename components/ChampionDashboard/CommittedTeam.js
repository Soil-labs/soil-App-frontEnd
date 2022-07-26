import Image from "next/image";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

import placeholder_avatar from "./placeholder_avatar.png";

const colors = [
  "#1abc9c60",
  "#2ecc7160",
  "#3498db60",
  "#9b59b660",
  "#34495e60",
  "#f1c40f60",
  "#e67e2260",
  "#e74c3c60",
  "#ecf0f160",
  "#95a5a660",
];

const Chart = ({ members }) => {
  const labels = Object.keys(members[0].memberInfo.attributes);
  const datasets = members.map(({ memberInfo }, i) => {
    return {
      label: memberInfo.discordName,
      data: Object.keys(memberInfo.attributes).map(
        (key) => memberInfo.attributes[key]
      ),
      fill: true,
      backgroundColor: colors[i],
      borderColor: colors[i],
      pointBackgroundColor: colors[i],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: colors[i],
    };
  });
  console.log({ labels });
  console.log({ datasets });
  return (
    <Radar
      data={{
        labels,
        datasets,
      }}
    />
  );
};

const MemberAvatar = ({ memberInfo }) => (
  <div>
    <figure className="w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden">
      <Image
        src={
          memberInfo.discordAvatar
            ? memberInfo.discordAvatar
            : placeholder_avatar
        }
        width="64px"
        height="64px"
        alt="discord avatar"
      />
    </figure>
    <figcaption className="pt-1 text-center">
      {memberInfo.discordName}
    </figcaption>
  </div>
);

const CommittedTeam = ({ members }) => {
  console.log("\n\nMEMBERS: ", members);
  return (
    <div className="p-16">
      {members.length > 0 && (
        <>
          <div className="w-full pb-12 flex gap-6 justify-center flex-wrap">
            {members.map(({ memberInfo }, i) => (
              <>
                <MemberAvatar
                  key={`committed_avatar_${i}`}
                  memberInfo={memberInfo}
                />
              </>
            ))}
          </div>
          <h3 className="pb-12 text-white font-bold text-2xl text-center">
            OVERALL TEAM COMPOSITION
          </h3>
          <div className="bg-white rounded-full p-16">
            <Chart members={members} />
          </div>
          <div className="flex justify-center pt-12">
            <button className="py-2 px-4 rounded-lg bg-blue-600 text-white text-xl">
              KICK OFF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CommittedTeam;
