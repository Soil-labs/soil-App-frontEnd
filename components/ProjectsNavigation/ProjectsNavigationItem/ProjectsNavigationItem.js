import Image from "next/image";
import Link from "next/link";

import placeholder_avatar from "./placeholder_avatar.png";

import { classNames } from "../../../util";
import DaysLeft from "./DaysLeft";

const ProjectsNavigationItem = ({ project, isCurrentPage }) => {
  const numberEngaged = project.info.team.reduce((acc, member) => {
    if (member.phase === "engaged" || member.phase === "committed") acc++;
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
          <DaysLeft isCurrentPage={isCurrentPage} />
          <div className="grid grid-cols-2 gap-1">
            <div
              className={classNames(
                "px-3 py-1 rounded-full shadow-lg flex justify-between",
                isCurrentPage ? "bg-[#8dc220a5]" : "bg-[#8dc22066]"
              )}
            >
              <span>shortlisted:</span>
              <span>{project.info.team.length}</span>
            </div>
            <div
              className={classNames(
                "px-3 py-1 rounded-full shadow-lg flex justify-between",
                isCurrentPage ? "bg-[#8dc220a5]" : "bg-[#8dc22066]"
              )}
            >
              <span>engaged:</span>
              <span className="">{numberEngaged}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default ProjectsNavigationItem;
