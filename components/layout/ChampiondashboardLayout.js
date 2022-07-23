import React from "react";
import { useSelector, useDispatch } from "react-redux";

import HowToApply from "../HowToApply";

import { findProjects_fromMember } from "../../redux/slices/projectsSlice";
import ProjectsNavigation from "../ProjectsNavigation/ProjectsNavigation";
import Layout from "./Layout";

const mockData = {
  howToApply: {
    title: "How to apply?",
    steps: [
      {
        text: "Express interest by adding project to favourites",
        emoji: "❤️",
        color: "rgb(254 226 226)",
      },
      {
        text: "Apply throught Magic Application",
        emoji: "📮",
        color: "rgb(254 249 195)",
      },
      {
        text: "Confirm we’ve got all your information right & sign the application.",
        emoji: "📝",
        color: "rgb(254 202 202)",
      },
      {
        text: "Keep track of your application status in the magic application list",
        emoji: "🎊",
        color: "rgb(255 237 213)",
      },
    ],
  },
};

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
          <main className="mx-auto lg:max-w-7xl grid grid-cols-12 gap-x-3">
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
