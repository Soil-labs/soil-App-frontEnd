import Avatar from "../../components/Avatar";
import SideCard from "../../components/SideCard";
import RoleCard from "../../components/RoleCard";
import FavButton from "../../components/FavButton";
import NumberCircle from "../../components/NumberCircle";
import { useEffect, Fragment } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { findProject } from "../../redux/slices/projectSlice";
import { useRouter } from "next/router";
import ProjectsPageLayout from "../../components/layout/ProjectsPageLayout";

const roles = [
  {
    title: "Backend Engineer",
    duration: "10 weeks",
    experience: "Minimum 2 years in software development",
    number: 2,
    link: "#",
  },
  {
    title: "QA Engineer",
    duration: "20 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
  {
    title: "Team Lead",
    duration: "7 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
  {
    title: "Backend Engineer",
    duration: "10 weeks",
    experience: "Minimum 2 years in software development",
    number: 2,
    link: "#",
  },
  {
    title: "QA Engineer",
    duration: "20 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
  {
    title: "Team Lead",
    duration: "7 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
  {
    title: "Backend Engineer",
    duration: "10 weeks",
    experience: "Minimum 2 years in software development",
    number: 2,
    link: "#",
  },
  {
    title: "QA Engineer",
    duration: "20 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
  {
    title: "Team Lead",
    duration: "7 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
  {
    title: "Backend Engineer",
    duration: "10 weeks",
    experience: "Minimum 2 years in software development",
    number: 2,
    link: "#",
  },
  {
    title: "QA Engineer",
    duration: "20 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
  {
    title: "Team Lead",
    duration: "7 weeks",
    experience: "Minimum 2 years in software development",
    number: 1,
    link: "#",
  },
];

function ProjectDetail() {
  const router = useRouter();
  const project = useSelector((state) => state.projectInspect);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!router.query.projectId) return;

    const params = {
      _id: router.query.projectId,

      returnRole: true,
      returnBudget: true,
    };
    dispatch(findProject(params));
  }, [dispatch, router.query.projectId]);

  return (
    <Fragment>
      {/* Main column */}
      <main className="col-span-4 relative">
        <div className="col-span-3 bg-white rounded-tl-none rounded-lg md:mb-4 z-50 w-full">
          <div className="">
            {!!project && (
              <div className="bg-white rounded-lg px-3 py-3 mb-4 shadow-[0px_2px_7px_rgba(0,48,142,0.1)]">
                <div className="w-full flex justify-between mb-2">
                  <div
                    className="rounded-lg overflow-hidden mr-4 ml-1"
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
                  <div className="flex flex-col items-end justify-between">
                    <FavButton />
                    <div className="ml-auto flex justify-center">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 ml-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="mr-2">Apply Now</span>
                        <span>{">"}</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 ml-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="mr-2">Apply Now</span>
                        <span>{">"}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-4 gap-y-3">
                  <div className="ml-2 col-span-3">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-slate-500 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <SideCard icon="🏆" header="Champion">
                      <div className="w-full flex items-center mb-1 mt-1">
                        <div>
                          <Avatar size="8" />
                        </div>

                        <div className="overflow-x-scroll">
                          <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-gradientViolet to-gradientBlue">
                            {/* {member.discordName} */}
                            discordName
                          </span>
                        </div>
                      </div>
                    </SideCard>
                    <SideCard icon="📅" header="Key dates">
                      <div className="mb-1">
                        <p>
                          <span className="text-slate-500 text-xs mr-1">
                            Kickoff:
                          </span>
                          <span className="text-slate-700 text-xs font-bold mr-1">
                            {/* {project.kickoff} */}
                            Jun 18 2022
                          </span>
                        </p>
                        <p>
                          <span className="text-slate-500 text-xs mr-1">
                            Completion:
                          </span>
                          <span className="text-slate-700 text-xs font-bold mr-1">
                            {/* {project.completion} */}
                            Dec 18 2023
                          </span>
                        </p>
                      </div>
                    </SideCard>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full">
                    <div className="ml-2 mb-3">
                      <h4 className="flex text-lg items-center">
                        <span>Open roles</span>
                        <span className="ml-2">
                          <NumberCircle number={roles.length} />
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="w-11/12 flex overflow-x-scroll">
                    {roles.map((role, index) => (
                      <RoleCard role={role} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
}

ProjectDetail.getLayout = function getLayout(page) {
  return <ProjectsPageLayout>{page}</ProjectsPageLayout>;
};

export default ProjectDetail;
