import Image from "next/image";
import React, { useEffect } from "react";
import ProjectBoard from "../../components/ProjectComponent";
import { useDispatch, useSelector } from "react-redux";
import { findProject } from "../../redux/slices/projectSlice";

function Project({ id }) {
  const project = useSelector((state) => state.projectInspect);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      _id: id,

      returnRole: true,
      returnBudget: true,
      returnTeam: true,
      returnChampion: true,
    };
    console.log("params = ", params);
    dispatch(findProject(params));
    // dispatch(findProject(id));
  }, [id, dispatch]);

  let skillsArray = project.role.map((s) => s.skills);
  let skillArray = skillsArray.map((s) => s.map((s) => s.skillData.name));
  let skill = skillArray.flat();
  let roles = project.role.map((r) => r.title);

  // console.log("roles = ", roles);

  useEffect(() => {
    // console.log("project: ", project);
    // console.log("skills: ", skillsArray);
    // console.log(
    //   "roles: ",
    //   project.roles.map((r) => r.title)
    // );
  }, [project]);

  return (
    <div className="h-screen flex relative justify-center items-center">
      <img
        src="/background.svg"
        className="absolute w-full object-cover h-full -z-10"
        alt=""
      />
      <ProjectBoard
        projectTitle={project.title}
        championName={project.champion.discordName}
        discordName={project.champion.discordName}
        // kickOffDate={project.dates.kickoffDate}
        // endDate={project.dates.wrapUpDate}
        totalBudget={project.budget.totalBudget}
        description={project.description}
        budget={project.budget.totalBudget}
        skills={skill}
        devRoles={roles}
        avatar={project.champion.discordAvatar}
      />
    </div>
  );
}

export const getServerSideProps = (query) => {
  return {
    props: {
      id: query.params._id,
    },
  };
};

export default Project;
