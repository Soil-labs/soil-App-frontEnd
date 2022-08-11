// import Profile from "../../components/ProfileComponent";
import { getMember } from "../../../redux/slices/memberSlice";

import {
  findMembers,
  findMembers_withSkill,
} from "../../../redux/slices/usersInspectSlice";
import { updateProject, findProject } from "../../../redux/slices/projectSlice";
import {
  findProjects,
  findProjects_fromMember,
} from "../../../redux/slices/projectsSlice";
import { createSkill, findSkill } from "../../../redux/slices/skillSlice";
import { findSkills } from "../../../redux/slices/skillsSlice";
import { findMember } from "../../../redux/slices/memberSlice";
import { addNewMember } from "../../../redux/slices/memberSlice";
import { addSkillToMember } from "../../../redux/slices/userInspectSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Profile from "../../../components/ProfileComponent";

import { inpsectUser } from "../../../redux/slices/userInspectSlice";
import ProgressBar from "../../../components/layout/ProgressBar";
import { Login } from "../../../components/layout/Login";

function MemberPage({ id }) {
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState([]);
  const [buttonState, setButtonState] = useState(1);

  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();

  useEffect(() => {
    let params = {
      _id: "995604464469803048",

      returnSkills: true,
      returnProjects: true,
      returnNetwork: true,
    };
    // console.log("params = " , params)
    dispatch(findMember(params));
  }, [id, dispatch]);

  let networks = member.network.map((n) => n.discordName);
  // let projects = member.projects.map((p) => p.info.title);

  let projects;
  if (member.projects) {
    projects = member.projects.map((p) => {
      if (p && p.info) {
        return p.info.title;
      }
    });
  }

  useEffect(() => {
    setSkills(member.skills.map((s) => s.name));
  }, [member.skills]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Login />
      <Profile
        id={member.discordName}
        bio={member.bio}
        networks={networks}
        previousWork={projects}
        skills={skills}
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

export default MemberPage;
