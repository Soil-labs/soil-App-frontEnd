export default function approveTweetMutation(params) {
  return {
    data: {
      query: `mutation{
			approveTweet(fields:{
					projectID: "${params.projectID}"
					tweetID: "${params.tweetID}"
					approved: ${params.approved}
				}){
					${
            params.returnTweets
              ? `tweets{
					_id
					content
					author{
						_id
						discordName
						discordAvatar
					}
					approved
					registeredAt
				}`
              : ``
          }

				}
			}`,
    },
  };
}
