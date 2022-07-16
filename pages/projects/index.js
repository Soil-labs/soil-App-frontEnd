import HowToApply from "../../components/HowToApply";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { findProjects } from "../../redux/slices/projectsSlice";

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
    projects: [],
  },
  {
    title: "Recommended",
    fullTitle: "Recommended",
    projects: [],
  },
  {
    title: "Favourite",
    fullTitle: "Favourite",
    projects: [],
  },
];

export default function FavouriteProjects() {
  const [currentTab, setCurrentTab] = useState(0);

  tabs[0].projects = useSelector((state) => {
    console.log(state);
    return state.projectsInspect.projectsInfo;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      returnRole: true,
      returnBudget: true,
      returnTeam: true,
    };
    dispatch(findProjects(params));
  }, [dispatch]);

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
                className={`relative bg-white h-full pt-2 px-7 text-center border-t ${
                  !index ? "border-l" : ""
                } ${currentTab == index ? "" : "bg-slate-100"}`}
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
            {!tabs[currentTab].projects.length && (
              <p className="text-center text-slate-500">
                There are no projects
              </p>
            )}
            {!!tabs[currentTab].projects.length &&
              tabs[currentTab].projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg px-3 py-3 mb-4 flex shadow-[0px_2px_7px_rgba(0,48,142,0.1)]"
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
                    <div>
                      <span className="text-xs text-slate-500 mr-1">
                        ⚡️ Match:
                      </span>
                      <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gradientViolet to-gradientBlue">
                        <span className="font-bold text-2xl">{75}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col justify-center">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 mb-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="mr-2">Apply Now</span>
                      <span>{">"}</span>
                    </button>
                    <Link href={`/projects/${project._id}`}>
                      <a className="underline text-sm text-center text-slate-600 hover:text-slate-400">
                        More info
                      </a>
                    </Link>
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
