export default function getMemberQuery(params) {
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

          
          ${params.returnSkills?
          `skills{
            name
          }`:``}

          ${params.returnProjects?
          `projects {
            info {
              title
            }
          }`:``}

          ${params.returnNetwork?
          `network {
            discordName
          }`:``}
          
      }
    }`,
    },
  };
}
