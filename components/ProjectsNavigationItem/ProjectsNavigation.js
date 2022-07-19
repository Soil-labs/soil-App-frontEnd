import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ProjectsNavigationItem } from "./";

const ProjectsNavigation = () => {
  const router = useRouter();
  const { _id } = router.query;
  const { projectsInspect } = useSelector((state) => state);
  const { isDataAvailable, projectsInfo } = projectsInspect;
  return (
    <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
      <div className="pb-8 space-y-1">
        {!isDataAvailable && "Fetching projects..."}
        {isDataAvailable &&
          projectsInfo.map((project, i) => (
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
