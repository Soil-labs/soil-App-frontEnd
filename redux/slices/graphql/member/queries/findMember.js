export default function getMemberQuery(params) {
  return {
    data: {
      query: `query{
        findMember(fields: {
          _id: "${params._id}"
        }){
          _id
          discordName
          discordAvatar
          bio

          
          ${
            params.returnSkills
              ? `skills{
            name
          }`
              : ``
          }

          ${
            params.returnProjects
              ? `projects {
            champion
            favorite
            info {
              _id
              title
              team {
                memberInfo{
                  discordName
                }
                phase
              }
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
          
      }
    }`,
    },
  };
}
