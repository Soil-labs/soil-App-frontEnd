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
                  _id
                  title
                  description
                  skills{
                    skillData{
                      _id
                      name
                    }
                  }
                  archive
                  dateRangeStart
                  dateRangeEnd
                  hoursPerWeek
                  budget{
                    token
                    perHour
                    totalBudget
                  }
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
