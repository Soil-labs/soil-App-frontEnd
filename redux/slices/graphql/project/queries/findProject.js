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
              params.returnChampion
                ? `champion{
                _id
                discordName
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
                  ? `budget{
                  totalBudget
                  token
              }`
                  : ``
              }
              
          }
        }`,
    },
  };
}
