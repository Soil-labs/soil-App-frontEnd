export default function addFavoriteProjectMutation(params) {
  return {
    data: {
      query: `mutation{
		addFavoriteProject(fields:{
		  memberID:"${params.memberID}"
		  projectID:"${params.projectID}"
		  favorite:${params.favorite}
		}){
		  discordName
		  projects{
			info{
			  _id
			  title
			}
			favorite
		  }
		}
	  }`,
    },
  };
}
