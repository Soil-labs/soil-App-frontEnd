import Profile from "../../components/ProfileComponent";
import { getMember } from "../../redux/slices/memberSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function MemberPage({ id }) {
  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMember(id));
  }, [id, dispatch]);
  let networks = member.network.map((n) => n.discordName);
  let projects = member.projects.map((p) => p.tagName);
  let skills = member.skills.map((s) => s.tagName);
  return (
    <div className="flex justify-center items-center h-[100vh]">
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
