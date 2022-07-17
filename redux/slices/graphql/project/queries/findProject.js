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
