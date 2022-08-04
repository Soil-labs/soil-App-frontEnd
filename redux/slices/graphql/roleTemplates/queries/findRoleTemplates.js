export default function findRoleTemplatesQuery(params) {
  return {
    data: {
      query: `query{
          findRoleTemplates(fields:{
          }){
            _id
            title
            description
            skills {
              _id
              name
            }
          }
        }`,
    },
  };
}
