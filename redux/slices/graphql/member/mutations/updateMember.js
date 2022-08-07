export default function updateMemberMutation(params) {
  return {
    data: {
      query: `mutation{
                        updateMember(fields:{
                            ${params._id ? `_id: "${params._id}"` : ``}
                            ${
                              params.discordName
                                ? `discordName: "${params.discordName}"`
                                : ``
                            }
                            ${
                              params.discordAvatar
                                ? `discordAvatar: "${params.discordAvatar}"`
                                : ``
                            }
                            ${params.bio ? `bio: "${params.bio}"` : ``}
                            ${
                              params.hoursPerWeek
                                ? `hoursPerWeek: ${params.hoursPerWeek}`
                                : ``
                            }
                            ${
                              params.timeZone
                                ? `timeZone: "${params.timeZone}"`
                                : ``
                            }
                            ${params.links ? `links: ${params.links}` : ``}
                            ${
                              params.previusProjects
                                ? `previusProjects: ${params.previusProjects}`
                                : ``
                            }
                            ${
                              params.content ? `content: ${params.content}` : ``
                            }
                            ${params.skills ? `skills: ${params.skills}` : ``}
                            ${
                              params.projects
                                ? `projects: "${params.projects}"`
                                : ``
                            }
                            ${
                              params.network
                                ? `network: "${params.network}"`
                                : ``
                            }

                        }){
                            _id
                            discordName
                            discordAvatar
                            bio

                            ${
                              params.returnContribution
                                ? `
                                hoursPerWeek
                                timeZone
                                `
                                : ``
                            }

                            ${
                              params.returnSocialLink
                                ? `
                                links{
                                    name
                                    url
                                }
                                `
                                : ``
                            }

                            ${
                              params.returnpreviousProjects
                                ? `
                                previusProjects{
                                    title
                                    description
                                    positionName
                                    startDate
                                    endDate
                                }
                                `
                                : ``
                            }

                            ${
                              params.returnContent
                                ? `
                                content{
                                    interest
                                    mostProud
                                    showCaseAbility
                                }
                                `
                                : ``
                            }

                            ${
                              params.returnSkills
                                ? `skills{
                                skillInfo{
                                  _id
                                  name
                                }
                                level
                            }`
                                : ``
                            }

                        }           
            }`,
    },
  };
}
