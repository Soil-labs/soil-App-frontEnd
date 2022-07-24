import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import {
  EngagedTalent,
  Shortlisted,
  CommittedTeam,
} from "../../components/ChampionDashboard";
import { ChampionDashboardLayout } from "../../components/layout/ChampiondashboardLayout";
import { classNames } from "../../util";

const ENGAGED_TAB = "ENGAGED";
const SHORTLISTED_TAB = "SHORTLISTED";
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
            <div className="grid grid-cols-3">
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
                  currentTab === SHORTLISTED_TAB
                    ? "bg-transparant"
                    : "bg-[#8dc22066]"
                )}
                onClick={() => setCurrentTab(SHORTLISTED_TAB)}
              >
                SHORTLISTED TALENT
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
            {currentTab === ENGAGED_TAB && (
              <EngagedTalent members={project.info.team} />
            )}
            {currentTab === SHORTLISTED_TAB && (
              <Shortlisted
                members={project.info.team.filter(
                  (member) => member.phase === "shortlisted"
                )}
              />
            )}
            {currentTab === COMMITTED_TAB && (
              <CommittedTeam
                members={project.info.team.filter(
                  (member) => member.phase === "committed"
                )}
              />
            )}
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
