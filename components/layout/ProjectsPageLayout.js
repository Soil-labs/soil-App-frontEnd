import UserCard from "../UserCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMember } from "../../redux/slices/memberSlice";
import Layout from "./Layout";
import { useSession } from "next-auth/react";

function ProjectsPageLayout({ children }) {
  const member = useSelector((state) => state.member);
  const { data: session } = useSession();

  const dispatch = useDispatch();

  useMemo(() => {
    if (session) {
      const params = {
        _id: session.user.id,

        returnSkills: true,
        returnProjects: true,
        returnNetwork: true,
      };

      dispatch(findMember(params));
    }
  }, [session]);

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
