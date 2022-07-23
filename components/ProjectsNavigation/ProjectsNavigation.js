import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ProjectsNavigationItem } from "./ProjectsNavigationItem";

const ProjectsNavigation = () => {
  const router = useRouter();
  const { _id } = router.query;
  const { projectsInspect } = useSelector((state) => state);
  const { isDataAvailable, projectsInfo } = projectsInspect;
  return (
    <nav>
      <div className="flex flex-col gap-8 py-6">
        <div className="text-3xl">Hey there, Champion!</div>
        <div className="text-3xl font-bold">YOUR PROJECTS</div>
      </div>
      <div className="sticky top-4 pb-8 space-y-4">
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
