import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ChampionDashboardLayout } from "../../components/layout/ChampiondashboardLayout";

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
        <div className="px-4 sm:px-0">
          {!isDataAvailable && "Fetching data..."}
          {isDataAvailable && project && (
            <>
              <h2 className="p-8 text-2xl font-bold text-gray-900">
                {project.info.title}
              </h2>

              <div className="px-8">
                <p>{project.info.description}</p>
              </div>
              <div className="p-8">
                {project.info.team.map((member, i) => (
                  <pre key={i} className="p-8 rounded border-2 mt-2">
                    {JSON.stringify(member, null, 2)}
                  </pre>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

Project.getLayout = function getLayout(page) {
  return <ChampionDashboardLayout>{page}</ChampionDashboardLayout>;
};

export default Project;
