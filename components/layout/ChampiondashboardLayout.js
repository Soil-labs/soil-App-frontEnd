import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { findProjects_fromMember } from "../../redux/slices/projectsSlice";
import ProjectsNavigation from "../ProjectsNavigation/ProjectsNavigation";
import Layout from "./Layout";

export const ChampionDashboardLayout = ({ children }) => {
  const { projectsInspect } = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log({ projectsInspect });
    if (projectsInspect.isDataAvailable) return;
    dispatch(findProjects_fromMember({ _id: "995604464469803048" }));
  }, [dispatch, projectsInspect]);

  return (
    <Layout>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <div className="py-10">
          <main className="mx-auto lg:max-w-7xl grid grid-cols-12 gap-x-8">
            <div className="col-span-4">
              <ProjectsNavigation />
            </div>
            <section className="col-span-8">{children}</section>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default ChampionDashboardLayout;
