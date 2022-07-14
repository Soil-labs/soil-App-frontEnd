import Avatar from "../../components/Avatar";
import SideCard from "../../components/SideCard";
import RoleCard from "../../components/RoleCard";
import FavButton from "../../components/FavButton";
import Button from "../../components/Button";
import NumberCircle from "../../components/NumberCircle";
import { useEffect, Fragment } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { findProject } from "../../redux/slices/projectSlice";
import Link from "next/link";
import { useRouter } from "next/router";

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

export default function ProjectDetail() {
  const router = useRouter();
  const project = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!router.query.projectId) return;

    const fields = {
      _id: router.query.projectId,
    };
    dispatch(findProject(fields));
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
                      {/* this is div is to preload some conditional classes in button */}
                      <div className="hidden bg-amber-400 hover:bg-amber-300"></div>
                      {/* ------ */}
                      <Link href="#">
                        <a>
                          <Button
                            color="amber-400"
                            hoverColor="amber-300"
                            hasChevron={true}
                          >
                            Project Update
                          </Button>
                        </a>
                      </Link>
                      <Link href="#">
                        <a>
                          <Button hasChevron={true}>Apply to Project</Button>
                        </a>
                      </Link>
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
                            {project.champion.discordName}
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
                            {project.dates.kickOff &&
                              new Date(
                                project.dates.kickOff * 1000
                              ).toLocaleDateString()}
                          </span>
                        </p>
                        <p>
                          <span className="text-slate-500 text-xs mr-1">
                            Completion:
                          </span>
                          <span className="text-slate-700 text-xs font-bold mr-1">
                            {project.dates.complition &&
                              new Date(
                                project.dates.complition * 1000
                              ).toLocaleDateString()}
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
