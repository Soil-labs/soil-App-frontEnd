export default function addSkillToMemberMutation(params) {
  return {
    data: {
      query: `mutation{
            addSkillToMember(fields:{
                ${params.skillID ? `skillID: "${params.skillID}"` : ``}
                ${params.memberID ? `memberID: "${params.memberID}"` : ``}
                ${params.authorID ? `authorID: "${params.authorID}"` : ``}
            }){
                discordName
                skills {
                    _id
                    name
                    tweets
                    ${
                      params.returnMembers
                        ? `members {
                        _id
                        discordName
                    }`
                        : ``
                    }
                    ${
                      params.returnAuthors
                        ? `authors {
                        _id
                        discordName
                    }`
                        : ``
                    }
                    registeredAt
                    state
                }
            }
        }`,
    },
  };
}
