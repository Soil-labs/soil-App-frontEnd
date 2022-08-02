export default function findSkillQuery(params) {
  return {
    data: {
      query: `query{
        findSkill(fields: {
          ${params._id ? `_id: "${params._id}"` : ``}
        }){
          _id
          name

          ${
            params.returnMembers
              ? `members {
            _id
            discordName
            discordAvatar
            discriminator
          }`
              : ``
          }

      }
    }`,
    },
  };
}
