export default function getMemberQuery(id) {
  return {
    data: {
      query: `query{
        findMember(fields: {
          _id: "${id}"
        }){
          _id
          discordName
          discordAvatar
          bio
          skills {
            name
          }
          projects {
            info {
              title
            }
          }
          network {
            discordName
          }
      }
    }`,
    },
  };
}
