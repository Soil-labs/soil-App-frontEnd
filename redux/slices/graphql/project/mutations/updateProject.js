export default function updateProject(params) {
  return {
    data: {
      query: `mutation{
				updateProject(fields:{
					${params._id?`_id: "${params._id}"`:``}
					${params.title?`title: "${params.title}"`:``}
					${params.description?`description: "${params.description}"`:``}

			
					${params.budget?`budget: ${params.budget}`:``}

					${params.role?`role: ${params.role}`:``}
	
			
				}){
					_id
					title
					description
			
					
					${params.returnRole?
					`role{
						title
						skills{
							skill{
								name
							}
						}
					}`:``}


					${params.returnBudget?
					`budget{
						totalBudget
						token
					}`:``}
			
				}
			}`,
    },
  };
}
