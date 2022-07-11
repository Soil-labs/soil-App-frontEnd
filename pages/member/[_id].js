import Profile from "../../components/ProfileComponent";
import { getMember } from "../../redux/slices/memberSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
function MemberPage({ id }) {
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState([]);

  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMember(id));
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
    <div className="flex justify-center items-center">
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
