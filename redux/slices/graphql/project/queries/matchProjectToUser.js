export default function matchProjectToUser(params) {
  return {
    data: {
      query: `query{
            match_projectToUser(fields:{
              memberID: "${params.memberID}"
              projectID: "${params.projectID}"
              roleID: "${params.roleID}"
            }){
              matchPercentage
               projectData{
                  _id
                title
                description
                champion{
                  _id
                  discordName
                  discordAvatar
                }
              }
              skillsMatch{
                _id
                name
              }
              skillsDontMatch{
                _id
                name
              }              
            }
          }`,
    },
  };
}
