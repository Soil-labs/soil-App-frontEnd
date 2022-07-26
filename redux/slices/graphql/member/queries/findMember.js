export default function findMemberQuery(params) {
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
            info {
              _id
              title
              team {
                memberInfo{
                  _id
                  discordName
                  discordAvatar
                }
                phase
              }
              dates{
                kickOff
                complition
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
