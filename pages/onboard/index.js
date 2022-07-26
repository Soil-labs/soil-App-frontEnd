import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  findProjects,
  findProjects_RecommendedToUser,
} from "../../redux/slices/projectsSlice";
import Layout from "../../components/layout/Layout";
import SkillSelector from "../../components/skill/SkillSelector";

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

const tabs = [
  {
    title: "All projects",
    fullTitle: "All projects",
  },
  {
    title: "Recommended",
    fullTitle: "Recommended",
  },
  {
    title: "Favourite",
    fullTitle: "Favourite",
  },
];

function Projects() {
  const router = useRouter();
  const { tab } = router.query;
  const [currentTab, setCurrentTab] = useState(0);
  const [tabProjects, setTabProjects] = useState([]);

  const projects = useSelector((state) => {
    console.log(state);
    return state.projectsInspect.projectsInfo;
  });

  const member = {};
  member._id = useSelector((state) => state.member._id);
  member.projects = useSelector((state) => state.member.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tab === "0" || tab === "1" || tab === "2") setCurrentTab(Number(tab));
  }, [tab]);

  useEffect(() => {
    if (currentTab == 2) {
      setTabProjects(member.projects.filter((proj) => proj.favorite));
    } else {
      setTabProjects(projects);
    }
  }, [currentTab, projects, member.projects]);

  useEffect(() => {
    let params;
    switch (currentTab) {
      case 0:
        params = {
          returnRole: true,
          returnBudget: true,
          returnTeam: true,
        };
        dispatch(findProjects(params));
        break;
      case 1:
        params = {
          memberID: member._id,
          returnRole: true,
          returnBudget: true,
          returnTeam: true,
        };
        dispatch(findProjects_RecommendedToUser(params));
        break;
      case 2:
        break;
      default:
        return;
    }
  }, [dispatch, currentTab, member._id]);

  function isCurrentTab(e, sideCorner) {
    const cornerSize = 40;
    const clickX = e.clientX - e.target.getBoundingClientRect().left;
    const clickY = e.clientY - e.target.getBoundingClientRect().top;
    let middleY;
    if (sideCorner === "right") {
      middleY = clickX; // y = x
    } else {
      middleY = cornerSize - clickX; // y = cornerSize - x
    }
    return clickY > middleY;
  }

  function handleTabClick(e, index, sideCorner = "") {
    if (
      sideCorner === "right" &&
      index < tabs.length - 1 &&
      !isCurrentTab(e, sideCorner)
    ) {
      setCurrentTab(index + 1);
    } else if (
      sideCorner === "left" &&
      currentTab > 0 &&
      !isCurrentTab(e, sideCorner)
    ) {
      setCurrentTab(index - 1);
    } else {
      setCurrentTab(index);
    }
  }

  function calculateTabZindex(index) {
    if (currentTab == index) {
      return 50;
    } else if (currentTab > index) {
      return 30 + index;
    } else {
      return 40 - index;
    }
  }
  return (
    <Fragment>
      {/* How to apply column */}
      <section className="col-span-1"></section>

      {/* Main column */}
      <main className="col-span-3">
        <SkillSelector />
      </main>

      {/* How to apply column */}
      <section className="col-span-1"></section>
    </Fragment>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Projects;
