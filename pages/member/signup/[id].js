import React, { useState, useEffect } from "react";
import { generate } from "shortid";
import { useDispatch, useSelector } from "react-redux";
import {
  Contribution,
  Experience,
  Final,
  Info,
  Thoughts,
  Skill,
  Credits,
} from "../../../components/UserSignUpComponents";
import {
  findMember,
  updateMember,
  addMemberData,
} from "../../../redux/slices/memberSlice";
import Layout from "../../../components/layout/Layout";
import { useSession } from "next-auth/react";

const SignUp = ({ id }) => {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      dispatch(
        addMemberData({
          _id: session.user.id,
          discordName: session.user.name,
          discordAvatar: session.user.image,
        })
      );
    }
  }, [session]);

  const member = useSelector((state) => state.member);

  useEffect(() => {
    let params = {
      _id: id,
    };
    dispatch(findMember(params));
  }, [id, dispatch]);

  const onSubmit = async () => {
    const params = {
      _id: session.user.id,
      bio: formData.description,
      hoursPerWeek: formData.hours,
      timeZone: formData.timeZone,
      skills: formData.skills.map((skill) => {
        return { id: skill.skillInfo._id, level: skill.level };
      }),
      enums: ["learning", "junior", "mid", "senior"],
      links: links.map((link) => {
        return { name: link.name, url: link.value };
      }),
      previusProjects: experience.map((exp) => {
        return {
          title: exp.title,
          description: exp.discription,
          positionName: exp.positionName,
          startDate: exp.startDate,
          endDate: exp.endDate,
        };
      }),
      content: {
        mostProud: formData.proudProject,
        showCaseAbility: formData.pieceOfWork,
      },
      returnSkills: true,
      returnSocialLink: true,
    };
    console.log("params====", params);
    if (member.isDataAvailable) {
      dispatch(updateMember(params));
    } else {
      dispatch(addNewMember(params));
    }
    setPage((currPage) => currPage + 1);
  };

  const [formData, setFormData] = useState({
    id: id,
    discordName: "",
    avatar: "",
    description: "",
    hours: 0,
    weeks: "",
    timeZone: "",
    links: [],
    experience: [],
    proudProject: "",
    pieceOfWork: "",
    skills: [],
  });

  useEffect(() => {
    setFormData({
      ...formData,
      discordName: member.discordName,
      avatar: member.discordAvatar,
    });
  }, [member]);

  const [learning, setLearning] = useState([]);

  const [junior, setJunior] = useState([]);

  const [midLevel, setMidLevel] = useState([]);

  const [senior, setSenior] = useState([]);

  const [links, setLinks] = useState([
    {
      id: "1",
      value: "",
      name: "twitter",
      icon: "/twitter.png",
    },
    {
      id: "2",
      value: "",
      name: "github",
      icon: "/github.png",
    },
    { id: "3", value: "", name: "discord", icon: "/discord.png" },
  ]);

  const [experience, setExperience] = useState([
    {
      id: generate(),
      positionName: "",
      title: "",
      link: "",
      profileLink: "",
      contract: "",
      discription: "",
      startDate: null,
      endDate: null,
      isDone: false,
    },
  ]);

  const [page, setPage] = useState(0);

  const addLinks = () => {
    setLinks([
      ...links,
      { id: generate(), name: "extra", value: "", icon: "" },
    ]);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: generate(),
        positionName: "",
        title: "",
        link: "",
        profileLink: "",
        contract: "",
        discription: "",
        startDate: null,
        endDate: null,
        isDone: false,
      },
    ]);
  };

  useEffect(() => {
    formData.skills = [...learning, ...junior, ...midLevel, ...senior];
  }, [junior, midLevel, senior, learning, formData]);

  function formPage() {
    if (page === 0) {
      return <Info formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <Contribution
          formData={formData}
          setFormData={setFormData}
          links={links}
          setLinks={setLinks}
          addLinks={() => addLinks()}
        />
      );
    } else if (page === 2) {
      return (
        <Experience
          experience={experience}
          setExperience={setExperience}
          addExperience={addExperience}
        />
      );
    } else if (page === 3) {
      return <Thoughts formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return (
        <Skill
          learning={learning}
          setLearning={setLearning}
          junior={junior}
          setJunior={setJunior}
          midLevel={midLevel}
          setMidLevel={setMidLevel}
          senior={senior}
          setSenior={setSenior}
        />
      );
    } else if (page === 5) {
      return (
        <Final formData={formData} links={links} experience={experience} />
      );
    } else if (page === 6) {
      return <Credits />;
    }
  }

  return (
    <Layout>
      <div className="bg-[#8DC2204D] px-8 py-4 w-max mx-auto">
        <div className="w-[50rem] rounded-full h-[.5rem] bg-white mb-10">
          <div
            className={`h-full rounded-full ${
              page === 0
                ? "w-[16.66%]"
                : page == 1
                ? "w-[33.32%]"
                : page == 2
                ? "w-[49.98%]"
                : page == 3
                ? "w-[66.64%]"
                : page == 4
                ? "w-[83.3%]"
                : "w-[100%]"
            } bg-green-800`}
          ></div>
        </div>
        <div>{session ? formPage() : <p>Please, Loggin to continue!!</p>}</div>
        <div className="flex justify-center items-center">
          {page >= 1 && page <= 5 && (
            <button
              className="bg-[#8DC220A6] mx-auto px-4 py-1 mt-10 rounded-full"
              onClick={() => setPage((currPage) => currPage - 1)}
            >
              Previous
            </button>
          )}
          {page <= 4 && (
            <button
              className="bg-[#8DC220A6] mx-auto px-4 py-1 mt-10 rounded-full"
              onClick={() => setPage((currPage) => currPage + 1)}
            >
              NEXT
            </button>
          )}
          {page == 5 && (
            <button
              className="bg-[#8DC220A6] mx-auto px-4 py-1 mt-10 rounded-full"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = (query) => {
  return {
    props: {
      id: query.params.id,
    },
  };
};

export default SignUp;
