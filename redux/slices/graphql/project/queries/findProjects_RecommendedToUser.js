export default function findProjects_RecommendedToUserQuery(params) {
  console.log("change 3= ");
  return {
    data: {
      query: `query{
        findProjects_RecommendedToUser(fields:{
          ${params.memberID ? `memberID: ${params.memberID}` : ``}
        }){
          matchPercentage
          projectData {
            _id
            title
            description

            ${
              params.returnTeam
                ? `team{
              memberInfo{
                discordName
              }
            }`
                : ``
            }

            ${
              params.returnRole
                ? `role{
                  title
                  skills{
                    skillData{
                      _id
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
              params.returnDates
                ? `dates{
                kickOff
                complition
            }`
                : ``
            }
              
          }
        }
      }`,
    },
  };
}
