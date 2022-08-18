export default function findProjectsQuery(params) {
  console.log("change 3= ");
  return {
    data: {
      query: `query{
        findProjects(fields:{
          ${params._id ? `_id: ${params._id}` : ``}
        }){
          _id
          serverID
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
      }`,
    },
  };
}
