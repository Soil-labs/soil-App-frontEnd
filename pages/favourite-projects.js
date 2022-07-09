import apiClient from "./api/axios";
import Avatar from "../components/Avatar";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const mockData = {
  address: "exwhyzeeasdasdasd.eth",

  projectTypes: [
    {
      type: "Apply",
      title: "Active applications",
      number: 6,
    },
    {
      type: "Ongoing",
      title: "Active applications",
      number: 2,
    },
  ],

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

  tabs: [
    {
      title: "All projects",
      fullTitle: "All projects",
      projects: [
        {
          title: "Soil 🌱 Talent Coordination App",
          img: "https://placeimg.com/640/480/nature",
          match: 57,
        },
        {
          title: "Developer DAO Website",
          img: "https://placeimg.com/640/480/nature",
          match: 39,
        },
      ],
    },
    {
      title: "Recommended",
      fullTitle: "Recommended",
      projects: [
        {
          title: "Soil 🌱 Talent Coordination App",
          img: "https://placeimg.com/640/480/nature",
          match: 57,
        },
        {
          title: "Developer DAO Website",
          img: "https://placeimg.com/640/480/nature",
          match: 39,
        },
        {
          title: "Polygon DAO",
          img: "https://placeimg.com/640/480/nature",
          match: 46,
        },
      ],
    },
    {
      title: "Favourite",
      fullTitle: "Favourite",
      projects: [],
    },
  ],
};
//Redux
const getData = () => {
  return () => {
    apiClient({
      data: {
        query: `query{
          characters(page: 1){
            info{
              count
              pages
            }
            results{
              name
              id
              location{
                id
                name
              }
              origin{
                id
                name
              }
              episode{
                id
                episode
                air_date
              }
              image
            }
          }
        }`,
      },
    })
      .then((res) => {
        console.log(res.data.data.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default function FavouriteProjects() {
  const [currentTab, setCurrentTab] = useState(1);

  function handleTabClick(index) {
    setCurrentTab(index);
  }
  return (
    <>
      <div
        role="list"
        className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5"
      >
        {/* User column */}
        <section className="col-span-1">
          <div className="col-span-1 bg-white rounded-lg px-2 py-3 md:mb-4">
            <div className="w-full flex items-center mb-3">
              <div className="w-1/3">
                <Avatar />
              </div>
              <div className="w-2/3 overflow-x-scroll">
                <span className="text-xs">Good Morning</span>
                <div className="overflow-x-scroll">
                  <span className="font-bold">{mockData.address}</span>
                </div>
              </div>
            </div>
            <hr className="w-2/3 mx-auto mb-3"></hr>
            {mockData.projectTypes.map((item, index) => (
              <div className="ml-1 mb-3 overflow-hidden" key={index}>
                <span className="text-slate-500 text-sm">{item.type}</span>
                <div className="relative col-span-1 bg-white border border-gray-200 rounded-md px-2 py-1 mt-1 shadow-[0px_2px_7px_rgba(0,48,142,0.09)]">
                  <span className="text-sm">{item.title}</span>
                  <div className="absolute top-1 right-1 bg-blue-100 rounded-full w-6 h-6 flex justify-center items-center">
                    <span className="text-sm">{item.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main column */}
        <main className="col-span-3 relative">
          <div className="flex">
            {mockData.tabs.map((tab, index) => (
              <div className="relative w-1/4 h-10 cursor-pointer" key={index}>
                {!!index && currentTab >= index && (
                  <div
                    className={`absolute bg-white border-l top-3 -left-8 w-14 h-14 rotate-45 z-40 ${
                      currentTab == index ? "" : "bg-slate-100 z-20"
                    }`}
                    onClick={() => handleTabClick(index)}
                  ></div>
                )}
                <div
                  className={`absolute bg-white w-full h-full pt-2 text-center border-t ${
                    !index ? "border-l" : ""
                  } ${currentTab == index ? "z-40" : "z-30 bg-slate-100"}`}
                  key={index}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="z-50">{tab.title}</span>
                </div>
                {currentTab <= index && (
                  <div
                    className={`absolute bg-white border-t top-3 -right-8 w-14 h-14 rotate-45 z-40 ${
                      currentTab == index ? "" : "bg-slate-100"
                    }`}
                    onClick={() => handleTabClick(index)}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="absolute col-span-3 bg-white rounded-tl-none rounded-lg md:mb-4 z-50 w-full">
            <div className="w-full p-6 px-2 md:px-6">
              {!mockData.tabs[currentTab].projects.length && (
                <p className="text-center text-slate-500">
                  There are no projects
                </p>
              )}
              {!!mockData.tabs[currentTab].projects.length &&
                mockData.tabs[currentTab].projects.map((project, index) => (
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
                        src={project.img}
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
                          <span className="font-bold text-2xl">
                            {project.match}%
                          </span>
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
                      <Link href="#">
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
          <div className="bg-white rounded-lg px-2 py-3 md:mb-4">
            <span className="ml-1 text-slate-500">
              {mockData.howToApply.title}
            </span>
            <ul className="relative mb-2 mt-3">
              {mockData.howToApply.steps.map((item, index) => (
                <>
                  <li className="relative flex items-center mb-1" key={index}>
                    <div className="mr-2">
                      <div
                        className={`rounded-full w-14 h-14 flex justify-center items-center`}
                        style={{ backgroundColor: item.color }}
                      >
                        <span className="block text-lg">{item.emoji}</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs leading-tight h-14">
                      {item.text}
                    </p>
                  </li>
                  {index + 1 < mockData.howToApply.steps.length && (
                    <div className="w-14 flex justify-center mb-2">
                      <div
                        className="w-1 h-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(0deg, transparent, transparent 50%, #fff 50%, #fff 100%), linear-gradient(0deg, #D900A9, #004AD9);",
                          backgroundSize: "3px 10px, 3px 100%",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
