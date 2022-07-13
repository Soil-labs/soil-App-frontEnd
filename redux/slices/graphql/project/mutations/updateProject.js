export default function updateProjectMutation(fields) {
  return {
    data: {
      query: `mutation{
				updateProject(fields:{
					_id: "${fields._id}"
					title: "${fields.title}"
			
					budget: {
						totalBudget: "${fields.budget.totalBudget}"
					}
			
					role:[{
						_id: "${fields.role._id}",
						title: "${fields.role.title}"
						description:"${fields.role.description}"
					}]
			
				}){
					_id
					title
			
					role{
						title
						skills{
							skill{
								name
							}
						}
					}
			
				}
			}`,
    },
  };
}
