import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { generate } from "shortid";
import { useRouter } from "next/router";

import {
  Contribution,
  Experience,
  Final,
  Info,
  Thoughts,
  Skill,
  Credits,
} from "../../../components/UserSignUpComponents";
import { updateMember } from "../../../redux/slices/memberSlice";
import FlowLayout from "../../../components/layout/FlowLayout";

const Signup = () => {
  const dispatch = useDispatch();
  const member = useSelector((state) => state.member);
  const { data: session } = useSession();
  const [currentStep, setCurrentStep] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    const params = {
      _id: session.user.id,
      bio: formData.description,
      // hoursPerWeek: formData.hours,
      // timeZone: formData.timeZone,
      skills: formData.skills.map((skill) => {
        return { id: skill.skillInfo._id, level: skill.level };
      }),
      enums: ["learning", "junior", "mid", "senior"],
      // links: links.map((link) => {
      //   return { name: link.name, url: link.value };
      // }),
      // previusProjects: experience.map((exp) => {
      //   return {
      //     title: exp.title,
      //     description: exp.discription,
      //     positionName: exp.positionName,
      //     startDate: exp.startDate,
      //     endDate: exp.endDate,
      //   };
      // }),
      // content: {
      //   mostProud: formData.proudProject,
      //   showCaseAbility: formData.pieceOfWork,
      // },
      returnSkills: true,
      returnSocialLink: true,
    };
    console.log("params====", params);

    dispatch(updateMember(params));

    console.log("this is working");
    setPage(2);
  };

  const [formData, setFormData] = useState({
    id: member._id,
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
      description: member.bio,
      skills: member.skills,
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
      startDate: "",
      endDate: "",
      isDone: false,
    },
  ]);

  useEffect(() => {
    console.log("start date tyoe====", typeof experience[0].startDate);
    console.log("start date====", experience[0].startDate);
  }, [experience]);

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
        startDate: "",
        endDate: "",
        isDone: false,
      },
    ]);
  };

  useEffect(() => {
    formData.skills = [...learning, ...junior, ...midLevel, ...senior];
  }, [junior, midLevel, senior, learning, formData]);

  // function formPage() {
  //   if (page === 0) {
  //     return <Info formData={formData} setFormData={setFormData} />;
  //   } else if (page === 1) {
  //     return (
  //       <Contribution
  //         formData={formData}
  //         setFormData={setFormData}
  //         links={links}
  //         setLinks={setLinks}
  //         addLinks={() => addLinks()}
  //       />
  //     );
  //   } else if (page === 2) {
  //     return (
  //       <Experience
  //         experience={experience}
  //         setExperience={setExperience}
  //         addExperience={addExperience}
  //       />
  //     );
  //   } else if (page === 3) {
  //     return <Thoughts formData={formData} setFormData={setFormData} />;
  //   } else if (page === 4) {
  //     return (
  //       <Skill
  //         learning={learning}
  //         setLearning={setLearning}
  //         junior={junior}
  //         setJunior={setJunior}
  //         midLevel={midLevel}
  //         setMidLevel={setMidLevel}
  //         senior={senior}
  //         setSenior={setSenior}
  //       />
  //     );
  //   } else if (page === 5) {
  //     return (
  //       <Final formData={formData} links={links} experience={experience} />
  //     );
  //   } else if (page === 6) {
  //     return <Credits />;
  //   }
  // }
  function formPage() {
    if (page === 0) {
      return <Info formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
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
    } else if (page === 2) {
      return <Credits />;
    }
  }

  return (
    <FlowLayout
      currentStep={currentStep}
      handleNextButton={() => {
        if (page === 1) {
          onSubmit();
        } else {
          setCurrentStep(currentStep + 1);
          setPage((currPage) => currPage + 1);
        }
      }}
      handlePreviousButton={() => {
        setCurrentStep(currentStep - 1);
        setPage((currPage) => currPage - 1);
      }}
      lastPage={page === 2}
      lastPageButtonText="FIND A PROJECT"
      handleLastButton={() => router.push("/projects")}
    >
      {session ? formPage() : <p>Please, Loggin to continue!!</p>}
    </FlowLayout>
  );
};

export default Signup;
