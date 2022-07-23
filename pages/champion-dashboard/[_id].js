import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ChampionDashboardLayout } from "../../components/layout/ChampiondashboardLayout";
import { TeamMemberCard } from "../../components/TeamMemberCard";

const tabs = [
  { name: "Overview", href: "#", current: true },
  { name: "# engaged", href: "#", current: false },
  { name: "# Committed", href: "#", current: false },
];

const Project = () => {
  const router = useRouter();
  const { _id } = router.query;

  const {
    projectsInspect: { isDataAvailable, projectsInfo },
  } = useSelector((state) => state);

  const [project] = projectsInfo.filter((p) => p.info._id === _id);

  return (
    <>
      <main className="col-span-3">
        <section className="rounded-2xl bg-[#8dc2204c]">
          <div>tab navigation</div>
          <div className="p-8">
            <div className="pb-8">
              Talent that engaged with your shortlist invitation shows up here.
            </div>
            <div className="px-4 sm:px-0">
              {!isDataAvailable && "Fetching data..."}
              {isDataAvailable && project && (
                <div className="flex flex-col gap-8">
                  {project.info.team.map((member, i) => (
                    <TeamMemberCard
                      key={`team-member-card_${i}`}
                      member={member}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

Project.getLayout = function getLayout(page) {
  return <ChampionDashboardLayout>{page}</ChampionDashboardLayout>;
};

export default Project;
