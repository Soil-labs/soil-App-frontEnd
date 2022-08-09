export default function findMembersQuery(params) {
  return {
    data: {
      query: `query{
        findMembers(fields: {
          ${params._id ? `_id: ${params._id}` : ``}
        }){
          _id
          discordName
          discordAvatar
          bio

          ${
            params.returnSkills
              ? `skills{
            skillInfo{
              _id
              name
            }
          }`
              : ``
          }

          ${
            params.returnProjects
              ? `projects {
            info {
              title
            }
          }`
              : ``
          }

          ${
            params.returnNetwork
              ? `network {
            discordName
          }`
              : ``
          }
          ${params.returnTimeZone ? `timeZone` : ``}
          ${params.returnHoursPerWeek ? `hoursPerWeek` : ``}
          ${params.returnInterest ? `interest` : ``}

      }
    }`,
    },
  };
}
