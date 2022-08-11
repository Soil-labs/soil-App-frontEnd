export default function matchMembersToSkills(params) {
    return {
        data: {
            query: `query{
                matchMembersToSkills(fields:{
                      skillsID: ["${params._id}"]
                }){
                    matchPercentage
                  member{
                    _id
                    discordName
                    discordAvatar
                    skills {
                        skillInfo {
                            _id
                            name
                        }
                        level
                        author { 
                            _id
                        }
                    }
                }
                  commonSkills{
                    _id
                    name
                  }
                }
              }`,
        },
    };
}
