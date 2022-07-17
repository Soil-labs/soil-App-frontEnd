import Image from "next/image";
import React, { useEffect } from "react";
import ProjectBoard from "../../components/ProjectComponent";
import { useDispatch, useSelector } from "react-redux";
import { findProject } from "../../redux/slices/projectSlice";

function Project({ id }) {
  const project = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findProject(id));
  }, [id, dispatch]);

  let skillsArray = project.skills.map((s) => s.skills);
  let skillArray = skillsArray.map((s) => s.map((s) => s.skill.name));
  let skill = skillArray.flat();
  let roles = project.roles.map((r) => r.title);

  useEffect(() => {
    console.log("project: ", project);
    console.log("skills: ", skillsArray);
    console.log(
      "roles: ",
      project.roles.map((r) => r.title)
    );
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
        championName={project.championName}
        discordName={project.championName}
        kickOffDate={project.dates.kickoffDate}
        endDate={project.dates.wrapUpDate}
        totalBudget={project.budget.totalBudget}
        description={project.description}
        budget={project.budget.totalBudget}
        skills={skill}
        devRoles={roles}
        avatar={project.championAvatar}
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
