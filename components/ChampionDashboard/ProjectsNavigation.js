import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { classNames } from "../../util";

import placeholder_avatar from "./placeholder_avatar.png";

const DaysLeft = ({ isCurrentPage }) => {
  // need to calculate days left: (kickoff date - current date)

  const totalDays = 23;
  const daysLeft = 20;

  return (
    <div className="rounded-full overflow-hidden shadow-lg bg-[#e8e4e4] relative">
      <div
        className={classNames(
          "px-3 py-1 ",
          isCurrentPage ? "bg-[#8dc220a5]" : "bg-[#8dc22066]"
        )}
        style={{ width: `${(daysLeft / totalDays) * 100}%` }}
      >
        <span
        //  className="absolute left-0"
        >
          {daysLeft} days left
        </span>
      </div>
    </div>
  );
};

const ProjectsNavigationItem = ({ project, isCurrentPage }) => {
  const numberEngaged = project.info.team.reduce((acc, member) => {
    if (member.phase === "engaged") acc++;
    return acc;
  }, 0);

  const numberCommitted = project.info.team.reduce((acc, member) => {
    if (member.phase === "committed") acc++;
    return acc;
  }, 0);

  return (
    <Link href={`/champion-dashboard/${project.info._id}`}>
      <a
        className={classNames(
          "flex gap-4 px-3 py-4 text-sm font-medium border-2 border-[#8dc220a5] rounded-2xl",
          isCurrentPage
            ? "bg-[#8dc2204c] text-gray-900"
            : "text-gray-600 hover:bg-gray-50"
        )}
        aria-current={isCurrentPage}
      >
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full shadow-lg overflow-hidden">
            <Image src={placeholder_avatar} alt="placeholder_avatar" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="text-xl font-bold">{project.info.title}</div>
          {/* <DaysLeft isCurrentPage={isCurrentPage} /> */}
          <div className="grid grid-cols-2 gap-1">
            <div
              className={classNames(
                "px-3 py-1 rounded-full shadow-lg flex justify-between",
                isCurrentPage ? "bg-[#8dc220a5]" : "bg-[#8dc22066]"
              )}
            >
              <span>engaged:</span>
              <span className="">{numberEngaged}</span>
            </div>
            <div
              className={classNames(
                "px-3 py-1 rounded-full shadow-lg flex justify-between",
                isCurrentPage ? "bg-[#8dc220a5]" : "bg-[#8dc22066]"
              )}
            >
              <span>committed:</span>
              <span>{numberCommitted}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const ProjectsNavigation = () => {
  const router = useRouter();
  const { _id } = router.query;
  const { projectsInspect } = useSelector((state) => state);
  const { isDataAvailable, projectsInfo } = projectsInspect;

  const projects = projectsInfo.filter((project) => project.champion === true);

  return (
    <nav>
      <div className="flex flex-col gap-8 py-6">
        <div className="text-3xl">Hey there, Champion!</div>
        <div className="text-3xl font-bold">YOUR PROJECTS</div>
      </div>
      <div className="sticky top-4 pb-8 space-y-4">
        {!isDataAvailable && "Fetching projects..."}
        {isDataAvailable &&
          projects.map((project, i) => (
            <ProjectsNavigationItem
              key={`projects_navigation_item_${i}`}
              project={project}
              isCurrentPage={project.info._id === _id}
            />
          ))}
      </div>
    </nav>
  );
};

export default ProjectsNavigation;
