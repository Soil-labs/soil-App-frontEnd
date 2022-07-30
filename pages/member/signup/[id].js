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
} from "../../../components/UserSignUpComponents";
import { findMember } from "../../../redux/slices/memberSlice";

const SignUp = ({ id }) => {
  const dispatch = useDispatch();

  const member = useSelector((state) => state.member);

  useEffect(() => {
    let params = {
      _id: id,
    };
    dispatch(findMember(params));
  }, [id, dispatch]);

  useEffect(() => {
    if (member.loading === false) {
      setFormData({
        ...formData,
        discordName: member.discordName,
        avatar: member.discordAvatar,
      });
    }
  }, [member]);

  const [formData, setFormData] = useState({
    discordName: "",
    avatar: "",
    description: "",
    hours: "",
    weeks: "",
    timeZone: "",
    links: [],
    experience: [],
    proudProject: "",
    pieceOfWork: "",
    skills: ["Machine Learning", "Figma", "Frontend"],
  });

  const [links, setLinks] = useState([
    {
      id: "1",
      value: "",
      icon: "/twitter.png",
    },
    {
      id: "2",
      value: "",
      icon: "/github.png",
    },
    { id: "3", value: "", icon: "/discord.png" },
  ]);

  const [experience, setExperience] = useState([
    {
      id: generate(),
      position: "",
      company: "",
      workLink: "",
      profileLink: "",
      contract: "",
      roleDiscription: "",
      startDate: null,
      endDate: null,
      isDone: false,
    },
  ]);

  const [page, setPage] = useState(0);

  const addLinks = () => {
    setLinks([...links, { id: generate(), value: "", icon: "" }]);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: generate(),
        position: "",
        company: "",
        workLink: "",
        profileLink: "",
        contract: "",
        roleDiscription: "",
        startDate: null,
        endDate: null,
        isDone: false,
      },
    ]);
  };

  // useEffect(() => {
  //   experience.map((e) => {
  //     if (e.isDone) {
  //       if (e.id !== formData.experience.find((x) => x.id)) {
  //         setFormData((currentFormData) =>
  //           produce(currentFormData, (x) => {
  //             x.experience.push(e);
  //           })
  //         );
  //         console.log("can be pused if id did not exist");
  //       } else {
  //         console.log("cannot be pushed if id did exist");
  //       }
  //     } else {
  //       console.log("cannot be pushed if done");
  //     }
  //   });
  // }, [experience, formData.experience]);

  // useEffect(() => {
  //   console.log(
  //     "formData: ",
  //     experience[0].id === formData.experience.find((x) => x.id)
  //   );
  // }, [experience, formData.experience]);

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
      return <Skill />;
    } else if (page === 5) {
      return (
        <Final formData={formData} links={links} experience={experience} />
      );
    }
  }

  return (
    <div className="bg-[#8DC2204D] px-8 py-4 w-max mx-auto">
      <div className="w-[50rem] h-[.5rem] bg-white mb-10">
        <div
          className={`h-full ${
            page === 0
              ? "w-[20%]"
              : page == 1
              ? "w-[40%]"
              : page == 2
              ? "w-[60%]"
              : page == 3
              ? "w-[80%]"
              : "w-[100%]"
          } bg-green-800`}
        ></div>
      </div>
      <div>{formPage()}</div>
      <div className="flex justify-center items-center">
        {page >= 1 && (
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
            onClick={() => {}}
          >
            Submit
          </button>
        )}
      </div>
    </div>
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
