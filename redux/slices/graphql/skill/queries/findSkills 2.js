export default function findProjects(params) {
  console.log("change 3= " ,)
  return {
    data: {
      query: `query{
        findSkills(fields:{
        }){
          _id
          name
          state
          members {
            discordName
          }
            
        }
      }`,
    },
  };
}
