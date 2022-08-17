import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EngagedTalent,
  Shortlisted,
  CommittedTeam,
} from "../../components/ChampionDashboard";
import { ChampionDashboardLayout } from "../../components/layout/ChampiondashboardLayout";
import { findProject } from "../../redux/slices/projectSlice";
import { classNames } from "../../util";

const ENGAGED_TAB = "ENGAGED";
const SHORTLISTED_TAB = "SHORTLISTED";
const COMMITTED_TAB = "COMMITTED";

const Project = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { _id } = router.query;

  const [currentTab, setCurrentTab] = React.useState(ENGAGED_TAB);

  // const [project] = projectsInfo.filter((p) => p.info._id === _id);

  React.useEffect(() => {
    setCurrentTab(ENGAGED_TAB);
    dispatch(findProject({ _id, team: true }));
  }, [dispatch, _id]);

  const {
    projectInspect: { isDataAvailable, team },
  } = useSelector((state) => state);

  return (
    <>
      <main className="col-span-3">
        {isDataAvailable && (
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
              {/* <button
                className={classNames(
                  "px-6 py-3",
                  currentTab === SHORTLISTED_TAB
                    ? "bg-transparant"
                    : "bg-[#8dc22066]"
                )}
                onClick={() => setCurrentTab(SHORTLISTED_TAB)}
              >
                SHORTLISTED TALENT
              </button> */}
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
              <EngagedTalent
                members={team.filter((member) => member.phase === "engaged")}
              />
            )}
            {/* {currentTab === SHORTLISTED_TAB && (
              <Shortlisted
                members={team.filter(
                  (member) => member.phase === "shortlisted"
                )}
              />
            )} */}
            {currentTab === COMMITTED_TAB && (
              <CommittedTeam
                members={team.filter((member) => member.phase === "committed")}
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
