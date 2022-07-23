import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { ChampionDashboardLayout } from "../../components/layout/ChampiondashboardLayout";
import { TeamMemberCard } from "../../components/TeamMemberCard";
import { classNames } from "../../util";

const tabs = [
  { name: "Overview", href: "#", current: true },
  { name: "# engaged", href: "#", current: false },
  { name: "# Committed", href: "#", current: false },
];

const ENGAGED_TAB = "ENGAGED";
const COMMITTED_TAB = "COMMITTED";

const Project = () => {
  const [currentTab, setCurrentTab] = React.useState(ENGAGED_TAB);
  const router = useRouter();
  const { _id } = router.query;

  const {
    projectsInspect: { isDataAvailable, projectsInfo },
  } = useSelector((state) => state);

  const [project] = projectsInfo.filter((p) => p.info._id === _id);

  return (
    <>
      <main className="col-span-3">
        {!isDataAvailable && "Fetching data..."}
        {isDataAvailable && project && (
          <section className="rounded-2xl overflow-hidden bg-[#8dc2204c]">
            <div className="grid grid-cols-2">
              <button
                className={classNames(
                  "px-6 py-3",
                  currentTab === ENGAGED_TAB
                    ? "bg-transparant"
                    : "bg-[#8dc22066]"
                )}
                onClick={() => setCurrentTab(ENGAGED_TAB)}
              >
                ENGAGED TALENT
              </button>
              <button
                className={classNames(
                  "px-6 py-3",
                  currentTab === COMMITTED_TAB
                    ? "bg-transparant"
                    : "bg-[#8dc22066]"
                )}
                onClick={() => setCurrentTab(COMMITTED_TAB)}
              >
                COMMITTED TEAM
              </button>
            </div>
            <div className="p-8">
              <div className="pt-6 pb-8">
                Talent that engaged with your shortlist invitation shows up
                here.
              </div>
              <div className="px-4 sm:px-0">
                <div className="flex flex-col gap-8">
                  {project.info.team.map((member, i) => (
                    <TeamMemberCard
                      key={`team-member-card_${i}`}
                      member={member}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

Project.getLayout = function getLayout(page) {
  return <ChampionDashboardLayout>{page}</ChampionDashboardLayout>;
};

export default Project;
