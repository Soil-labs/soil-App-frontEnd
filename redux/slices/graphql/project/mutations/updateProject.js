export default function updateProject(params) {
  return {
    data: {
      query: `mutation{
				updateProject(fields:{
					${params._id ? `_id: "${params._id}"` : ``}
					${params.title ? `title: "${params.title}"` : ``}
					${params.description ? `description: "${params.description}"` : ``}
					${params.champion ? `champion: "${params.champion}"` : ``}
					${params.team ? `team: "${params.team}"` : ``}
					${params.role ? `role: ${params.role}` : ``}
					${
            params.collaborationLinks
              ? `collaborationLinks: ${params.collaborationLinks}`
              : ``
          }
					${params.budget ? `budget: ${params.budget}` : ``}
					${params.dates ? `dates: ${params.dates}` : ``}
	
			
				}){
					_id
					title
					description
			
					
					${
            params.returnRole
              ? `role{
						title
						skills{
							skill{
								name
							}
						}
					}`
              : ``
          }


					${
            params.returnBudget
              ? `budget{
						totalBudget
						token
					}`
              : ``
          }

					  
					${
            params.returnTeam
              ? `team{
						roleID
						phase
						memberInfo {
						  _id
						  discordName
						}`
              : ``
          }


					${
            params.returnCollaborationLinks
              ? `collaborationLinks{
								title
								link
						}`
              : ``
          }


					${
            params.returnDates
              ? `dates{
								kickOff
								complition
						}`
              : ``
          }
			
				}
			}`,
    },
  };
}
