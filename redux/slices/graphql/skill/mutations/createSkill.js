export default function addNewSkillMutation(params) {
  return {
    data: {
      query: `mutation{
				createSkill(fields:{
					name: "${params.name}"
					${params.status ? `status: ${params.status}` : ``}
				}){
					_id
						name
						${params.returnTweets ? `tweets` : ``}
						${
              params.returnMembers
                ? `members {
								_id
								discordName
						}`
                : ``
            }
						${
              params.returnAuthors
                ? `authors {
								_id
								discordName
						}`
                : ``
            }
						registeredAt
						state
				}
			}`,
    },
  };
}
