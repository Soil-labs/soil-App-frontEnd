export default function changeTeamMember_Phase_ProjectMutation(params) {
  console.log("params works= ", params);
  return {
    data: {
      query: `mutation{
		changeTeamMember_Phase_Project(fields:{
		  projectID: "${params.projectID}"
		  memberID: "${params.memberID}"
		  phase: ${params.phase}
		}){
		  _id
		  title
		  team{
			memberInfo{
			  _id
			  discordName
			  discordAvatar
			}
			phase
		  }
		}
	  }`,
    },
  };
}
