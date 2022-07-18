export default function findMembersQuery(params) {
  return {
    data: {
      query: `query{
        findMembers(fields: {
          ${params._id ? `_id: ${params._id}` : ``}
        }){
          _id
          discordName
          discordAvatar
          bio

          ${
            params.returnSkills
              ? `skills{
            name
          }`
              : ``
          }

          ${
            params.returnProjects
              ? `projects {
            info {
              title
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
