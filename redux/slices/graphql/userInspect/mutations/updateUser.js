export default function updateUserMutation(params) {
  return {
    data: {
      query: `mutation{
		updateMember(fields:{
			${params._id ? `_id: "${params._id}"` : ``}
			${params.discordName ? `discordName: "${params.discordName}"` : ``}
			${params.interest ? `interest: "${params.interest}"` : ``}
			${params.timeZone ? `timeZone: "${params.timeZone}"` : ``}
			${params.hoursPerWeek ? `hoursPerWeek: ${params.hoursPerWeek}` : ``}
			${params.skills ? `skills: ${params.skills}` : ``}		  
		}){
		  _id
		  discordName
		}
	  }`,
    },
  };
}
