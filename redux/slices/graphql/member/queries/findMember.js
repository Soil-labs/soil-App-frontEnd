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
          registeredAt
          hoursPerWeek

          previusProjects {
            title
            description
            positionName
            link
            startDate
            endDate
          }

          
          ${
              params.returnSkills
                  ? `skills{
            skillInfo {
              _id
              name
              
            }
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
