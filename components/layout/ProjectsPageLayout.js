import UserCard from "../UserCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMember } from "../../redux/slices/memberSlice";
import Layout from "./Layout";

function ProjectsPageLayout({ children }) {
  const member = {};
  member.discordName = useSelector((state) => state.member.discordName);

  const dispatch = useDispatch();

  useEffect(() => {
    const id = "995604464469803048";

    dispatch(getMember(id));
  }, [dispatch]);

  return (
    <Layout>
      <div
        role="list"
        className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5"
      >
        {/* User column */}
        <UserCard member={member} />

        {/* Main column */}
        {children}
      </div>
    </Layout>
  );
}

export default ProjectsPageLayout;
