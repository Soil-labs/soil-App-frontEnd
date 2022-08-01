export default function updateProjectMutation(params) {
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
					${params.stepsJoinProject ? `stepsJoinProject: ${params.stepsJoinProject}` : ``}
	
			
				}){
					_id
					title
					description
					stepsJoinProject
					
					
					${
            params.returnTeam
              ? `team{
								memberInfo{
									_id
									discordName
								}
								roleID
								phase
							}`
              : ``
          }

					${
            params.returnRole
              ? `role{
								_id
								title
								description
								skills{
									skill{
										_id
										name
									}
									level
									numEndorsement
									comment
								}
								archive
								dateRangeStart
								dateRangeEnd
								hoursPerWeek
								budget{
									token
									perHour
									totalBudget
								}
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
            params.returnTweets
              ? `tweets{
								content
								author{
									_id
									discordName
								}
								registeredAt
							}`
              : ``
          }
					${
            params.returnBudget
              ? `budget{
								token
								perHour
								totalBudget
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
