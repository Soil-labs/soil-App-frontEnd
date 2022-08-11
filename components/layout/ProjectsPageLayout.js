import UserCard from "../UserCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMember } from "../../redux/slices/memberSlice";
import Layout from "./Layout";

function ProjectsPageLayout({ children }) {
  const member = useSelector((state) => state.member);

  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      _id: "908392557258604544",

      returnSkills: true,
      returnProjects: true,
      returnNetwork: true,
    };

    dispatch(findMember(params));
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
