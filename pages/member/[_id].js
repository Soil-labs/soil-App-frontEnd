import Profile from "../../components/ProfileComponent";
import { getMember } from "../../redux/slices/memberSlice";

import { findMembers_red,findMembers_withSkill_red } from "../../redux/slices/usersInspectSlice";
import { updateProject_red ,findProject_red} from "../../redux/slices/projectSlice";
import { findProjects_red} from "../../redux/slices/projectsSlice";
import { findSkill_red} from "../../redux/slices/skillSlice";
import { findSkills_red} from "../../redux/slices/skillsSlice";
import { findMember_red } from "../../redux/slices/memberSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";



function MemberPage({ id }) {
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState([]);

  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      _id: id,

      returnSkills: true,
      returnProjects: true,
      returnNetwork: true,
    }
    // console.log("params = " , params)
    dispatch(findMember_red(params));
  }, [id, dispatch]);

  let networks = member.network.map((n) => n.discordName);
  // let projects = member.projects.map((p) => p.info.title);

  let projects;
  if (member.projects) {
    projects = member.projects.map((p) => {
      if (p && p.info) {
        return p.info.title;
      }
    });
  }





  useEffect(() => {
    setSkills(member.skills.map((s) => s.name));



    // //  ------ findMembers_red DELETE------
    // const params = {
    //   // _id: "812526237074456577",
    //   // _id: ["995604464469803048"],
    //   _id: ["995604464469803048","812526237074456577"],

      // returnSkills: true,
      // returnProjects: true,
      // returnNetwork: false,
    // }
    
    
    // dispatch(findMembers_red(params));
    // //  ------ findMembers_red DELETE------


    // //  ------ findMembers_withSkill_red DELETE------
    // const params = {
    //   _id: "62ca8b6f536e11000427f065",

    //   returnMembers: true,
    // }
    
    
    // dispatch(findMembers_withSkill_red(params));
    // //  ------ findMembers_withSkill_red DELETE------


    // //  ------ updateProject_red DELETE------
    // const params = {
    //   _id: "62ca8b6f536e11000427f065",
    //   title: "asdf",
    //   budget: {
    //     totalBudget: "1134",
    //     token: "d",
    //   },
    //   role:[{
    //     _id: "62c65f508b9ea4cd95b88dd5",
    //     title: "Developers",
    //     description:"tina",
    //     skills: {
    //       skill: "62ca8b55536e11000427f05f"
    //     }
    //   },{
    //     _id: "62c65f508b9ea4cd95b28dd5",
    //     title: "FrontEnd",
    //     description:"developing website",
        
    //   }],
      
    //   returnRole: true,
    //   returnBudget: true,

    // }
    
    // dispatch(updateProject_red(params));
    // //  ------ updateProject_red DELETE------

    // //  ------ findProject_red DELETE------
    // const params = {
    //   // _id: ["62ca8b6f536e11000427f065"],
    //   // _id: ["62ca8b6f536e11000427f065","62ca6f5e0ad9f858dfdfa691"],
      
    //   returnRole: true,
    //   returnBudget: true,
    //   returnTeam: true,
    // }

    // console.log("params 1= " , params)
    
    // dispatch(findProjects_red(params));
    // //  ------ findProject_red DELETE------


    // //  ------ findSkills_red DELETE------
    // const params = {
    //   // _id: ["62ca8b6f536e11000427f065"],
    //   // _id: ["62ca8b6f536e11000427f065","62ca6f5e0ad9f858dfdfa691"],
    //   _id: "62ca8b55536e11000427f05f",

    //   returnMembers: true,
    // }

    // console.log("params 1= " , params)
    
    // dispatch(findSkill_red(params));
    // //  ------ findSkills_red DELETE------

    //  ------ findSkills_red DELETE------
    const params = {
      // _id: ["62ca8b6f536e11000427f065"],
      // _id: ["62ca8b6f536e11000427f065","62ca6f5e0ad9f858dfdfa691"],
      _id: "62ca8b55536e11000427f05f",

      returnMembers: true,
    }

    console.log("params 1= " , params)
    
    dispatch(findSkills_red(params));
    //  ------ findSkills_red DELETE------

  }, [member.skills]);






  return (
    <div className="flex justify-center items-center">
      <Profile
        id={member.discordName}
        bio={member.bio}
        networks={networks}
        previousWork={projects}
        skills={skills}
      />
    </div>
  );
}

export const getServerSideProps = (query) => {
  return {
    props: {
      id: query.params._id,
    },
  };
};

export default MemberPage;
