import Image from "next/image";
import Link from "next/link";

import placeholder_avatar from "./placeholder_avatar.png";

import { classNames } from "../../util";

const ProjectsNavigationItem = ({ project, isCurrentPage }) => {
  return (
    <Link href={`/champion-dashboard/${project.info._id}`}>
      <a
        className={classNames(
          "flex gap-4 px-3 py-2 text-sm font-medium border-2 border-[#8dc220a5] rounded-lg",
          isCurrentPage
            ? "bg-[#8dc2204c] text-gray-900"
            : "text-gray-600 hover:bg-gray-50"
        )}
        aria-current={isCurrentPage}
      >
        <div className="w-16 h-16">
          <Image
            src={placeholder_avatar}
            alt="placeholder_avatar"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="text-xl font-bold">{project.info.title}</div>
          <div className="p-2 rounded-full shadow-lg">time bar</div>
          <div className="grid grid-cols-2">
            <span>shortlisted</span>
            <span>engaged</span>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default ProjectsNavigationItem;
