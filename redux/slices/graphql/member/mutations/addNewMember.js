export default function addNewMemberMutation(params) {
  return {
    data: {
      query: `mutation{
				addNewMember(fields:{
					${params._id ? `_id: "${params._id}"` : ``}
					${params.discordName ? `discordName: "${params.discordName}"` : ``}
					${params.discordAvatar ? `discordAvatar: "${params.discordAvatar}"` : ``}
					${params.discriminator ? `discriminator: "${params.discriminator}"` : ``}
					${params.bio ? `bio: "${params.bio}"` : ``}
					${params.hoursPerWeek ? `hoursPerWeek: ${params.hoursPerWeek}` : ``}
				}){
					_id
					discordName
					discordAvatar
					${params.returnDiscriminator ? `discriminator` : ``}
					${params.returnBio ? `bio` : ``}
					${params.returnHoursPerWeek ? `hoursPerWeek` : ``}
					${params.returnTweets ? `tweets` : ``}
					${
            params.returnSkills
              ? `skills{
						_id
						name
					}`
              : ``
          }
					${
            params.returnProjects
              ? `projects{
								info{
									_id
									title
								}
								role{
									_id
									title
								}
								champion
							}`
              : ``
          }
					${params.returnArchiveProjects ? `archiveProjects` : ``}
					${
            params.returnNetwork
              ? `network{
							_id
							discordName
						}`
              : ``
          }
					registeredAt
				}
			}`,
    },
  };
}
