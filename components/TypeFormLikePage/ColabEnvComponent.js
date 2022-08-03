import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../redux/slices/projectSlice";
import { ChevronDoubleDownIcon, LinkIcon } from "@heroicons/react/solid";
import { BsTwitter, BsTelegram, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const GeneralGreenFrom = (props) => {
  const dispatch = useDispatch();

  const [colabLinks, setColabLinks] = useState({
    twitter: "",
    github: "",
    discord: "",
    notion: "",
    telegram: "",
  });

  const handleChangePhase = () => {
    const params = {
      _id: props._id,
      collaborationLinks: [
        {
          title: "Twitter",
          link: colabLinks.twitter,
        },
        {
          title: "GitHub",
          link: colabLinks.github,
        },
        {
          title: "Discord",
          link: colabLinks.discord,
        },
        {
          title: "Notion",
          link: colabLinks.notion,
        },
        {
          title: "Telegram",
          link: colabLinks.telegram,
        },
      ],
      returnDates: true,
      returnBudget: true,
      returnCollaborationLinks: true,
    };
    console.log("params from colab child", params);
    dispatch(updateProject(params));
    props.changePhase(props.phase);
  };
  return (
    <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="w-[590px] h-[70px] bg-white mt-20 text-2xl shadow-md rounded-2xl flex items-center justify-center">
          <p className="">SETUP COLLABORATION ENVIRONMENT</p>
        </div>

        <div className="w-9/12 mt-40 ml-6 space-y-6 ">
          <div className="flex items-center space-x-6 ">
            <BsTwitter className="text-3xl" />
            <div className="relative mt-1 shadow-xl rounded-2xl">
              {/* Input link */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LinkIcon
                  className="h-[15px] w-[18.21px] text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                onChange={(e) => {
                  const links = { ...colabLinks };
                  links.twitter = e.target.value;
                  setColabLinks(links);
                  console.log(colabLinks);
                }}
                name="name"
                id="name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[370px] h-[30px]
                       pl-8 sm:text-sm border-gray-300  rounded-3xl"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <BsGithub className="text-3xl" />
            <div className="relative mt-1 shadow-xl rounded-2xl">
              {/* Input link */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LinkIcon
                  className="h-[15px] w-[18.21px] text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                // onChange={(e) => handleChange(e, i)}
                type="text"
                onChange={(e) => {
                  const links = { ...colabLinks };
                  links.github = e.target.value;
                  setColabLinks(links);
                  console.log(colabLinks);
                }}
                name="name"
                id="name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[370px] h-[30px]
                       pl-8 sm:text-sm border-gray-300  rounded-3xl"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <FaDiscord className="text-3xl" />
            <div className="relative mt-1 shadow-xl rounded-2xl">
              {/* Input link */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LinkIcon
                  className="h-[15px] w-[18.21px] text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                // onChange={(e) => handleChange(e, i)}
                type="text"
                onChange={(e) => {
                  const links = { ...colabLinks };
                  links.discord = e.target.value;
                  setColabLinks(links);
                  console.log(colabLinks);
                }}
                name="name"
                id="name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[370px] h-[30px]
                       pl-8 sm:text-sm border-gray-300  rounded-3xl"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <SiNotion className="text-3xl" />
            <div className="relative mt-1 shadow-xl rounded-2xl">
              {/* Input link */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LinkIcon
                  className="h-[15px] w-[18.21px] text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                // onChange={(e) => handleChange(e, i)}
                type="text"
                onChange={(e) => {
                  const links = { ...colabLinks };
                  links.notion = e.target.value;
                  setColabLinks(links);
                  console.log(colabLinks);
                }}
                name="name"
                id="name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[370px] h-[30px]
                       pl-8 sm:text-sm border-gray-300  rounded-3xl"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <BsTelegram className="text-3xl" />
            <div className="relative mt-1 shadow-xl rounded-2xl">
              {/* Input link */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LinkIcon
                  className="h-[15px] w-[18.21px] text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                // onChange={(e) => handleChange(e, i)}
                type="text"
                onChange={(e) => {
                  const links = { ...colabLinks };
                  links.telegram = e.target.value;
                  setColabLinks(links);
                  console.log(colabLinks);
                }}
                name="name"
                id="name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[370px] h-[30px]
                       pl-8 sm:text-sm border-gray-300  rounded-3xl"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            handleChangePhase();
          }}
        >
          <ChevronDoubleDownIcon className="w-10 h-10 font-light text-black stroke-1 mt-60" />
        </button>
      </div>
    </div>
  );
};
function ColabEnvComponent(props) {
  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <GeneralGreenFrom {...props} />
      </div>
    </>
  );
}

export default ColabEnvComponent;
