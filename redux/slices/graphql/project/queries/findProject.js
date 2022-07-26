export default function findProjectQuery(params) {
  return {
    data: {
      query: `query{
          findProject(fields:{
            _id: "${params._id}"
          }){
            _id
            title
            description

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
              params.team
                ? `team {
                  memberInfo{
                    _id
                    discordName
                    discordAvatar
                    attributes{
                      Director
                      Motivator
                      Inspirer
                      Helper
                      Supporter
                      Coordinator
                      Observer
                      Reformer
                    }
                  }
                  phase
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
                params.returnChampion
                  ? `champion{
                    discordName
                    discordAvatar
                  }`
                  : ``
              }
              
          }
        }`,
    },
  };
}
