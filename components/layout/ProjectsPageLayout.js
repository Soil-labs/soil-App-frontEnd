import UserCard from "../UserCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMember_red } from "../../redux/slices/memberSlice";

function ProjectsPageLayout({ children }) {
  const member = {};
  member.discordName = useSelector((state) => state.member.discordName);

  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      _id: "995604464469803048",

      returnSkills: true,
      returnProjects: true,
      returnNetwork: true,
    }

    dispatch(findMember_red(params));
  }, [dispatch]);

  return (
    <>
      <div
        role="list"
        className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5"
      >
        {/* User column */}
        <UserCard member={member} />

        {/* Main column */}
        {children}
      </div>
    </>
  );
}

export default ProjectsPageLayout;
