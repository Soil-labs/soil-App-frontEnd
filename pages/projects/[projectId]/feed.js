import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { findProject } from "../../../redux/slices/projectSlice";
import ProjectsPageLayout from "../../../components/layout/ProjectsPageLayout";
import SideCard from "../../../components/SideCard";
import Feed from "../../../components/feed/Feed";
import Avatar from "../../../components/Avatar";

function FavouriteProjects() {
  const router = useRouter();
  const project = useSelector((state) => state.projectInspect);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!router.query.projectId) return;

    const params = {
      _id: router.query.projectId,

      returnRole: true,
      returnChampion: true,
      returnTeam: true,
      returnTweets: true,
    };
    dispatch(findProject(params));
  }, [dispatch, router.query.projectId]);

  return (
    <Fragment>
      {/* Main column */}
      <main className="col-span-3 relative">
        <div className="flow-root">
          {project.tweets && (
            <Feed tweets={project.tweets.filter((tweet) => !!tweet.approved)} />
          )}
        </div>
      </main>

      {/* How to apply column */}
      <section className="col-span-1">
        <SideCard>
          <div className="rounded-lg overflow-hidden mr-4 w-[80px] h-[80px]">
            <Image
              src={"https://placeimg.com/480/480/nature"}
              alt="placeholder image"
              width={80}
              height={80}
              objectFit="cover"
            />
          </div>

          <div className="col-span-3">
            <h3 className="font-bold text-lg mb-1">{project.title}</h3>
            <p className="text-slate-500 text-sm">{project.description}</p>
          </div>
          {project.champion && (
            <>
              <hr className="w-2/3 mx-auto mb-3 mt-3"></hr>
              <div className="w-full flex items-center mb-1">
                <span className="text-slate-500 text-sm mr-1">🏆</span>
                <span className="text-slate-500 text-xs">Champion</span>
              </div>
              <div className="w-full flex items-center mb-1 mt-1">
                <div>
                  <Avatar size="8" src={`${project.champion.discordAvatar}`} />
                </div>

                <div className="">
                  <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-gradientViolet to-gradientBlue">
                    {project.champion?.discordName}
                  </span>
                </div>
              </div>
            </>
          )}
          <hr className="w-2/3 mx-auto mb-3 mt-3"></hr>
          <div className="w-full flex items-center mb-1">
            <span className="text-slate-500 text-xs">Open roles</span>
          </div>
          <div className="relative">
            {project.role?.map((role, index) => (
              <div className="w-10 h-12 inline-block" key={index}>
                <div
                  className={`relative group text-xl w-12 h-full bg-soilGreen-20 flex justify-center items-center rounded-full border-white border-2`}
                  key={index}
                >
                  💻
                  <div className="z-20 absolute invisible group-hover:visible bg-slate-100 -top-4 text-xs px-2 py-1 rounded-md">
                    <span className="z-20">{role.title}</span>
                  </div>
                  <div className="z-10 absolute w-2 h-2 invisible group-hover:visible left-4 top-1 bg-slate-100 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
          <hr className="w-2/3 mx-auto mb-3 mt-3"></hr>
          <div className="w-full flex items-center mb-1">
            <span className="text-slate-500 text-xs">Top contributors</span>
          </div>
          {project.team?.map((member, index) => (
            <div className="w-[28px] h-[34px] inline-block" key={index}>
              <div
                className="relative group w-[34px] h-[34px] border-2 border-white rounded-full"
                key={index}
              >
                <img
                  src={`${member.memberInfo.discordAvatar}`}
                  width={34}
                  height={34}
                  className="rounded-full"
                />
                <div className="z-20 absolute invisible group-hover:visible bg-slate-100 -top-5 text-xs px-2 py-1 rounded-md">
                  <span className="z-20">{member.memberInfo.discordName}</span>
                </div>
                <div className="z-10 absolute w-2 h-2 invisible group-hover:visible left-3 top-0 bg-slate-100 rotate-45"></div>
              </div>
            </div>
          ))}
        </SideCard>
      </section>
    </Fragment>
  );
}

FavouriteProjects.getLayout = function getLayout(page) {
  return <ProjectsPageLayout>{page}</ProjectsPageLayout>;
};

export default FavouriteProjects;
