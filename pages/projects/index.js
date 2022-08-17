import HowToApply from "../../components/HowToApply";
import Button from "../../components/Button";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  findProjects,
  findProjects_RecommendedToUser,
} from "../../redux/slices/projectsSlice";
import ProjectsPageLayout from "../../components/layout/ProjectsPageLayout";

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

const tabs = [
  {
    title: "All projects",
    fullTitle: "All projects",
  },
  {
    title: "Recommended",
    fullTitle: "Recommended",
  },
  {
    title: "Favourite",
    fullTitle: "Favourite",
  },
];

function Projects() {
  const router = useRouter();
  const { tab } = router.query;
  const [currentTab, setCurrentTab] = useState(0);
  const [tabProjects, setTabProjects] = useState([]);

  const projects = useSelector((state) => {
    console.log(state);
    return state.projectsInspect.projectsInfo;
  });

  const member = {};
  member._id = useSelector((state) => state.member._id);
  member.projects = useSelector((state) => state.member.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tab === "0" || tab === "1" || tab === "2") setCurrentTab(Number(tab));
  }, [tab]);

  useEffect(() => {
    if (currentTab == 2) {
      setTabProjects(member.projects.filter((proj) => proj.favorite));
    } else {
      setTabProjects(projects);
    }
  }, [currentTab, projects, member.projects]);

  useEffect(() => {
    let params;
    switch (currentTab) {
      case 0:
        params = {
          returnRole: true,
          returnBudget: true,
          returnTeam: true,
        };
        dispatch(findProjects(params));
        break;
      case 1:
        params = {
          memberID: member._id,
          returnRole: true,
          returnBudget: true,
          returnTeam: true,
        };
        dispatch(findProjects_RecommendedToUser(params));
        break;
      case 2:
        break;
      default:
        return;
    }
  }, [dispatch, currentTab, member._id]);

  function isCurrentTab(e, sideCorner) {
    const cornerSize = 40;
    const clickX = e.clientX - e.target.getBoundingClientRect().left;
    const clickY = e.clientY - e.target.getBoundingClientRect().top;
    let middleY;
    if (sideCorner === "right") {
      middleY = clickX; // y = x
    } else {
      middleY = cornerSize - clickX; // y = cornerSize - x
    }
    return clickY > middleY;
  }

  function handleTabClick(e, index, sideCorner = "") {
    if (
      sideCorner === "right" &&
      index < tabs.length - 1 &&
      !isCurrentTab(e, sideCorner)
    ) {
      setCurrentTab(index + 1);
    } else if (
      sideCorner === "left" &&
      currentTab > 0 &&
      !isCurrentTab(e, sideCorner)
    ) {
      setCurrentTab(index - 1);
    } else {
      setCurrentTab(index);
    }
  }

  function calculateTabZindex(index) {
    if (currentTab == index) {
      return 50;
    } else if (currentTab > index) {
      return 30 + index;
    } else {
      return 40 - index;
    }
  }
  return (
    <Fragment>
      {/* Main column */}
      <main className="col-span-3 relative">
        <div className="flex">
          {tabs.map((tab, index) => (
            <div
              style={{ zIndex: calculateTabZindex(index) }}
              className={`relative h-10 cursor-pointer ${
                currentTab == index ? "z-50" : "bg-slate-100"
              }`}
              key={index}
            >
              {index != 0 && index - 1 != currentTab && (
                <div
                  className={`absolute fill-slate-100 -left-10 top-0 stroke-slate-200 ${
                    currentTab == index ? "fill-white" : ""
                  }`}
                  style={{ strokeDasharray: "0,0,57,100" }}
                  onClick={(e) => handleTabClick(e, index, "left")}
                >
                  <svg height="40" width="40">
                    <polygon points="40,0 0,40 40,40" />
                  </svg>
                </div>
              )}
              <div
                className={`relative h-full pt-2 px-3 text-center border-t ${
                  !index ? "border-l" : ""
                } ${currentTab == index ? "bg-white" : "bg-slate-100"}
                ${currentTab > index ? "pr-9" : ""}
                ${currentTab < index ? "pl-9" : ""}
                `}
                key={index}
                onClick={(e) => handleTabClick(e, index)}
              >
                <span>{tab.title}</span>
              </div>
              {index != currentTab - 1 && (
                <div
                  className={`absolute fill-slate-100 -right-10 top-0 stroke-slate-200 ${
                    currentTab == index ? "fill-white" : ""
                  }`}
                  style={{ strokeDasharray: "0,81,100" }}
                  onClick={(e) => handleTabClick(e, index, "right")}
                >
                  <svg height="40" width="40">
                    <polygon points="0,0 0,40 40,40" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="col-span-3 bg-white rounded-tl-none rounded-lg md:mb-4 z-50 w-full">
          <div className="w-full p-6 px-2 md:px-6">
            {!tabProjects.length && (
              <p className="text-center text-slate-500">
                There are no projects
              </p>
            )}
            {!!tabProjects.length &&
              tabProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg px-3 py-3 mb-4 flex shadow-[0px_2px_14px_rgba(0,48,142,0.1)]"
                >
                  <div
                    className="rounded-lg overflow-hidden mr-4"
                    style={{
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    <Image
                      src={"https://placeimg.com/480/480/nature"}
                      alt="placeholder image"
                      width={80}
                      height={80}
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="font-bold">{project.title}</h3>
                    {project.matchPercentage && (
                      <div>
                        <span className="text-xs text-slate-500 mr-1">
                          ⚡️ Match:
                        </span>
                        <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gradientViolet to-gradientBlue">
                          <span className="font-bold text-2xl">
                            {project.matchPercentage}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="ml-auto flex flex-col justify-center">
                    <Link href={`/projects/${project._id}`}>
                      <Button hasChevron>Apply Now</Button>
                    </Link>
                    {/* <Link href={`/projects/${project._id}`}>
                      <a className="underline mt-2 text-sm text-center text-slate-600 hover:text-slate-400">
                        More info
                      </a>
                    </Link> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>

      {/* How to apply column */}
      <section className="col-span-1">
        <HowToApply data={mockData.howToApply} />
      </section>
    </Fragment>
  );
}

Projects.getLayout = function getLayout(page) {
  return <ProjectsPageLayout>{page}</ProjectsPageLayout>;
};

export default Projects;
