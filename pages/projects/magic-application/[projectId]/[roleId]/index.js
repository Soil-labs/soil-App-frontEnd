import Image from "next/image";
import HowToApply from "../../../../../components/HowToApply";
import Layout from "../../../../../components/layout/Layout";
import placeholder_avatar from "../../../../../components/ChampionDashboard/placeholder_avatar.png";
import soil_logo from "../../../../../components/soil_logo.png";
import { classNames } from "../../../../../util";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  changeTeamMember_Phase_Project,
  match_projectToUser,
} from "../../../../../redux/slices/projectSlice";

const mockData = {
  howToApply: {
    title: "How to apply?",
    steps: [
      {
        text: "Express interest by adding project to favourites",
        emoji: "❤️",
        color: "rgb(254 226 226)",
      },
      {
        text: "Apply throught Magic Application",
        emoji: "📮",
        color: "rgb(254 249 195)",
      },
      {
        text: "Confirm we’ve got all your information right & sign the application.",
        emoji: "📝",
        color: "rgb(254 202 202)",
      },
      {
        text: "Keep track of your application status in the magic application list",
        emoji: "🎊",
        color: "rgb(255 237 213)",
      },
    ],
  },
};

const SkillTag = ({ children, variant }) => {
  return (
    <li
      className={classNames(
        "px-3 py-1.5 text-sm text-gray-700 rounded-md shadow-md inline-block",
        variant === "matching"
          ? "bg-[#6baf2228]"
          : variant === "missing"
          ? "bg-[#ff000021]"
          : ""
      )}
    >
      {children}
    </li>
  );
};

export const MagicApplication = () => {
  const dispatch = useDispatch();

  const {
    query: { projectId, roleId },
  } = useRouter();

  useEffect(() => {
    if (!projectId || !roleId) {
      console.log(projectId);
      console.log(roleId);
      return;
    }
    const params = {
      memberID: member._id,
      projectID: projectId,
      roleID: roleId,
    };
    console.log({ params });
    dispatch(match_projectToUser(params));
  }, [dispatch, projectId, roleId]);

  const handleApplyClick = () => {
    let params = {
      projectID: projectId,
      memberID: member._id,
      phase: "engaged",
    };
    dispatch(changeTeamMember_Phase_Project(params));
  };

  console.log({ project });
  return (
    <>
      {project && project.skillsDontMatch && project.skillsMatch && (
        <div className="min-h-full">
          {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
          <div className="">
            <main className="mx-auto lg:max-w-7xl grid grid-cols-5 gap-x-2">
              <div className="col-span-1">
                <HowToApply data={mockData.howToApply} />
              </div>
              <section className="col-span-3 border-2 bg-white border-gray-100 rounded-lg p-8">
                <h2 className="text-2xl pb-6">Magic Application</h2>
                <div className="flex gap-2">
                  <div className="w-24 overflow-hidden rounded-lg">
                    <Image src={placeholder_avatar} alt="whooo" />
                  </div>
                  <div className="p-2">
                    <h3 className="pb-2 text-lg font-bold text-gray-800">
                      Backend Developer @ {project.title}
                    </h3>
                    <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gradientViolet to-gradientBlue">
                      {project.matchPercentage}%
                    </span>
                    <span className="pl-3 text-gray-500 tracking-wide">
                      match
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-8 pb-2 pt-4 gap-x-5 gap-y-2">
                  <div className="col-span-8 grid grid-cols-8 gap-x-5">
                    <h4 className="col-span-3 text-gray-500 font-bold text-lg">
                      Matching Skills
                    </h4>
                    <h4 className="col-span-3 text-gray-500 font-bold  text-lg">
                      Missing Skills
                    </h4>
                  </div>
                  <section className="col-span-3">
                    <ul className="flex flex-wrap gap-2">
                      {project.skillsMatch.map((skill, i) => (
                        <SkillTag
                          key={`matching_skill_${i}`}
                          variant="matching"
                        >
                          {skill.name}
                        </SkillTag>
                      ))}
                    </ul>
                  </section>
                  <section className="col-span-3">
                    <ul className="flex flex-wrap gap-2">
                      {project.skillsDontMatch.map((skill, i) => (
                        <SkillTag key={`missing_skill_${i}`} variant="missing">
                          {skill.name}
                        </SkillTag>
                      ))}
                    </ul>
                  </section>
                  <section className="col-span-2 text-gray-500 text-lg flex flex-col gap-2">
                    <div>⌛ ?? Weeks</div>
                    <div>⏰ ?? hrs/week</div>
                    <div>👥 ?? meet/week</div>
                  </section>
                </div>
                <section className="pt-4 ">
                  <h4 className="text-lg pb-2 font-bold text-gray-500">
                    What&#39;s Expected
                  </h4>
                  <p className="text-gray-500">
                    As an SDN Backend Developer, you will apply your deep
                    expertise to design, develop, automate and test NFV/SDN
                    components/features and its associated life cycle operations
                    across various supported virtual infrastructure manager(VIM)
                    stacks using test-driven development approachResolve
                    customer issues with a mixture of business acumen and
                    technical competenceFamiliarity with Shell scripting, Linux
                    Commands and Linux Operating System.
                  </p>
                </section>
                <form className="pt-4">
                  <label
                    htmlFor="message"
                    className="block pb-2 text-lg font-bold text-gray-500"
                  >
                    Write a Message
                  </label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    className="w-full rounded-xl border-1 border-gray-300 bg-white"
                  />
                </form>
                <div className="flex justify-center gap-4 py-8">
                  <button className="px-4 py-2 bg-[#FF8413] rounded-lg text-white">
                    Go Back
                  </button>
                  <button
                    onClick={handleApplyClick}
                    className="px-4 py-2 bg-[#4164DF] rounded-lg text-white flex gap-2 items-center"
                    disabled={
                      project.memberPhaseIsChanging ||
                      project.memberPhaseIsChanged
                    }
                  >
                    {project.memberPhaseIsChanging
                      ? "submitting..."
                      : project.memberPhaseIsChanged
                      ? "Thankyou!"
                      : "Apply Now"}
                    <ChevronRightIcon width={16} />
                  </button>
                </div>
              </section>
              <section className="col-span-1">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="w-24 rounded-md overflow-hidden">
                      <Image src={soil_logo} alt="soil logo" />
                    </div>
                    <h3 className="pt-4 pb-2 text-2xl font-bold text-gray-800">
                      Soil 🌱 Talent Coordination App
                    </h3>
                    <p className="text-gray-500 py-4">
                      Find & be found for opportunities across the DAO.
                    </p>
                    <hr />
                    <h4 className="py-4 text-gray-500 text-lg">🏆 Champion</h4>
                    <div className="flex gap-2 py-4">
                      <div className="w-8 rounded-full overflow-hidden relative">
                        <Image
                          layout="fill"
                          src={project.champion.discordAvatar}
                          alt="champion avatar"
                        />
                      </div>
                      <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-gradientViolet to-gradientBlue">
                        {project.champion.discordName}
                      </div>
                    </div>
                    <hr />
                    <p className="text-gray-400 py-4 s">
                      Find & be found for opportunities across the DAO. Find &
                      be found for opportunities across the DAO.
                    </p>
                  </div>
                  <div className="bg-[#F1F2FF] text-center py-4 flex justify-center tracking-wide">
                    See Project Updates
                    <ChevronRightIcon width={16} className="ml-1" />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

MagicApplication.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export default MagicApplication;
