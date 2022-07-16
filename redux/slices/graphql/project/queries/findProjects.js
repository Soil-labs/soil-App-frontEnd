export default function findProjectsQuery(params) {
  console.log("change 3= ");
  return {
    data: {
      query: `query{
        findProjects(fields:{
          ${params._id ? `_id: ${params._id}` : ``}
        }){
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
                    skill{
                        name
                    }
                }
            }`
              : ``
          }


          ${
            params.returnBudget
              ? `dates{
              totalBudget
              token
          }`
              : ``
          }

          ${
            params.returnDates
              ? `budget{
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
